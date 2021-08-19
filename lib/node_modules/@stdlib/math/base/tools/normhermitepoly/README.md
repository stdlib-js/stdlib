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

# Normalized Hermite Polynomial

> Evaluate a normalized [Hermite polynomial][hermite-polynomial].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The normalized (aka "probabilist") [Hermite polynomials][hermite-polynomial] are given by

<!-- <equation class="equation" label="eq:normalized_hermite_polynomials" align="center" raw="He_{n}(x)=(-1)^{n} e^{\frac{x^2}{2}} \frac{\mathrm d^{n}}{\mathrm d x^{n}} e^{-\frac{x^2}{2}}" alt="Equation for normalized Hermite polynomials."> -->

<div class="equation" align="center" data-raw-text="He_{n}(x)=(-1)^{n} e^{\frac{x^2}{2}} \frac{\mathrm{d}^{n}}{\mathrm{d}x^n} e^{-\frac{x^2}{2}}" data-equation="eq:normalized_hermite_polynomials">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bea0101eb61892f160eec8d97dc79188fd937523/lib/node_modules/@stdlib/math/base/tools/normhermitepoly/docs/img/equation_normalized_hermite_polynomials.svg" alt="Equation for normalized Hermite polynomials.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var normhermitepoly = require( '@stdlib/math/base/tools/normhermitepoly' );
```

#### normhermitepoly( n, x )

Evaluates a normalized [Hermite polynomial][hermite-polynomial] of degree `n`.

```javascript
var v = normhermitepoly( 1, 1.0 );
// returns 1.0

v = normhermitepoly( 1, 0.5 );
// returns 0.5

v = normhermitepoly( 0, 0.5 );
// returns 1.0

v = normhermitepoly( 2, 0.5 );
// returns -0.75

v = normhermitepoly( -1, 0.5 );
// returns NaN
```

#### normhermitepoly.factory( n )

Returns a `function` for evaluating a normalized [Hermite polynomial][hermite-polynomial] of degree `n`.

```javascript
var polyval = normhermitepoly.factory( 2 );

var v = polyval( 0.5 );
// returns -0.75
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
var randu = require( '@stdlib/random/base/randu');
var normhermitepoly = require( '@stdlib/math/base/tools/normhermitepoly' );

var xx;
var yy;
var x;
var y;
var i;
var j;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    for ( j = 1; j < 3; j++ ) {
        y = normhermitepoly( j, x );
        xx = x.toFixed(3);
        yy = y.toFixed(3);
        console.log( 'He_%d( %d ) = %d', j, xx, yy );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hermite-polynomial]: https://en.wikipedia.org/wiki/Hermite_polynomials

</section>

<!-- /.links -->
