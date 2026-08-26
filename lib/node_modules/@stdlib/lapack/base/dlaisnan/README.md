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

# dlaisnan

> LAPACK auxiliary routine to test input for NaN by comparing two double-precision floating-point arguments for inequality.

<section class="usage">

## Usage

```javascript
var dlaisnan = require( '@stdlib/lapack/base/dlaisnan' );
```

#### dlaisnan( din1, din2 )

Tests input for NaN by comparing two double-precision floating-point arguments for inequality.

```javascript
var bool = dlaisnan( NaN, NaN );
// returns true

bool = dlaisnan( NaN, 5.0 );
// returns true

bool = dlaisnan( 5.0, 5.0 );
// returns false
```

The function has the following parameters:

-   **din1**: first input number.
-   **din2**: second input number.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dlaisnan()` corresponds to the [LAPACK][lapack] auxiliary routine [`dlaisnan`][lapack-dlaisnan].
-   This routine is not for general use. It exists solely to avoid over-optimization in [`disnan`][lapack-disnan].
-   `dlaisnan` checks for NaNs by comparing its two arguments for inequality. `NaN` is the only floating-point value where `NaN !== NaN` returns `true`. To check for NaNs, pass the same variable as both arguments (i.e., `dlaisnan( x, x )`).
-   The function returns `true` whenever the two arguments are unequal, not only when one is `NaN`. This matches the Fortran reference implementation which simply returns `din1.NE.din2`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var dlaisnan = require( '@stdlib/lapack/base/dlaisnan' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, -50, 50, opts );
var y = discreteUniform( 100, -50, 50, opts );

logEachMap( 'dlaisnan( %d, %d ) = %s', x, y, dlaisnan );
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

[lapack-dlaisnan]: https://www.netlib.org/lapack/explore-html/d3/d22/group__laisnan_gad49d1fe3d6890e9c4f60e0429abab3c9.html

[lapack-disnan]: https://www.netlib.org/lapack/explore-html/d0/d4c/group__isnan_ga7aa3164d5df8d883754b0a70e9c7209c.html

</section>

<!-- /.links -->
