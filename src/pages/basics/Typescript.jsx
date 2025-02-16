export default function Typescript() {
  return (
    <>
      {`
      # it's compiled to js to be used on browser

      # in typescript we can implement interfaces
      
      # define types
        * const myVar : string = "myVal";
        * myFnCall<{ name!: 'Ali'|'Ahmed'|'Mohamed' , age?: number }[] | undefined>( myArr )  
          - parameter variable type validation on call 
        * myFnDef( par1: string , par2 : any ) : returnType { fnBody } 
          - return type & params type hints on define 
        * myVar?: ReturnType<typeof anyObject>;  
          - gets the type of this object that will be assigned later to this variable
        * @ClassType{  } Class ClassName {}
        * generic ( general not specific ) => accept many input types with different return for each type 
          - Ex
              function identity<T>(arg: T): T { return arg; }
              console.log(identity<number>(10));  // Output: 10
              console.log(identity<string>("Hello")); 


      `} 
    </>
  )
}