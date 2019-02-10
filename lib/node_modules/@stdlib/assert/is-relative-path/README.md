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

# isRelativePath

> Test if a value is a relative path.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isRelativePath = require( '@stdlib/assert/is-relative-path' );
```

#### isRelativePath( value )

Tests if a `value` is a relative path.

```javascript
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );

var bool;
if ( IS_WINDOWS ) {
    bool = isRelativePath( 'foo\\bar\\baz' );
    // returns true

    bool = isRelativePath( 'C:\\foo\\..\\bar\\baz' );
    // returns false
} else {
    bool = isRelativePath( './foo/bar/baz' );
    // returns true

    bool = isRelativePath( '/foo/../bar/baz' );
    // returns false
}
```

#### isRelativePath.posix( value )

Tests if a `value` is a POSIX relative path.

```javascript
var bool = isRelativePath.posix( './foo/bar/baz' );
// returns true

bool = isRelativePath.posix( '/foo/../bar/baz' );
// returns false
```

#### isRelativePath.win32( value )

Tests if a `value` is a Windows relative path.

```javascript
var bool = isRelativePath.win32( 'foo\\bar\\baz' );
// returns true

bool = isRelativePath.win32( 'C:\\foo\\..\\bar\\baz' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `isRelativePath()` is platform-specific. On Windows platforms, the function is equal to `isRelativePath.win32()`. On POSIX platforms, the function is equal to `isRelativePath.posix()`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isRelativePath = require( '@stdlib/assert/is-relative-path' );

var bool = isRelativePath.posix( 'foo/' );
// returns true

bool = isRelativePath.posix( 'foo' );
// returns true

bool = isRelativePath.posix( '.' );
// returns true

bool = isRelativePath.posix( '' );
// returns true

bool = isRelativePath.posix( '/foo/bar/baz' );
// returns false

bool = isRelativePath.posix( '/foo/..' );
// returns false

bool = isRelativePath.win32( 'foo\\bar\\baz' );
// returns true

bool = isRelativePath.win32( 'foo/bar/baz' );
// returns true

bool = isRelativePath.win32( 'foo/..' );
// returns true

bool = isRelativePath.win32( '.' );
// returns true

bool = isRelativePath.win32( '' );
// returns true

bool = isRelativePath.win32( 'C:\\foo\\bar\\baz' );
// returns false

bool = isRelativePath.win32( '//server' );
// returns false

bool = isRelativePath.win32( '\\\\server' );
// returns false

bool = isRelativePath.win32( 'C:/foo/bar/baz' );
// returns false

bool = isRelativePath.win32( '/foo/..' );
// returns false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: is-relative-path [options] [<path>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --platform name       Platform: 'win32' or 'posix'.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-relative-path ./foo/bar/baz --platform=posix
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n './docs/repl.txt' | is-relative-path
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
