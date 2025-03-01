export default function Web() {
  return (
    <pre>
      {`
        # free host for static websites ( no DB - no server logic )  => ( github pages - w3school - firebase google )

        # hosting config :
          * reserve the domain asa much as you can
          * ssl to encrypt server-client communication 
          * connect server to github   
          * prepare DB config 


        # general deploying tips :
          * delete all extra unneeded files ( imgs - assets ) 
          * delete all extra data ( test database data ) 
          * ignore unneeded local files 
          * build frontend projects with server code script
          * describe you project in README file  ( multi lang ) with ( after install steps )
          * compress ( packages [ node , php ] - build folder )  "large-file-count" 
            - send it using github

        # after pull from github  :
          * making .env file with your custom config 
            - time zone 
            - APP_URL http(s) 
            - DB config 
            - mail server  
            - APP_ENV=production  
            -  APP_DEBUG=false  
            - 3rd api party configuration ( ex. stripe  )
          * composer install - 
          * php artisan key:generate
          * npm install - 
          * npm run build -  
          * cron jobs ( queue work )
          * php artisan migrate --seed
          * php artisan storage:link 
          * caching => php artisan optimize 
          * htaccess file 



      `}
    </pre>
  );
}