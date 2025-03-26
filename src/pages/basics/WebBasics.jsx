let WebBasics = () => (
  <pre>
  {`
      # client logic is light than server logic 
        - make it separated from html code  
        - client logic can be reached by user   
      # action when element is on viewport ( seen )
      # super global variables => $_ENV
      # protocol://domainName-OR-ip:port/resource /* https port 443 */
      # inspect tool has very powerful options  
        * offline service worker in networks tab 
        * slow speed connection
        * network to get request info
      # debug mode & debug side bar & debug console
        * in VSCode used for debugging in front & back & any code

      # software requirement specifications (SRS)

      # important html 
        * <img src="image.jpg" loading="lazy" alt="Description">
        * <dialog> &&& <progress> &&& <menu>

      # common between front & backend 
        * routing
        * auth handling 
        * form validation  ( front => html & js code not only html )
        * reuse ( [ 
              back => traits & services & abstract class & interface  ,
              front => classes & components & utils 
            ] )

      # errors types :  
        * sometimes vscode has mislead syntax errors  ( correct but marked as error)
        * usually with message 
          - syntax 
          - runtime  
        * usually without message
          - logical 

  `}
  </pre>
)

export default WebBasics