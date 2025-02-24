export default function Express() {
  return (
    <pre>
      {`
      
      # basics
        * ORM & 3rd libraries : sequelize library with mysql2 library ( SQL )
        * ODM (Object Document Mapper) : Mongoose ( NSQL )
        * Sequelize & Mongooose has their own doc.
        * when using mongoose 
          - the schema in the model file is for ODM 
          - not for the database because its schemaless

      # nosql & mongo DB
        * we can use local ( compass )  || OR || hosted ( atlas ) [ preferred ] 
        * making relations makes preference slow so reduce it in nosql
        * we using free mongodb atlas to manage DB
        * we use mongodb compass to get GUI of you DB 

      # Create & Edit Schema 
        

      # Table Relations   
        * use populate to handle relations 

      # CRUD Data 

      # validation :
        * we validate that id is mongoId type 
    `}

    </pre>
  );
}