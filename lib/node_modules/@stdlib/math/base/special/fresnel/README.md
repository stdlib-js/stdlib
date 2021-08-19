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

# fresnel

> Compute the [Fresnel integrals][fresnel-integral] S(x) and C(x).

<section class="intro">

The [Fresnel integrals][fresnel-integral] are defined as

<!-- <equation class="equation" label="eq:fresnel_integrals" align="center" raw="\begin{align} S(x) &= \int_0^x \sin\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t, \\ C(x) &= \int_0^x \cos\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t. \end{align}" alt="Fresnel integral"> -->

<div class="equation" align="center" data-raw-text="\begin{align} S(x) &amp;= \int_0^x \sin\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t, \\ C(x) &amp;= \int_0^x \cos\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t. \end{align}" data-equation="eq:fresnel_integrals">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/fresnel/docs/img/equation_fresnel_integrals.svg" alt="Fresnel integral">
    <br>
</div>

<!-- </equation> -->

Some sources define the Fresnel integrals using t<sup>2</sup> for the argument of the sine and cosine. To get these functions, multiply the computed integrals by `√(π/2)` and multiply the argument `x` by `√(2/π)`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fresnel = require( '@stdlib/math/base/special/fresnel' );
```

#### fresnel( \[out,] x )

Simultaneously computes the [Fresnel integrals][fresnel-integral] S(x) and C(x).

```javascript
var v = fresnel( 0.0 );
// returns [ ~0.0, ~0.0 ]

v = fresnel( 1.0 );
// returns [ ~0.438, ~0.780 ]

v = fresnel( Infinity );
// returns [ ~0.5, ~0.5 ]

v = fresnel( -Infinity );
// returns [ ~-0.5, ~-0.5 ]

v = fresnel( NaN );
// returns [ NaN, NaN ]
```

By default, the function returns the S(x) and C(x) as a two-element `array`. To avoid extra memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var v = fresnel( out, 0.0 );
// returns <Float64Array>[ ~0.0, ~0.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var fresnel = require( '@stdlib/math/base/special/fresnel' );

var x = linspace( 0.0, 10.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( fresnel( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[fresnel-integral]: https://en.wikipedia.org/wiki/Fresnel_integral

</section>

<!-- /.links -->
