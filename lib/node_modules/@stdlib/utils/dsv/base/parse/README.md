<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# DSV Parser

> Incremental parser for delimiter-separated values (DSV).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Parser = require( '@stdlib/utils/dsv/base/parse' );
```

#### Parser( \[options] )

Returns an incremental parser for delimiter-separated values (DSV).

```javascript
var parse = new Parser();

// Parse a line of comma-separated values (CSV):
parse.next( '1,2,3,4\r\n' ); // => [ '1', '2', '3', '4' ]

// ...

// Parse multiple lines of CSV:
parse.next( '4,5,6\r\n7,8,9\r\n' ); // => [ '4', '5', '6' ], [ '7', '8', '9' ]

// ...

// Parse partial lines:
parse.next( 'a,b' );
parse.next( ',c,d\r\n' ); // => [ 'a', 'b', 'c', 'd' ]

// ...

// Chain together invocations:
parse.next( 'e,f' ).next( ',g,h' ).next( '\r\n' ); // => [ 'e', 'f', 'g', 'h' ]
```

The constructor accepts the following `options`:

-   **comment**: character sequence appearing at the beginning of a row which demarcates that the row content should be parsed as a commented line. A commented line ends upon encountering the first newline character sequence, regardless of whether that newline character sequence is preceded by an escape character sequence. Default: `''`.

-   **delimiter**: character sequence separating record fields (e.g., `','` for comma-separated values (CSV) and `\t` for tab-separated values (TSV)). Default: `','`.

-   **doublequote**: `boolean` flag indicating how quote sequences should be escaped within a quoted field. When `true`, a quote sequence must be escaped by another quote sequence. When `false`, a quote sequence must be escaped by the escape sequence. Default: `true`.

-   **escape**: character sequence for escaping character sequences having special meaning (i.e., the delimiter, newline, and escape sequences outside of quoted fields; the comment sequence at the beginning of a record and outside of a quoted field; and the quote sequence inside a quoted field when `doublequote` is `false`). Default: `''`.

-   **ltrim**: `boolean` indicating whether to trim leading whitespace from field values. If `false`, the parser does not trim leading whitespace (e.g., `a, b, c` parses as `[ 'a', ' b', ' c' ]`).  If `true`, the parser trims leading whitespace (e.g., `a, b, c` parses as `[ 'a', 'b', 'c' ]`). Default: `false`.

-   **maxRows**: maximum number of records to process (excluding skipped lines). By default, the maximum number of records is unlimited.

-   **newline**: character sequence separating rows. Default: `'\r\n'` (see [RFC 4180][rfc-4180]).

-   **onClose**: callback to be invoked upon closing the parser. If a parser has partially processed a record upon close, the callback is invoked with the following arguments:

    -   **value**: unparsed partially processed **field** text.

    Otherwise, the callback is invoked without any arguments.

-   **onColumn**: callback to be invoked upon processing a field. The callback is invoked with the following arguments:

    -   **field**: field value.
    -   **row**: row number (zero-based).
    -   **col**: field (column) number (zero-based).
    -   **line**: line number (zero-based).

-   **onComment**: callback to be invoked upon processing a commented line. The callback is invoked with the following arguments:

    -   **comment**: comment text.
    -   **line**: line number (zero-based).

-   **onError**: callback to be invoked upon encountering an unrecoverable parse error. By default, upon encountering a parse error, the parser throws an `Error`. When provided an error callback, the parser does **not** throw and, instead, invokes the provided callback. The callback is invoked with the following arguments:

    -   **error**: an `Error` object.

-   **onRow**: callback to be invoked upon processing a record. The callback is invoked with the following arguments:

    -   **record**: an array-like object containing field values. If provided a `rowBuffer`, the `record` argument will be the **same** array-like object for each invocation.
    -   **row**: row number (zero-based).
    -   **ncols**: number of fields (columns).
    -   **line**: line number (zero-based).

    If a parser is closed **before** fully processing the last record, the callback is invoked with field data for all fields which have been parsed. Any remaining field data is provided to the `onClose` callback. For example, if a parser has processed two fields and closes while attempting to process a third field, the parser invokes the `onRow` callback with field data for the first two fields and invokes the `onClose` callback with the partially processed data for the third field.

-   **onSkip**: callback to be invoked upon processing a skipped line. The callback is invoked with the following arguments:

    -   **record**: unparsed record text.
    -   **line**: line number (zero-based).

-   **onWarn**: when `strict` is `false`, a callback to be invoked upon encountering invalid DSV. The callback is invoked with the following arguments:

    -   **error**: an `Error` object.

-   **quote**: character sequence demarcating the beginning and ending of a quoted field. When `quoting` is `false`, a quote character sequence has no special meaning and is processed as normal text. Default: `'"'`.

-   **quoting**: `boolean` flag indicating whether to enable special processing of quote character sequences (i.e., when a quote sequence should demarcate a quoted field). Default: `true`.

-   **rowBuffer**: array-like object for the storing field values of the most recently processed record. When provided, the row buffer is **reused** and is provided to the `onRow` callback for each processed record. If a provided row buffer is a generic array, the parser grows the buffer as needed. If a provided row buffer is a typed array, the buffer size is fixed, and, thus, needs to be large enough to accommodate processed fields. Providing a fixed length array is appropriate when the number of fields is known prior to parsing. When the number of fields is unknown, providing a fixed length array may still be appropriate; however, one is advised to allocate a buffer having more elements than is reasonably expected in order to avoid buffer overflow.

-   **rtrim**: `boolean` indicating whether to trim trailing whitespace from field values. If `false`, the parser does not trim trailing whitespace (e.g., `a ,b ,c` parses as `[ 'a ', 'b ', 'c' ]`).  If `true`, the parser trims trailing whitespace (e.g., `a ,b ,c` parses as `[ 'a', 'b', 'c' ]`). Default: `false`.

-   **skip**: character sequence appearing at the beginning of a row which demarcates that the row content should be parsed as a skipped record. Default: `''`.

-   **skipBlankRows**: `boolean` flag indicating whether to skip over rows which are either empty or containing only whitespace. Default: `false`.

-   **skipRow**: callback whose return value indicates whether to skip over a row. The callback is invoked with the following arguments:

    -   **nrows**: number of processed rows (equivalent to the current row number).
    -   **line**: line number (zero-based).

    If the callback returns a truthy value, the parser skips the row; otherwise, the parser attempts to process the row.

    Note, however, that, even if the callback returns a falsy value, a row may still be skipped depending on the presence of a `skip` character sequence.

-   **strict**: `boolean` flag indicating whether to raise an exception upon encountering invalid DSV. When `false`, instead of throwing an `Error` or invoking the `onError` callback, the parser invokes an `onWarn` callback with an `Error` object specifying the encountered error. Default: `true`.

-   **trimComment**: `boolean` flag indicating whether to trim leading whitespace in commented lines. Default: `true`.

-   **whitespace**: list of characters to be interpreted as whitespace. Default: `[ ' ' ]`.

The parser does **not** perform field conversion/transformation and, instead, is solely responsible for incrementally identifying fields and records. Further processing of fields/records is the responsibility of parser consumers who are generally expected to provide either an `onColumn` callback, an `onRow` callback, or both.

```javascript
var format = require( '@stdlib/string/format' );

