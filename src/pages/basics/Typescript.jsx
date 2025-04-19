export default function Typescript() {
  return (
    <pre>
      {`
# TS  built on js (dynamically types) and is compiled to js to be used on browser
# it prevents unexpected behavior & unexpected errors
# it gives errors only in type-script-file when coding
# it's compiled to normal js without type errors

# commands : 
  * npm install typescript ts-node  // install typescript & ts-node globally
  * tsc --init  // initialize tsconfig.json
  * tsc <tsFile.ts> // compile ts file
  * tsc // compile all ts files

# define types
  * type inference => it inits the type dynamically for simple type ex. => let myVar = 'ali';
  * interface MyCustomType2 { key1 : string ; key2 : string[] ; }   // can be implemented by classes
  * type MyCustomType = string | string[]  
    const myVar : MyCustomType = "myVal";
  * casting => "1" as number 
  * it defines class attributes types with privatable Ex.
    - class MyClass { attr1 : string ; private attr2 : number ; constructor ( public attr3: string  ) { } }   
  * myFnCall<{ name!: 'Ali'|'Ahmed'|'unionType' , age?: number }[] | undefined>( myArr )  
    - parameter variable type validation on call 
  * myFnDef( par1: string , par2 : any ) : returnType { fnBody } 
    - return type & params type hints on define 
  * myVar?: ReturnType<typeof anyObject>;  
    - gets the type of this object that will be assigned later to this variable
  * @ClassType{  } Class ClassName {}
  * generic ( general not specific ) 
    - accept more than one of any type like array , function params when calling
    - its items has any as a default type
    - used with complex types 
    - Ex
        let myArr : Array<string | number> = [];
        function identity<T>(arg: T): T { return arg; } 
          // means all arg & params & return should be one type
        console.log(identity<number>(10));  // Output: 10
        console.log(identity<string>("Hello")); 


      `} 
    </pre>
  )
}