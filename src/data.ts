export const dictionary = {
  "BASE": {
    description: `The BASE keyword defines the Base IRI used to resolve relative IRIs`,
    example: "BASE <http://example.org/book/>",
    link: "https://www.w3.org/TR/rdf-sparql-query/#relIRIs"
  },
  "PREFIX": {
    description: `The PREFIX keyword associates a prefix label with an IRI`,
    example: "PREFIX book: <http://example.org/book/>",
    link: "https://www.w3.org/TR/rdf-sparql-query/#prefNames"
  },
  "SELECT": {
    description: ` the SELECT clause identifies the variables to appear in the query results`,
    example: `SELECT ?title
    WHERE { <http://example.org/book/book1> <http://purl.org/dc/elements/1.1/title> ?title .}`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#WritingSimpleQueries"
  },
  "CONSTRUCT": {
    description: `The CONSTRUCT query form returns a single RDF graph specified by a graph template`,
    example: `CONSTRUCT { ?s ?p ?o } WHERE { GRAPH <http://example.org/aGraph> { ?s ?p ?o } . }`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#construct"
  },
  "DESCRIBE": {
    description: `The DESCRIBE form returns a single result RDF graph containing RDF data about resources`,
    example: `CONSTRUCT { ?s ?p ?o } WHERE { GRAPH <http://example.org/aGraph> { ?s ?p ?o } . }`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#describe"
  },
  "WHERE": {
    description: "The WHERE clause defines the graph pattern to match against the RDF data",
    example: `SELECT ?title WHERE { <http://example.org/book/book1> <http://purl.org/dc/elements/1.1/title> ?title . }`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#WritingSimpleQueries"
  },
  "DISTINCT": {
    description: "The DISTINCT keyword specifies that only distinct results are to be returned",
    example: `SELECT DISTINCT ?title WHERE { ?book <http://purl.org/dc/elements/1.1/title> ?title . }`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#modDistinct"
  },
  "REDUCED": {
    description: "The REDUCED keyword specifies that duplicate results should be removed",
    example: `SELECT REDUCED ?title WHERE { ?book <http://purl.org/dc/elements/1.1/title> ?title . }`,
    link: "https://www.w3.org/TR/sparql11-query/#modReduced"
  },
  "STR": {
    description: `The STR function returns the lexical form of a literal as a string`,
    example: "STR(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-str"
  },
  "LANG": {
    description: `The LANG function returns the language tag of a literal`,
    example: "LANG(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-lang"
  },
  "LANGMATCHES": {
    description: `The LANGMATCHES function tests whether a language tag matches a language range`,
    example: "LANGMATCHES(LANG(?x), 'en')",
    link: "https://www.w3.org/TR/sparql11-query/#func-langMatches"
  },
  "DATATYPE": {
    description: `The DATATYPE function returns the datatype IRI of a literal`,
    example: "DATATYPE(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-datatype"
  },
  "ASK": {
    description: `The ASK keyword is used for boolean queries, returns true or false`,
    example: "ASK { ?s ?p ?o }",
    link: "https://www.w3.org/TR/rdf-sparql-query/#ask"
  },
  "BOUND": {
    description: `The BOUND function tests whether a variable is bound to a value`,
    example: "FILTER(BOUND(?x))",
    link: "https://www.w3.org/TR/sparql11-query/#func-bound"
  },
  "IRI": {
    description: `The IRI function creates an IRI from a string`,
    example: "IRI('http://example.org/book/book1')",
    link: "https://www.w3.org/TR/sparql11-query/#func-iri"
  },
  "URI": {
    description: `The URI function is used to construct an IRI from a string`,
    example: "URI('http://example.com/resource')",
    link: "https://www.w3.org/TR/sparql11-query/#func-uri"
  },
  "BNODE": {
    description: `The BNODE function generates a blank node with a specified label`,
    example: "BNODE('node1')",
    link: "https://www.w3.org/TR/sparql11-query/#func-bnode"
  },
  "RAND": {
    description: `The RAND function returns a random number between 0 and 1`,
    example: "RAND()",
    link: "https://www.w3.org/TR/sparql11-query/#func-rand"
  },
  "ABS": {
    description: `The ABS function returns the absolute value of a numeric expression`,
    example: "ABS(-5)",
    link: "https://www.w3.org/TR/sparql11-query/#func-abs"
  },
  "CEIL": {
    description: `The CEIL function returns the smallest integer greater than or equal to a numeric expression`,
    example: "CEIL(4.5)",
    link: "https://www.w3.org/TR/sparql11-query/#func-ceil"
  },
  "FLOOR": {
    description: `The FLOOR function returns the largest integer less than or equal to a numeric expression`,
    example: "FLOOR(4.5)",
    link: "https://www.w3.org/TR/sparql11-query/#func-floor"
  },
  "ROUND": {
    description: `The ROUND function rounds a numeric expression to the nearest integer`,
    example: "ROUND(4.5)",
    link: "https://www.w3.org/TR/sparql11-query/#func-round"
  },
  "CONCAT": {
    description: `The CONCAT function concatenates two or more strings`,
    example: "CONCAT('Hello', 'World')",
    link: "https://www.w3.org/TR/sparql11-query/#func-concat"
  },
  "STRLEN": {
    description: `The STRLEN function returns the length of a string`,
    example: "STRLEN('Hello')",
    link: "https://www.w3.org/TR/sparql11-query/#func-strlen"
  },
  "UCASE": {
    description: `The UCASE function returns the uppercase form of a string`,
    example: "UCASE('hello')",
    link: "https://www.w3.org/TR/sparql11-query/#func-ucase"
  },
  "LCASE": {
    description: `The LCASE function returns the lowercase form of a string`,
    example: "LCASE('HELLO')",
    link: "https://www.w3.org/TR/sparql11-query/#func-lcase"
  },
  "ENCODE_FOR_URI": {
    description: `The ENCODE_FOR_URI function encodes a string for use in a URI`,
    example: "ENCODE_FOR_URI('http://example.com/path with spaces')",
    link: "https://www.w3.org/TR/sparql11-query/#func-encode-for-uri"
  },
  "CONTAINS": {
    description: "The CONTAINS function checks if a string contains another string",
    example: `CONTAINS(?name, "Doe")`,
    link: "https://www.w3.org/TR/sparql11-query/#func-contains"
  },
  "STRSTARTS": {
    description: "The STRSTARTS function checks if a string starts with another string",
    example: `STRSTARTS(?name, "Joh")`,
    link: "https://www.w3.org/TR/sparql11-query/#func-strstarts"
  },
  "STRBEFORE": {
    description: "The STRBEFORE function returns the substring of a string that occurs before the first occurrence of another string",
    example: `STRBEFORE(?name, "Doe")`,
    link: "https://www.w3.org/TR/sparql11-query/#func-strbefore"
  },
  "STRAFTER": {
    description: "The STRAFTER function returns the substring of a string that occurs after the first occurrence of another string",
    example: `STRAFTER(?name, "John ")`,
    link: "https://www.w3.org/TR/sparql11-query/#func-strafter"
  },
  "YEAR": {
    description: "The YEAR function extracts the year component of a date",
    example: `YEAR(?date)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-year"
  },
  "MONTH": {
    description: "The MONTH function extracts the month component of a date",
    example: `MONTH(?date)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-month"
  },
  "DAY": {
    description: "The DAY function extracts the day component of a date",
    example: `DAY(?date)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-day"
  },
  "HOURS": {
    description: "The HOURS function extracts the hours component of a time",
    example: `HOURS(?time)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-hours"
  },
  "MINUTES": {
    description: "The MINUTES function extracts the minutes component of a time",
    example: `MINUTES(?time)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-minutes"
  },
  "SECONDS": {
    description: "The SECONDS function extracts the seconds component of a time",
    example: `SECONDS(?time)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-seconds"
  },
  "TIMEZONE": {
    description: "The TIMEZONE function extracts the timezone component of a dateTime",
    example: `TIMEZONE(?dateTime)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-timezone"
  },
  "TZ": {
    description: "The TZ function extracts the timezone component of a dateTime",
    example: `TZ(?dateTime)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-tz"
  },
  "NOW": {
    description: "The NOW function returns the current dateTime",
    example: `NOW()`,
    link: "https://www.w3.org/TR/sparql11-query/#func-now"
  },
  "UUID": {
    description: "Generates a UUID (universally unique identifier) string.",
    example: "UUID()",
    link: "https://www.w3.org/TR/sparql11-query/#func-uuid"
  },
  "STRUUID": {
    description: "Generates a UUID string.",
    example: "STRUUID()",
    link: "https://www.w3.org/TR/sparql11-query/#func-struuid"
  },
  "MD5": {
    description: "Returns the MD5 hash of the argument string.",
    example: "MD5('example')",
    link: "https://www.w3.org/TR/sparql11-query/#func-md5"
  },
  "SHA1": {
    description: "Returns the SHA1 hash of the argument string.",
    example: "SHA1('example')",
    link: "https://www.w3.org/TR/sparql11-query/#func-sha1"
  },
  "SHA256": {
    description: "Returns the SHA256 hash of the argument string.",
    example: "SHA256('example')",
    link: "https://www.w3.org/TR/sparql11-query/#func-sha256"
  },
  "SHA384": {
    description: "Returns the SHA384 hash of the argument string.",
    example: "SHA384('example')",
    link: "https://www.w3.org/TR/sparql11-query/#func-sha384"
  },
  "SHA512": {
    description: "Returns the SHA512 hash of the argument string.",
    example: "SHA512('example')",
    link: "https://www.w3.org/TR/sparql11-query/#func-sha512"
  },
  "COALESCE": {
    description: "Returns the first argument that is not an error.",
    example: "COALESCE(?name, 'N/A')",
    link: "https://www.w3.org/TR/sparql11-query/#func-coalesce"
  },
  "IF": {
    description: "Returns the second argument if the first argument is true, otherwise the third argument.",
    example: "IF(?age > 18, 'Adult', 'Child')",
    link: "https://www.w3.org/TR/sparql11-query/#func-if"
  },
  "STRLANG": {
    description: "Returns the language tag of a literal",
    example: "STRLANG(\"Hello, World!\", \"en\")",
    link: "https://www.w3.org/TR/sparql11-query/#func-strlang"
  },
  "STRDT": {
    description: "Returns a literal with an IRI as the datatype",
    example: "STRDT(\"2.71828\", <http://www.w3.org/2001/XMLSchema#double>)",
    link: "https://www.w3.org/TR/sparql11-query/#func-strdt"
  },
  "SAMETERM": {
    description: "Checks whether two RDF terms are the same",
    example: "SAMETERM(?x, ?y)",
    link: "https://www.w3.org/TR/sparql11-query/#func-sameTerm"
  },
  "ISIRI": {
    description: "Checks whether a term is an IRI",
    example: "ISIRI(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-isIRI"
  },
  "ISURI": {
    description: "Checks whether a term is a URI",
    example: "ISURI(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-isIRI"
  },
  "ISBLANK": {
    description: "Checks whether a term is a blank node",
    example: "ISBLANK(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-isBlank"
  },
  "ISLITERAL": {
    description: "Checks whether a term is a literal",
    example: "ISLITERAL(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-isLiteral"
  },
  "ISNUMERIC": {
    description: "Checks whether a literal is a numeric value",
    example: "ISNUMERIC(\"42\"^^<http://www.w3.org/2001/XMLSchema#integer>)",
    link: "https://www.w3.org/TR/sparql11-query/#func-isNumeric"
  },
  "COUNT": {
    description: "Returns the number of solutions for a group or entire query",
    example: "SELECT (COUNT(?x) AS ?count) { ?x ?y ?z }",
    link: "https://www.w3.org/TR/sparql11-query/#agg-count"
  },
  "SUM": {
    description: "Returns the sum of the values of an expression for a group or entire query",
    example: "SELECT (SUM(?price) AS ?totalPrice) { ?product <http://example.com/price> ?price }",
    link: "https://www.w3.org/TR/sparql11-query/#agg-sum"
  },
  "MIN": {
    description: "Returns the minimum value of an expression for a group or entire query",
    example: "SELECT (MIN(?price) AS ?minPrice) { ?product <http://example.com/price> ?price }",
    link: "https://www.w3.org/TR/sparql11-query/#agg-min"
  },
  "MAX": {
    description: `Returns the maximum value of the group for the given expression`,
    example: `SELECT (MAX(?age) AS ?maxAge) WHERE { ?person foaf:age ?age . }`,
    link: "https://www.w3.org/TR/sparql11-query/#aggMax"
  },
  "AVG": {
    description: `Returns the average value of the group for the given expression`,
    example: `SELECT (AVG(?age) AS ?averageAge) WHERE { ?person foaf:age ?age . }`,
    link: "https://www.w3.org/TR/sparql11-query/#aggAvg"
  },
  "SAMPLE": {
    description: `Returns an arbitrary value of the group for the given expression`,
    example: `SELECT (SAMPLE(?name) AS ?sampleName) WHERE { ?person foaf:name ?name . }`,
    link: "https://www.w3.org/TR/sparql11-query/#aggSample"
  },
  "GROUP_CONCAT": {
    description: `Concatenates the values of the group for the given expression using a separator`,
    example: `SELECT ?person (GROUP_CONCAT(?name; separator=",") AS ?names) WHERE { ?person foaf:name ?name . } GROUP BY ?person`,
    link: "https://www.w3.org/TR/sparql11-query/#aggGroupConcat"
  },
  "SEPARATOR": {
    description: `Specifies the separator to be used with the GROUP_CONCAT function`,
    example: `SELECT ?person (GROUP_CONCAT(?name; separator=" / ") AS ?names) WHERE { ?person foaf:name ?name . } GROUP BY ?person`,
    link: "https://www.w3.org/TR/sparql11-query/#modSeparator"
  },
  "SUBSTR": {
    description: `Returns a substring of the given string expression`,
    example: `SELECT (SUBSTR(?title, 1, 5) AS ?shortTitle) WHERE { ?book dc:title ?title . }`,
    link: "https://www.w3.org/TR/sparql11-query/#func-substr"
  },
  "REPLACE": {
    description: `Replaces a portion of the given string expression with another string`,
    example: `SELECT (REPLACE(?title, " ", "_") AS ?modifiedTitle) WHERE { ?book dc:title ?title . }`,
    link: "https://www.w3.org/TR/sparql11-query/#func-replace"
  },
  "REGEX": {
    description: `Matches a string expression against a regular expression`,
    example: `SELECT ?person WHERE { ?person foaf:name ?name . FILTER(REGEX(?name, "^J")) }`,
    link: "https://www.w3.org/TR/sparql11-query/#func-regex"
  },
  "EXISTS": {
    description: `Tests whether a subquery returns any solutions`,
    example: `SELECT ?person WHERE { ?person foaf:name ?name . FILTER(EXISTS { ?person foaf:knows ?other . }) }`,
    link: "https://www.w3.org/TR/sparql11-query/#func-exists"
  },
  "NOT": {
    description: "The NOT keyword negates a boolean expression",
    example: "FILTER NOT EXISTS { ?x a :Person }",
    link: "https://www.w3.org/TR/sparql11-query/#negation"
  },
  "IN": {
    description: "The IN keyword tests if a value is contained in a set of values",
    example: "?x foaf:name ?name . FILTER(?name IN ('Alice', 'Bob'))",
    link: "https://www.w3.org/TR/sparql11-query/#func-in"
  },
  "GROUP": {
    description: "The GROUP keyword is used to group query results",
    example: "SELECT ?name (COUNT(?book) AS ?count) WHERE { ?book dc:creator ?author . ?author foaf:name ?name . } GROUP BY ?name",
    link: "https://www.w3.org/TR/sparql11-query/#groupby"
  },
  "BY": {
    description: "The BY keyword is used to specify the grouping variable(s) in a GROUP BY clause",
    example: "SELECT ?name (COUNT(?book) AS ?count) WHERE { ?book dc:creator ?author . ?author foaf:name ?name . } GROUP BY ?name",
    link: "https://www.w3.org/TR/sparql11-query/#groupby"
  },
  "HAVING": {
    description: "The HAVING keyword is used to filter the results of a GROUP BY clause",
    example: "SELECT ?name (COUNT(?book) AS ?count) WHERE { ?book dc:creator ?author . ?author foaf:name ?name . } GROUP BY ?name HAVING(COUNT(?book) > 5)",
    link: "https://www.w3.org/TR/sparql11-query/#groupby"
  },
  "ORDER": {
    description: "The ORDER keyword is used to specify the order of the query results",
    example: "SELECT ?name WHERE { ?person foaf:name ?name . } ORDER BY ?name",
    link: "https://www.w3.org/TR/sparql11-query/#modOrderBy"
  },
  "ASC": {
    description: "The ASC keyword is used to sort results in ascending order",
    example: "SELECT ?name WHERE { ?person foaf:name ?name . } ORDER BY ASC(?name)",
    link: "https://www.w3.org/TR/sparql11-query/#modOrderBy"
  },

  "DESC": {
    description: "The DESC keyword is used to sort results in descending order.",
    example: "SELECT ?name WHERE { ?person foaf:name ?name . } ORDER BY DESC(?name)",
    link: "https://www.w3.org/TR/sparql11-query/#modOrderBy"
  },

  "LIMIT": {
    description: "The LIMIT keyword is used to limit the number of results returned by a query.",
    example: "SELECT ?person WHERE { ?person foaf:name ?name . } LIMIT 10",
    link: "https://www.w3.org/TR/sparql11-query/#modResultLimit"
  },

  "OFFSET": {
    description: "The OFFSET keyword is used to skip a certain number of results before returning the remaining results.",
    example: "SELECT ?person WHERE { ?person foaf:name ?name . } OFFSET 10",
    link: "https://www.w3.org/TR/sparql11-query/#modOffset"
  },

  "VALUES": {
    description: "The VALUES keyword is used to specify a set of specific values for variables in a query.",
    example: "SELECT ?name WHERE { ?person foaf:name ?name . VALUES ?person { :John :Mary } }",
    link: "https://www.w3.org/TR/sparql11-query/#inline-data"
  },

  "UNDEF": {
    description: "The UNDEF keyword is used to explicitly set a variable to be undefined.",
    example: "SELECT ?name WHERE { ?person foaf:name ?name . FILTER(?name = 'John' || ?name = UNDEF) }",
    link: "https://www.w3.org/TR/sparql11-query/#modFilter"
  },

  "UNION": {
    description: "The UNION keyword is used to combine the results of two or more queries.",
    example: "SELECT ?name WHERE { { ?person foaf:name ?name . } UNION { ?person schema:name ?name . } }",
    link: "https://www.w3.org/TR/sparql11-query/#sparqlAlgebra"
  },

  "OPTIONAL": {
    description: "The OPTIONAL keyword is used to specify optional patterns in a query. If a pattern is optional and cannot be matched, the query will still return results.",
    example: "SELECT ?person ?email WHERE { ?person foaf:name ?name . OPTIONAL { ?person schema:email ?email . } }",
    link: "https://www.w3.org/TR/sparql11-query/#optionals"
  },

  "MINUS": {
    description: "The MINUS keyword is used to subtract the results of one query from the results of another query.",
    example: "SELECT ?person WHERE { ?person foaf:name ?name . MINUS { ?person dbo:spouse ?spouse . } }",
    link: "https://www.w3.org/TR/sparql11-query/#negation"
  },

  "GRAPH": {
    description: "The GRAPH keyword is used to specify a named graph in a query.",
    example: "SELECT ?name WHERE { GRAPH :graph1 { ?person foaf:name ?name . } }",
    link: "https://www.w3.org/TR/sparql11-query/#namedGraphs"
  },
  "SERVICE": {
    description: "The SERVICE keyword is used to query a remote SPARQL endpoint as part of a federated query.",
    example: "SELECT ?book ?title WHERE { SERVICE http://example.org/sparql { ?book dct:title ?title } }",
    link: "https://www.w3.org/TR/sparql11-federated-query/#rdf-sparql-service"
  },

  "SILENT": {
    description: "The SILENT keyword is used to suppress errors and warnings that arise from executing a query. ",
    example: "INSERT DATA SILENT { http://example.org/subject http://example.org/predicate 'object' }",
    link: "https://www.w3.org/TR/sparql11-update/#silent"
  },

  "FILTER": {
    description: "The FILTER keyword is used to restrict results based on a set of conditions.",
    example: "SELECT ?person WHERE { ?person foaf:name ?name . FILTER (LANG(?name) = 'en') }",
    link: "https://www.w3.org/TR/sparql11-query/#tests"
  },

  "BIND": {
    description: "The BIND keyword is used to assign a value to a variable, allowing it to be used in the rest of the query.",
    example: "SELECT ?name ?age { ?person foaf:name ?name . BIND(2022 - ?birthyear AS ?age) }",
    link: "https://www.w3.org/TR/sparql11-query/#bind"
  },

  "AS": {
    description: "The AS keyword is used to create an alias for a variable or expression.",
    example: "SELECT ?name AS ?fullName WHERE { ?person foaf:firstName ?name . ?person foaf:lastName ?surname . BIND(CONCAT(?name, ' ', ?surname) AS ?fullName) }",
    link: "https://www.w3.org/TR/sparql11-query/#selectExpressions"
  },

  "FROM": {
    description: "The FROM keyword is used to specify the graph or dataset to be queried in a SPARQL query.",
    example: "SELECT ?name WHERE { GRAPH http://example.org/data { ?person foaf:name ?name } }",
    link: "https://www.w3.org/TR/sparql11-query/#specifyingDataset"
  },

  "NAMED": {
    description: "The NAMED keyword is used to specify a named graph in a SPARQL query.",
    example: "SELECT ?name WHERE { GRAPH http://example.org/data { ?person foaf:name ?name } GRAPH http://example.org/other-data { ?person foaf:mbox ?email } }",
    link: "https://www.w3.org/TR/sparql11-query/#namedGraphs"
  },
  "LOAD": {
    description: "The LOAD keyword is used to load data into a graph in a SPARQL endpoint.",
    example: "LOAD http://example.org/data.rdf INTO GRAPH http://example.org/data",
    link: "https://www.w3.org/TR/sparql11-update/#load"
  },

  "INTO": {
    description: "The INTO keyword is used to specify the graph or dataset to load data into.",
    example: "LOAD http://example.org/data.rdf INTO GRAPH http://example.org/data",
    link: "https://www.w3.org/TR/sparql11-update/#load"
  },
  "TO": {
    description: "Specifies the endpoint to send the query results to",
    example: "SELECT ?s ?p ?o WHERE { ?s ?p ?o . } LIMIT 10 TO http://example.org/my-endpoint",
    link: "https://www.w3.org/TR/sparql11-protocol/#query-operation"
  },
  "CLEAR": {
    description: "Clears the default graph or named graphs specified in the graph iri list",
    example: "CLEAR DEFAULT",
    link: "https://www.w3.org/TR/sparql11-update/#clear"
  },
  "DROP": {
    description: "Removes the specified graphs from the dataset",
    example: "DROP GRAPH http://example.org/graph1",
    link: "https://www.w3.org/TR/sparql11-update/#drop"
  },
  "CREATE": {
    description: "Creates a new graph in the dataset",
    example: "CREATE GRAPH http://example.org/newGraph",
    link: "https://www.w3.org/TR/sparql11-update/#create"
  },
  "ADD": {
    description: "Adds triples to the specified graph",
    example: "ADD DATA http://example.org/graph1 { http://example.org/subject http://example.org/predicate http://example.org/object }",
    link: "https://www.w3.org/TR/sparql11-update/#add"
  },
  "MOVE": {
    description: "Moves the specified graph to a new graph",
    example: "MOVE GRAPH http://example.org/oldGraph TO http://example.org/newGraph",
    link: "https://www.w3.org/TR/sparql11-update/#move"
  },
  "COPY": {
    description: "Copies the specified graph to a new graph",
    example: "COPY GRAPH http://example.org/oldGraph TO http://example.org/newGraph",
    link: "https://www.w3.org/TR/sparql11-update/#copy"
  },
  "INSERT": {
    description: "Inserts data into the specified graph",
    example: "INSERT DATA { http://example.org/subject http://example.org/predicate http://example.org/object }",
    link: "https://www.w3.org/TR/sparql11-update/#insertData"
  },
  "DATA": {
    description: "Specifies the data to be inserted or deleted",
    example: "INSERT DATA { http://example.org/subject http://example.org/predicate http://example.org/object }",
    link: "https://www.w3.org/TR/sparql11-update/#insertData"
  },
  "DELETE": {
    description: "Deletes data from the specified graph",
    example: "DELETE { http://example.org/subject http://example.org/predicate http://example.org/object } WHERE { http://example.org/subject http://example.org/predicate http://example.org/object }",
    link: "https://www.w3.org/TR/sparql11-update/#deleteData"
  },
  "WITH": {
    description: "Specifies additional RDF dataset to query over",
    example: "WITH <http://example.org/bookStore> SELECT ?book WHERE { ?book rdf:type <http://example.org/Book> . }",
    link: "https://www.w3.org/TR/sparql11-query/#rDatasetClause"
  },
  "DEFAULT": {
    description: "Sets a default graph or named graph to be queried when no FROM or FROM NAMED clauses are present",
    example: "SELECT ?book WHERE { ?book rdf:type <http://example.org/Book> . }",
    link: "https://www.w3.org/TR/sparql11-query/#queryDataset"
  },
  "ALL": {
    description: "Returns all solutions",
    example: "SELECT ?person WHERE { ?person foaf:name ?name . }",
    link: "https://www.w3.org/TR/sparql11-query/#select"
  },
  "USING": {
    description: "Specifies the named graphs to be queried",
    example: "USING <http://example.org/graph1> SELECT ?book WHERE { ?book rdf:type <http://example.org/Book> . }",
    link: "https://www.w3.org/TR/sparql11-query/#rDatasetClause"
  }
}