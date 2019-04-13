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

# Read JSON

> Read a file as [JSON][json].

<section class="usage">

## Usage

```javascript
var readJSON = require( '@stdlib/fs/read-json' );
```

<a name="read-json"></a>

#### readJSON( file\[, options], clbk )

Asynchronously reads a file as [JSON][json].

```javascript
var join = require( 'path' ).join;

readJSON( join( __dirname, 'package.json' ), onJSON );

function onJSON( error, data ) {
    if ( error ) {
        throw error;
    }
    console.dir( data );
}
```

The function accepts the following `options`:

-   **encoding**: file encoding.
-   **flag**: file status flag.
-   **reviver**: [JSON][json] transformation `function`.

The `options` parameter may also be a `string` specifying the file `encoding`.

```javascript
var join = require( 'path' ).join;

readJSON( join( __dirname, 'package.json' ), 'utf8', onJSON );

function onJSON( error, data ) {
    if ( error ) {
        throw error;
    }
    console.dir( data );
}
```

#### readJSON.sync( file\[, options] )

Synchronously reads a file as [JSON][json].

```javascript
var join = require( 'path' ).join;
var instanceOf = require( '@stdlib/assert/instance-of' );

var out = readJSON.sync( join( __dirname, 'package.json' ) );
if ( instanceOf( out, Error ) ) {
    throw out;
}
console.dir( out );
```

The function accepts the same `options` as [`readJSON()`](#read-json) above.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If the `encoding` option is set to `utf8` and the file has a UTF-8 [byte order mark][bom] (BOM), the byte order mark is **removed** before attempting to parse as [JSON][json].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var readJSON = require( '@stdlib/fs/read-json' );

var file = join( __dirname, 'package.json' );

// Synchronously read file contents...
var data = readJSON.sync( file, 'utf8' );
// returns <Object>

data = readJSON.sync( 'beepboop', {
    'encoding': 'utf8'
});
// returns <Error>

// Asynchronously read file contents...
readJSON( file, onJSON );
readJSON( 'beepboop', onJSON );

function onJSON( error, data ) {
    if ( error ) {
        if ( error.code === 'ENOENT' ) {
            console.error( 'JSON file does not exist.' );
        } else {
            throw error;
        }
    } else {
        console.log( 'Package description: %s', data.description );
    }
}
```

</section>

<!-- /.examples -->

<section class="links">

[json]: http://www.json.org/

[bom]: https://en.wikipedia.org/wiki/Byte_order_mark

</section>

<!-- /.links -->
