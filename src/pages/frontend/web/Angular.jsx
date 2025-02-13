export default function Angular() {
  return (
    <pre>
{`      
        # basics
          * uses ( services - models - interfaces - dependency injection )
          * uses pipes to filter OR format OR transform variable data like : ex.  price | number:1.1-2 | currency:EUR 
            - every filter has documentation
          * host element is the element used as a parent of the component content
          * directives ( ngModel - *ngIf - *ngFor )  // '*' means wrap with template
          * we can make custom ( pipe - directives ) 
          * there are many ways to inject services  USING provider ( to the root ---- to the component element ---- others) 
          
        # views 
          * stand alone component & imports for each one  VS modules & global import
          
        # state  & properties
          * uses events to pass data to parent 
          * uses ( Inputs with signal && output with event ) to handle components data sharing
          * signals is two way binding local state
          * template variable is like a ref  used inside template to catch element
          * we can use (( two way binding )) OR (( refs )) OR OOP to update from input values 

        # commands
          * ng g c folder/component-name 
      `}
    </pre>
  );
}