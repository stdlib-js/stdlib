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

> [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] random variable is

<!-- <equation class="equation" label="eq:kumaraswamy_cdf" align="center" raw="F(x;a,b) = 1-(1-x^{a})^{b}" alt="Cumulative distribution function for a Kumaraswamy's double bounded distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;a,b) = 1-(1-x^{a})^{b}" data-equation="eq:kumaraswamy_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/cdf/docs/img/equation_kumaraswamy_cdf.svg" alt="Cumulative distribution function for a Kumaraswamy's double bounded distribution.">
    <br>
</div>

<!-- </equation> -->

where `a > 0` is the first shape parameter and `b > 0` is the second shape parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/kumaraswamy/cdf' );
```

#### cdf( x, a, b )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var y = cdf( 0.5, 1.0, 1.0 );
// returns 0.5

y = cdf( 0.5, 2.0, 4.0 );
// returns ~0.684

y = cdf( 0.2, 2.0, 2.0 );
// returns ~0.078

y = cdf( 0.8, 4.0, 4.0 );
// returns ~0.878

y = cdf( -0.5, 4.0, 2.0 );
// returns 0.0

y = cdf( -Infinity, 4.0, 2.0 );
// returns 0.0

y = cdf( 1.5, 4.0, 2.0 );
// returns 1.0

y = cdf( +Infinity, 4.0, 2.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `a <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0, 0.5 );
// returns NaN

y = cdf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.5, -1.0 );
// returns NaN

y = cdf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### cdf.factory( a, b )

Returns a function for evaluating the [cumulative distribution function][cdf] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var mycdf = cdf.factory( 0.5, 0.5 );

var y = mycdf( 0.8 );
// returns ~0.675

y = mycdf( 0.3 );
// returns ~0.327
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var cdf = require( '@stdlib/stats/base/dists/kumaraswamy/cdf' );

var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu();
    a = ( randu()*5.0 ) + EPS;
    b = ( randu()*5.0 ) + EPS;
    y = cdf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, F(x;a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[kumaraswamy-distribution]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

</section>

<!-- /.links -->
