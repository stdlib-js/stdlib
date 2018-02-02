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

# isUNCPath

> Test if a value is a [UNC][unc] path.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isUNCPath = require( '@stdlib/assert/is-unc-path' );
```

#### isUNCPath( value )

Tests if a `value` is a [UNC][unc] path.

```javascript
var bool = isUNCPath( '\\\\server\\share\\foo\\bar\\baz' );
// returns true

bool = isUNCPath( '/foo/bar/baz' );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isUNCPath = require( '@stdlib/assert/is-unc-path' );

var bool;
var path;

path = '\\\\server\\share\\foo\\bar\\baz:a:b';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\share\\foo\\bar\\baz::b';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\share\\foo\\bar\\baz:a';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\share\\foo\\bar\\baz';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\share\\foo\\bar';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\share\\foo';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\share';
bool = isUNCPath( path );
// returns true

path = '\\\\server\\\\share';
bool = isUNCPath( path );
// returns false

path = '\\\\\\\\server\\share';
bool = isUNCPath( path );
// returns false

path = 'beep boop \\\\server\\share';
bool = isUNCPath( path );
// returns false

path = '\\\\server';
bool = isUNCPath( path );
// returns false

path = '\\';
bool = isUNCPath( path );
// returns false

path = '';
bool = isUNCPath( path );
// returns false

path = '\\\\server\\share\\';
bool = isUNCPath( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\baz:';
bool = isUNCPath( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\baz:a:';
bool = isUNCPath( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\baz::';
bool = isUNCPath( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\baz:a:b:c';
bool = isUNCPath( path );
// returns false

path = '\\\\server\\share\\foo\\bar\\';
bool = isUNCPath( path );
// returns false

path = '//server/share';
bool = isUNCPath( path );
// returns false

path = '/foo/bar';
bool = isUNCPath( path );
// returns false

path = 'foo/bar';
bool = isUNCPath( path );
// returns false

path = './foo/bar';
bool = isUNCPath( path );
// returns false

path = '/foo/../bar';
bool = isUNCPath( path );
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
Usage: is-unc-path [options] [<path>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-unc-path '\\\\server\\share\\foo'
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '\\\\server\\share\\foo' | is-unc-path
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[unc]: https://msdn.microsoft.com/en-us/library/gg465305.aspx

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
