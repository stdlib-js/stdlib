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

# gammincinv

> Inverse of [incomplete gamma function][incomplete-gamma-function].

<section class="intro">

Computes the inverse of the lower [incomplete gamma function][incomplete-gamma-function]

<!-- <equation class="equation" label="eq:lower_incomplete_gamma" align="center" raw="P( x, a ) = \frac{\gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_0^x t^{a-1} e^{-t} \; dt" alt="Regularized lower incomplete gamma function."> -->

<div class="equation" align="center" data-raw-text="P( x, a ) = \frac{\gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_0^x t^{a-1} e^{-t} \; dt" data-equation="eq:lower_incomplete_gamma">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/gammaincinv/docs/img/equation_lower_incomplete_gamma.svg" alt="Regularized lower incomplete gamma function.">
    <br>
</div>

<!-- </equation> -->

Specifically, for given `p` and `a` it finds the `x` such that `p =  P(x, a)`.

The function can also be used to invert the upper incomplete gamma function, which is defined as follows:  

<!-- <equation class="equation" label="eq:upper_incomplete_gamma" align="center" raw="Q( x, a ) = \frac{\Gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_x^\infty t^{a-1} e^{-t} \; dt" alt="Regularized upper incomplete gamma function."> -->

<div class="equation" align="center" data-raw-text="Q( x, a ) = \frac{\Gamma(a,x)}{\Gamma(a)} = \frac{1}{\Gamma(a)} \int_x^\infty t^{a-1} e^{-t} \; dt" data-equation="eq:upper_incomplete_gamma">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/gammaincinv/docs/img/equation_upper_incomplete_gamma.svg" alt="Regularized upper incomplete gamma function.">
    <br>
</div>

<!-- </equation> -->

Again, for given `p` and `a` the function returns the `x` which satisfies `p = Q(x, a)`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gammaincinv = require( '@stdlib/math/base/special/gammaincinv' );
```

#### gammaincinv( p, s\[, upper ] )

Inverts the regularized incomplete gamma function. Contrary to the more commonly used definition, in this implementation the first argument is the probability `p` and the second argument is the scale factor `a`. By default, the function inverts the _lower_ regularized incomplete gamma function, `P(x,a)`. To invert the _upper_ function instead, i.e. `Q(x,a)`, set the `upper` argument to `true`.

```javascript
var y = gammaincinv( 0.5, 2.0 );
// returns ~1.678

y = gammaincinv( 0.1, 10.0 );
// returns ~6.221

y = gammaincinv( 0.75, 3.0 );
// returns ~3.92

y = gammaincinv( 0.75, 3.0, true );
// returns ~1.727
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = gammaincinv( NaN, 1.0 );
// returns NaN

y = gammaincinv( 0.5, NaN );
// returns NaN
```

If provided a value outside `[0,1]` for `p`, the function returns `NaN`.

```javascript
var y = gammaincinv( 1.2, 1.0 );
// returns NaN

y = gammaincinv( -0.5, 1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var gammaincinv = require( '@stdlib/math/base/special/gammaincinv' );

var a;
var i;
var p;

for ( i = 0; i < 100; i++ ) {
    p = randu();
    a = randu() * 50.0;
    console.log( 'p: %d, \t a: %d, \t P^(-1)(p, a): %d', p.toFixed( 4 ), a.toFixed( 4 ), gammaincinv( p, a ).toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[incomplete-gamma-function]: https://en.wikipedia.org/wiki/Incomplete_gamma_function

</section>

<!-- /.links -->
