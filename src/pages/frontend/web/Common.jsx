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
  * Teleporting => changing component rendering place in the DOM.
  * remember Astro.js => SSR frontend framework
  * dispatch  OR emit new event 
  
  * the build process enhances code 
    - build tools ( webpack ex. react-scripts  ***  vite )
      $ collect assets 
      $ bundling 
      $ hot reload 
      $ minify & compress 
      $ work on all browsers 
      $ more secure 

  * data hydration => passing the endpoint server data as props to the page component

  * props may be passed from parent to child and from child to parent  

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






`}
    </pre>
  );
}