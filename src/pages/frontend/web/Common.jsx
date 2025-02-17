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
        * SPA rendered in one app root in one basic file
          - uses virtual DOM & small components that updates only specific pieces of code not whole the dom
          - to override SPA SEO problems you can use ((( perfect SEO land page with subdomain &&& use digital marketing ))) 
        * slots 
        * animating ( native css js )
        * state :
          - global & local state
          - computed
        * common folder names :
          - util 

      # debugging :
        * browser extension  ex. angular debug 
        * debug mode from source tab in inspect mode and choose line to stop at
        * vscode debug mode
      



`}
    </pre>
  );
}