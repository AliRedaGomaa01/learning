export default function Common() {
  return (
    <pre>
      {`    
# basics info

  * backend is used when we 
    - need a database ( Ex dynamic websites reached from many devices  )  
    - integrate secret 3rd apis 
    - implement complex secret logic
  * the best practice is to reduce request numbers & reduce response size
  * multi tenancy  means the same code with separate database records for each client
  * Huge data quantity not affect as text but as UI rendering
  * queues & job & schedules tasks & cron jobs
  * thin controllers &&& fat models  
  * focused controller on one thing *** NOT *** one controller for all things
  * Single Action controller   =>  public function __invoke(){}
  * Route Model Binding ( bind the route parameter to the DB model  )
  * Service Provider => code executed on every request before middlewares 
  * authorization => policies & gates 
  * centralized control & reuse =>
    - traits 
    - events & listeners 
    - services 
  * mini resources with small response size *** is better than *** one big respose resource
    - many requests is better than big responses     
  * html structure multiply responded arrays' size
  * we must use 
    - env variables for values changes based on environment & secret values
    - logging for http requests ( ex. morgan in express ) 
  * we must reform & refactor data before sending it as api to protect sensitive data ( laravel resource )
  * there are some prepared validation but you also can make you custom ones   

### basics topics

  # schedule code & commands

  # SMS & whatsapp  => twilio

  # terminal :
    * install anyPkg@version

  # performance 
    * lazy loading of data
    * type hint

  # Files Handling 
    * form files & storage -- pdf -- excel 
    * project's file-path handling  ( public - views - storage )

  #  Cookies && Sessions && Cache

    * Cookies 
      - stored on browser 
      - handled by requests & responses 

    * sessions
      - it's unique foreach authenticated user
      - usually stored in database && and at the same time has cookie on browser
      - Node uses 3rd package => express-session
      - used to handle sensitive data like auth & user

  * Routing
    - request ( url & header & body & method ) --- middleware --- server logic && database --- response ( status & header & body & method )
    - dynamic paths & path parameters & filter routes by param types
    - Route prefix & Route name
    - grouping
    - share data to all responses or all views
    - large data pagination 
    - redirecting [internal - external] 
    - flash messages for next GET request only & flash old() for input-values

  * views ( template engines )

  * file system & file management

  * Authentication  && security
    - middleware {/* => */} auth (api or web) & guest & throttle
    - password validation rules
    - password hashing ( & compare with hashed )
    - Admin multi Auth
    - API Auth && CORS
    - 3-party auth ( facebook - google )
    - use both client & server validation :  client reduces requests to server but it's overridable 
    - it's impossible to prevent hacking 100% but we try to make it more difficult & requires higher skills
    - don't take user input in a script area ( sql injection - html & js script ) 
    - recaptcha  ( robotic attack )
  
  # API 
    * might be for mobile app OR Single Page web app OR service
    * Stateless => 
      - depends on every request (tokens) not temporary storage (sessions)   
      - data in request & response are in json  
    * use CSRF (cross-site request forgery ) for fullstack app with non GET requests (gives 419 error code)
      - csrf ensures that the request came from your website 
        $ not from another fake website ( not optional )
      - CORS is used 
        $ when the front & the back are not on the same domain  
        $ for RESTfull app to validate frontend request's ( domain - method - headers)
        $ by setting headers to each response 
    * jwt 
      - sign unique data for each use Ex ( email , id ) 
      - we can decode them and use them using our custom-secret-key to verify the data 

  * notifications :
    - specific device by device token & firebase
    - broadcast for all devices  
    - sms & whatsapp & emails 
    - database 
    - read status 
    - FCM notification 
      $ send to a topic ( +500 user  )
      $ send a multicast ( 2-500 user )
      $ send to a specific token ( 1 user )
      $ store in the database
        * user device tokens 
        * topic tokens
        * message payload 
      $ delete invalid & notfound tokens 

  * payment
    - stripe ( search stripe payments docs )
    - braintree & paypal
    - "paysky" OR "paymob" OR "fawrypay"
    - steps of payment after checkout
      * collect payment method ---- then verify it
      * charge amount from method ---- then manage payments in database 

  * patterns 
    - MVC  ( model : database , view : UI , controllers : connector )
    - HMVC modules pattern
    - observer-action pattern ( logic on model actions ex. created - updated - deleted )
    - laravel filament resources pattern
    - database repository pattern
    - service layer pattern 
    - facade pattern
    - factory pattern
    - singleton pattern 

  * automated testing => test code using code  

  * test controller for personal tests 
    - updateMigration ( php artisan then git history ) 
    - test endpoint to check if it works
    - postman info

### notes
  # template engine  
    * server html
    * easy & fast & beautiful syntax 
    * shortcuts & less lines
    * layout inheritance & less repeats

    `}
    </pre>
  );
}