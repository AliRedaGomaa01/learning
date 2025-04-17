export default function Laravel() {
  return (
    <pre>
      {`

*****************
# frontend  ( search for laravel docs Blade ) :
*****************
  * laravel has blade template engine &&& ( livewire - albine ) as frontend libraries
  * inertia prevents 
    - two repos on github 
    - subdomain for front or back 
    - ssr & perfect meta tags 
    - no api & postman time )
  * inertia ( react - vue ) => $page.props   OR usePage().props 
    - preserve state => means not to update ( inputs - props ) 
    - <Head>  <title> my title</title> <meta /> </Head>
    - HandleInertiaRequests => middleware to share data between all inertia pages  like  
      $ share between views in AppServiceProvider
      $ may be used to pass flash messages
      $ $page.props.flash.message  OR usePage().props.flash.message
    - uses ziggy to access route names 
    - in script usePage() but in template {{ $page }} 
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
    * Active Nav Link => if ($request->is('admin/*')) if ($request->routeIs('admin.*')) 

    * return Inertia::render('Post/Show', [  'post' => $post->only(   'id',    'title',   ), 
      'edit_url' => route('posts.edit', $post),  'canEdit' => auth()->id() === $post->user_id ]);
    // returned data is visible in the client console ,,  less data means load faster & more secure

    * @foreach ($errors->all() as $key => $error).

    * forms : 
      - <input type="hidden" name="_token" value="{{ csrf_token() }}">  	 
      - <input type="hidden" name="_method" value="PUT">		
      -  input names - input errors - value="{{ old('username') }} 
      
      `}
    </pre>
  );
}