export default function Flutter() {
  return (
    <pre>
      {`
      # basic info :
        * we consider any function with return type of Future as a promise myFn().then().catchError()
        * more  UI customizable than other cross
        * Larger size than native *** little less speed ***  limited
        * when importing a file we got all imported file content in the destination file
          - Ex. when import constants file and edit its content it affects all the app. 
        * uses its own rendering engine (Skia), 
          - apps look the same across devices, even if the platform's UI changes. 
          - multi platform apps based on one single codebase

      # styling :
        * Theme & color scheme  Search ThemeData for global style of app 

      # notes : 
        * List.of( myList ).map( );  this called chaining ( calling method after a method )
        * constrained widget that limited by parent dimension
        * keys => widget state identifier 

      # packages : 
        * SQ F Lite => local database on mobile
        * official google font package

`}

    </pre>
  );
}