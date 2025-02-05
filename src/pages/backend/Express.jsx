export default function Express() {
  return (
    <div>
      <pre>

        ### some info

        <span>
          * Npm package manager of node
          * node is server side js runner   and also nodemon
          * express is a framework with many functions , tools , and rules that runs as our server in node.js
        </span>

        ### syntax

        <span>
          * to export we use {"== >>>"}  module.exports = …
        </span>

        ### terminal cmds

        <span>
          * npm install {"<package>"}
          * npm init {"== >>>"} start node project
          * node app.js {"== >>>"} run file as build
          * nodemon app.js  {"== >>>"} run file as dev & listen to file changes // needs node monster package
        </span>

        ### env & app defineConfig
        <span>
          * app.set('view engine' , 'ejs') 
        </span>

        ### dependencies
        <span>
          * use --save with development & production dependencies  ( default )
          &nbsp; &nbsp; but use  --save-dev for development dependencies
        </span>

        ###  packages
        <span>
          * express
          * nodemon
          * body-parser
        </span>

        ### routing

        <span>
          * using “use( “/” , {"() => "}  ) “  represent fallback for all paths , but if use get method if specify
          * in linux file paths is “folder/file” but in windows “folder\file”  SO we use sendFile( path.join( __dirname , “folder” , “file” ) )
          {"// dirname is path of current file"}
          {"// and you can make rootpath.js in util folder to give you path of root file"}
        </span>

        ### app structure
        <span>
          **  public folder {"=>"} for assets which is accessible by users ( css , js , imgs )
          &nbsp; &nbsp; to access files in public we must use express.static( …code )
          **  routes folder {"=>"} for routing files
        </span>

        ### views
        <span>
          **  express template engines are ( EJS --- pug "Jade" --- handlebars  )
          ****** they are used as external packages and have their own docs
        </span>

      </pre>

    </div>
  );
}