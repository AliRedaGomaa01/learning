export default function Common() {
  return (
    <>
      {`    
      ### basics info

       * Huge data quantity not affect as text but as UI rendering
       * html structure multiply responded arrays' size
       * 
        
      
      ### basics topics

        # schedule code & commands

        # API 
          * might be for mobile app OR S. P. web app OR service
          * Stateless => 
            - requests without storing in => session or cache  or cookie
            - data in request & response are in json  
          * use CSRF for fullstack app &&&&&&&&&&& use CORS for RESTfull app to control frontend request's ( domain - method - headers) 

        # Files Handling 
          * form files & storage -- pdf -- excel 
          * project's file-path handling  ( public - views - storage )

        #  Cookies && Sessions && Cache

         * Cookies 
            -  stored on browser 
            - handled by requests & responses 
         * sessions
            - it's unique foreach authenticated user
            - usually stored in database && and at the same time has cookie on browser
            - uses 3rd package => express-session
            - used to handle sensitive data like auth & user

       * Routing
          - request ( url & header & body & method ) --- middleware --- server logic --- response ( status & header & body & method )
          - dynamic paths & path parameters & filter routes by param types
          - Route prefix & Route name
          - grouping
          - share data to all responses or all views
          - large data pagination 

       * views ( template engines )

       * file system & file management

       * Authentication  && security
          - middleware {/* => */} auth (api or web) & guest & throttle
          - password validation rules
          - Admin multi Auth
          - API Auth && CORS
          - 3-party auth ( facebook - google )
          - csrf ensures that the request came from your website not from another fake website ( not optional )
          - use both client & server validation :  client reduces requests to server but it's overridable 

       * payment
          - stripe ( search stripe payments docs )
          - braintree & paypal
          - "paysky" OR "paymob" OR "fawrypay"
          - steps of payment after checkout
            * collect payment method ---- then verify it
            * charge amount from method ---- then manage payments in database 

       * patterns MVC  ( database , UI , connector )


      ### notes
        # template engine  
          * server html
          * easy & fast & beautiful syntax 
          * shortcuts & less lines
          * layout inheritance & less repeats

    </pre>`}
    </>
  );
}