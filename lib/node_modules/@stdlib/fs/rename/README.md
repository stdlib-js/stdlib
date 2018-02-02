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

# Rename

> Rename a file.

<section class="usage">

## Usage

```javascript
var rename = require( '@stdlib/fs/rename' );
```

#### rename( oldPath, newPath, clbk )

Asynchronously renames a file specified by `oldPath` to `newPath`.

<!-- run-disable -->

```javascript
var join = require( 'path' ).join;
var oldPath = join( __dirname, 'examples', 'fixtures', 'file.txt' );
var newPath = join( __dirname, 'examples', 'fixtures', 'tmp.txt' );

rename( oldPath, newPath, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
}
```

#### rename.sync( oldPath, newPath )

Synchronously renames a file specified by `oldPath` to `newPath`.

<!-- run-disable -->

```javascript
var join = require( 'path' ).join;
var oldPath = join( __dirname, 'examples', 'fixtures', 'file.txt' );
var newPath = join( __dirname, 'examples', 'fixtures', 'tmp.txt' );

var err = rename.sync( oldPath, newPath );
if ( err instanceof Error ) {
    throw err;
}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `oldPath` can specify a directory. In this case, `newPath` must either **not** exist, or it must specify an **empty** directory.

-   `oldPath` should **not** name an ancestor directory of `newPath`.

-   If `oldPath` points to the pathname of a file that is **not** a directory, `newPath` should **not** point to the pathname of a directory.

-   Write access permission is **required** for both the directory containing `oldPath` and the directory containing `newPath`.

-   If the link named by `newPath` exists, `newPath` is removed and `oldPath` is renamed to `newPath`. The link named by `newPath` will remain visible to other threads throughout the renaming operation and refer to either the file referred to by `newPath` or to the file referred to by `oldPath` before the operation began.

-   If `oldPath` and `newPath` resolve to either the same existing directory entry or to different directory entries for the same existing file, no action is taken, and no error is returned.

-   If `oldPath` points to a pathname of a symbolic link, the symbolic link is renamed. If the `newPath` points to a pathname of a symbolic link, the symbolic link is removed.

-   If a link named by `newPath` exists and the file's link count becomes `0` when it is removed and no process has the file open, the space occupied by the file is freed and the file is no longer accessible. If one or more processes have the file open when the last link is removed, the link is removed before the function returns, but the removal of file contents is postponed until all references to the file are closed.

-   The difference between `rename.sync` and [`fs.rename()`][node-fs] is that [`fs.renameSync()`][node-fs] will throw if an `error` is encountered (e.g., if given a non-existent path) and this API will return an `error`. Hence, the following anti-pattern

    <!-- run-disable -->

    ```javascript
    var fs = require( 'fs' );

    // Check for path existence to prevent an error being thrown...
    if ( fs.existsSync( '/path/to/file.txt' ) ) {
        fs.renameSync( '/path/to/file.txt', '/path/to/tmp.txt' );
    }
    ```

    can be replaced by an approach which addresses existence via `error` handling.

    <!-- run-disable -->

    ```javascript
    var rename = require( '@stdlib/fs/rename' );

    // Explicitly handle the error...
    var err = rename.sync( '/path/to/file.txt', '/path/to/tmp.txt' );
    if ( err instanceof Error ) {
        // You choose what to do...
        throw err;
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var readFile = require( '@stdlib/fs/read-file' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var exists = require( '@stdlib/fs/exists' ).sync;
var unlink = require( '@stdlib/fs/unlink' ).sync;
var rename = require( '@stdlib/fs/rename' ).sync;

var src = join( __dirname, 'examples', 'fixtures', 'file.txt' );
var tmp = join( __dirname, 'examples', 'tmp.txt' );
var dest = join( __dirname, 'examples', 'foo.txt' );

// Create a temporary file:
writeFile( tmp, readFile( src ) );

// Confirm that the temporary file exists:
console.log( exists( tmp ) );
// => true

// Rename the temporary file:
rename( tmp, dest );

// Confirm that the renamed temporary file exists:
console.log( exists( dest ) );
// => true

// Remove the temporary file:
unlink( dest );

// Confirm that the temporary file no longer exists:
console.log( exists( dest ) );
// => false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: rename [options] <old_path> <new_path>

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

</section>

<!-- /.notes -->

<section class="examples">

### Examples

<!-- run-disable -->

```bash
$ rename ./examples/fixtures/file.txt ./examples/fixtures/tmp.txt
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[node-fs]: https://nodejs.org/api/fs.html

</section>

<!-- /.links -->