function onColumn( field, row, col ) {
    console.log( format( 'Row: %d. Column: %d. Value: %s', row, col, field ) );
}

function onRow( record, row, ncols ) {
    console.log( format( 'Row: %d. nFields: %d. Value: | %s |', row, ncols, record.join( ' | ' ) ) );
}

var opts = {
    'onColumn': onColumn,
    'onRow': onRow
};
var parse = new Parser( opts );

parse.next( '1,2,3,4\r\n' ); // => [ '1', '2', '3', '4' ]
parse.next( '5,6,7,8\r\n' ); // => [ '5', '6', '7', '8' ]

// ...
```

Upon closing the parser, the parser invokes an `onClose` callback with any partially processed (i.e., incomplete) **field** data. Note, however, that the field data may **not** equal the original character sequence, as escape sequences may have already been removed.

```javascript
var format = require( '@stdlib/string/format' );

function onClose( v ) {
    console.log( format( 'Incomplete: %s', v ) );
}

var opts = {
    'onClose': onClose
};
var parse = new Parser( opts );

parse.next( '1,2,3,4\r\n' ); // => [ '1', '2', '3', '4' ]

// ...

// Provide an incomplete record:
parse.next( '5,6,"foo' );

// Close the parser:
parse.close();
```

By default, the parser assumes [RFC 4180][rfc-4180]-compliant newline-delimited comma separated values (CSV). To specify alternative separators, specify the relevant options.

```javascript
var opts = {
    'delimiter': '--',
    'newline': '%%'
};
var parse = new Parser( opts );

parse.next( '1--2--3--4%%' ); // => [ '1', '2', '3', '4' ]
parse.next( '5--6--7--8%%' ); // => [ '5', '6', '7', '8' ]

// ...
```

By default, the parser escapes double (i.e., two consecutive) quote character sequences within quoted fields. To parse DSV in which quote character sequences are escaped by an escape character sequence within quoted fields, set `doublequote` to `false` and specify the escape character sequence.

<!-- eslint-disable no-useless-escape -->

```javascript
// Default parser:
var parse = new Parser();

// Parse DSV using double quoting:
parse.next( '1,"""2""",3,4\r\n' ); // => [ '1', '"2"', '3', '4' ]

// ...

// Create a parser which uses a custom escape sequence within quoted fields:
var opts = {
    'doublequote': false,
    'escape': '\\'
};
parse = new Parser( opts );

parse.next( '1,"\\"2\\"",3,4\r\n' ); // => [ '1', '"2"', '3', '4' ]
```

When `quoting` is `true`, the parser identifies a quote character sequence at the beginning of a field as the start of a quoted field. To process quote character sequences as normal field text, set `quoting` to `false`.

```javascript
// Default parser;
var parse = new Parser();

parse.next( '1,"2",3,4\r\n' ); // => [ '1', '2', '3', '4' ]

// ...

