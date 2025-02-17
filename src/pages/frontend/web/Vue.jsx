export default function Vue() {
  return (
    <pre>
      {`
        # basic info :
        
          * has many built in declarative tools ( low usage of 3rd packages ) 
          * ( options - composition ) API Types
          * using <template> & <script setup > & <style scoped>
          * event modifiers : @click.prevent=”” @click.stop="" @keyup.enter=””
          * watchers  =>  computed , watch , watchEffect
          * dynamic component & use <keep-alive> to cache => <component :is=”compName”></component> 
          * loop “key” is used to make component unique inside the loop *** SO *** if it changed component will change *** AND *** is used also if duplicated errors occurred
          * special global variables : $route $router $events $refs
          * computed properties : methods that use cache and are rerendered only when dependencies change {{ myComputed }}  BUT this <p>{{ normalMethod() }}<p> is rerendered on every change 

        # directives : 

          * v-model “2 way binding” * v-once ”no listen to value update” 
          * v-bind:attr :attr 
          * v-on:click @click 
          * v-for 
          * v-if * v-else-if * v-else * v-show 
          * v-text * v-html 
          * refs 
          * 

        # passing data  :  

          * to child => using props ( type - required - default - validator )
          * to parent => by emitting custom events 
          * provide & inject ( ex. functions & object  ) 
          * VueX or Pinia 
          * global components 
          * custom plugins

        # lifeCycle :  

          * (beforecreate - create )< replace by setup( ) > - beforemount 
          * mounted , beforeupdated , updated 
          * beforeunmounted , unmounted

        # component inheritance :

          * <div v-if=”$slots.name”> <slot name=”name” :myprop=”ali”> <p> default </p> </slot> </div> 
          * <template #default=”slotprops” > html </template>
          * <template v-slot:name > html </template>

        # reusable functions to share data & methods : 

          * mixins for options api 
          * composable or custom hooks for  composition api 
          * ./hooks/useXyx.js like useRouter && useStore

        # Composition API : 

          * depending on => setup(  ) {  return { } }  
          * at it => ref is reactive because there are no reference data 
          * computed properties is considered refs  
          * items in reactive objects are not reactive but we can convert them to refs using toRefs or computed property  Ex. myObj.name ×  props.key × 

        
        # VueX:

          * uses createStore  - state() { return { data1 : val1 } } 
          * mutations: { fn1 () { } } getters: { fn1 () { } } $store.commit()  
          * actions: { fn1 () { } }  $store.dispatch()
          * modules for global state files 
          * namespace to call nested stored by its module name

      # Routing :

          * registering -  <router-view> <router-link> - nested routes & children - route name - pages folder -  fallback route
          * passing data : 
          * dynamic paths & enable path parameters as props 
          * query params </path?xyz=xyz>  
          * meta property to pass data to $route.meta 
          * route slots
          * navigating using ( links - programmatically ) - active link - redirect - navigation scroll behavior
          * navigation guard and middleware & route  life cycle  (  beforeeach - beforeenter beforeRouteEnter *** beforeleave - beforeRouteLeave -  afterEach )

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
        

      `}
    </pre>
  );
}