export default function Angular() {
  return (
    <pre>
{`      
# basics
  * angular is perfect for many options and high performance
  * angular material is a pre-made components ( forms , icons ), ready for direct use   ( widely used )
  * uses ( services - models - interfaces - dependency injection )
  * uses pipes to filter OR format OR transform variable data like : ex.  price | number:1.1-2 | currency:EUR 
    - every filter has documentation
  * host element is the element used as a parent of the component content
  * directives ( ngModel - *ngIf - *ngFor )  // '*' means wrap with template
  * we can make custom ( pipe - directives ) 
  * there are many ways to inject services  USING provider ( to the root ---- to the component element ---- others) 
  * not using axios for http requests and use builtin HttpClient that returns Observable Stream 
  * it has own form validator system using FormControl & Validators
  * deferring component to be rendered when it's on viewport Ex. flash sale timer  
  * we can cache assets & urls from angular config file
  * angular schematics ( ng add ... - ng generate ... - ng update ...  )
  * angular builders ( ng build - ng test - ng lint - ng deploy  )
  
# views 
  * stand alone component & imports for each one  VS modules & global import
  
# state  & properties
  * in previous angular was managing state using OOP  *** BUT *** signals make it better performance & less code 
  * uses events to pass data to parent 
  * uses ( Inputs with signal && output with event ) to handle components data sharing
  * signals is two way binding local state  [ mySignal() ** mySignal.set() ** mySignal().update( prev => prev + 1 ) ]
    - ( set - update )  methods
    - constructor() { effect( _ => console.log( mySignal() ))} // watch signal value and execute code onchange
  * template variable is like a ref  used inside template to catch element  [[[ defined && called inside html file ]]]
  * we can use (( two way binding )) OR (( refs )) OR OOP to update from input values 
  * RxJs library & observables => subscribe & listen to streams of data update synchronously  Ex. interval() of count increment
    - we must unsubscribe from any subscription on destroying the component  
  * other forms data handling approach => 
    - ReactiveFormModule 
      + FormGroup for forms 
      + FormArray for checkbox inputs 
      + FormControl 
      + Validators
  * NgRx for global state management system like Redux 
    - reducers to handle actions & change state 
    - effects as events on state changes

# performance 
  * onPush component => rerendered only when its inputs change NOT with every parent update
  * Stand alone => imports only every needed components & providers & dependency for itself *** BUT *** Modules import all components with centralized import for providers
  * The module is a group of components   *** AND ***  stand alone component  can be used in modules except the root component

# commands
  * ng g c folder/component-name 

# building & deployment 
  * can be built as  ( SSR app --  SPA ( CSR ) -- SSG static site generation  )   
      `}
    </pre>
  );
}