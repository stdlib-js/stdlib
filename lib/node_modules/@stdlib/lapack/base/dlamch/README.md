<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# dlamch

> Determine double-precision floating-point machine parameters.

<section class="usage">

## Usage

```javascript
var dlamch = require( '@stdlib/lapack/base/dlamch' );
```

#### dlamch( cmach )

Determines double-precision floating-point machine parameters.

```javascript
var out = dlamch( 'E' );
// returns 1.1102230246251565e-16
```

The function has the following parameters:

-   **cmach**: specifies the value to be returned. The following characters are supported:

    -   `'E'`/`'e'`: (eps) relative machine precision.
    -   `'S'`/`'s'`: (sfmin) safe minimum such that `1/sfmin` does not overflow.
    -   `'B'`/`'b'`: (base) base of the machine (also known as the floating-point radix).
    -   `'P'`/`'p'`: (prec) `eps*base`.
    -   `'N'`/`'n'`: (t) number of (base) digits in the mantissa.
    -   `'R'`/`'r'`: (rnd) `1.0` when rounding occurs in addition and `0.0` otherwise.
    -   `'M'`/`'m'`: (emin) minimum exponent before (gradual) underflow.
    -   `'U'`/`'u'`: (rmin) underflow threshold.
    -   `'L'`/`'l'`: (emax) largest exponent before overflow.
    -   `'O'`/`'o'`: (rmax) overflow threshold.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dlamch()` corresponds to the [LAPACK][lapack] function [`dlamch`][lapack-dlamch].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dlamch = require( '@stdlib/lapack/base/dlamch' );

var out = dlamch( 'E' );
console.log( 'Precision: %d', out );

out = dlamch( 'S' );
console.log( 'Safe minimum: %d', out );

out = dlamch( 'B' );
console.log( 'Base: %d', out );

out = dlamch( 'P' );
console.log( 'Precision*base: %d', out );

out = dlamch( 'N' );
console.log( 'Number of digits in mantissa: %d', out );

out = dlamch( 'R' );
console.log( 'Rounding: %d', out );

out = dlamch( 'M' );
console.log( 'Minimum exponent before underflow: %d', out );

out = dlamch( 'U' );
console.log( 'Underflow threshold: %d', out );

out = dlamch( 'L' );
console.log( 'Maximum exponent before overflow: %d', out );

out = dlamch( 'O' );
console.log( 'Overflow threshold: %d', out );
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

[lapack-dlamch]: https://www.netlib.org/lapack/explore-html/d4/d86/group__lamch_gaeab255e77cbd3b0f31aea74ed0ce099e.html#gaeab255e77cbd3b0f31aea74ed0ce099e

</section>

<!-- /.links -->
