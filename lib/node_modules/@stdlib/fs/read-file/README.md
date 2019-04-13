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

# Read File

> Read the entire contents of a file.

<section class="usage">

## Usage

```javascript
var readFile = require( '@stdlib/fs/read-file' );
```

#### readFile( file\[, options], clbk )

Asynchronously reads the entire contents of a file.

```javascript
readFile( __filename, onFile );

function onFile( error, data ) {
    if ( error ) {
        throw error;
    }
    console.log( data );
}
```

The function accepts the same `options` and has the same defaults as [`fs.readFile()`][node-fs].

#### readFile.sync( file\[, options] )

Synchronously reads the entire contents of a `file`.

```javascript
var out = readFile.sync( __filename );
if ( out instanceof Error ) {
    throw out;
}
console.log( out );
```

The function accepts the same `options` and has the same defaults as [`fs.readFileSync()`][node-fs].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The difference between this API and [`fs.readFileSync()`][node-fs] is that [`fs.readFileSync()`][node-fs] will throw if an `error` is encountered (e.g., if given a non-existent `path`) and this API will return an `error`. Hence, the following anti-pattern


    ```javascript
    var fs = require( 'fs' );

    var file = '/path/to/file.js';

    // Check for existence to prevent an error being thrown...
    if ( fs.existsSync( file ) ) {
        file = fs.readFileSync( file );
    }
    ```

    can be replaced by an approach which addresses existence via `error` handling.

    ```javascript
    var readFile = require( '@stdlib/fs/read-file' );

    var file = '/path/to/file.js';

    // Explicitly handle the error...
    file = readFile.sync( file );
    if ( file instanceof Error ) {
        // You choose what to do...
        console.error( file.message );
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var readFile = require( '@stdlib/fs/read-file' );

/* Sync */

var file = readFile.sync( __filename, 'utf8' );
// returns <string>

console.log( file instanceof Error );
// => false

file = readFile.sync( 'beepboop', {
    'encoding': 'utf8'
});
// returns <Error>

console.log( file instanceof Error );
// => true

/* Async */

readFile( __filename, onFile );
readFile( 'beepboop', onFile );

function onFile( error, data ) {
    if ( error ) {
        if ( error.code === 'ENOENT' ) {
            console.error( 'File does not exist.' );
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
Usage: read-file [options] <filepath>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  --enc, --encoding encoding   Encoding.
         --flag flag           Flag. Default: 'r'.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Relative file paths are resolved relative to the current working directory.
-   Errors are written to `stderr`.
-   File contents are written to `stdout`.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ read-file ./README.md
<file_contents>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[node-fs]: https://nodejs.org/api/fs.html

</section>

<!-- /.links -->
