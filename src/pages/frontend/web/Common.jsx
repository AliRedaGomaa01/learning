export default function Common() {
  return (
    <pre>
{`      
      # basic info :
        * most FE frameworks uses CLI 
        * async http request ( Ajax )
        * component life cycle  ( we must destroy continuous tasks before component is destroyed)
        * lazy loading ( route path component - assets  )
        * parent fragment is preferred
        * interactive immediately response 
        * reactive live without reloading with state => using js proxies
        * Teleporting => changing component rendering place in the DOM
        
        * the build process convert the code ( minify - work on all browsers - more secure )
          - build tools ( webpack ex. react-scripts  ***  vite )

        * SPA rendered in one app root in one basic file
          - uses virtual DOM & small components  
            $ that updates only specific pieces of code not whole the dom
          - has one root & inject components into it
        
        * child slots & parent layout inheritance 
        * animating ( native css js )
        * state :
          - global & local state
          - computed
        * common folder names :
          - util 


      # auth : 
        * store bearer token in localstorage and use it in every auth request header 
        * token expiration duration

      # Deployment  : 
        * client side rendering : always redirect all paths to index.html  in build folder  

      # debugging :
        * browser extension  ex. angular debug 
        * debug mode from source tab in inspect mode and choose line to stop at
        * vscode debug mode
        * 
      

      # blade template engine :
        * @stack & @push use with styles & scripts 
        * @section & @yield use with layouts & views 



`}
    </pre>
  );
}