let WebBasics = () => (
  <pre>
  {`
      # client logic is light than server logic 
        - make it separated from html code  
        - client logic can be reached by user   
      # action when element is on viewport ( seen )
      # super global variables => $_ENV
      # protocol://domainName-OR-ip:port/resource /* https port 443 */
      * portal application means customer use it to make actions
      # events :
        * @keyup @keydown @click.prevent  @mouseover @mousemove
      # inspect tool has very powerful options  
        * offline service worker in networks tab 
        * slow speed connection
        * network to get request info
      # debug mode & debug side bar & debug console
        * in VSCode used for debugging in front & back & any code
      # form best practices  
        - autocomplete 
        - confirm deletion alert 
        - show error & validation messages 
        - show success message 
        - show loading message
        - remember enctype=”multipart/form-data” when sending files in forms ( $_FILES )
        - preview image before uploading
          <form> 
            <input type="file" onchange="preview()"> 
            <img id="frame" src="" width="100px" height="100px"/> 
          </form>
          function preview() { frame.src=URL.createObjectURL(event.target.files[0]); }
        - to customize upload input style 
          $ input::file-selector-button {  } 
          $ OR make a hidden file input & custom visible element with js  



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

      # code notes :
        * <input> & <datalist>  to make autocomplete or searchable select

  `}
  </pre>
)

export default WebBasics