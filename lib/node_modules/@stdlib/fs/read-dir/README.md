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

# Read Directory

> Read the contents of a directory.

<section class="usage">

## Usage

```javascript
var readDir = require( '@stdlib/fs/read-dir' );
```

#### readDir( path, clbk )

Asynchronously reads the contents of a directory.

```javascript
readDir( __dirname, onRead );

function onRead( error, data ) {
    if ( error ) {
        console.error( error );
    } else {
        console.log( data );
        // => [...]
    }
}
```

#### readDir.sync( path )

Synchronously reads the contents of a directory.

```javascript
var out = readDir.sync( __dirname );
if ( out instanceof Error ) {
    throw out;
}
console.log( out );
// => [...]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The difference between this module and [`fs.readdirSync()`][fs] is that [`fs.readdirSync()`][fs] will throw if an `error` is encountered (e.g., if given a non-existent `path`) and this module will return an `error`. Hence, the following anti-pattern

    ```javascript
    var fs = require( 'fs' );

    var dir = '/path/to/dir';

    // Check for existence to prevent an error being thrown...
    if ( fs.existsSync( dir ) ) {
        dir = fs.readdirSync( dir );
    }
    ```

    can be replaced by an approach which addresses existence via `error` handling.

    ```javascript
    var readDir = require( '@stdlib/fs/read-dir' );

    var dir = '/path/to/dir';

    // Explicitly handle the error...
    dir = readDir.sync( dir );
    if ( dir instanceof Error ) {
        // You choose what to do...
        throw dir;
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var readDir = require( '@stdlib/fs/read-dir' );

/* Sync */

var out = readDir.sync( __dirname );
// returns <Array>

console.log( out instanceof Error );
// => false

out = readDir.sync( 'beepboop' );
// returns <Error>

console.log( out instanceof Error );
// => true

/* Async */

readDir( __dirname, onRead );
readDir( 'beepboop', onRead );

function onRead( error, data ) {
    if ( error ) {
        if ( error.code === 'ENOENT' ) {
            console.error( 'Directory does not exist.' );
        } else {
            throw error;
        }
    } else {
        console.log( data );
    }
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: read-dir [options] <dirpath>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Relative paths are resolved relative to the current working directory.
-   Errors are written to `stderr`.
-   Directory contents are written to `stdout`.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ read-dir ./../
...
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[fs]: https://nodejs.org/api/fs.html

</section>

<!-- /.links -->
