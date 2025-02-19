export default function Typescript() {
  return (
    <>
      {`
      # it's built on js and is compiled to js to be used on browser
      # it prevents unexpected behavior & unexpected errors 
      # in typescript we can implement interfaces

      # commands : 
        * npm install typescript ts-node  // install typescript & ts-node globally
        * tsc --init  // initialize tsconfig.json
        * tsc <tsFile.ts> // compile ts file
        * tsc // compile all ts files
      
      # define types
        * type MyCustomType = string | string[]  
          const myVar : MyCustomType = "myVal";
        * interface MyCustomType2 { key1 : string ; key2 : string[] ; }  
        * casting => "1" as number 
        * myFnCall<{ name!: 'Ali'|'Ahmed'|'unionType' , age?: number }[] | undefined>( myArr )  
          - parameter variable type validation on call 
        * myFnDef( par1: string , par2 : any ) : returnType { fnBody } 
          - return type & params type hints on define 
        * myVar?: ReturnType<typeof anyObject>;  
          - gets the type of this object that will be assigned later to this variable
        * @ClassType{  } Class ClassName {}
        * generic ( general not specific ) 
          - accept more than one of any type like array , function params
          - used with complex types 
          - Ex
              let myArr : Array<string | number> = [];
              function identity<T>(arg: T): T { return arg; }
              console.log(identity<number>(10));  // Output: 10
              console.log(identity<string>("Hello")); 


      `} 
    </>
  )
}