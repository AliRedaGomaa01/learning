export default function React() {
  return (
    <pre>
      {`
# basic info 
  * REACT uses ((  Build Process )) means your written code not executed as it & compiled before executing
  * use function-based ( default )  and can use class-based  
    - component function can't be async  
  * using extra datatype called jsx
  * basic topics : components & children & parent fragment & root element & looping using map & key attribute
  * browser extensions : React devTools && redux dev tool
  * normal css is not scoped in react BUT moduled classes are scoped 
  * React strict mode execute any component twice on mounted  to detect error 
  * createPortals ( teleporting ) : you write code in a place and render it in another 
  * normal code outside component function is not rerendered on updating state 
    - it's is common between all instants with the value of first render & not updated when component reload 
    - BUT when defining inside component using refs define variable onmounting only without redefining on rerendering 
  * key attribute is used with loops and used to rerendered when it changes dynamically ( Do not use array index !!! )
  * there is difference between React onClick={} && DOM onclick="" 

# data sharing 
  
  * props { any js value even if object or function } & state & context & redux 
  * left shared states up to pass status to parent  BUT this make alot of rerendered 
  * derived values => values derived from state or props
  * state types : local state – cross component state ( prop drilling ) – app wide state
  * 

# Global state :
  - we can manage global state using  ( context with reducers , redux toolkit , custom hook  )
  - if I have many actions on one state like ADD_ITEM , UPDATE_ITEM so I use useReduce not useState ( managing complex state logic  )
  - context  is stored in share  OR  store  OR  context folder 
  - normal context issues : many nested providers if split context - very complex if collected them
  - redux : state central manager  && redux-toolkit is more easier

# Router : 
  * react router v+6 : 
  * ( router means if path == “ “  => return <MyComponent  />   )  
  * path , id , element for jsx code 
  * <Link > & <NavLink> for active class & end attribute to make active for “/” only not “/*”  
  * useNavigate( ) and redirect( )  to navigate in script  programatically
  * Layout Inheretence  < Outlet /> and childrens   
  * dynamic path and useParams 
  * relative”ali” vs absolute”/ali” path  
  * nested relative paths
  * replace history 
  * make routes as object { name => path } to use route name like laravel  
  * action for submit form *** BUT loader for fetch data *** AND both to reduce states

    -  loader Ex. 
      const returnedFromLoaderFunction =  useLoaderData();
      and we can use dynamic route params as this 
      export function loader( { params } ) {   params.id }  // for '/:id'
    - action Ex. :  ( called dynamically when submitting the form )  
      <Form method=”post”> from react router   )
      export function async action  (  { request } ) { 
      const formData = await request.formData();
      const submittedData = Object.fromEntries( formData ); 
      axios().then( return redirect('/') ).catch } 

# Hooks : ( useXYZ )

  * ( !! must be inside component directly and not nested scoped !! )  
  * useState :
    - rerender component ui jsx only when variable's value change 
    - setStatus( prevStat => !prevStat ) is instantly not scheduled 
    - to make a copy not a shortcut setImmutableArray ( prevParentArr => [ …prevParentArr , [key] : 'newval' ]  ) 
  * useEffect : 
    - life cycle events && update ref from ui  
    - best practice: reduce it
    - onmounted => useEffect( … , [ ] ) , 
    - onupdated  => useEffect( … , [state] ) , 
    - onunmounted => useEffect( () => {  return () => { … }  }  , [ ] )
  * useMemo  => like useEffect but state and props not updated inside 
    - memo only is used to wrap jsx to prevent unnecessary rerendering  
  * useCallback is prevent redefining a function  
  * useRef is to shortcut ui elements and store it in variable ***** update script only not ui
    - import { forwardRef } from 'react';
      const test = forwardRef( function componentFunction ( { …props } , ref ) {} ); 
      export default test
  *  useImperativeHandle : 
    - used with forwardRef 
    - to expose component instance with properties or methods to the parent component we use useImperativeHandle()

  #  Enhance Performance & Optimize  

    * check for non useful rerender and redefine using “console.log “
    * million js package makes react 70% faster 
    * optimizing by lazy loading : by inline import 
        //  import image from “./path”< image src={ image } /> // 
        < image src={ ( ) => import('./path-OR-link').then( ( image ) => image  ) } />
              
        import MyFn from “./path”  // const MyFn =  lazy( ( ) => import( './path' ) )

        import { myFn } from “./path” ; <input onChange={myFn} /> // 
        <input onChange={ ( ) => import('./path').then( ( module ) => module.myFn  ) } />

    # examples 

    import image from “./assets/myimg.png” 
    import myobjectarrayofprops from '“./assets/data.js”'
    import './assets/mystyle.css'
    import MyComp1 from “./Dir/MyComp1.jsx”
    import classes from “./MyStyle.module.css ”

    function Header ( { firstName = 'default' , …props } )  { 
      jscode ;
      const BtnsChild = props.btnsChild
      const BtnsContainer = props.btnsContainer;
      cont MyJsx = <div> hello </div>
        return  ( 
          <div className={props.className} id={props.id} onClick={props.onClick} style={ { 'text-align' : 'center' , fontSize : '12px' }  } >  
            {/* html here */} 
            <BtnsContainer> <BtnsChild /> </BtnsContainer>
            { js code } 
            <img src=”img.png” alt=”file stored in public and accessible from user” />
            <img src={ image }  alt=”file stored in src/ not available for user as url” />
            { props.mytext }
            { props.children } 
          </div> 
    ) 
    }

    function App ()  { 
        return  ( {/* html here */} 
        <Header mytext='hello' 
          { …myObjectArrayOfProps[0] }
          { name:'ali' }  
          className='active' 
          id='active' 
          onClick={ myFunc }
          btnsChild={ <> child jsx here </>   }
          btnsContainer='div' // can be also btnsContainer={MyComponent}
          key=”unique” 
          >
          { child jsx here  }  
        </Header >
    {/* html here */} ) }





      `}
    </pre>
    
  );
}