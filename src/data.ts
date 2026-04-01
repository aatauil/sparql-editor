export const dictionary = {
  "BASE": {
    type: "keyword",
    label: "BASE",
    description: `Defines the base IRI used to resolve relative IRIs in the query`,
    example: `BASE <http://example.org/book/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT ?title WHERE {
  <book1> dc:title ?title .
}`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#relIRIs",
    boost: 10
  },
  "PREFIX": {
    type: "keyword",
    label: "PREFIX",
    description: `Associates a short prefix label with a full IRI namespace, allowing compact notation in the query`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT ?name WHERE {
  ?person foaf:name ?name .
}`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#prefNames",
    boost: 10
  },
  "SELECT": {
    type: "keyword",
    label: "SELECT",
    description: `Specifies which variables to include in the query results`,
    example: `PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT ?title WHERE {
  <http://example.org/book/book1> dc:title ?title .
}`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#WritingSimpleQueries",
    boost: 10
  },
  "CONSTRUCT": {
    type: "keyword",
    label: "CONSTRUCT",
    description: `Returns a new RDF graph built from a template, substituting query variables with matched values`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX schema: <http://schema.org/>

CONSTRUCT { ?s schema:name ?name }
WHERE {
  ?s foaf:name ?name .
}`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#construct",
    boost: 10
  },
  "DESCRIBE": {
    type: "keyword",
    label: "DESCRIBE",
    description: `Returns an RDF graph describing the matched resources. The exact content is determined by the endpoint.`,
    example: `PREFIX dc: <http://purl.org/dc/elements/1.1/>

DESCRIBE ?book WHERE {
  ?book dc:title "The Semantic Web" .
}`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#describe",
    boost: 10
  },
  "WHERE": {
    type: "keyword",
    label: "WHERE",
    description: `Defines the graph pattern to match against the RDF dataset`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name WHERE {
  ?person foaf:name ?name .
}`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#WritingSimpleQueries",
    boost: 10
  },
  "DISTINCT": {
    type: "keyword",
    label: "DISTINCT",
    description: `Eliminates duplicate rows from the query results`,
    example: `PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT DISTINCT ?title WHERE {
  ?book dc:title ?title .
}`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#modDistinct",
    boost: 10
  },
  "REDUCED": {
    type: "keyword",
    label: "REDUCED",
    description: `Hints to the processor that duplicate results may be eliminated, but does not guarantee it. Weaker than DISTINCT but potentially faster.`,
    example: `PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT REDUCED ?title WHERE {
  ?book dc:title ?title .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#modReduced",
    boost: 10
  },
  "STR": {
    type: "method",
    label: "STR",
    description: `Returns the lexical form of a literal or the IRI string of an IRI term`,
    example: `PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT (STR(?date) AS ?dateStr) WHERE {
  ?event dc:date ?date .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-str",
    boost: 1
  },
  "LANG": {
    type: "method",
    label: "LANG",
    description: `Returns the language tag of a language-tagged literal, or an empty string if none`,
    example: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?label WHERE {
  ?s rdfs:label ?label .
  FILTER(LANG(?label) = "en")
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-lang",
    boost: 1
  },
  "LANGMATCHES": {
    type: "method",
    label: "LANGMATCHES",
    description: `Tests whether a language tag matches a language range using RFC 4647 basic filtering. Use "*" to match any language tag.`,
    example: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?label WHERE {
  ?s rdfs:label ?label .
  FILTER(LANGMATCHES(LANG(?label), "en"))
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-langMatches",
    boost: 1
  },
  "DATATYPE": {
    type: "method",
    label: "DATATYPE",
    description: `Returns the datatype IRI of a typed literal`,
    example: `SELECT ?value (DATATYPE(?value) AS ?type) WHERE {
  ?s <http://example.org/value> ?value .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-datatype",
    boost: 1
  },
  "ASK": {
    type: "keyword",
    label: "ASK",
    description: `Returns true if the query pattern matches at least one solution, false otherwise`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

ASK {
  ?person foaf:name "Alice" .
}`,
    link: "https://www.w3.org/TR/rdf-sparql-query/#ask",
    boost: 10
  },
  "BOUND": {
    type: "method",
    label: "BOUND",
    description: `Returns true if the variable is bound to a value in the current solution`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?person ?email WHERE {
  ?person foaf:name ?name .
  OPTIONAL { ?person foaf:mbox ?email . }
  FILTER(BOUND(?email))
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-bound",
    boost: 1
  },
  "IRI": {
    type: "method",
    label: "IRI",
    description: `Constructs an IRI from a string. Relative strings are resolved against the base IRI.`,
    example: `SELECT (IRI(CONCAT("http://example.org/item/", STR(?id))) AS ?itemIRI) WHERE {
  ?s <http://example.org/id> ?id .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-iri",
    boost: 1
  },
  "URI": {
    type: "method",
    label: "URI",
    description: `Alias for IRI(). Constructs an IRI from a string.`,
    example: `SELECT (URI(CONCAT("http://example.org/item/", STR(?id))) AS ?itemURI) WHERE {
  ?s <http://example.org/id> ?id .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-uri",
    boost: 1
  },
  "BNODE": {
    type: "method",
    label: "BNODE",
    description: `Constructs a blank node. With no argument, returns a fresh blank node per solution row. With a string argument, returns the same blank node for the same string within a query.`,
    example: `CONSTRUCT {
  ?person <http://example.org/address> _:addr .
  _:addr <http://example.org/city> ?city .
}
WHERE {
  ?person <http://example.org/city> ?city .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-bnode",
    boost: 1
  },
  "RAND": {
    type: "method",
    label: "RAND",
    description: `Returns a random double between 0 (inclusive) and 1 (exclusive). Useful for random sampling.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name WHERE {
  ?person foaf:name ?name .
}
ORDER BY RAND()
LIMIT 1`,
    link: "https://www.w3.org/TR/sparql11-query/#func-rand",
    boost: 1
  },
  "ABS": {
    type: "method",
    label: "ABS",
    description: `Returns the absolute value of a numeric expression`,
    example: `SELECT ?value (ABS(?value) AS ?absValue) WHERE {
  ?s <http://example.org/value> ?value .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-abs",
    boost: 1
  },
  "CEIL": {
    type: "method",
    label: "CEIL",
    description: `Returns the smallest integer greater than or equal to the given number`,
    example: `SELECT ?price (CEIL(?price) AS ?roundedUp) WHERE {
  ?product <http://example.org/price> ?price .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-ceil",
    boost: 1
  },
  "FLOOR": {
    type: "method",
    label: "FLOOR",
    description: `Returns the largest integer less than or equal to the given number`,
    example: `SELECT ?price (FLOOR(?price) AS ?roundedDown) WHERE {
  ?product <http://example.org/price> ?price .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-floor",
    boost: 1
  },
  "ROUND": {
    type: "method",
    label: "ROUND",
    description: `Returns the nearest integer to the given number, rounding half values up`,
    example: `SELECT ?price (ROUND(?price) AS ?roundedPrice) WHERE {
  ?product <http://example.org/price> ?price .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-round",
    boost: 1
  },
  "CONCAT": {
    type: "method",
    label: "CONCAT",
    description: `Concatenates two or more strings into one. If all arguments are typed literals or language-tagged literals, the result carries the shared type/language.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT (CONCAT(?first, " ", ?last) AS ?fullName) WHERE {
  ?person foaf:firstName ?first ;
          foaf:lastName ?last .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-concat",
    boost: 1
  },
  "STRLEN": {
    type: "method",
    label: "STRLEN",
    description: `Returns the number of characters in a string`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name WHERE {
  ?person foaf:name ?name .
  FILTER(STRLEN(?name) > 10)
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-strlen",
    boost: 1
  },
  "UCASE": {
    type: "method",
    label: "UCASE",
    description: `Returns the string with all characters converted to uppercase`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT (UCASE(?name) AS ?upperName) WHERE {
  ?person foaf:name ?name .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-ucase",
    boost: 1
  },
  "LCASE": {
    type: "method",
    label: "LCASE",
    description: `Returns the string with all characters converted to lowercase`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT (LCASE(?name) AS ?lowerName) WHERE {
  ?person foaf:name ?name .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-lcase",
    boost: 1
  },
  "ENCODE_FOR_URI": {
    type: "method",
    label: "ENCODE_FOR_URI",
    description: `Percent-encodes a string so it can be safely used as a URI component`,
    example: `PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT (ENCODE_FOR_URI(?title) AS ?encodedTitle) WHERE {
  ?book dc:title ?title .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-encode-for-uri",
    boost: 1
  },
  "CONTAINS": {
    type: "method",
    label: "CONTAINS",
    description: `Returns true if the first string contains the second string as a substring`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name WHERE {
  ?person foaf:name ?name .
  FILTER(CONTAINS(?name, "Smith"))
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-contains",
    boost: 1
  },
  "STRSTARTS": {
    type: "method",
    label: "STRSTARTS",
    description: `Returns true if the first string starts with the second string`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name WHERE {
  ?person foaf:name ?name .
  FILTER(STRSTARTS(?name, "John"))
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-strstarts",
    boost: 1
  },
  "STRBEFORE": {
    type: "method",
    label: "STRBEFORE",
    description: `Returns the substring of the first argument that occurs before the first match of the second argument`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT (STRBEFORE(?name, " ") AS ?firstName) WHERE {
  ?person foaf:name ?name .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-strbefore",
    boost: 1
  },
  "STRAFTER": {
    type: "method",
    label: "STRAFTER",
    description: `Returns the substring of the first argument that occurs after the first match of the second argument`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT (STRAFTER(?name, " ") AS ?lastName) WHERE {
  ?person foaf:name ?name .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-strafter",
    boost: 1
  },
  "YEAR": {
    type: "method",
    label: "YEAR",
    description: `Extracts the year component from an xsd:dateTime or xsd:date value`,
    example: `SELECT ?event WHERE {
  ?event <http://example.org/date> ?date .
  FILTER(YEAR(?date) = 2023)
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-year",
    boost: 1
  },
  "MONTH": {
    type: "method",
    label: "MONTH",
    description: `Extracts the month component (1–12) from an xsd:dateTime or xsd:date value`,
    example: `SELECT ?event WHERE {
  ?event <http://example.org/date> ?date .
  FILTER(MONTH(?date) = 6)
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-month",
    boost: 1
  },
  "DAY": {
    type: "method",
    label: "DAY",
    description: `Extracts the day-of-month component (1–31) from an xsd:dateTime or xsd:date value`,
    example: `SELECT ?event WHERE {
  ?event <http://example.org/date> ?date .
  FILTER(DAY(?date) = 15)
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-day",
    boost: 1
  },
  "HOURS": {
    type: "method",
    label: "HOURS",
    description: `Extracts the hours component (0–23) from an xsd:dateTime or xsd:time value`,
    example: `SELECT ?event WHERE {
  ?event <http://example.org/startTime> ?time .
  FILTER(HOURS(?time) >= 9 && HOURS(?time) < 17)
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-hours",
    boost: 1
  },
  "MINUTES": {
    type: "method",
    label: "MINUTES",
    description: `Extracts the minutes component (0–59) from an xsd:dateTime or xsd:time value`,
    example: `SELECT (MINUTES(?ts) AS ?min) WHERE {
  ?event <http://example.org/timestamp> ?ts .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-minutes",
    boost: 1
  },
  "SECONDS": {
    type: "method",
    label: "SECONDS",
    description: `Extracts the seconds component (0–60) from an xsd:dateTime or xsd:time value`,
    example: `SELECT (SECONDS(?ts) AS ?sec) WHERE {
  ?event <http://example.org/timestamp> ?ts .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-seconds",
    boost: 1
  },
  "TIMEZONE": {
    type: "method",
    label: "TIMEZONE",
    description: `Returns the timezone offset of an xsd:dateTime as an xsd:dayTimeDuration (e.g., "-PT5H"). Errors if the value has no timezone.`,
    example: `SELECT (TIMEZONE(?ts) AS ?tz) WHERE {
  ?event <http://example.org/timestamp> ?ts .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-timezone",
    boost: 1
  },
  "TZ": {
    type: "method",
    label: "TZ",
    description: `Returns the timezone of an xsd:dateTime as a plain string (e.g., "+05:30"). Returns an empty string if no timezone is present. Unlike TIMEZONE, does not error on timezone-less values.`,
    example: `SELECT (TZ(?ts) AS ?timezone) WHERE {
  ?event <http://example.org/timestamp> ?ts .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-tz",
    boost: 1
  },
  "NOW": {
    type: "method",
    label: "NOW",
    description: `Returns the current date and time as an xsd:dateTime. Returns the same value for all calls within a single query execution.`,
    example: `PREFIX schema: <http://schema.org/>

SELECT ?event WHERE {
  ?event schema:startDate ?start .
  FILTER(?start > NOW())
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-now",
    boost: 1
  },
  "UUID": {
    type: "method",
    label: "UUID",
    description: `Returns a freshly generated IRI from the UUID URN scheme (e.g., <urn:uuid:b9302fb5-...>). For a plain string UUID, use STRUUID().`,
    example: `SELECT (UUID() AS ?id) WHERE {
  ?s <http://example.org/name> ?name .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-uuid",
    boost: 1
  },
  "STRUUID": {
    type: "method",
    label: "STRUUID",
    description: `Returns a freshly generated UUID as a plain string (e.g., "b9302fb5-..."), without the URN IRI wrapper. For an IRI-typed UUID, use UUID().`,
    example: `SELECT (STRUUID() AS ?id) WHERE {
  ?s <http://example.org/name> ?name .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-struuid",
    boost: 1
  },
  "MD5": {
    type: "method",
    label: "MD5",
    description: `Returns the MD5 hash of the given string as a lowercase hex string`,
    example: `SELECT (MD5(?email) AS ?hash) WHERE {
  ?person <http://xmlns.com/foaf/0.1/mbox> ?email .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-md5",
    boost: 1
  },
  "SHA1": {
    type: "method",
    label: "SHA1",
    description: `Returns the SHA-1 hash of the given string as a lowercase hex string`,
    example: `SELECT (SHA1(?value) AS ?hash) WHERE {
  ?s <http://example.org/value> ?value .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-sha1",
    boost: 1
  },
  "SHA256": {
    type: "method",
    label: "SHA256",
    description: `Returns the SHA-256 hash of the given string as a lowercase hex string`,
    example: `SELECT (SHA256(?value) AS ?hash) WHERE {
  ?s <http://example.org/value> ?value .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-sha256",
    boost: 1
  },
  "SHA384": {
    type: "method",
    label: "SHA384",
    description: `Returns the SHA-384 hash of the given string as a lowercase hex string`,
    example: `SELECT (SHA384(?value) AS ?hash) WHERE {
  ?s <http://example.org/value> ?value .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-sha384",
    boost: 1
  },
  "SHA512": {
    type: "method",
    label: "SHA512",
    description: `Returns the SHA-512 hash of the given string as a lowercase hex string`,
    example: `SELECT (SHA512(?value) AS ?hash) WHERE {
  ?s <http://example.org/value> ?value .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-sha512",
    boost: 1
  },
  "COALESCE": {
    type: "method",
    label: "COALESCE",
    description: `Returns the first argument that evaluates without error. Useful as a fallback when a variable may be unbound.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX schema: <http://schema.org/>

SELECT (COALESCE(?email, ?mbox, "no contact") AS ?contact) WHERE {
  ?person foaf:name ?name .
  OPTIONAL { ?person schema:email ?email . }
  OPTIONAL { ?person foaf:mbox ?mbox . }
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-coalesce",
    boost: 1
  },
  "IF": {
    type: "method",
    label: "IF",
    description: `Returns the second argument if the condition (first argument) is true, otherwise returns the third argument`,
    example: `SELECT ?person (IF(?age >= 18, "adult", "minor") AS ?category) WHERE {
  ?person <http://example.org/age> ?age .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-if",
    boost: 1
  },
  "STRLANG": {
    type: "method",
    label: "STRLANG",
    description: `Constructs a language-tagged literal from a lexical form string and a language tag`,
    example: `SELECT (STRLANG("Hello", "en") AS ?greeting) WHERE { }`,
    link: "https://www.w3.org/TR/sparql11-query/#func-strlang",
    boost: 1
  },
  "STRDT": {
    type: "method",
    label: "STRDT",
    description: `Constructs a typed literal from a lexical form string and a datatype IRI`,
    example: `SELECT (STRDT("2.71828", <http://www.w3.org/2001/XMLSchema#double>) AS ?e) WHERE { }`,
    link: "https://www.w3.org/TR/sparql11-query/#func-strdt",
    boost: 1
  },
  "SAMETERM": {
    type: "method",
    label: "SAMETERM",
    description: `Returns true if the two RDF terms are identical (same IRI, same literal value+type+language, or same blank node). More strict than = for literals.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?a ?b WHERE {
  ?a foaf:knows ?b .
  FILTER(!SAMETERM(?a, ?b))
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-sameTerm",
    boost: 1
  },
  "ISIRI": {
    type: "method",
    label: "ISIRI",
    description: `Returns true if the term is an IRI`,
    example: `SELECT ?s WHERE {
  ?s ?p ?o .
  FILTER(ISIRI(?s))
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-isIRI",
    boost: 1
  },
  "ISURI": {
    type: "method",
    label: "ISURI",
    description: `Alias for ISIRI(). Returns true if the term is an IRI (URI).`,
    example: `SELECT ?s WHERE {
  ?s ?p ?o .
  FILTER(ISURI(?s))
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-isIRI",
    boost: 1
  },
  "ISBLANK": {
    type: "method",
    label: "ISBLANK",
    description: `Returns true if the term is a blank node`,
    example: `SELECT ?s WHERE {
  ?s ?p ?o .
  FILTER(ISBLANK(?s))
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-isBlank",
    boost: 1
  },
  "ISLITERAL": {
    type: "method",
    label: "ISLITERAL",
    description: `Returns true if the term is a literal`,
    example: `SELECT ?o WHERE {
  ?s ?p ?o .
  FILTER(ISLITERAL(?o))
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-isLiteral",
    boost: 1
  },
  "ISNUMERIC": {
    type: "method",
    label: "ISNUMERIC",
    description: `Returns true if the term is a literal with a numeric datatype`,
    example: `SELECT ?value WHERE {
  ?s <http://example.org/value> ?value .
  FILTER(ISNUMERIC(?value))
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-isNumeric",
    boost: 1
  },
  "COUNT": {
    type: "method",
    label: "COUNT",
    description: `Returns the number of times the expression has a bound, non-error value in the group`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name (COUNT(?book) AS ?total) WHERE {
  ?book <http://example.org/author> ?author .
  ?author foaf:name ?name .
}
GROUP BY ?name`,
    link: "https://www.w3.org/TR/sparql11-query/#agg-count",
    boost: 1
  },
  "SUM": {
    type: "method",
    label: "SUM",
    description: `Returns the sum of the numeric values in the group`,
    example: `SELECT ?category (SUM(?price) AS ?total) WHERE {
  ?product <http://example.org/category> ?category ;
           <http://example.org/price> ?price .
}
GROUP BY ?category`,
    link: "https://www.w3.org/TR/sparql11-query/#agg-sum",
    boost: 1
  },
  "MIN": {
    type: "method",
    label: "MIN",
    description: `Returns the minimum value in the group`,
    example: `SELECT ?category (MIN(?price) AS ?cheapest) WHERE {
  ?product <http://example.org/category> ?category ;
           <http://example.org/price> ?price .
}
GROUP BY ?category`,
    link: "https://www.w3.org/TR/sparql11-query/#agg-min",
    boost: 1
  },
  "MAX": {
    type: "method",
    label: "MAX",
    description: `Returns the maximum value in the group`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT (MAX(?age) AS ?oldest) WHERE {
  ?person foaf:age ?age .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#aggMax",
    boost: 1
  },
  "AVG": {
    type: "method",
    label: "AVG",
    description: `Returns the average of the numeric values in the group`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT (AVG(?age) AS ?avgAge) WHERE {
  ?person foaf:age ?age .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#aggAvg",
    boost: 1
  },
  "SAMPLE": {
    type: "method",
    label: "SAMPLE",
    description: `Returns an arbitrary value from the group. Useful when all values are equivalent or when any representative value is acceptable.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?org (SAMPLE(?name) AS ?anyName) WHERE {
  ?person foaf:name ?name ;
          <http://example.org/org> ?org .
}
GROUP BY ?org`,
    link: "https://www.w3.org/TR/sparql11-query/#aggSample",
    boost: 1
  },
  "GROUP_CONCAT": {
    type: "method",
    label: "GROUP_CONCAT",
    description: `Concatenates the string values in the group with a configurable separator`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?person (GROUP_CONCAT(?tag; separator=", ") AS ?tags) WHERE {
  ?person foaf:name ?name ;
          <http://example.org/tag> ?tag .
}
GROUP BY ?person`,
    link: "https://www.w3.org/TR/sparql11-query/#aggGroupConcat",
    boost: 1
  },
  "SEPARATOR": {
    type: "keyword",
    label: "SEPARATOR",
    description: `Specifies the separator string used by GROUP_CONCAT to join values`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?person (GROUP_CONCAT(?tag; separator=" | ") AS ?tags) WHERE {
  ?person foaf:name ?name ;
          <http://example.org/tag> ?tag .
}
GROUP BY ?person`,
    link: "https://www.w3.org/TR/sparql11-query/#modSeparator",
    boost: 10
  },
  "SUBSTR": {
    type: "method",
    label: "SUBSTR",
    description: `Returns a substring starting at position startingLoc (1-based) with optional length`,
    example: `PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT (SUBSTR(?title, 1, 10) AS ?preview) WHERE {
  ?book dc:title ?title .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-substr",
    boost: 1
  },
  "REPLACE": {
    type: "method",
    label: "REPLACE",
    description: `Replaces occurrences of a regex pattern in a string with a replacement string. Supports flags (e.g., "i" for case-insensitive).`,
    example: `PREFIX dc: <http://purl.org/dc/elements/1.1/>

SELECT (REPLACE(?title, "\\\\s+", "_") AS ?slug) WHERE {
  ?book dc:title ?title .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-replace",
    boost: 1
  },
  "REGEX": {
    type: "method",
    label: "REGEX",
    description: `Returns true if the string matches the given regular expression. Supports XQuery regex flags as an optional third argument.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?person WHERE {
  ?person foaf:name ?name .
  FILTER(REGEX(?name, "^J", "i"))
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-regex",
    boost: 1
  },
  "EXISTS": {
    type: "keyword",
    label: "EXISTS",
    description: `Returns true if the graph pattern has at least one solution. Used inside FILTER to conditionally include results.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?person WHERE {
  ?person foaf:name ?name .
  FILTER EXISTS { ?person foaf:mbox ?email . }
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-exists",
    boost: 10
  },
  "NOT": {
    type: "keyword",
    label: "NOT",
    description: `Negates a boolean expression. Most commonly used as NOT EXISTS to exclude results that match a pattern.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?person WHERE {
  ?person foaf:name ?name .
  FILTER NOT EXISTS { ?person foaf:mbox ?email . }
}`,
    link: "https://www.w3.org/TR/sparql11-query/#negation",
    boost: 10
  },
  "IN": {
    type: "keyword",
    label: "IN",
    description: `Tests whether a value is a member of an inline list of values`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?person WHERE {
  ?person foaf:name ?name .
  FILTER(?name IN ("Alice", "Bob", "Carol"))
}`,
    link: "https://www.w3.org/TR/sparql11-query/#func-in",
    boost: 10
  },
  "GROUP BY": {
    type: "keyword",
    label: "GROUP BY",
    description: `Groups query results by one or more variables or expressions, enabling aggregate functions like COUNT or SUM`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name (COUNT(?book) AS ?count) WHERE {
  ?book <http://example.org/author> ?author .
  ?author foaf:name ?name .
}
GROUP BY ?name`,
    link: "https://www.w3.org/TR/sparql11-query/#groupby",
    boost: 10
  },
  "HAVING": {
    type: "keyword",
    label: "HAVING",
    description: `Filters groups produced by GROUP BY based on aggregate conditions`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name (COUNT(?book) AS ?count) WHERE {
  ?book <http://example.org/author> ?author .
  ?author foaf:name ?name .
}
GROUP BY ?name
HAVING(COUNT(?book) > 5)`,
    link: "https://www.w3.org/TR/sparql11-query/#groupby",
    boost: 10
  },
  "ORDER BY": {
    type: "keyword",
    label: "ORDER BY",
    description: `Sorts the query results by one or more expressions. Use ASC() or DESC() to control direction (ascending is the default).`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name ?age WHERE {
  ?person foaf:name ?name ;
          foaf:age ?age .
}
ORDER BY DESC(?age) ASC(?name)`,
    link: "https://www.w3.org/TR/sparql11-query/#modOrderBy",
    boost: 10
  },
  "ASC": {
    type: "keyword",
    label: "ASC",
    description: `Sorts the ORDER BY expression in ascending order (this is the default direction when ASC/DESC is omitted)`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name WHERE {
  ?person foaf:name ?name .
}
ORDER BY ASC(?name)`,
    link: "https://www.w3.org/TR/sparql11-query/#modOrderBy",
    boost: 10
  },
  "DESC": {
    type: "keyword",
    label: "DESC",
    description: `Sorts the ORDER BY expression in descending order`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name ?age WHERE {
  ?person foaf:name ?name ;
          foaf:age ?age .
}
ORDER BY DESC(?age)`,
    link: "https://www.w3.org/TR/sparql11-query/#modOrderBy",
    boost: 10
  },
  "LIMIT": {
    type: "keyword",
    label: "LIMIT",
    description: `Restricts the number of rows returned. Often combined with OFFSET for pagination.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name WHERE {
  ?person foaf:name ?name .
}
ORDER BY ?name
LIMIT 10`,
    link: "https://www.w3.org/TR/sparql11-query/#modResultLimit",
    boost: 10
  },
  "OFFSET": {
    type: "keyword",
    label: "OFFSET",
    description: `Skips the first N results before returning rows. Used with LIMIT for pagination.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name WHERE {
  ?person foaf:name ?name .
}
ORDER BY ?name
LIMIT 10
OFFSET 20`,
    link: "https://www.w3.org/TR/sparql11-query/#modOffset",
    boost: 10
  },
  "VALUES": {
    type: "keyword",
    label: "VALUES",
    description: `Inlines a table of variable bindings into the query. Useful for supplying a fixed set of IRIs or values to match against.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name ?age WHERE {
  VALUES ?person {
    <http://example.org/alice>
    <http://example.org/bob>
  }
  ?person foaf:name ?name ;
          foaf:age ?age .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#inline-data",
    boost: 10
  },
  "UNDEF": {
    type: "keyword",
    label: "UNDEF",
    description: `Used inside a VALUES block to indicate that a variable has no binding for that row`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name ?age WHERE {
  VALUES (?name ?age) {
    ("Alice" 30)
    ("Bob" UNDEF)
  }
  ?person foaf:name ?name .
  OPTIONAL { ?person foaf:age ?age . }
}`,
    link: "https://www.w3.org/TR/sparql11-query/#inline-data",
    boost: 10
  },
  "UNION": {
    type: "keyword",
    label: "UNION",
    description: `Combines the results of two graph patterns, returning solutions from either or both`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX schema: <http://schema.org/>

SELECT ?name WHERE {
  { ?person foaf:name ?name . }
  UNION
  { ?person schema:name ?name . }
}`,
    link: "https://www.w3.org/TR/sparql11-query/#sparqlAlgebra",
    boost: 10
  },
  "OPTIONAL": {
    type: "keyword",
    label: "OPTIONAL",
    description: `Extends results with values from a pattern if it matches, but still returns the result if it doesn't`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?person ?email WHERE {
  ?person foaf:name ?name .
  OPTIONAL { ?person foaf:mbox ?email . }
}`,
    link: "https://www.w3.org/TR/sparql11-query/#optionals",
    boost: 10
  },
  "MINUS": {
    type: "keyword",
    label: "MINUS",
    description: `Removes solutions from the result that also match the given pattern. Variables in MINUS must overlap with the outer pattern for subtraction to apply.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?person WHERE {
  ?person foaf:name ?name .
  MINUS { ?person <http://example.org/banned> true . }
}`,
    link: "https://www.w3.org/TR/sparql11-query/#negation",
    boost: 10
  },
  "GRAPH": {
    type: "keyword",
    label: "GRAPH",
    description: `Restricts a pattern to a specific named graph in the dataset`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name WHERE {
  GRAPH <http://example.org/people> {
    ?person foaf:name ?name .
  }
}`,
    link: "https://www.w3.org/TR/sparql11-query/#namedGraphs",
    boost: 10
  },
  "SERVICE": {
    type: "keyword",
    label: "SERVICE",
    description: `Delegates part of the query to a remote SPARQL endpoint (federated query)`,
    example: `PREFIX owl: <http://www.w3.org/2002/07/owl#>

SELECT ?label WHERE {
  ?s owl:sameAs ?remote .
  SERVICE <http://dbpedia.org/sparql> {
    ?remote <http://www.w3.org/2000/01/rdf-schema#label> ?label .
  }
}`,
    link: "https://www.w3.org/TR/sparql11-federated-query/#rdf-sparql-service",
    boost: 10
  },
  "SILENT": {
    type: "keyword",
    label: "SILENT",
    description: `Suppresses errors from the operation it modifies. For SERVICE, the query continues if the remote endpoint fails. For update operations, errors on non-existent graphs are ignored.`,
    example: `SELECT ?label WHERE {
  SERVICE SILENT <http://example.org/sparql> {
    ?s <http://www.w3.org/2000/01/rdf-schema#label> ?label .
  }
}`,
    link: "https://www.w3.org/TR/sparql11-update/#silent",
    boost: 10
  },
  "FILTER": {
    type: "keyword",
    label: "FILTER",
    description: `Restricts results to solutions where the boolean expression evaluates to true`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?person WHERE {
  ?person foaf:name ?name ;
          foaf:age ?age .
  FILTER(?age >= 18 && LANG(?name) = "en")
}`,
    link: "https://www.w3.org/TR/sparql11-query/#tests",
    boost: 10
  },
  "BIND": {
    type: "keyword",
    label: "BIND",
    description: `Assigns a value to a new variable within the graph pattern`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name ?ageGroup WHERE {
  ?person foaf:name ?name ;
          foaf:age ?age .
  BIND(IF(?age >= 18, "adult", "minor") AS ?ageGroup)
}`,
    link: "https://www.w3.org/TR/sparql11-query/#bind",
    boost: 10
  },
  "AS": {
    type: "keyword",
    label: "AS",
    description: `Names the result of an expression, used in SELECT projections and BIND`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT (CONCAT(?first, " ", ?last) AS ?fullName) WHERE {
  ?person foaf:firstName ?first ;
          foaf:lastName ?last .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#selectExpressions",
    boost: 10
  },
  "FROM": {
    type: "keyword",
    label: "FROM",
    description: `Specifies the default graph(s) for the query dataset. Multiple FROM clauses merge their graphs into the default graph.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name
FROM <http://example.org/people>
WHERE {
  ?person foaf:name ?name .
}`,
    link: "https://www.w3.org/TR/sparql11-query/#specifyingDataset",
    boost: 10
  },
  "NAMED": {
    type: "keyword",
    label: "NAMED",
    description: `Adds a named graph to the query dataset. Use with FROM NAMED and GRAPH to query specific graphs by IRI.`,
    example: `PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?name
FROM NAMED <http://example.org/people>
WHERE {
  GRAPH <http://example.org/people> {
    ?person foaf:name ?name .
  }
}`,
    link: "https://www.w3.org/TR/sparql11-query/#namedGraphs",
    boost: 10
  },
  "LOAD": {
    type: "keyword",
    label: "LOAD",
    description: `Fetches RDF data from a URL and inserts it into a graph in the dataset`,
    example: `LOAD <http://example.org/data.rdf> INTO GRAPH <http://example.org/myGraph>`,
    link: "https://www.w3.org/TR/sparql11-update/#load",
    boost: 10
  },
  "INTO": {
    type: "keyword",
    label: "INTO",
    description: `Specifies the target graph for LOAD and INSERT operations`,
    example: `LOAD <http://example.org/data.rdf> INTO GRAPH <http://example.org/myGraph>`,
    link: "https://www.w3.org/TR/sparql11-update/#load",
    boost: 10
  },
  "TO": {
    type: "keyword",
    label: "TO",
    description: `Specifies the destination graph in ADD, MOVE, and COPY update operations`,
    example: `MOVE <http://example.org/oldGraph> TO <http://example.org/newGraph>`,
    link: "https://www.w3.org/TR/sparql11-update/#move",
    boost: 10
  },
  "CLEAR": {
    type: "keyword",
    label: "CLEAR",
    description: `Removes all triples from the specified graph, leaving the graph itself in place. Use CLEAR DEFAULT, CLEAR NAMED, or CLEAR ALL to target multiple graphs.`,
    example: `CLEAR GRAPH <http://example.org/myGraph>`,
    link: "https://www.w3.org/TR/sparql11-update/#clear",
    boost: 10
  },
  "DROP": {
    type: "keyword",
    label: "DROP",
    description: `Removes the specified graph and all its triples from the dataset. Use DROP DEFAULT, DROP NAMED, or DROP ALL to target multiple graphs.`,
    example: `DROP GRAPH <http://example.org/oldGraph>`,
    link: "https://www.w3.org/TR/sparql11-update/#drop",
    boost: 10
  },
  "CREATE": {
    type: "keyword",
    label: "CREATE",
    description: `Creates a new empty named graph in the dataset`,
    example: `CREATE GRAPH <http://example.org/newGraph>`,
    link: "https://www.w3.org/TR/sparql11-update/#create",
    boost: 10
  },
  "ADD": {
    type: "keyword",
    label: "ADD",
    description: `Copies all triples from the source graph into the destination graph, keeping the source intact`,
    example: `ADD <http://example.org/source> TO <http://example.org/destination>`,
    link: "https://www.w3.org/TR/sparql11-update/#add",
    boost: 10
  },
  "MOVE": {
    type: "keyword",
    label: "MOVE",
    description: `Moves all triples from the source graph to the destination graph and removes the source`,
    example: `MOVE <http://example.org/oldGraph> TO <http://example.org/newGraph>`,
    link: "https://www.w3.org/TR/sparql11-update/#move",
    boost: 10
  },
  "COPY": {
    type: "keyword",
    label: "COPY",
    description: `Replaces the destination graph with a copy of the source graph`,
    example: `COPY <http://example.org/source> TO <http://example.org/backup>`,
    link: "https://www.w3.org/TR/sparql11-update/#copy",
    boost: 10
  },
  "INSERT": {
    type: "keyword",
    label: "INSERT",
    description: `Adds triples to the dataset. Use INSERT DATA for fixed triples, or INSERT { } WHERE { } to insert based on matched patterns.`,
    example: `INSERT DATA {
  <http://example.org/book1> <http://purl.org/dc/elements/1.1/title> "The Semantic Web" .
  <http://example.org/book1> <http://purl.org/dc/elements/1.1/creator> "Tim Berners-Lee" .
}`,
    link: "https://www.w3.org/TR/sparql11-update/#insertData",
    boost: 10
  },
  "DATA": {
    type: "keyword",
    label: "DATA",
    description: `Used with INSERT or DELETE to specify a fixed (non-templated) set of triples that requires no WHERE clause`,
    example: `DELETE DATA {
  <http://example.org/book1> <http://purl.org/dc/elements/1.1/title> "Old Title" .
}`,
    link: "https://www.w3.org/TR/sparql11-update/#insertData",
    boost: 10
  },
  "DELETE": {
    type: "keyword",
    label: "DELETE",
    description: `Removes triples from the dataset. Use DELETE DATA for fixed triples, or DELETE { } WHERE { } to remove triples matching a pattern.`,
    example: `DELETE {
  ?book <http://purl.org/dc/elements/1.1/title> ?oldTitle .
}
INSERT {
  ?book <http://purl.org/dc/elements/1.1/title> "New Title" .
}
WHERE {
  ?book <http://purl.org/dc/elements/1.1/title> ?oldTitle .
}`,
    link: "https://www.w3.org/TR/sparql11-update/#deleteData",
    boost: 10
  },
  "WITH": {
    type: "keyword",
    label: "WITH",
    description: `In SPARQL Update, sets the default graph for the INSERT and DELETE templates. Equivalent to adding FROM and INTO clauses targeting that graph.`,
    example: `WITH <http://example.org/myGraph>
DELETE { ?s <http://example.org/status> "draft" . }
INSERT { ?s <http://example.org/status> "published" . }
WHERE  { ?s <http://example.org/status> "draft" . }`,
    link: "https://www.w3.org/TR/sparql11-update/#deleteInsert",
    boost: 10
  },
  "DEFAULT": {
    type: "keyword",
    label: "DEFAULT",
    description: `Refers to the default graph in update operations like CLEAR, DROP, ADD, MOVE, and COPY`,
    example: `CLEAR DEFAULT`,
    link: "https://www.w3.org/TR/sparql11-query/#queryDataset",
    boost: 10
  },
  "ALL": {
    type: "keyword",
    label: "ALL",
    description: `Targets all graphs (both default and named) in update operations like CLEAR and DROP`,
    example: `CLEAR ALL`,
    link: "https://www.w3.org/TR/sparql11-query/#select",
    boost: 10
  },
  "USING": {
    type: "keyword",
    label: "USING",
    description: `In SPARQL Update, specifies which graph(s) to query in the WHERE clause of a DELETE/INSERT operation`,
    example: `DELETE { ?s <http://example.org/status> ?old . }
INSERT { ?s <http://example.org/status> "active" . }
USING <http://example.org/myGraph>
WHERE  { ?s <http://example.org/status> ?old . }`,
    link: "https://www.w3.org/TR/sparql11-update/#deleteInsert",
    boost: 10
  }
}
