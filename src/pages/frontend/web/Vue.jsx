export default function Vue() {
  return (
    <pre>
      {`
# basic info :

  * has many built in declarative tools ( low usage of 3rd packages ) 
  * ( options - composition ) API Types
    - we use "this" keywords many times in option api unlike composition "this" is not defined
    - composition uses ref (primitive value) & reactive (reference value) 
    - setup is executed in life cycle  before ( created & mounted ) 
  * using <template> & <script setup > & <style scoped>
  * event modifiers : @click.prevent=”” @click.stop="" @keyup.enter=””
  * watchers  =>  computed , watch , watchEffect
  * dynamic component & use <keep-alive> to cache => <component :is=”compName”></component> 
  * loop “key” is used to make component unique inside the loop *** SO *** if it changed component will change *** AND *** is used also if duplicated errors occurred
  * special global variables : $route $router $events $refs
  * computed properties : methods that use cache and are rerendered only when dependencies change {{ myComputed }}  BUT this <p>{{ normalMethod() }}<p> is rerendered on every change 

# forms :
  - <form @submit.prevent="submit">
  - const destroy = (id) => if( confirm( ' Are you sure ? ') ) 
    { Inertia.delete(route( 'posts.destroy' , id )
  - we must send files with POST Not PATCH & use @change="getFile" not @change="getFile()"
  <input type="file" id="file" @change="getFile" accept="image/*">
      const getFile = (e)=>{form.file = e.target.files[0]};
      const submit = (e) => {
          form.submit('post','/t',{preserveScroll:true , 
          onSuccess: form.reset(),
          forceFormData:true,
      });



# directives : 

  * v-model “2 way binding” * v-once ”no listen to value update”
    $ checkbox & multi select from official docs in form
    $ v-model:lazy "modifiers"
  * v-bind:attr :attr 
  * v-on:click @click - @submit.prevent=”” {default action => reload}
  * v-for & :key
  * v-if * v-else-if * v-else * v-show 
  * v-text * v-html 
  * refs 

# passing data  :  

  * to child => 
    - using component call attributes & props ( type - required - default - validator )
    - using routing (ex. passing via inertia)
  * to parent => by emitting custom events 
  * provide & inject ( ex. functions & object  ) // to send data to all descendants
  * VueX or Pinia  ( global state manager )
  * making components global  
  * custom plugins ( to share data between all components [options api only] )

# lifeCycle hooks:  

  * (beforecreate - create )< replace by setup( ) > - beforemount 
  * mounted , beforeupdated , updated 
  * beforeunmounted , unmounted

# component inheritance :

  * <div v-if=”$slots.name”> <slot name=”name” :myprop=”ali”> <p> default </p> </slot> </div> 
  * <template #default=”slotprops” > html </template>
  * <template v-slot:name > html </template>

# reusable helper functions to share data & methods ( like traits in laravel ) : 

  * mixins for options api 
  * composable or custom hooks for  composition api 
  * ./hooks/useXyx.js like useRouter && useStore

# Composition API : 

  * depending on => setup(  ) {  return { } }  
  * at it => ref is reactive because there are no reference data 
  * computed properties is considered refs  
  * items in reactive objects are not reactive 
    - but we can convert them to refs using toRefs or computed property  
    - Ex. myObj.name  props.key  NOT CORRECT 
    
# State :
    
  * in composition api :
    - ref for primary value [ string , number ]  
    - reactive for reference value [ object , array , function ]   
  * in options api :
    - data already is reactive 
  * VueX:
    - uses createStore  - state() { return { data1 : val1 } } 
    - mutations: { fn1 () { } } getters: { fn1 () { } } $store.commit()  
    - actions: { fn1 () { } }  $store.dispatch()
    - modules for global state files 
    - namespace to call nested stored by its module name
  * performance :
    - computed property to reduce rerendering  { functions return property }
    - many rerender => watch('refval', code ) , watchEffect( code and monitor all dependencies changes )

    
# Routing :

  * registering -  <router-view> <router-link> - nested routes & children - route name - pages folder -  fallback route
  * passing data : 
  * dynamic paths & enable path parameters as props 
  * query params </path?xyz=xyz>  
  * meta property to pass data to $route.meta 
  * route slots
  * navigating using ( links - programmatically ) - active link - redirect - navigation scroll behavior
  * navigation guard and middleware & route  life cycle  
    - (  beforeeach - beforeenter beforeRouteEnter *** beforeleave - beforeRouteLeave -  afterEach )

# optimizing : 

  * const globalComponent = definingAsyncComponent ( ( ) => import( '/path' )  )
  * const routerComponent = ( ) => import( '/path' )  

# code notes :

  <input @input=”setName( $event , param1 )” >
  function setName( event , param1  ) { }
  
  :style=”{borderColor : condition ? 'red' : '#ccc' }”
  :class=”{ bg-brimary : true , active : condition }”
  <li v-for=”( value , key , index ) in object”   :key=”idenx”>
  <Input v-bind={ myObj }  />
  
  watch( [ var1 , var2 ] , function ( newVals , oldVals   ) {
    console.log( ' old var1 : ' +  oldVals[0] )
    console.log( ' new var2 : ' +  newVals[1] )
  }  )
  
  <router-view v-slot=””slotProps”>
    <div class=”parent”> <component :is=”slotProps.Component”> </div>
  </router-view>
  router.isReady().then( () => { app.mount('#app') } )
  
  setup  ( props , context  )  { // convert props to _ if not used  
    context.emit( 'my-event' , myVar )

  <script setup> 
  defineProps({ user: Object }) ;  usePage().props.user) ;
  OR  const props = defineProps({ user: Object }) ; props.user ;
  </script>

  <script setup> defineOptions({ layout: Layout }) </script>
  // use layout in options to make it Persistent & not reloaded 
      //   when reload the component *** or use it as a component child 

  <script>    </script>
  <script setup> </script>
  <template>    </template>
  <style> </style>

  <script> export default {  props : { name : String , users : Object }  , 
  components : { Link } , layout : Layout  , setup () { return  } } </script>

  ___________________
  Watchers for execute functions
  ___________________
  watch([ refVar  ,  ()=>reactiveVar.key1 ] , async ()=>{} )
  watchEffect(async () => {code includes any ref or reactive values } })
  const stopwatch = watch ( var , ()=>{ code }  ) 
  stopwatch() ; // to stop watching 



  ___________________
  layout & slots inheriting
  ___________________
  <script setup>
  import Layout from './Layout/AuthenticatedLayout.vue'; 
  import MyComponent from './MyComponent.vue' ;  
  </script>
  <template>
    <Layout>     <MyComponent  />       </Layout>  
  // if two tags we use <my-component> </my-component>
  </template>

  <template>  <slot />  </template>

  
  <div v-if="$slots.myName">
    <slot name="myName" > 
      optional default content shown if slot not passed
    </slot >
  </div>  
  <AnyName> <template #myName>html</template> </AnyName>

  v-if=”$slots.myName”
  ---------------- 
  <Component :is=”boolVal ? 'Link' : 'span' > 


      `}
    </pre>
  );
}