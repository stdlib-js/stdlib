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

# Cumulative Distribution Function

> [Cauchy][cauchy-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Cauchy][cauchy-distribution] random variable is

<!-- <equation class="equation" label="eq:cauchy_cdf" align="center" raw="F(x; x_0,\gamma)=\frac{1}{\pi} \operatorname{arctan} \left(\frac{x-x_0}{\gamma}\right)+\frac{1}{2}" alt="Cumulative distribution function for a Cauchy distribution."> -->

<div class="equation" align="center" data-raw-text="F(x; x_0,\gamma)=\frac{1}{\pi} \operatorname{arctan} \left(\frac{x-x_0}{\gamma}\right)+\frac{1}{2}" data-equation="eq:cauchy_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/cauchy/cdf/docs/img/equation_cauchy_cdf.svg" alt="Cumulative distribution function for a Cauchy distribution.">
    <br>
</div>

<!-- </equation> -->

where `x0` is the location parameter and `gamma > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/cauchy/cdf' );
```

#### cdf( x, x0, gamma )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [Cauchy][cauchy-distribution] distribution with parameters `x0` (location parameter) and `gamma > 0` (scale parameter).

```javascript
var y = cdf( 4.0, 0.0, 2.0 );
// returns ~0.852

y = cdf( 1.0, 0.0, 2.0 );
// returns ~0.648

y = cdf( 1.0, 3.0, 2.0 );
// returns 0.25
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.0, 2.0 );
// returns NaN

y = cdf( 1.0, 2.0, NaN );
// returns NaN

y = cdf( 1.0, NaN, 3.0 );
// returns NaN
```

If provided `gamma <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.0, -1.0 );
// returns NaN

y = cdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### cdf.factory( x0, gamma )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Cauchy][cauchy-distribution] distribution with parameters `x0` (location parameter) and `gamma > 0` (scale parameter).

```javascript
var mycdf = cdf.factory( 10.0, 2.0 );

var y = mycdf( 10.0 );
// returns 0.5

y = mycdf( 12.0 );
// returns 0.75
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var cdf = require( '@stdlib/stats/base/dists/cauchy/cdf' );

var gamma;
var x0;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    x0 = randu() * 10.0;
    gamma = ( randu()*10.0 ) + EPS;
    y = cdf( x, x0, gamma );
    console.log( 'x: %d, x0: %d, γ: %d, F(x;x0,γ): %d', x.toFixed( 4 ), x0.toFixed( 4 ), gamma.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[cauchy-distribution]: https://en.wikipedia.org/wiki/Cauchy_distribution

</section>

<!-- /.links -->
