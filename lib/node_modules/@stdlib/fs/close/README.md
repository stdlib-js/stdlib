<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# Close

> Close a file descriptor.

<section class="usage">

## Usage

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var close = require( '@stdlib/fs/close' );
```

#### close( fd, clbk )

Asynchronously closes a file descriptor, so that the file descriptor no longer refers to any file and may be reused.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var openSync = require( '@stdlib/fs/open' ).sync;

var fd = openSync( __filename );
close( fd, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
}
```

#### close.sync( fd )

Synchronously closes a file descriptor.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var openSync = require( '@stdlib/fs/open' ).sync;

var fd = openSync( __filename );

var err = close.sync( fd );
if ( err instanceof Error ) {
    throw err;
}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The difference between this API and [`fs.closSync()`][node-fs] is that [`fs.closeSync()`][node-fs] will throw if an `error` is encountered (e.g., if given an invalid file descriptor) and this API will return an `error`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/no-redeclare -->

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var openSync = require( '@stdlib/fs/open' ).sync;
var close = require( '@stdlib/fs/close' );

var err;
var fd;

/* Sync */

fd = openSync( join( __dirname, 'package.json' ), 'r+' );
if ( fd instanceof Error ) {
    console.error( fd.message );
} else {
    err = close.sync( fd );
    // returns undefined

    if ( err instanceof Error ) {
        console.error( err.message );
    } else {
        console.log( 'Synchronously closed file descriptor.' );
    }
}

/* Async */

fd = openSync( join( __dirname, 'package.json' ), 'r+' );
if ( fd instanceof Error ) {
    console.error( fd.message );
} else {
    close( fd, done );
}

function done( error ) {
    if ( error ) {
        console.error( error.message );
    } else {
        console.log( 'Asynchronously closed file descriptor.' );
    }
}
```

</section>

<!-- /.examples -->

<section class="links">

[node-fs]: https://nodejs.org/api/fs.html

</section>

<!-- /.links -->
