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

# Standard Deviation

> [Weibull][weibull-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for a [Weibull][weibull-distribution] random variable is

<!-- <equation class="equation" label="eq:weibull_stdev" align="center" raw="\sigma = \lambda \sqrt{\Gamma\left(1+\frac{2}{k}\right) - \left(\Gamma\left(1+\frac{1}{k}\right)\right)^2}" alt="Standard deviation for a Weibull distribution."> -->

<div class="equation" align="center" data-raw-text="\sigma = \lambda \sqrt{\Gamma\left(1+\frac{2}{k}\right) - \left(\Gamma\left(1+\frac{1}{k}\right)\right)^2}" data-equation="eq:weibull_stdev">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/weibull/stdev/docs/img/equation_weibull_stdev.svg" alt="Standard deviation for a Weibull distribution.">
    <br>
</div>

<!-- </equation> -->

where `λ > 0` is the [shape parameter][shape], `k > 0` is the [scale parameter][scale], and `Γ` denotes the gamma function.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stdev = require( '@stdlib/stats/base/dists/weibull/stdev' );
```

#### stdev( k, lambda )

Returns the [standard deviation][standard-deviation] of a [Weibull][weibull-distribution] distribution with parameters `k` (shape parameter) and `lambda` (scale parameter).

```javascript
var v = stdev( 1.0, 1.0 );
// returns 1.0

v = stdev( 4.0, 12.0 );
// returns ~3.051

v = stdev( 8.0, 2.0 );
// returns ~0.279
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = stdev( NaN, 2.0 );
// returns NaN

v = stdev( 2.0, NaN );
// returns NaN
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var v = stdev( 0.0, 1.0 );
// returns NaN

v = stdev( -1.0, 1.0 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var v = stdev( 1.0, 0.0 );
// returns NaN

v = stdev( 1.0, -1.0 );
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
var EPS = require( '@stdlib/constants/float64/eps' );
var stdev = require( '@stdlib/stats/base/dists/weibull/stdev' );

var lambda;
var k;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    k = ( randu()*10.0 ) + EPS;
    lambda = ( randu()*10.0 ) + EPS;
    v = stdev( k, lambda );
    console.log( 'k: %d, λ: %d, SD(X;k,λ): %d', k.toFixed( 4 ), lambda.toFixed( 4 ), v.toFixed( 4 ) );
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

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[shape]: https://en.wikipedia.org/wiki/Shape_parameter

[scale]: https://en.wikipedia.org/wiki/Scale_parameter

</section>

<!-- /.links -->
