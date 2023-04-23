export const dictionary = {
  "BASE": {
    type: "keyword",
    label: "BASE",
    description: `The BASE keyword defines the Base IRI used to resolve relative IRIs`,
    example: "BASE <http://example.org/book/>",
    link: "https://www.w3.org/TR/rdf-sparql-query/#relIRIs",
    boost: 10
  },
  "PREFIX": {
    type: "keyword",
    label: "PREFIX",
    description: `The PREFIX keyword associates a prefix label with an IRI`,
    example: "PREFIX book: <http://example.org/book/>",
    link: "https://www.w3.org/TR/rdf-sparql-query/#prefNames",
    boost: 10
  },
  "SELECT": {
    type: "keyword",
    label: "SELECT",
    description: ` the SELECT clause identifies the variables to appear in the query results`,
    example: `SELECT ?title
    WHERE { <http://example.org/book/book1> <http://purl.org/dc/elements/1.1/title> ?title .}`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#WritingSimpleQueries",
    boost: 10
  },
  "CONSTRUCT": {
    type: "keyword",
    label: "CONSTRUCT",
    description: `The CONSTRUCT query form returns a single RDF graph specified by a graph template`,
    example: `CONSTRUCT { ?s ?p ?o } WHERE { GRAPH <http://example.org/aGraph> { ?s ?p ?o } . }`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#construct",
    boost: 10
  },
  "DESCRIBE": {
    type: "keyword",
    label: "DESCRIBE",
    description: `The DESCRIBE form returns a single result RDF graph containing RDF data about resources`,
    example: `CONSTRUCT { ?s ?p ?o } WHERE { GRAPH <http://example.org/aGraph> { ?s ?p ?o } . }`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#describe",
    boost: 10
  },
  "WHERE": {
    type: "keyword",
    label: "WHERE",
    description: "The WHERE clause defines the graph pattern to match against the RDF data",
    example: `SELECT ?title WHERE { <http://example.org/book/book1> <http://purl.org/dc/elements/1.1/title> ?title . }`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#WritingSimpleQueries",
    boost: 10
  },
  "DISTINCT": {
    type: "keyword",
    label: "DISTINCT",
    description: "The DISTINCT keyword specifies that only distinct results are to be returned",
    example: `SELECT DISTINCT ?title WHERE { ?book <http://purl.org/dc/elements/1.1/title> ?title . }`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#modDistinct",
    boost: 10
  },
  "REDUCED": {
    type: "keyword",
    label: "REDUCED",
    description: "The REDUCED keyword specifies that duplicate results should be removed",
    example: `SELECT REDUCED ?title WHERE { ?book <http://purl.org/dc/elements/1.1/title> ?title . }`,
    link: "https://www.w3.org/TR/sparql11-query/#modReduced",
    boost: 10
  },
  "STR": {
    type: "method",
    label: "STR",
    description: `The STR function returns the lexical form of a literal as a string`,
    example: "STR(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-str",
    boost: 1
  },
  "LANG": {
    type: "method",
    label: "LANG",
    description: `The LANG function returns the language tag of a literal`,
    example: "LANG(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-lang",
    boost: 1
  },
  "LANGMATCHES": {
    type: "method",
    label: "LANGMATCHES",
    description: `The LANGMATCHES function tests whether a language tag matches a language range`,
    example: "LANGMATCHES(LANG(?x), 'en')",
    link: "https://www.w3.org/TR/sparql11-query/#func-langMatches",
    boost: 1
  },
  "DATATYPE": {
    type: "method",
    label: "DATATYPE",
    description: `The DATATYPE function returns the datatype IRI of a literal`,
    example: "DATATYPE(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-datatype",
    boost: 1
  },
  "ASK": {
    type: "keyword",
    label: "ASK",
    description: `The ASK keyword is used for boolean queries, returns true or false`,
    example: "ASK { ?s ?p ?o }",
    link: "https://www.w3.org/TR/rdf-sparql-query/#ask",
    boost: 10
  },
  "BOUND": {
    type: "method",
    label: "BOUND",
    description: `The BOUND function tests whether a variable is bound to a value`,
    example: "FILTER(BOUND(?x))",
    link: "https://www.w3.org/TR/sparql11-query/#func-bound",
    boost: 1
  },
  "IRI": {
    type: "method",
    label: "IRI",
    description: `The IRI function creates an IRI from a string`,
    example: "IRI('http://example.org/book/book1')",
    link: "https://www.w3.org/TR/sparql11-query/#func-iri",
    boost: 1
  },
  "URI": {
    type: "method",
    label: "URI",
    description: `The URI function is used to construct an IRI from a string`,
    example: "URI('http://example.com/resource')",
    link: "https://www.w3.org/TR/sparql11-query/#func-uri",
    boost: 1
  },
  "BNODE": {
    type: "method",
    label: "BNODE",
    description: `The BNODE function generates a blank node with a specified label`,
    example: "BNODE('node1')",
    link: "https://www.w3.org/TR/sparql11-query/#func-bnode",
    boost: 1
  },
  "RAND": {
    type: "method",
    label: "RAND",
    description: `The RAND function returns a random number between 0 and 1`,
    example: "RAND()",
    link: "https://www.w3.org/TR/sparql11-query/#func-rand",
    boost: 1
  },
  "ABS": {
    type: "method",
    label: "ABS",
    description: `The ABS function returns the absolute value of a numeric expression`,
    example: "ABS(-5)",
    link: "https://www.w3.org/TR/sparql11-query/#func-abs",
    boost: 1
  },
  "CEIL": {
    type: "method",
    label: "CEIL",
    description: `The CEIL function returns the smallest integer greater than or equal to a numeric expression`,
    example: "CEIL(4.5)",
    link: "https://www.w3.org/TR/sparql11-query/#func-ceil",
    boost: 1
  },
  "FLOOR": {
    type: "method",
    label: "FLOOR",
    description: `The FLOOR function returns the largest integer less than or equal to a numeric expression`,
    example: "FLOOR(4.5)",
    link: "https://www.w3.org/TR/sparql11-query/#func-floor",
    boost: 1
  },
  "ROUND": {
    type: "method",
    label: "ROUND",
    description: `The ROUND function rounds a numeric expression to the nearest integer`,
    example: "ROUND(4.5)",
    link: "https://www.w3.org/TR/sparql11-query/#func-round",
    boost: 1
  },
  "CONCAT": {
    type: "method",
    label: "CONCAT",
    description: `The CONCAT function concatenates two or more strings`,
    example: "CONCAT('Hello', 'World')",
    link: "https://www.w3.org/TR/sparql11-query/#func-concat",
    boost: 1
  },
  "STRLEN": {
    type: "method",
    label: "STRLEN",
    description: `The STRLEN function returns the length of a string`,
    example: "STRLEN('Hello')",
    link: "https://www.w3.org/TR/sparql11-query/#func-strlen",
    boost: 1
  },
  "UCASE": {
    type: "method",
    label: "UCASE",
    description: `The UCASE function returns the uppercase form of a string`,
    example: "UCASE('hello')",
    link: "https://www.w3.org/TR/sparql11-query/#func-ucase",
    boost: 1
  },
  "LCASE": {
    type: "method",
    label: "LCASE",
    description: `The LCASE function returns the lowercase form of a string`,
    example: "LCASE('HELLO')",
    link: "https://www.w3.org/TR/sparql11-query/#func-lcase",
    boost: 1
  },
  "ENCODE_FOR_URI": {
    type: "method",
    label: "ENCODE_FOR_URI",
    description: `The ENCODE_FOR_URI function encodes a string for use in a URI`,
    example: "ENCODE_FOR_URI('http://example.com/path with spaces')",
    link: "https://www.w3.org/TR/sparql11-query/#func-encode-for-uri",
    boost: 1
  },
  "CONTAINS": {
    type: "method",
    label: "CONTAINS",
    description: "The CONTAINS function checks if a string contains another string",
    example: `CONTAINS(?name, "Doe")`,
    link: "https://www.w3.org/TR/sparql11-query/#func-contains",
    boost: 1
  },
  "STRSTARTS": {
    type: "method",
    label: "STRSTARTS",
    description: "The STRSTARTS function checks if a string starts with another string",
    example: `STRSTARTS(?name, "Joh")`,
    link: "https://www.w3.org/TR/sparql11-query/#func-strstarts",
    boost: 1
  },
  "STRBEFORE": {
    type: "method",
    label: "STRBEFORE",
    description: "The STRBEFORE function returns the substring of a string that occurs before the first occurrence of another string",
    example: `STRBEFORE(?name, "Doe")`,
    link: "https://www.w3.org/TR/sparql11-query/#func-strbefore",
    boost: 1
  },
  "STRAFTER": {
    type: "method",
    label: "STRAFTER",
    description: "The STRAFTER function returns the substring of a string that occurs after the first occurrence of another string",
    example: `STRAFTER(?name, "John ")`,
    link: "https://www.w3.org/TR/sparql11-query/#func-strafter",
    boost: 1
  },
  "YEAR": {
    type: "method",
    label: "YEAR",
    description: "The YEAR function extracts the year component of a date",
    example: `YEAR(?date)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-year",
    boost: 1
  },
  "MONTH": {
    type: "method",
    label: "MONTH",
    description: "The MONTH function extracts the month component of a date",
    example: `MONTH(?date)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-month",
    boost: 1
  },
  "DAY": {
    type: "method",
    label: "DAY",
    description: "The DAY function extracts the day component of a date",
    example: `DAY(?date)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-day",
    boost: 1
  },
  "HOURS": {
    type: "method",
    label: "HOURS",
    description: "The HOURS function extracts the hours component of a time",
    example: `HOURS(?time)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-hours",
    boost: 1
  },
  "MINUTES": {
    type: "method",
    label: "MINUTES",
    description: "The MINUTES function extracts the minutes component of a time",
    example: `MINUTES(?time)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-minutes",
    boost: 1
  },
  "SECONDS": {
    type: "method",
    label: "SECONDS",
    description: "The SECONDS function extracts the seconds component of a time",
    example: `SECONDS(?time)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-seconds",
    boost: 1
  },
  "TIMEZONE": {
    type: "method",
    label: "TIMEZONE",
    description: "The TIMEZONE function extracts the timezone component of a dateTime",
    example: `TIMEZONE(?dateTime)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-timezone",
    boost: 1
  },
  "TZ": {
    type: "method",
    label: "TZ",
    description: "The TZ function extracts the timezone component of a dateTime",
    example: `TZ(?dateTime)`,
    link: "https://www.w3.org/TR/sparql11-query/#func-tz",
    boost: 1
  },
  "NOW": {
    type: "method",
    label: "NOW",
    description: "The NOW function returns the current dateTime",
    example: `NOW()`,
    link: "https://www.w3.org/TR/sparql11-query/#func-now",
    boost: 1
  },
  "UUID": {
    type: "method",
    label: "UUID",
    description: "Generates a UUID (universally unique identifier) string.",
    example: "UUID()",
    link: "https://www.w3.org/TR/sparql11-query/#func-uuid",
    boost: 1
  },
  "STRUUID": {
    type: "method",
    label: "STRUUID",
    description: "Generates a UUID string.",
    example: "STRUUID()",
    link: "https://www.w3.org/TR/sparql11-query/#func-struuid",
    boost: 1
  },
  "MD5": {
    type: "method",
    label: "MD5",
    description: "Returns the MD5 hash of the argument string.",
    example: "MD5('example')",
    link: "https://www.w3.org/TR/sparql11-query/#func-md5",
    boost: 1
  },
  "SHA1": {
    type: "method",
    label: "SHA1",
    description: "Returns the SHA1 hash of the argument string.",
    example: "SHA1('example')",
    link: "https://www.w3.org/TR/sparql11-query/#func-sha1",
    boost: 1
  },
  "SHA256": {
    type: "method",
    label: "SHA256",
    description: "Returns the SHA256 hash of the argument string.",
    example: "SHA256('example')",
    link: "https://www.w3.org/TR/sparql11-query/#func-sha256",
    boost: 1
  },
  "SHA384": {
    type: "method",
    label: "SHA384",
    description: "Returns the SHA384 hash of the argument string.",
    example: "SHA384('example')",
    link: "https://www.w3.org/TR/sparql11-query/#func-sha384",
    boost: 1
  },
  "SHA512": {
    type: "method",
    label: "SHA512",
    description: "Returns the SHA512 hash of the argument string.",
    example: "SHA512('example')",
    link: "https://www.w3.org/TR/sparql11-query/#func-sha512",
    boost: 1
  },
  "COALESCE": {
    type: "method",
    label: "COALESCE",
    description: "Returns the first argument that is not an error.",
    example: "COALESCE(?name, 'N/A')",
    link: "https://www.w3.org/TR/sparql11-query/#func-coalesce",
    boost: 1
  },
  "IF": {
    type: "method",
    label: "IF",
    description: "Returns the second argument if the first argument is true, otherwise the third argument.",
    example: "IF(?age > 18, 'Adult', 'Child')",
    link: "https://www.w3.org/TR/sparql11-query/#func-if",
    boost: 1
  },
  "STRLANG": {
    type: "method",
    label: "STRLANG",
    description: "Returns the language tag of a literal",
    example: "STRLANG(\"Hello, World!\", \"en\")",
    link: "https://www.w3.org/TR/sparql11-query/#func-strlang",
    boost: 1
  },
  "STRDT": {
    type: "method",
    label: "STRDT",
    description: "Returns a literal with an IRI as the datatype",
    example: "STRDT(\"2.71828\", <http://www.w3.org/2001/XMLSchema#double>)",
    link: "https://www.w3.org/TR/sparql11-query/#func-strdt",
    boost: 1
  },
  "SAMETERM": {
    type: "method",
    label: "SAMETERM",
    description: "Checks whether two RDF terms are the same",
    example: "SAMETERM(?x, ?y)",
    link: "https://www.w3.org/TR/sparql11-query/#func-sameTerm",
    boost: 1
  },
  "ISIRI": {
    type: "method",
    label: "ISIRI",
    description: "Checks whether a term is an IRI",
    example: "ISIRI(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-isIRI",
    boost: 1
  },
  "ISURI": {
    type: "method",
    label: "ISURI",
    description: "Checks whether a term is a URI",
    example: "ISURI(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-isIRI",
    boost: 1
  },
  "ISBLANK": {
    type: "method",
    label: "ISBLANK",
    description: "Checks whether a term is a blank node",
    example: "ISBLANK(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-isBlank",
    boost: 1
  },
  "ISLITERAL": {
    type: "method",
    label: "ISLITERAL",
    description: "Checks whether a term is a literal",
    example: "ISLITERAL(?x)",
    link: "https://www.w3.org/TR/sparql11-query/#func-isLiteral",
    boost: 1
  },
  "ISNUMERIC": {
    type: "method",
    label: "ISNUMERIC",
    description: "Checks whether a literal is a numeric value",
    example: "ISNUMERIC(\"42\"^^<http://www.w3.org/2001/XMLSchema#integer>)",
    link: "https://www.w3.org/TR/sparql11-query/#func-isNumeric",
    boost: 1
  },
  "COUNT": {
    type: "method",
    label: "COUNT",
    description: "Returns the number of solutions for a group or entire query",
    example: "SELECT (COUNT(?x) AS ?count) { ?x ?y ?z }",
    link: "https://www.w3.org/TR/sparql11-query/#agg-count",
    boost: 1
  },
  "SUM": {
    type: "method",
    label: "SUM",
    description: "Returns the sum of the values of an expression for a group or entire query",
    example: "SELECT (SUM(?price) AS ?totalPrice) { ?product <http://example.com/price> ?price }",
    link: "https://www.w3.org/TR/sparql11-query/#agg-sum",
    boost: 1
  },
  "MIN": {
    type: "method",
    label: "MIN",
    description: "Returns the minimum value of an expression for a group or entire query",
    example: "SELECT (MIN(?price) AS ?minPrice) { ?product <http://example.com/price> ?price }",
    link: "https://www.w3.org/TR/sparql11-query/#agg-min",
    boost: 1
  },
  "MAX": {
    type: "method",
    label: "MAX",
    description: `Returns the maximum value of the group for the given expression`,
    example: `SELECT (MAX(?age) AS ?maxAge) WHERE { ?person foaf:age ?age . }`,
    link: "https://www.w3.org/TR/sparql11-query/#aggMax",
    boost: 1
  },
  "AVG": {
    type: "method",
    label: "AVG",
    description: `Returns the average value of the group for the given expression`,
    example: `SELECT (AVG(?age) AS ?averageAge) WHERE { ?person foaf:age ?age . }`,
    link: "https://www.w3.org/TR/sparql11-query/#aggAvg",
    boost: 1
  },
  "SAMPLE": {
    type: "method",
    label: "SAMPLE",
    description: `Returns an arbitrary value of the group for the given expression`,
    example: `SELECT (SAMPLE(?name) AS ?sampleName) WHERE { ?person foaf:name ?name . }`,
    link: "https://www.w3.org/TR/sparql11-query/#aggSample",
    boost: 1
  },
  "GROUP_CONCAT": {
    type: "method",
    label: "GROUP_CONCAT",
    description: `Concatenates the values of the group for the given expression using a separator`,
    example: `SELECT ?person (GROUP_CONCAT(?name; separator=",") AS ?names) WHERE { ?person foaf:name ?name . } GROUP BY ?person`,
    link: "https://www.w3.org/TR/sparql11-query/#aggGroupConcat",
    boost: 1
  },
  "SEPARATOR": {
    type: "keyword",
    label: "SEPARATOR",
    description: `Specifies the separator to be used with the GROUP_CONCAT function`,
    example: `SELECT ?person (GROUP_CONCAT(?name; separator=" / ") AS ?names) WHERE { ?person foaf:name ?name . } GROUP BY ?person`,
    link: "https://www.w3.org/TR/sparql11-query/#modSeparator",
    boost: 10
  },
  "SUBSTR": {
    type: "method",
    label: "SUBSTR",
    description: `Returns a substring of the given string expression`,
    example: `SELECT (SUBSTR(?title, 1, 5) AS ?shortTitle) WHERE { ?book dc:title ?title . }`,
    link: "https://www.w3.org/TR/sparql11-query/#func-substr",
    boost: 1
  },
  "REPLACE": {
    type: "method",
    label: "REPLACE",
    description: `Replaces a portion of the given string expression with another string`,
    example: `SELECT (REPLACE(?title, " ", "_") AS ?modifiedTitle) WHERE { ?book dc:title ?title . }`,
    link: "https://www.w3.org/TR/sparql11-query/#func-replace",
    boost: 1
  },
  "REGEX": {
    type: "method",
    label: "REGEX",
    description: `Matches a string expression against a regular expression`,
    example: `SELECT ?person WHERE { ?person foaf:name ?name . FILTER(REGEX(?name, "^J")) }`,
    link: "https://www.w3.org/TR/sparql11-query/#func-regex",
    boost: 1
  },
  "EXISTS": {
    type: "keyword",
    label: "EXISTS",
    description: `Tests whether a subquery returns any solutions`,
    example: `SELECT ?person WHERE { ?person foaf:name ?name . FILTER(EXISTS { ?person foaf:knows ?other . }) }`,
    link: "https://www.w3.org/TR/sparql11-query/#func-exists",
    boost: 10
  },
  "NOT": {
    type: "keyword",
    label: "NOT",
    description: "The NOT keyword negates a boolean expression",
    example: "FILTER NOT EXISTS { ?x a :Person }",
    link: "https://www.w3.org/TR/sparql11-query/#negation",
    boost: 10
  },
  "IN": {
    type: "keyword",
    label: "IN",
    description: "The IN keyword tests if a value is contained in a set of values",
    example: "?x foaf:name ?name . FILTER(?name IN ('Alice', 'Bob'))",
    link: "https://www.w3.org/TR/sparql11-query/#func-in",
    boost: 10
  },
  "GROUP BY": {
    type: "keyword",
    label: "BY",
    description: "The GROUP BY keyword is used to group query results",
    example: "SELECT ?name (COUNT(?book) AS ?count) WHERE { ?book dc:creator ?author . ?author foaf:name ?name . } GROUP BY ?name",
    link: "https://www.w3.org/TR/sparql11-query/#groupby",
    boost: 10
  },
  "HAVING": {
    type: "keyword",
    label: "HAVING",
    description: "The HAVING keyword is used to filter the results of a GROUP BY clause",
    example: "SELECT ?name (COUNT(?book) AS ?count) WHERE { ?book dc:creator ?author . ?author foaf:name ?name . } GROUP BY ?name HAVING(COUNT(?book) > 5)",
    link: "https://www.w3.org/TR/sparql11-query/#groupby",
    boost: 10
  },
  "ORDER BY": {
    type: "keyword",
    label: "BY",
    description: "The ORDER BY keyword is used to specify the order of the query results",
    example: "SELECT ?name WHERE { ?person foaf:name ?name . } ORDER BY ?name",
    link: "https://www.w3.org/TR/sparql11-query/#modOrderBy",
    boost: 10
  },
  "ASC": {
    type: "keyword",
    label: "ASC",
    description: "The ASC keyword is used to sort results in ascending order",
    example: "SELECT ?name WHERE { ?person foaf:name ?name . } ORDER BY ASC(?name)",
    link: "https://www.w3.org/TR/sparql11-query/#modOrderBy",
    boost: 10
  },

  "DESC": {
    type: "keyword",
    label: "DESC",
    description: "The DESC keyword is used to sort results in descending order.",
    example: "SELECT ?name WHERE { ?person foaf:name ?name . } ORDER BY DESC(?name)",
    link: "https://www.w3.org/TR/sparql11-query/#modOrderBy",
    boost: 10
  },

  "LIMIT": {
    type: "keyword",
    label: "LIMIT",
    description: "The LIMIT keyword is used to limit the number of results returned by a query.",
    example: "SELECT ?person WHERE { ?person foaf:name ?name . } LIMIT 10",
    link: "https://www.w3.org/TR/sparql11-query/#modResultLimit",
    boost: 10
  },

  "OFFSET": {
    type: "keyword",
    label: "OFFSET",
    description: "The OFFSET keyword is used to skip a certain number of results before returning the remaining results.",
    example: "SELECT ?person WHERE { ?person foaf:name ?name . } OFFSET 10",
    link: "https://www.w3.org/TR/sparql11-query/#modOffset",
    boost: 10
  },

  "VALUES": {
    type: "keyword",
    label: "VALUES",
    description: "The VALUES keyword is used to specify a set of specific values for variables in a query.",
    example: "SELECT ?name WHERE { ?person foaf:name ?name . VALUES ?person { :John :Mary } }",
    link: "https://www.w3.org/TR/sparql11-query/#inline-data",
    boost: 10
  },

  "UNDEF": {
    type: "keyword",
    label: "UNDEF",
    description: "The UNDEF keyword is used to explicitly set a variable to be undefined.",
    example: "SELECT ?name WHERE { ?person foaf:name ?name . FILTER(?name = 'John' || ?name = UNDEF) }",
    link: "https://www.w3.org/TR/sparql11-query/#modFilter",
    boost: 10
  },

  "UNION": {
    type: "keyword",
    label: "UNION",
    description: "The UNION keyword is used to combine the results of two or more queries.",
    example: "SELECT ?name WHERE { { ?person foaf:name ?name . } UNION { ?person schema:name ?name . } }",
    link: "https://www.w3.org/TR/sparql11-query/#sparqlAlgebra",
    boost: 10
  },

  "OPTIONAL": {
    type: "keyword",
    label: "OPTIONAL",
    description: "The OPTIONAL keyword is used to specify optional patterns in a query. If a pattern is optional and cannot be matched, the query will still return results.",
    example: "SELECT ?person ?email WHERE { ?person foaf:name ?name . OPTIONAL { ?person schema:email ?email . } }",
    link: "https://www.w3.org/TR/sparql11-query/#optionals",
    boost: 10
  },

  "MINUS": {
    type: "keyword",
    label: "MINUS",
    description: "The MINUS keyword is used to subtract the results of one query from the results of another query.",
    example: "SELECT ?person WHERE { ?person foaf:name ?name . MINUS { ?person dbo:spouse ?spouse . } }",
    link: "https://www.w3.org/TR/sparql11-query/#negation",
    boost: 10
  },

  "GRAPH": {
    type: "keyword",
    label: "GRAPH",
    description: "The GRAPH keyword is used to specify a named graph in a query.",
    example: "SELECT ?name WHERE { GRAPH :graph1 { ?person foaf:name ?name . } }",
    link: "https://www.w3.org/TR/sparql11-query/#namedGraphs",
    boost: 10
  },
  "SERVICE": {
    type: "keyword",
    label: "SERVICE",
    description: "The SERVICE keyword is used to query a remote SPARQL endpoint as part of a federated query.",
    example: "SELECT ?book ?title WHERE { SERVICE http://example.org/sparql { ?book dct:title ?title } }",
    link: "https://www.w3.org/TR/sparql11-federated-query/#rdf-sparql-service",
    boost: 10
  },

  "SILENT": {
    type: "keyword",
    label: "SILENT",
    description: "The SILENT keyword is used to suppress errors and warnings that arise from executing a query. ",
    example: "INSERT DATA SILENT { http://example.org/subject http://example.org/predicate 'object' }",
    link: "https://www.w3.org/TR/sparql11-update/#silent",
    boost: 10
  },

  "FILTER": {
    type: "keyword",
    label: "FILTER",
    description: "The FILTER keyword is used to restrict results based on a set of conditions.",
    example: "SELECT ?person WHERE { ?person foaf:name ?name . FILTER (LANG(?name) = 'en') }",
    link: "https://www.w3.org/TR/sparql11-query/#tests",
    boost: 10
  },

  "BIND": {
    type: "keyword",
    label: "BIND",
    description: "The BIND keyword is used to assign a value to a variable, allowing it to be used in the rest of the query.",
    example: "SELECT ?name ?age { ?person foaf:name ?name . BIND(2022 - ?birthyear AS ?age) }",
    link: "https://www.w3.org/TR/sparql11-query/#bind",
    boost: 10
  },

  "AS": {
    type: "keyword",
    label: "AS",
    description: "The AS keyword is used to create an alias for a variable or expression.",
    example: "SELECT ?name AS ?fullName WHERE { ?person foaf:firstName ?name . ?person foaf:lastName ?surname . BIND(CONCAT(?name, ' ', ?surname) AS ?fullName) }",
    link: "https://www.w3.org/TR/sparql11-query/#selectExpressions",
    boost: 10
  },

  "FROM": {
    type: "keyword",
    label: "FROM",
    description: "The FROM keyword is used to specify the graph or dataset to be queried in a SPARQL query.",
    example: "SELECT ?name WHERE { GRAPH http://example.org/data { ?person foaf:name ?name } }",
    link: "https://www.w3.org/TR/sparql11-query/#specifyingDataset",
    boost: 10
  },

  "NAMED": {
    type: "keyword",
    label: "NAMED",
    description: "The NAMED keyword is used to specify a named graph in a SPARQL query.",
    example: "SELECT ?name WHERE { GRAPH http://example.org/data { ?person foaf:name ?name } GRAPH http://example.org/other-data { ?person foaf:mbox ?email } }",
    link: "https://www.w3.org/TR/sparql11-query/#namedGraphs",
    boost: 10
  },
  "LOAD": {
    type: "keyword",
    label: "LOAD",
    description: "The LOAD keyword is used to load data into a graph in a SPARQL endpoint.",
    example: "LOAD http://example.org/data.rdf INTO GRAPH http://example.org/data",
    link: "https://www.w3.org/TR/sparql11-update/#load",
    boost: 10
  },

  "INTO": {
    type: "keyword",
    label: "INTO",
    description: "The INTO keyword is used to specify the graph or dataset to load data into.",
    example: "LOAD http://example.org/data.rdf INTO GRAPH http://example.org/data",
    link: "https://www.w3.org/TR/sparql11-update/#load",
    boost: 10
  },
  "TO": {
    type: "keyword",
    label: "TO",
    description: "Specifies the endpoint to send the query results to",
    example: "SELECT ?s ?p ?o WHERE { ?s ?p ?o . } LIMIT 10 TO http://example.org/my-endpoint",
    link: "https://www.w3.org/TR/sparql11-protocol/#query-operation",
    boost: 10
  },
  "CLEAR": {
    type: "keyword",
    label: "CLEAR",
    description: "Clears the default graph or named graphs specified in the graph iri list",
    example: "CLEAR DEFAULT",
    link: "https://www.w3.org/TR/sparql11-update/#clear",
    boost: 10
  },
  "DROP": {
    type: "keyword",
    label: "DROP",
    description: "Removes the specified graphs from the dataset",
    example: "DROP GRAPH http://example.org/graph1",
    link: "https://www.w3.org/TR/sparql11-update/#drop",
    boost: 10
  },
  "CREATE": {
    type: "keyword",
    label: "CREATE",
    description: "Creates a new graph in the dataset",
    example: "CREATE GRAPH http://example.org/newGraph",
    link: "https://www.w3.org/TR/sparql11-update/#create",
    boost: 10
  },
  "ADD": {
    type: "keyword",
    label: "ADD",
    description: "Adds triples to the specified graph",
    example: "ADD DATA http://example.org/graph1 { http://example.org/subject http://example.org/predicate http://example.org/object }",
    link: "https://www.w3.org/TR/sparql11-update/#add",
    boost: 10
  },
  "MOVE": {
    type: "keyword",
    label: "MOVE",
    description: "Moves the specified graph to a new graph",
    example: "MOVE GRAPH http://example.org/oldGraph TO http://example.org/newGraph",
    link: "https://www.w3.org/TR/sparql11-update/#move",
    boost: 10
  },
  "COPY": {
    type: "keyword",
    label: "COPY",
    description: "Copies the specified graph to a new graph",
    example: "COPY GRAPH http://example.org/oldGraph TO http://example.org/newGraph",
    link: "https://www.w3.org/TR/sparql11-update/#copy",
    boost: 10
  },
  "INSERT": {
    type: "keyword",
    label: "INSERT",
    description: "Inserts data into the specified graph",
    example: "INSERT DATA { http://example.org/subject http://example.org/predicate http://example.org/object }",
    link: "https://www.w3.org/TR/sparql11-update/#insertData",
    boost: 10
  },
  "DATA": {
    type: "keyword",
    label: "DATA",
    description: "Specifies the data to be inserted or deleted",
    example: "INSERT DATA { http://example.org/subject http://example.org/predicate http://example.org/object }",
    link: "https://www.w3.org/TR/sparql11-update/#insertData",
    boost: 10
  },
  "DELETE": {
    type: "keyword",
    label: "DELETE",
    description: "Deletes data from the specified graph",
    example: "DELETE { http://example.org/subject http://example.org/predicate http://example.org/object } WHERE { http://example.org/subject http://example.org/predicate http://example.org/object }",
    link: "https://www.w3.org/TR/sparql11-update/#deleteData",
    boost: 10
  },
  "WITH": {
    type: "keyword",
    label: "WITH",
    description: "Specifies additional RDF dataset to query over",
    example: "WITH <http://example.org/bookStore> SELECT ?book WHERE { ?book rdf:type <http://example.org/Book> . }",
    link: "https://www.w3.org/TR/sparql11-query/#rDatasetClause",
    boost: 10
  },
  "DEFAULT": {
    type: "keyword",
    label: "DEFAULT",
    description: "Sets a default graph or named graph to be queried when no FROM or FROM NAMED clauses are present",
    example: "SELECT ?book WHERE { ?book rdf:type <http://example.org/Book> . }",
    link: "https://www.w3.org/TR/sparql11-query/#queryDataset",
    boost: 10
  },
  "ALL": {
    type: "keyword",
    label: "ALL",
    description: "Returns all solutions",
    example: "SELECT ?person WHERE { ?person foaf:name ?name . }",
    link: "https://www.w3.org/TR/sparql11-query/#select",
    boost: 10
  },
  "USING": {
    type: "keyword",
    label: "USING",
    description: "Specifies the named graphs to be queried",
    example: "USING <http://example.org/graph1> SELECT ?book WHERE { ?book rdf:type <http://example.org/Book> . }",
    link: "https://www.w3.org/TR/sparql11-query/#rDatasetClause"
  }
}