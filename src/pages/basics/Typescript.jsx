export default function Typescript() {
  return (
    <>
      {`
      # in typescript we can implement interfaces
      
      # define types
        * myFnCall<{ name!: 'Ali'|'Ahmed'|'Mohamed' , age?: number }[] | undefined>( myArr )  
          - parameter variable type validation on call 
        * myFnDef( par1: string , par2 : any ) : returnType { fnBody } 
          - return type & params type hints on define 
        * myVar?: ReturnType<typeof anyObject>;  
          - gets the type of this object that will be assigned later to this variable
        * @ClassType{  } Class ClassName {}
      `} 
    </>
  )
}