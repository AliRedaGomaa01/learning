export default function Angular() {
  return (
    <pre>
{`      
        # basics
          * angular is perfect for many options and high performance
          * uses ( services - models - interfaces - dependency injection )
          * uses pipes to filter OR format OR transform variable data like : ex.  price | number:1.1-2 | currency:EUR 
            - every filter has documentation
          * host element is the element used as a parent of the component content
          * directives ( ngModel - *ngIf - *ngFor )  // '*' means wrap with template
          * we can make custom ( pipe - directives ) 
          * there are many ways to inject services  USING provider ( to the root ---- to the component element ---- others) 
          * not using axios for http requests and use builtin HttpClient that returns Observable Stream 
          * it has own form validator system using FormControl & Validators
          
        # views 
          * stand alone component & imports for each one  VS modules & global import
          
        # state  & properties
          * uses events to pass data to parent 
          * uses ( Inputs with signal && output with event ) to handle components data sharing
          * signals is two way binding local state  [ mySignal() ** mySignal.set() ** mySignal().update( prev => prev + 1 ) ]
          * template variable is like a ref  used inside template to catch element
          * we can use (( two way binding )) OR (( refs )) OR OOP to update from input values 
          * RxJs library & observables => subscribe & listen to streams of data update synchronously  Ex. interval() of count increment
            - we must unsubscribe from any subscription on destroying the component  
          * other forms data handling approach => ReactiveFormModule & FormGroup & FormControl & Validators
        
        # performance 
          * onPush component => rerendered only when its inputs change NOT with every parent update

        # commands
          * ng g c folder/component-name 
      `}
    </pre>
  );
}