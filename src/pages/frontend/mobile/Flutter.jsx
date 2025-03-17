export default function Flutter() {
  return (
    <pre>
      {`
      # basic info :
        * we consider any function with return type of Future as a promise myFn().then().catchError()
        * in flutter widget tree  BUT in HTML DOM
        * more  UI customizable than other cross
        * uses  widget with properties & identifiers 
        * Larger size than native *** little less speed ***  limited
        * You can control syntax errors using analysis_options.yaml and search for dart linters
        * responsive => handle different screen sizes 
          - but adaptive => handle difference between platforms like touch in mobile & mouse in web
        * when importing a file we got all imported file content in the destination file
          - Ex. when import constants file and edit its content it affects all the app. 
        * uses its own rendering engine (Skia), 
          - apps look the same across devices, even if the platform's UI changes. 
          - multi platform apps based on one single codebase

      # styling :
        * Theme & color scheme  Search ThemeData for global style of app 

      # state & 2way binding :
        * Stateful widget => widget Class + state Class [  constructor + initState + setState   ] 
        * Use Form & formkey & Controller & Fields for validate & more features without stateful
        * there are controllers & global key for several widgets like  ( form - scaffold - page view )  
        * to access properties passed to stateful widget we use widget.propName 
        * split stateful part in the widget in a separate widget to prevent unnecessary reload
        * stateful widget lifecycle => initState() , build() & setState() , dipose( ) 


      # start : 
        * install flutter SDK software development kit 
        * ( android studio ) for android emulator  && ( Xcode )  for is ios simulator 
        * use main ( runApp( ) ) in main.dart  to describe ( Widget Tree ) 

      # Navigation : 
        * Navigator.push( context , MaterialPageRoute( builder: MyScreen( ) ) )
        * Navigator.pop( context  )
        * Navigator.pushAndRemoveUntil( context , MaterialPageRoute( builder: MyScreen( ) , 
        * ( Route<dynamic> route ) => false  )

      # type-safe :
        * String? myString; myString = 'a' ;  
          print( myString! ); print( myString ?? ' '); 
        * late String myString; 
          // means  I will assign it soon and initialize it with null
        * use int.tryParse() instead of int.parse()
        * types can be [ built in , 3rd parties , user custom ] 
        * you should create model classes for custom data type ( Ex. Meal )  
        * int , double , String  , bool , List , Map , Enum , 
          - Widget , Function() , Object
        * dynamic Vs var Vs final Vs const  ( typing - caching - redeclare - reassign )
        * bool myBool = myVar is int || myVar is! String
        * grand parent object 
          - 29 => int & num & Object
          - MaterialApp => MaterialApp & Widget & Object    
        * Generic type Ex. contains nested types 
        * create model class for mixed maps & lists 

      # arguments 
        * position argument fn ( a , [ b ]  ) { }  fn  ( 1 , 2 ) 
          // a required , b optional  
        * named argument fn ( {required a ,b } ) { } fn( a: 1 , b:2 ) 
          // a required , b optional
        * fn (a , [ b = 5 ] ) { }  
          // fn ( { a , b = 5 }  ) 

      # debug :
        * debugging from
          - debug console in vscode terminal panel   
          - run in debug tool 
          - ctrl + shift + p then open flutter devTool in browser

      # code notes : 
        * List.of( myList ).map( );  this called chaining ( calling method after a method )
        * constrained widget that limited by parent dimension
        * keys => widget state identifier 
        * Add Directional to convert ( right , left ) to ( start , end ) Ex. AlignmentDirectional 
        * cascade ( make object and access it )  MyClass()..method() /* equals in php */ (new MyClass())->method()

      # packages : 
        * external packages  => pub.dev website    /// pub package manager /// or search in google flutter packages
        * SQ F Lite => local database on mobile
        * official google font package
        * shared_prefences => cache store 
        * GlobalState  => Riverpod 3rd Package ***** or bloc && flutter_bloc packages (cubit)
        * AJAX => pub http package OR pub Dio package
        * open website frame -> web view package 
        * swiper => PageView.builder()  && SmoothPageIndecator packages
        * slider => carousel_slider package
        * notify msg => flutter toast 
        * firebase ( search in google flutterfire ) => firebase_core package
        * responsive_builder
        * pub Location package  ,,,, Google maps API  ,,, Google Geocoding API
        * Pub image_picker  package 


      # performance :
        * use const to cache every thing  Ex. static widget  

      ****************************************************************************************

      ******************************
      ######## Dart Examples ###########
      ******************************
        * Json => json.encode() &&  json.decode()
        * type coercion => int.tryParse(‘1’)
        * console logging  => print() 
        * computed properties => getters 
        
        * dart oop :  

          class MyClass extends ParentClass  { 
          	final String myProp ;
          	static final String myProp2;
          	MyClass ( { this.myProp , parentProp } ) : super( parentProp )
            if (  nullableVar == null ) return ;  nullableVar! ; means I am sure I prevent it from being null 

          @override 
          void parentMethod ( string para1 ) {
          super.parentMethod(string para1)
          // code
          }
        } 

        ************************************************************************************************

      *************************************
      ######## Flutter Examples ###########
      *************************************

      # search in  google => flutter widget catalog

      # material design [ Root => MaterialApp(
                                debugShowCheckedModeBanner : false ,
                                theme : ThemeData (   ) , // can control all main buildin widget style in light mode
                                darkTheme : ThemeData ( ) ,
                                themeMode: ThemeMode.dark , 
                                home: ,
                                )
                                      
                                Screen => Scaffold( 
                                appBar : AppBar( leading: , title :  , actions : [ ] , elevation :   10 ) , 
                                body: MyWidget ( 
                                  Text ( “ my text “,
                                    style : Theme.of(context).textTheme.headline5.copyWith ( color : colors.black )
                                  )  ) ,
                                floatingActionButton : , // button float on right bottom
                                bottomNavigationBar : 
                                BottomNavigationBar( items : [BottomNavigationItem( icon :, label : ,  )]  ) ,
                                ) ]
                                Screen => Scaffold( body: SafeArea ( child :  ) ) ]
      # widget() 

        * alignment :  
            Column( mainAxisSize:  ,  children : [ ]  ) 
            Row( mainAxisAlignment: , crossAxisAlignment : ,  children : [ ] ) 
            Expanded( flex : 3 ,  child:  
            Stack ( alignment : Alignment.bottomCenter,  children : [ ]  ) 
            // equals position absolute
            Wrap ( children : [ ]  ) 
            // equals flex wrap
            Center( child : )  
            Card( ) 
            css grid => GridView() 

        * div : 
          Container( decoration : BoxDecoration( )   , width : double.infinity ,
          Container( color : color.balck.withOpacity( 0.1 )  , height : double.infinity ) 

          padding : EdgeInsetsDirectional.only( top: 10 , bottom : 10 , start : 10 , end : 10   )  ) 
          padding : EdgeInsets.symetric( vertical : 10  , horizintal : 10 )
          padding : EdgeInsets.all( )

        * Text( maxLines : 2 , overflow : TextOverflow.ellipsis  ) 

        * SingleChildScrollView ( scrollDirection : Axis.vertical , child :  ) 

        * images :
          Image.asset( ‘relative/path’ , width: 300 , color: Color.red ) 
          Image( image : NetworkImage( )  fit : boxFit.cover )
          CircleAvatar( ) 

          * ListView => 
            Container( height : 100 , child :  ListView.separated ( 
            	scrollDirection : Axis.horizontal , 
            	itemBuilder : ( context , index ) => myWidget(myList[index]) ,
            	separatorBuilder : ( context , index ) => SizedBox( width : 20) ,
            	itemCount : myList.length ,
            )    )

          * spacer() takes all the space between two elements ,, works like sizedBox but without give value
          * margin => SizedBox()
            

          * forms : 
            TextField < form input >  ,, TextFormWidget , DropDownFormField 
            ShowModal  , ShowDatePicker , ShowDialog , snackBar (like toaster )
            Form()

            TextFormField ( decoration : InputDecoration ( hintText :  , labelText : ,

            keyboardType: TextInputType.number  , 
            obsecureText : true . // for password 

            border : OutlineInputBorder ( ) , 
            prefixIcon: , suffexIcon:  , 

            controller : myVarController , 
            // before widget => var myVarController = TextInputController()  
            onFieldSubmitted : ( value ) { } , 
            onChanged : ( value ) { }  ) )

            * smooth scroll => any scrollable widgets takes identifier (physics : BouncingScrollPhysics() ,)

            * Dissmasable => can be deleted by swapped left 

            * scroll => SingleChildScrollView 

            * loading => circularProgressIndeicator() 
            * progress => LinearProgressIndicator()
            
            * responsive layout => MediaQuery && LayoutBuilder 

            * <tappable ot touchable   === >>> InkWell  OR GestureDetector  

            * range input => Slider( value :  , min : , max :  ; onChange:  ) 

            * FutureBuilder : build returned date from async fnc

            * Navigator <push & pop>

            * ElevatedButton DropDownButton TextButton( onPressed :  , child:  ) IconButton ( icon : , onPressed :  )


`}

    </pre>
  );
}