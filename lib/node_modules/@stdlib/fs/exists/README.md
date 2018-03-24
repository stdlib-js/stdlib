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

# Exists

> Test whether a path exists on the filesystem.

<section class="usage">

## Usage

```javascript
var exists = require( '@stdlib/fs/exists' );
```

#### exists( path, clbk )

Asynchronously tests whether a path exists on the filesystem.

```javascript
exists( __dirname, done );

function done( bool ) {
    if ( bool ) {
        console.log( '...path exists.' );
    } else {
        console.log( '...path does not exist.' );
    }
}
```

The above callback signature matches the now **deprecated** [`fs.exists()`][node-fs-exists] API. The function also accepts the more conventional `error`-first style callback signature found in most asynchronous Node APIs.

```javascript
exists( __dirname, done );

function done( error, bool ) {
    if ( error ) {
        console.error( error.message );
    }
    if ( bool ) {
        console.log( '...path exists.' );
    } else {
        console.log( '...path does not exist.' );
    }
}
```

#### exists.sync( path )

Synchronously tests whether a path exists on the filesystem.

```javascript
var bool = exists.sync( __dirname );
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The following is considered an anti-pattern:

    ```javascript
    var path = require( 'path' );
    var readFileSync = require( '@stdlib/fs/read-file' ).sync;

    var file = path.join( __dirname, 'foo.js' );
    if ( exists.sync( __dirname ) ) {
        file = readFileSync( file );
    }
    ```

    Because time elapses between checking for existence and performing IO, at the time IO is performed, the path is no longer guaranteed to exist. In other words, a race condition exists between the process attempting to read and another process attempting to delete.

    Instead, the following pattern is preferred, where `errors` are handled explicitly:

    ```javascript
    var path = require( 'path' );
    var readFileSync = require( '@stdlib/fs/read-file' ).sync;

    var file = path.join( __dirname, 'foo.js' );
    try {
        file = readFileSync( file );
    } catch ( error ) {
        console.log( 'unable to read file.' );
        console.error( error );
    }
    ```

-   Nevertheless, use cases exist where one desires to check existence **without** performing IO. For example,

    <!-- run-disable -->

    ```javascript
    var path = require( 'path' );
    var writeFileSync = require( '@stdlib/fs/write-file' ).sync;

    var file = path.join( __dirname, 'foo.js' );
    if ( exists.sync( file ) ) {
        console.log( 'Don\'t overwrite the file!' );
    } else {
        writeFileSync( file, 'beep', {
            'encoding': 'utf8'
        });
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var exists = require( '@stdlib/fs/exists' );

/* Sync */

console.log( exists.sync( __dirname ) );
// => true

console.log( exists.sync( 'beepboop' ) );
// => false

/* Async */

exists( __dirname, done );
exists( 'beepboop', done );

function done( error, bool ) {
    if ( error ) {
        console.error( error.message );
    } else {
        console.log( bool );
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
Usage: exists [options] <path>

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
-   Results are written to `stdout`.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ exists ./../
true || <error_message>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[node-fs-exists]: https://nodejs.org/api/fs.html#fs_fs_exists_path_callback

</section>

<!-- /.links -->