// Create a parser which treats quote sequences as normal field text:
var opts = {
    'quoting': false
};
parse = new Parser( opts );

parse.next( '1,"2",3,4\r\n' ); // => [ '1', '"2"', '3', '4' ]
```

To parse DSV containing commented lines, specify a comment character sequence which demarcates the beginning of a commented line.

```javascript
var opts = {
    'comment': '#'
};
var parse = new Parser( opts );

parse.next( '1,2,3,4\r\n' ); // => [ '1', '2', '3', '4' ]
parse.next( '# This is a commented line.\r\n' ); // comment
parse.next( '9,10,11,12\r\n' ); // => [ '9', '10', '11', '12' ]
```

To parse DSV containing skipped lines, specify a skip character sequence which demarcates the beginning of a skipped line.

```javascript
var opts = {
    'skip': '//'
};
var parse = new Parser( opts );

parse.next( '1,2,3,4\r\n' ); // => [ '1', '2', '3', '4' ]
parse.next( '//5,6,7,8\r\n' ); // skipped line
parse.next( '9,10,11,12\r\n' ); // => [ '9', '10', '11', '12' ]
```

* * *

### Properties

#### Parser.prototype.done

**Read-only** property indicating whether a parser is able to process new chunks.

```javascript
var parse = new Parser();

parse.next( '1,2,3,4\r\n' );

// ...

var b = parse.done;
// returns false

// ...

parse.close();

// ...

b = parse.done;
// returns true
```

* * *

### Methods

#### Parser.prototype.next( chunk )

Incrementally parses the next chunk.

```javascript
var parse = new Parser();

parse.next( '1,2,3,4\r\n' );

// ...

parse.next( '5,6,7,8\r\n' );

// ...
```

#### Parser.prototype.close()

Closes the parser.

```javascript
var parse = new Parser();

parse.next( '1,2,3,4\r\n' );

// ...

parse.next( '5,6,7,8\r\n' );

// ...

parse.close();
```

After closing a parser, a parser raises an exception upon receiving any additional chunks.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="notes">

## Notes

-   Special character sequences (i.e., delimiter, newline, quote, escape, skip, and comment sequences) **must** all be unique with respect to one another, and **no** special character sequence is allowed to be a subsequence of another special character sequence. Allowing common subsequences would lead to ambiguous parser states.

    For example, given the chunk `1,,3,4,,`, if `delimiter` is `','` and `newline` is `',,'`, is the first `,,` a field with no content or a newline? The parser cannot be certain, hence the prohibition.

-   As specified in [RFC 4180][rfc-4180], special character sequences **must** be consistent across all provided chunks. Hence, providing chunks in which, e.g., line breaks vary between `\r`, `\n`, and `\r\n` is **not** supported.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var format = require( '@stdlib/string/format' );
var Parser = require( '@stdlib/utils/dsv/base/parse' );

function onColumn( v, row, col ) {
    console.log( format( 'Row: %d. Column: %d. Value: %s', row, col, v ) );
}

function onRow( v, row, ncols ) {
    console.log( format( 'Row: %d. nFields: %d. Value: | %s |', row, ncols, v.join( ' | ' ) ) );
}

function onComment( str ) {
    console.log( format( 'Comment: %s', str ) );
}

function onSkip( str ) {
    console.log( format( 'Skipped line: %s', str ) );
}

function onWarn( err ) {
    console.log( format( 'Warning: %s', err.message ) );
}

function onError( err ) {
    console.log( format( 'Error: %s', err.message ) );
}

function onClose( v ) {
    console.log( format( 'End: %s', v || '(none)' ) );
}

var opts = {
    'strict': false,
    'newline': '\r\n',
    'delimiter': ',',
    'escape': '\\',
    'comment': '#',
    'skip': '//',
    'doublequote': true,
    'quoting': true,
    'onColumn': onColumn,
    'onRow': onRow,
    'onComment': onComment,
    'onSkip': onSkip,
    'onError': onError,
    'onWarn': onWarn,
    'onClose': onClose
};
var parse = new Parser( opts );

var str = [
    [ '1', '2', '3', '4' ],
    [ '5', '6', '7', '8' ],
    [ 'foo\\,', 'bar\\ ,', 'beep\\,', 'boop\\,' ],
    [ '""",1,"""', '""",2,"""', '""",3,"""', '""",4,"""' ],
    [ '# This is a "comment", including with commas.' ],
    [ '\\# Escaped comment', '# 2', '# 3', '# 4' ],
    [ '1', '2', '3', '4' ],
    [ '//A,Skipped,Line,!!!' ],
    [ '"foo"', '"bar\\ "', '"beep"', '"boop"' ],
    [ ' # 😃', ' # 🥳', ' # 😮', ' # 🤠' ]
];
var i;
for ( i = 0; i < str.length; i++ ) {
    str[ i ] = str[ i ].join( opts.delimiter );
}
str = str.join( opts.newline );

console.log( format( 'Input:\n\n%s\n', str ) );
parse.next( str ).close();
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[rfc-4180]: https://www.rfc-editor.org/rfc/rfc4180

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
