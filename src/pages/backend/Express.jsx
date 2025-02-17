export default function Express() {
  return (
    <div>
      <pre>
{`
        # some info

          * Npm package manager of node
          * node is server side js runner and also nodemon
          * express is a node web server with prepared ( many functions , tools , and rules )
          * sending email is after configuring email server
        

        # terminal cmds

        
          * npm install {"<package>"}
          * npm init {"== >>>"} start node project
          * node app.js {"== >>>"} run file as build
          * nodemon app.js  {"== >>>"} run file as dev & listen to file changes
        

        # env & app defineConfig
        
          * app.set('view engine' , 'ejs')
        

        # dependencies
        
          * use --save with development & production dependencies  ( default )
          &nbsp; &nbsp; but use --save-dev for development dependencies
        

        #  packages  ( almost every thing is via package )
        
          * express
          * nodemon
          * body-parser
        

        # routing

        
          * using “use( “/” , {"() => "}  ) “  represent fallback for all paths , but if use get method if specify
          * in linux file paths is “folder/file” but in windows “folder\file”  SO we use sendFile( path.join( __dirname , “folder” , “file” ) )
          {"// dirname is path of current file"}
          {"// and you can make rootpath.js in util folder to give you path of root file"}
        

        # app structure
        
          **  public folder {"=>"} for assets which is accessible by users ( css , js , imgs )
          &nbsp; &nbsp; to access files in public we must use {/* =>> */} express.static( ) function
        

        # views
        
          **  express template engines are ( EJS --- pug --- handlebars  )
          
            **** they are used as external packages and have their own docs
          
        # websocket => establish a listening channel for server updates
          * use socket.io package on client & server sides      

        # graphQL ( package used with many languages not only js )
          * a pattern to make API like MVC
          * stateless api with higher priority flexibility
          * uses one endpoint with POST method for the data ( detect responses from request body )
          * typed language  
            - operation types ( Query for GET method - Mutation for other methods - subscription for websocket connections  )
        `}

      </pre>

    </div>
  );
}