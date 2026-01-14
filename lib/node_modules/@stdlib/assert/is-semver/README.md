<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# isSemVer

> Test if a value is a [semantic version][semantic-version] string.

<section class="usage">

## Usage

```javascript
var isSemVer = require( '@stdlib/assert/is-semver' );
```

#### isSemVer( value )

Tests if a `value` is a [semantic version][semantic-version] string.

```javascript
var bool = isSemVer( '0.0.2' );
// returns true

bool = isSemVer( 'foo' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```javascript
var isSemVer = require( '@stdlib/assert/is-semver' );

var bool = isSemVer( '1.0.0' );
// returns true

bool = isSemVer( '1.0.0-alpha.1' );
// returns true

bool = isSemVer( '0.1' );
// returns false

bool = isSemVer( null );
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
Usage: is-semver [options] [<str>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'1.0.0\n0.3' | is-semver --split /\r?\n/
    # Escaped...
    $ echo -n $'1.0.0\n0.3' | is-semver --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ is-semver 0.1.0
true

$ is-semver 1.0
false
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 0.2.1-beta.1 | is-semver
true
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n '1.0.0\t123' | is-semver --split '\t'
true
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[semantic-version]: https://semver.org

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
