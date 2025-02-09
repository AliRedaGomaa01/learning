export default function Common() {
  return (
    <pre>
      ### Basics Info
      <span>
        ** you can download SQL server on you machine OR get it as software service like XXAMP , LARAGON
        ** we make a connect between app & server ALSO we call server before every query
        ** ORM Object Relational Mapping
      </span>

      ### difference between SQL & NSQL
      <span>
        ** the difference is structure & schema PLUS relations
        ** if you not follow structure in SQL you get error unlike NSQL that is is schema-less
        ** NSQL has no or low relations unlike SQL
        ** NSQL duplicate data
        ** NSQL more size but best performance
        ** SQL uses many table |||| but NSQL merges data in a few collections
        ** SQL server has limits in read & write per second but NSQL has massive performance
      </span>

      ### database scaling
      <span>
        ** vertical : more powerful one server  ( SQL & NSQL )
        ** horizontal : many low powerful servers ( NSQL Only )
      </span>
    </pre>
  );
}