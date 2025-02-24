export default function Flutter() {
  return (
    <pre>
      {`
      # basic info :
        * we consider any function with return type of Future as a promise myFn().then().catchError()
        * more  UI customizable than other cross
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
        * dynamic Vs var Vs final Vs const
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


      # code notes : 
        * List.of( myList ).map( );  this called chaining ( calling method after a method )
        * constrained widget that limited by parent dimension
        * keys => widget state identifier 
        * Add Directional to convert ( right , left ) to ( start , end ) Ex. AlignmentDirectional 
        * cascade ( make object and access it )  MyClass()..method() /* equals in php */ (new MyClass())->method()

      # packages : 
        * SQ F Lite => local database on mobile
        * official google font package

`}

    </pre>
  );
}