export default function Laravel() {
  return (
    <pre>
      {`

        #  important info
          * install php extension in ubuntu  => sudo apt-get install php8.2-dom
          * recommended => 'starter kit' 
          * update env.example continuously
          * many services have config file => php artisan config:publish --all
          * composer ( package manager ) , tinker ( php code in terminal ) , artisan ( command handler ) 
          * seeding & factories ( Faker ) 
          * request files to validate request data 
          * inertia prevents 
            - two repos on github 
            - subdomain for front or back 
            - ssr & perfect meta tags 
            - no api & postman time )
          * to reach php.info location 
            - for  apache  => execute phpinfo() in your laravel code or tinker
            - for terminal CMD => execute php -ini in your terminal  

        # frontend  ( search for laravel docs Blade ) :
          * laravel has blade template engine &&& ( livewire - albine ) as frontend libraries 
          * blade template engine :
          * directives ==>> 
              - @php 
              - @extend @include('posts.index' , [ 'posts' => $posts ] ) 
              - @stack & @push & @perpend 
                $ use with styles & scripts
                $ may used as a teleport & send a part to other place 
              - @section & @yield use with layouts & views
              - @csrf @method('patch')
              - @if @error @endif @foreelse @empty @can 
              - @foreach( $arr as $key => $val ) @while(true)  
                $ @continue(true) @break(true)  $loop->index $loop->count 
              - {{string}} {!! htmlCode !!}
            * escaping ==>> @@if()  ::class    
            * <script> var app = JSON.parse( <?php echo json_encode($array); ?> );  </script>
        
        #  some error handling  :
          * composer dump-autoload  // errors can't find or resolve file
          * composer clear-cache // some errors
          * php artisan optimize:clear
          * restart vite  // vite directive the latest before </head> end

        # commands :
          * php artisan *** OR *** php artisan list => get all artisan commands
          * php artisan --version => get laravel version
          * php artisan about => get info about opened project
          * php artisan env:encrypt --key=3UVsEgGVK36XN82KKeyLFMhvosbZN1aF => encrypt env file to share it via VSC  
            $ php artisan env:decrypt --key=3UVsEgGVK36XN82KKeyLFMhvosbZN1aF
          
        # packages : (  packagist.org  )
          * laravel debugbar
          * laravel telescope
          * trans
          * spatia ( media -  )
          
        # code tips & tricks :
          * (object) $myArr  => to solve $myArr->id  errors
          * logging [ie. storage/lararvel.log ] => info('data should be passed to the log file') *** OR ***  logger('message')
      
      `}
    </pre>
  );
}