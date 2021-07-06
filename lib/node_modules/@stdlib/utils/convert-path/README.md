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

# Convert Path

> Convert between POSIX and Windows paths.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var convertPath = require( '@stdlib/utils/convert-path' );
```

#### convertPath( from, to )

Converts between POSIX and Windows paths.

```javascript
var p = convertPath( 'C:\\foo\\bar', 'posix' );
// returns '/c/foo/bar'
```

The following output path conventions are supported:

-   **win32**: Windows path convention; e.g., `C:\\foo\\bar`.
-   **mixed**: mixed path convention (Windows volume convention and POSIX path separator); e.g., `C:/foo/bar`.
-   **posix**: POSIX path convention; e.g., `/c/foo/bar`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A Windows [extended-length path][extended-length-path] **cannot** be converted to either a `mixed` or `posix` path convention, as forward slashes cannot be used as path separators.
-   If a POSIX path begins with `/[A-Za-z]/` (e.g., `/c/`), the path is assumed to begin with a volume name.
-   The function makes no attempt to verify that a provided path is valid. 

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var convertPath = require( '@stdlib/utils/convert-path' );

var p1;
var p2;

p1 = '/c/foo/bar/beep.c';
p2 = convertPath( p1, 'win32' );
// returns 'c:\foo\bar\beep.c'

p1 = '/c/foo/bar/beep.c';
p2 = convertPath( p1, 'mixed' );
// returns 'c:/foo/bar/beep.c'

p1 = '/c/foo/bar/beep.c';
p2 = convertPath( p1, 'posix' );
// returns '/c/foo/bar/beep.c'

p1 = 'C:\\\\foo\\bar\\beep.c';
p2 = convertPath( p1, 'win32' );
// returns 'C:\\foo\bar\beep.c'

p1 = 'C:\\\\foo\\bar\\beep.c';
p2 = convertPath( p1, 'mixed' );
// returns 'C:/foo/bar/beep.c'

p1 = 'C:\\\\foo\\bar\\beep.c';
p2 = convertPath( p1, 'posix' );
// returns '/c/foo/bar/beep.c'
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: convert-path [options] [<path>] --out=<output>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -o,    --out output          Output path convention.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ convert-path /c/foo/bar --out=mixed
c:/foo/bar
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '/c/foo/bar' | convert-path --out=win32
c:\foo\bar
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[extended-length-path]: https://msdn.microsoft.com/en-us/library/windows/desktop/aa365247(v=vs.85).aspx

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
