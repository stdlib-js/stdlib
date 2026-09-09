<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# disnan

> LAPACK auxiliary routine to test whether a double-precision floating-point number is `NaN`.

<section class="usage">

## Usage

```javascript
var disnan = require( '@stdlib/lapack/base/disnan' );
```

#### disnan( x )

Tests whether a double-precision floating-point number is `NaN`.

```javascript
var bool = disnan( NaN );
// returns true

bool = disnan( 5.0 );
// returns false
```

The function has the following parameters:

-   **x**: input value.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `disnan()` corresponds to the [LAPACK][lapack] auxiliary routine [`disnan`][lapack-disnan].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var disnan = require( '@stdlib/lapack/base/disnan' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, -50, 50, opts );

logEachMap( 'disnan( %d ) = %s', x, disnan );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
TODO
```

#### TODO

TODO.

```c
TODO
```

TODO

```c
TODO
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
TODO
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-disnan]: https://www.netlib.org/lapack/explore-html/d0/d4c/group__isnan_ga7aa3164d5df8d883754b0a70e9c7209c.html

</section>

<!-- /.links -->
