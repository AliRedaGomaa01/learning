export default function Angular() {
  return (
    <pre>
{`      ### basics
        ** angular has commands like laravel artisan 
        ** signal is used to manage dynamic state
        ** uses ( services - models - interfaces - dependency injection )
        ** uses ( Inputs with signal && output with event ) to handle components data sharing
        ** uses pipes to filter OR format variable like : ex.  price | currency:EUR 
          *** every filter has package with documentation
        ** host element is the element used as a parent of the component content

        ### views 
          ** stand alone component & imports for each one  VS modules & global import


      ### state  & properties
        ** uses events to pass data to parent 


        ### commands
        ** ng g c folder/component-name 
      `}
    </pre>
  );
}