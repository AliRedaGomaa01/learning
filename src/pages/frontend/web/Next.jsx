export default function Next() {
  return (
    <pre>
      {`
# basic info 
  * Framework : built on react ******* for fullstack application
  * has differences in components compared to react =>
    - <Image /> component to enhance image  
    - NavLink is not exist but can be made manually  
  * server “use Server”; (default)  …. or client “use client”; directive 
  
  * data caching 
    - uses aws s3  for media to override cached after building
    - caches data so we use =>  revalidatePath( “”/my-path” ) => to refetch data and overrides cached one

  * Routing
    - Has its own built-in routing using filesystem 
    - server side rendering
    - reserved files 
        * page.js => for path’s main content
        * layout.js => Create a new layout that wraps sibling and nested pages
        * not-found.js => Fallback page for "Not Found" errors 
        * error.js => Fallback page for other errors 
        * loading.js => Fallback page which is shown fetching data
        * route.js => API route (NOT return JSX code but data Ex JSON format)

      `}
    </pre>
  );
}