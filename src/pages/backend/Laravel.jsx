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
          * queues => background jobs & tasks ( async )
          * inertia prevents 
            - two repos on github 
            - subdomain for front or back 
            - ssr & perfect meta tags 
            - no api & postman time )
          * to reach php.info location 
            - for  apache  => execute phpinfo() in your laravel code or tinker
            - for terminal CMD => execute php -ini in your terminal  

        *****************
        # frontend  ( search for laravel docs Blade ) :
        *****************
          * laravel has blade template engine &&& ( livewire - albine ) as frontend libraries
          * inertia ( react - vue ) => $page.props   OR usePage().props 
            - preserve state => means not to update ( inputs - props ) 
            - <Head>  <title> my title</title> <meta /> </Head>
            - <Link href="/logout" method="post"  :data="{ foo: bar }"  preserve-state preserve-scroll 
              :class="$'{' $page.url === '/users' || $page.component === 'Users/Index' ? 'active' : '' }"> Logout </Link>
            - use router library to navigate & send requests
              $ router.visit(url, options including Method )
              $ router options 
                  { method: 'get',   data: {},   replace: false,  forceFormData: true,   
                  preserveScroll: false,   only: [],   headers: {},   
                  onBefore: () => confirm('Are…?') , onProgress: progress => {}, 
                  onSuccess: page => {} ,  onError: errors => {}} 

          * blade template engine :
            - {{ request()->routeIs('dashboard') ? “active” : "" }}  // returns text
            - {!! $user->isAdmin ? 'checked' : '' !!} // returns html
            - directives ==>> 
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
            * return Inertia::render('Post/Show', [  'post' => $post->only(   'id',    'title',   ), 
              'edit_url' => route('posts.edit', $post),  'canEdit' => auth()->id() === $post->user_id ]);
            // returned data is visible in the client console ,,  less data means load faster & more secure
        
        #  some error handling  :
          * composer dump-autoload  // errors can't find or resolve file
          * composer clear-cache // some errors
          * php artisan optimize:clear
          * restart vite  // vite directive the latest before </head> end

        # commands :
          * php artisan *** OR *** php artisan list => get all artisan commands
          * php artisan --version => get laravel version
          * php artisan about => get info about opened project
          * php artisan down // maintenance ** down to enable  mode && up to disable mode 
          * php artisan env:encrypt --key=3UVsEgGVK36XN82KKeyLFMhvosbZN1aF => encrypt env file to share it via VSC  
            $ php artisan env:decrypt --key=3UVsEgGVK36XN82KKeyLFMhvosbZN1aF
          
        # packages : (  packagist.org  )
          * laravel/installer => laravel CLI
          * debugbar
          * telescope
          * trans
          * spatia ( media -  )
          * breeze & jetstream
          * passport & sanctum
          * Carbon ( data & time ) [ diffForHumans ] 
          * intervention image photo filters & image edit 
          * cashier stripe.com for visa cards 
          * paypal checkout srmklive
          * pusher notifications 
          * leaflet.js maps  
          * ffmpeg video & image 
          * amazon aws s3 
          * chart.js charts  
          * datatables.js features for tables   

          
        # code tips & tricks :
          * (object) $myArr  => to solve $myArr->id  errors
          * logging [ie. storage/lararvel.log ] => 
              info('data should be passed to the log file') 
              *** OR ***  logger('message')
          * always use try{}catch(){} && DB::beginTransaction() DB::commit() DB::rollback()  with db insert & update queries
      
      `}
    </pre>
  );
}