<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Parse JSON

> Parse a string as [JSON][json].

<section class="usage">

## Usage

```javascript
var parseJSON = require( '@stdlib/utils/parse-json' );
```

#### parseJSON( str\[, reviver] )

Parses a `string` as [JSON][json].

```javascript
var out = parseJSON( '{"beep":"boop"}' );
// returns {'beep':'boop'}
```

If unable to parse a `string` as [JSON][json], the function returns an error.

```javascript
var out = parseJSON( 'beep' );
// returns <SyntaxError>
```

To transform the `string` being parsed, provide a `reviver`.

```javascript
function reviver( key, value ) {
    if ( key === '' ) {
        return value;
    }
    if ( key === 'beep' ) {
        return value;
    }
}

var str = '{"beep":"boop","a":"b"}';
var out = parseJSON( str, reviver );
// returns {'beep':'boop'}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the native [`JSON.parse()`][json-parse], this implementation throws a `TypeError` if provided **any** value which is not a `string`.

    ```javascript
    var out = JSON.parse( null );
    // returns null

    out = parseJSON( null );
    // throws <TypeError>
    ```

-   In contrast to the native [`JSON.parse()`][json-parse], this implementation does **not** throw a `SyntaxError` if unable to parse a `string` as [JSON][json].

    ```javascript
    var out = parseJSON( '{"beep":"boop}' );
    // returns <SyntaxError>

    out = JSON.parse( '{"beep":"boop}' );
    // throws <SyntaxError>
    ```

-   In contrast to the native [`JSON.parse()`][json-parse], this implementation throws a `TypeError` if provided a `reviver` argument which is **not** a `function`.

    ```javascript
    var out = JSON.parse( '{"a":"b"}', [] );
    // returns {'a':'b'}

    out = parseJSON( '{"a":"b"}', [] );
    // throws <TypeError>
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var parseJSON = require( '@stdlib/utils/parse-json' );

var out;

out = parseJSON( '{"beep":"boop"}' );
// returns {'beep':'boop'}

out = parseJSON( '3.14' );
// returns 3.14

out = parseJSON( 'true' );
// returns true

out = parseJSON( 'null' );
// returns null

out = parseJSON( '{"beep":"boop}' );
// returns <SyntaxError>
```

</section>

<!-- /.examples -->

<section class="links">

[json]: http://www.json.org/

[json-parse]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

</section>

<!-- /.links -->
