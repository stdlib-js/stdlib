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

# readNDJSON

> Read a file as [newline-delimited JSON][ndjson].

<section class="usage">

## Usage

```javascript
var readNDJSON = require( '@stdlib/fs/read-ndjson' );
```

<a name="read-ndjson"></a>

#### readNDJSON( file\[, options], clbk )

Asynchronously reads a file as [newline-delimited JSON][ndjson].

```javascript
var join = require( 'path' ).join;

readNDJSON( join( __dirname, 'examples', 'fixtures', 'file.ndjson' ), clbk );

function clbk( error, data ) {
    if ( error ) {
        throw error;
    }
    console.log( data );
}
```

The function accepts the following `options`:

-   **encoding**: file encoding.
-   **flag**: file status flag.
-   **reviver**: [JSON][json] transformation function.

The `options` parameter may also be a string specifying the file `encoding`.

```javascript
var join = require( 'path' ).join;

readNDJSON( join( __dirname, 'examples', 'fixtures', 'file.ndjson' ), 'utf8', clbk );

function clbk( error, data ) {
    if ( error ) {
        throw error;
    }
    console.log( data );
}
```

#### readNDJSON.sync( file\[, options] )

Synchronously reads a file as [newline-delimited JSON][ndjson].

```javascript
var join = require( 'path' ).join;
var instanceOf = require( '@stdlib/assert/instance-of' );

var out = readNDJSON.sync( join( __dirname, 'examples', 'fixtures', 'file.ndjson' ) );
if ( instanceOf( out, Error ) ) {
    throw out;
}
console.log( out );
```

The function accepts the same `options` as [`readNDJSON()`](#read-ndjson) above.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If the `encoding` option is set to `utf8` and the file has a UTF-8 [byte order mark][bom] (BOM), the byte order mark is **removed** before attempting to parse as [newline-delimited JSON][ndjson].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var readNDJSON = require( '@stdlib/fs/read-ndjson' );

var file = join( __dirname, 'examples', 'fixtures', 'file.ndjson' );

// Synchronously read file contents...
var data = readNDJSON.sync( file, 'utf8' );
// returns [...]

data = readNDJSON.sync( 'beepboop', {
    'encoding': 'utf8'
});
// returns <Error>

// Asynchronously read file contents...
readNDJSON( file, clbk );
readNDJSON( 'beepboop', clbk );

function clbk( error, data ) {
    if ( error ) {
        if ( error.code === 'ENOENT' ) {
            console.error( 'JSON file does not exist.' );
        } else {
            throw error;
        }
    } else {
        console.log( 'Package description: %s', data[2].description );
    }
}
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

[ndjson]: http://www.ndjson.org/

[bom]: https://en.wikipedia.org/wiki/Byte_order_mark

</section>

<!-- /.links -->
