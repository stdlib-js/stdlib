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

# evalpoly

> Evaluate a [polynomial][polynomial].

<section class="intro">

A [polynomial][polynomial] in a variable `x` can be expressed as

<!-- <equation class="equation" label="eq:polynomial" align="center" raw="c_nx^n + c_{n-1}x^{n-1} + \ldots + c_1x^1 + c_0 = \sum_{i=0}^{n} c_ix^i" alt="Polynomial expression."> -->

<div class="equation" align="center" data-raw-text="c_nx^n + c_{n-1}x^{n-1} + \ldots + c_1x^1 + c_0 = \sum_{i=0}^{n} c_ix^i" data-equation="eq:polynomial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/evalpoly/docs/img/equation_polynomial.svg" alt="Polynomial expression.">
    <br>
</div>

<!-- </equation> -->

where `c_n, c_{n-1}, ..., c_0` are constants.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var evalpoly = require( '@stdlib/math/base/tools/evalpoly' );
```

#### evalpoly( c, x )

Evaluates a [polynomial][polynomial] having coefficients `c` and degree `n` at a value `x`, where `n = c.length-1`.

```javascript
var v = evalpoly( [ 3.0, 2.0, 1.0 ], 10 ); // => 3*10^0 + 2*10^1 + 1*10^2
// returns 123.0
```

The coefficients should be ordered in **ascending** degree, thus matching summation notation.

#### evalpoly.factory( c )

Uses code generation to in-line coefficients and return a `function` for evaluating a [polynomial][polynomial].

```javascript
var polyval = evalpoly.factory( [ 3.0, 2.0, 1.0 ] );

var v = polyval( 10.0 ); // => 3*10^0 + 2*10^1 + 1*10^2
// returns 123.0

v = polyval( 5.0 ); // => 3*5^0 + 2*5^1 + 1*5^2
// returns 38.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For hot code paths in which coefficients are invariant, a compiled function will be more performant than `evalpoly()`.
-   While code generation can boost performance, its use may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var Float64Array = require( '@stdlib/array/float64' );
var evalpoly = require( '@stdlib/math/base/tools/evalpoly' );

var polyval;
var coef;
var sign;
var v;
var i;

// Create an array of random coefficients...
coef = new Float64Array( 10 );
for ( i = 0; i < coef.length; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    coef[ i ] = sign * round( randu()*100.0 );
}

// Evaluate the polynomial at random values...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    console.log( 'f(%d) = %d', v, evalpoly( coef, v ) );
}

// Generate an `evalpoly` function...
polyval = evalpoly.factory( coef );
for ( i = 0; i < 100; i++ ) {
    v = (randu()*100.0) - 50.0;
    console.log( 'f(%d) = %d', v, polyval( v ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[polynomial]: https://en.wikipedia.org/wiki/Polynomial

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

</section>

<!-- /.links -->
