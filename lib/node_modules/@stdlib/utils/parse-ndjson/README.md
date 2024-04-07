<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# parseNDJSON

> Parse a string containing serialized newline-delimited [JSON][json] (NDJSON).

<section class="usage">

## Usage

```javascript
var parseNDJSON = require( '@stdlib/utils/parse-ndjson' );
```

#### parseNDJSON( str\[, reviver] )

Parses a `string` as `newline-delimited JSON`.

```javascript
var out = parseNDJSON( '{"beep":"boop"}\n{"example":42}' );
// returns [ { 'beep': 'boop' }, { 'example': 42 } ]
```

To transform the `string` being parsed, provide a `reviver`.

```javascript
function reviver( key, value ) {
    if ( key === '' || key === 'beep' ) {
        return ( typeof value === 'string' ) ? value.toUpperCase() : value;
    }
    return ( typeof value === 'number' ) ? value * 2 : value;
}

var str = '{"beep":"boop"}\n{"value": 20}\n{"numbers": [1,2,3]}';
var out = parseNDJSON( str, reviver );
// returns [ { 'beep' : 'BOOP' }, { 'value': 40 }, { 'numbers': [ 2, 4, 6 ] } ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the native [`JSON.parse()`][json-parse], this implementation parses `string` as `newline-delimited JSON` and returns an array of parsed JSONs.

    ```javascript
    var out = JSON.parse( '{"beep":"boop"}\n{"foo":"baz"}' );
    // throws <SyntaxError>

    out = parseNDJSON( '{"beep":"boop"}\n{"foo":"baz"}' );
    // returns [ { 'beep': 'boop' }, { 'foo': 'baz' } ]
    ```


-   In contrast to the native [`JSON.parse()`][json-parse], this implementation throws a TypeError if provided any value which is not a `string`.

    ```javascript
    var out = JSON.parse( null );
    // returns null

    out = parseNDJSON( null );
    // throws <TypeError>
    ```


-   In contrast to the native [`JSON.parse()`][json-parse], this implementation does **not** throw a SyntaxError if unable to parse a string as newline-delimited JSON.

    ```javascript
    var out = parseNDJSON( '{"beep":boop}' );
    // returns <SyntaxError>

    out = JSON.parse( '{"beep":boop}' );
    // throws <SyntaxError>
    ```


-   In contrast to the native [`JSON.parse()`][json-parse], this implementation throws a TypeError if provided a reviver argument which is not a function.

    ```javascript
    var out = JSON.parse( '{"a":"b"}', [] );
    // returns { 'a': 'b' }

    out = parseNDJSON( '{"a":"b"}', [] );
    // throws <TypeError>
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var parseNDJSON = require( '@stdlib/utils/parse-ndjson' );

var out = parseNDJSON( '{"name":"John"}\n{"name":"Doe"}' );
// returns [ { 'name': 'John' }, { 'name': 'Doe' } ]

function reviver( key, value ) {
    if ( key === 'name' ) {
        return value.toUpperCase();
    }
    return value;
}

out = parseNDJSON( '{"name":"John"}\n{"name":"Doe"}', reviver );
// returns [ { 'name': 'JOHN' }, { 'name': 'DOE' } ]

out = parseNDJSON( '{"name":John}\n{"name":Doe}' );
// returns <SyntaxError>

out = parseNDJSON( ' ' );
// returns []

out = parseNDJSON( '{}' );
// returns [ {} ]

out = parseNDJSON( '{"name":"Eve"}\n42\ntrue\n[1,2,3]' );
// returns [ { 'name': 'Eve' }, 42, true, [ 1, 2, 3 ] ]

out = parseNDJSON( '{"name":"John"}\r\n{"name":"Doe"}' );
// returns [ { 'name': 'John' }, { 'name': 'Doe' } ]

out = parseNDJSON( '{"name":"John"}\n{"name":"Doe"}\n' );
// returns [ { 'name': 'John' }, { 'name': 'Doe' } ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[json]: http://www.json.org/

[json-parse]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

</section>

<!-- /.links -->
