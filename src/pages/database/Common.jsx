export default function Common() {
  return (
    <pre>
      {`
# Basics Info
  * you can download SQL server on you machine OR get it as software service like XXAMP , LARAGON
  * we make a connect between app & server ALSO we call server before every query
  * ORM Object Relational Mapper
  * Raw Native SQL Queries ( for complex queries )

# difference between SQL & NoSQL
  * the difference is structure & schema & content validation PLUS relations
  * if you not follow structure in SQL you get error unlike NoSQL that is is schema-less
  * NoSQL has no or low relations unlike SQL
  * NoSQL duplicate data
  * NoSQL more size but best performance
  * SQL uses many table |||| but NoSQL merges data in a few collections
  * SQL => records in tables  ||||||| noSQL => documents in collections 
  * SQL server has limits in read & write per second but NoSQL has massive performance

# database scaling
  * vertical : more powerful one server  ( SQL & NoSQL )
  * horizontal : many low powerful servers ( NoSQL Only )

# firebase :
  * firebase contains ( realtime notification FCM - sms messages - storage ) 
  
# relations :  
  * one-one 
  * one-many 
  * many-many 
  * morph-one
  * morph-many

      `}

    </pre>
  );
}