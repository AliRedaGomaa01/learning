export default function Laravel() {
  return (
    <pre>
      {`

        #  important info
          * install php extension in ubuntu  => sudo apt-get install php8.2-dom
          * inertia prevents ( two repos on github - subdomain for front or back - ssr & perfect meta tags - no api & postman time )
          * to reach php.info location 
            - for  apache  => execute phpinfo() in your laravel code or tinker
            - for terminal CMD => execute php -ini in your terminal  

        # frontend :
          * laravel has blade template engine &&& ( livewire - albine ) as frontend libraries  
        
        # commands :
          - php artisan => get all artisan commands
          - php artisan --version => get laravel version
          - php artisan about => get info about opened project
          - php artisan env:encrypt --key=3UVsEgGVK36XN82KKeyLFMhvosbZN1aF => encrypt env file to share it via VSC  
            $ php artisan env:decrypt --key=3UVsEgGVK36XN82KKeyLFMhvosbZN1aF
          
        # packages : (  packagist.org  )
          * laravel debugbar
          * laravel telescope
          * trans
          
        # code tips & tricks :
          * (object) $myArr  => to solve $myArr->id  errors
          * 
      
      `}
    </pre>
  );
}