export default function Laravel() {
  return (
    <pre>
      {`

#  important info
  * life cycle 
    - composer autoload
    - bootstrap/app.php
    - service container
    - http kernels & console kernels 
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

# php :
  * super global variables => $_ENV $_GET $_SERVER 

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
  * action([UserController::class, 'profile'], ['id' => 1]);  / get the uri of the function
  * (new UserController)->store();  // call a function in a controller
  * $validator = Validator::make($request->all(), $rules);
    - if ($validator->fails()) { return redirect('post/create')->withErrors($validator)->withInput();}
    - you can add new error messages with key value &&& can put them under bag 'key' &&& can customize messages 
    - or you can customize the response of this specific type error 
  * performace : 
    - eager loading & lazy loading 
    - use query cache ( redis ) 
    - use pagination & filter & search features in your tables
    - indexing & unique 
    - telescope & debugbar 

# validation  : 
  * sending specific errors to frontend
  * Validator::make( $request->all(), $rules , $customMessages ) && $validator->fails(); &&  $validator->validated();
  * top rules : 
    - custom rule function  
    - 'regex:/^[A-Za-z]+$/'
    - 'regex:/^[{Arabic}]+$/u'
    - 'not_regex:/^.+$/i' 
  * other rules ( search for laravel validation rules ) : 
    - nullable , missing, present , sometimes { means apply other rules if presented & can be missed }
    - 'required' , 'required_if:inputName,value'
    - exclude_if:has_appointment,false // means don't make validation for it 
    - accepted , declined , 'string' , 'email' 
    - 'boolean' , 'json' , 'array' , 'numeric'
    - 'file' , 'image' , 'size:2048', 'extensions:jpg,png', 'mimes:jpg,png'
    - 'in:enum1,enum2', 'not_in:foo,bar' 
    - 'exists:table,column' ,  'unique:table,column'  ((( makes a query from the database )))
    - 'max:num' , 'min:num' , 'in:val1,val2'  
    - 'end_date' => 'required|date|date_format:Y-m-d',
    - 'url' => 'url:http,https',
    - 'array.key1' => required|string;
    - 'images' => required|array;
    - 'images' => required|array:key1,key2; means must has only those keys 
    - 'images.*' => 'required|image|max:2048|mimes:gif,jpg,jpeg,svg,webp|dimensions:ratio=1/1';
    - 'person.*.email' => 'email|unique:users',
    - size:12  , max , min  // with integer means digits & with array means length & with files means file size
    - confirm password : 
      $ 'password'=>'confirmed'  && input name : password_confirmation 

# localization : 
  * php artisan lang:publish { errors & etc }
  * packages => laravel lang && laravel translatable




      
      `}
    </pre>
  );
}