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
          * prepare maintenance mode option 
          * caching => php artisan optimize 
          * htaccess file 

        # cronjob
          * hostinger
            - /usr/bin/php /home/u12332445678/domains/yourdomain.com/public_html/artisan queue:work --timeout=60 --stop-when-empty
            - /usr/bin/php /home/u673712366706/domains/alyex.com/public_html/projects/myproject/laravel/artisan schedule:work

        # scala : 
          * /usr/bin/php82 /usr/bin/composer install 


        # htaccess
            - redirecting
              $ to file 
                <IfModule mod_rewrite.c>
                RewriteEngine On
                RewriteCond %{REQUEST_FILENAME} -f [OR]
                RewriteCond %{REQUEST_FILENAME} !-f
                RewriteRule ^(.*)$ index.php [L,QSA]
                </IfModule>

              $ to folder 
                <IfModule mod_rewrite.c>
                RewriteEngine on
                RewriteCond %{HTTP_HOST} ^domain.tld$ [NC,OR]
                RewriteCond %{HTTP_HOST} ^www.domain.tld$
                RewriteCond %{REQUEST_URI} !subdirectory/
                RewriteRule (.*) /subdirectory/$1 [L]
                </IfModule>
              OR briefly
                <IfModule mod_rewrite.c>
                  RewriteEngine on
                  RewriteCond %{REQUEST_URI} !public/
                  RewriteRule (.*) /public/$1 [L]
                  </IfModule>

              - redirecting ngnix :
                <FilesMatch \.php$>
                  SetHandler proxy:fcgi://skybusiness-php83
                </FilesMatch> 
              
              - redirecting SPA :
                RewriteEngine On
                RewriteCond %{REQUEST_FILENAME} -s [OR]
                RewriteCond %{REQUEST_FILENAME} -l [OR]
                RewriteCond %{REQUEST_FILENAME} -d
                RewriteRule ^.*$ - [NC,L]
                RewriteRule ^(.*) /index.html [NC,L]

      `}
    </pre>
  );
}