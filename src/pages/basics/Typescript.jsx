export default function Typescript() {
  return (
    <>
      {`
      ** in typescript we can implement interfaces unlike javascript
      
      ** define types
        *** myFnCall<{ name: string , age : number }[] | undefined>( myArr )
        *** myFnDef( par1: string , par2 : number ) : returnType { fnBody } 
        *** myVar?: ReturnType<typeof anyObject>;  // gets the type of this object that will be assigned later to this variable
      
      `} 
    </>
  )
}