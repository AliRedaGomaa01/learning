export default function Javascript() {
  return (
    <>
    {`
# remember always that each html element is a dom object with properties & methods
# arrow fnc is not block scoped ( fix ( this ) issues )
# some array methods returns new array (Ex. filter()) && others edit the origin one (Ex. splice())
# we can use eslint local config file for each project 
# Code notes
  * {"  (cbFn) => { cbFn(); }"}
  * use spread operator to avoid immutables
  * convert type => !!myStr  ,,, +"1" 
  * console.dir( myobject ) // print object props and methods 


    
    `}
    </>
  )
}