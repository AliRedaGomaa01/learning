export default function Common() {
  return (
    <pre>

      ### basics topics

      <span>
        ** schedule code & commands

        ** Routing 
        <span>
          **** request ( url & header & body & method ) --- middleware --- server logic --- response ( status & header & body & method )
          **** dynamic paths & path parameters & filter routes by param types
          **** Route prefix & Route name
          **** grouping
        </span>

        ** views ( template engines )

        ** file system & file management

        ** Authentication
        <span>
          **** middleware {/* => */} auth (api or web) & guest & throttle  
          **** password validation rules
          **** Admin multi Auth
          **** API Auth && CORS
          **** 3-party auth ( facebook - google )
        </span>

        ** payment
        <span>
          **** stripe
          **** braintree & paypal
          **** "paysky" OR "paymob" OR "fawrypay"
        </span>

        ** patterns MVC  ( database , UI , connector )   

      </span>

      ### notes
      <span>
        ** template engine  ( server html --- easy & fast & beautiful syntax --- shortcuts & less lines -- layout inheritance & less repeats)
      </span>

    </pre>
  );
}