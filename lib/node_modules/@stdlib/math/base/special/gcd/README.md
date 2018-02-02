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

# gcd

> Compute the [greatest common divisor][gcd] (gcd).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [greatest common divisor][gcd] (gcd) of two non-zero integers `a` and `b` is the largest positive integer which divides both `a` and `b` without a remainder. The gcd is also known as the **greatest common factor** (gcf), **highest common factor** (hcf), **highest common divisor**, and **greatest common measure** (gcm).

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var gcd = require( '@stdlib/math/base/special/gcd' );
```

#### gcd( a, b )

Computes the [greatest common divisor][gcd] (gcd).

```javascript
var v = gcd( 48, 18 );
// returns 6
```

If both `a` and `b` are `0`, the function returns `0`.

```javascript
var v = gcd( 0, 0 );
// returns 0
```

Both `a` and `b` must have integer values; otherwise, the function returns `NaN`.

```javascript
var v = gcd( 3.14, 18 );
// returns NaN

v = gcd( 48, 3.14 );
// returns NaN

v = gcd( NaN, 18 );
// returns NaN

v = gcd( 48, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var gcd = require( '@stdlib/math/base/special/gcd' );

var a;
var b;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    a = round( randu()*50.0 );
    b = round( randu()*50.0 );
    v = gcd( a, b );
    console.log( 'gcd(%d,%d) = %d', a, b, v );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

## References

-   Stein, Josef. 1967. "Computational problems associated with Racah algebra." _Journal of Computational Physics_ 1 (3): 397–405. doi:[10.1016/0021-9991(67)90047-2][@stein:1967].

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[gcd]: http://en.wikipedia.org/wiki/Greatest_common_divisor

[@stein:1967]: https://doi.org/10.1016/0021-9991(67)90047-2

</section>

<!-- /.links -->
