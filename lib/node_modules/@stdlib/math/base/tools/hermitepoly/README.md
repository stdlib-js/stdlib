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

# Physicist's Hermite Polynomial

> Evaluate a physicist's [Hermite polynomial][hermite-polynomial].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The physicist's [Hermite polynomials][hermite-polynomial] are given by

<!-- <equation class="equation" label="eq:physicists_hermite_polynomials" align="center" raw="H_{n}(x)=(-1)^{n} e^{x^2} \frac{\mathrm{d}^{n}}{\mathrm{d} x^{n}} e^{-x^2}" alt="Equation for physicist's Hermite polynomials."> -->

<div class="equation" align="center" data-raw-text="H_{n}(x)=(-1)^{n} e^{x^2} \frac{\mathrm{d}^{n}}{\mathrm{d}x^n} e^{-x^2}" data-equation="eq:physicists_hermite_polynomials">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@58b02120eb58818177f6767ab495e7afac3618e8/lib/node_modules/@stdlib/math/base/tools/hermitepoly/docs/img/equation_physicists_hermite_polynomials.svg" alt="Equation for physicist's Hermite polynomials.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var hermitepoly = require( '@stdlib/math/base/tools/hermitepoly' );
```

#### hermitepoly( n, x )

Evaluates a physicist's [Hermite polynomial][hermite-polynomial] of degree `n`.

```javascript
var v = hermitepoly( 1, 1.0 );
// returns 2.0

v = hermitepoly( 1, 0.5 );
// returns ~1.0

v = hermitepoly( -1, 0.5 );
// returns NaN

v = hermitepoly( 0, 0.5 );
// returns 1.0

v = hermitepoly( 2, 0.5 );
// returns -1.0
```

#### hermitepoly.factory( n )

Returns a `function` for evaluating a physicist's [Hermite polynomial][hermite-polynomial] of degree `n`.

```javascript
var polyval = hermitepoly.factory( 2 );

var v = polyval( 0.5 );
// returns -1.0
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
var hermitepoly = require( '@stdlib/math/base/tools/hermitepoly' );

var x;
var y;
var i;
var j;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    for ( j = 1; j < 3; j++ ) {
        y = hermitepoly( j, x );
        console.log( 'H_%d( %d ) = %d', j, x.toFixed( 3 ), y.toFixed( 3 ) );
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
