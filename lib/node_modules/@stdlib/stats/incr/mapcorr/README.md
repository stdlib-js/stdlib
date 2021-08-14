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

# incrmapcorr

> Compute a moving sample absolute [Pearson product-moment correlation coefficient][pearson-correlation] incrementally.

<section class="intro">

The [Pearson product-moment correlation coefficient][pearson-correlation] between random variables `X` and `Y` is defined as

<!-- <equation class="equation" label="eq:pearson_correlation_coefficient" align="center" raw="\rho_{X,Y} = \frac{\operatorname{cov}(X,Y)}{\sigma_X \sigma_Y}" alt="Equation for the Pearson product-moment correlation coefficient."> -->

<div class="equation" align="center" data-raw-text="\rho_{X,Y} = \frac{\operatorname{cov}(X,Y)}{\sigma_X \sigma_Y}" data-equation="eq:pearson_correlation_coefficient">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e7c0cbc398c5e64614baf47cf5c6259b93c0ffce/lib/node_modules/@stdlib/stats/incr/mapcorr/docs/img/equation_pearson_correlation_coefficient.svg" alt="Equation for the Pearson product-moment correlation coefficient.">
    <br>
</div>

<!-- </equation> -->

where the numerator is the [covariance][covariance] and the denominator is the product of the respective standard deviations.

For a sample of size `W`, the sample [Pearson product-moment correlation coefficient][pearson-correlation] is defined as

<!-- <equation class="equation" label="eq:sample_pearson_correlation_coefficient" align="center" raw="r = \frac{\sum_{i=0}^{n-1} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=0}^{n-1} (x_i - \bar{x})^2} \sqrt{\sum_{i=0}^{n-1} (y_i - \bar{y})^2}}" alt="Equation for the sample Pearson product-moment correlation coefficient."> -->

<div class="equation" align="center" data-raw-text="r = \frac{\sum_{i=0}^{n-1} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=0}^{n-1} (x_i - \bar{x})^2} \sqrt{\sum_{i=0}^{n-1} (y_i - \bar{y})^2}}" data-equation="eq:sample_pearson_correlation_coefficient">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e7c0cbc398c5e64614baf47cf5c6259b93c0ffce/lib/node_modules/@stdlib/stats/incr/mapcorr/docs/img/equation_sample_pearson_correlation_coefficient.svg" alt="Equation for the sample Pearson product-moment correlation coefficient.">
    <br>
</div>

<!-- </equation> -->

The sample **absolute** [Pearson product-moment correlation coefficient][pearson-correlation] is thus defined as the absolute value of the sample [Pearson product-moment correlation coefficient][pearson-correlation].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmapcorr = require( '@stdlib/stats/incr/mapcorr' );
```

#### incrmapcorr( window\[, mx, my] )

Returns an accumulator `function` which incrementally computes a moving sample absolute [Pearson product-moment correlation coefficient][pearson-correlation]. The `window` parameter defines the number of values over which to compute the moving sample absolute [Pearson product-moment correlation coefficient][pearson-correlation].

```javascript
var accumulator = incrmapcorr( 3 );
```

If means are already known, provide `mx` and `my` arguments.

```javascript
var accumulator = incrmapcorr( 3, 5.0, -3.14 );
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated accumulated value. If not provided input values `x` and `y`, the accumulator function returns the current accumulated value.

```javascript
var accumulator = incrmapcorr( 3 );

var ar = accumulator();
// returns null

// Fill the window...
ar = accumulator( 2.0, 1.0 ); // [(2.0, 1.0)]
// returns 0.0

ar = accumulator( -5.0, 3.14 ); // [(2.0, 1.0), (-5.0, 3.14)]
// returns ~1.0

ar = accumulator( 3.0, -1.0 ); // [(2.0, 1.0), (-5.0, 3.14), (3.0, -1.0)]
// returns ~0.925

// Window begins sliding...
ar = accumulator( 5.0, -9.5 ); // [(-5.0, 3.14), (3.0, -1.0), (5.0, -9.5)]
// returns ~0.863

ar = accumulator( -5.0, 1.5 ); // [(3.0, -1.0), (5.0, -9.5), (-5.0, 1.5)]
// returns ~0.803

ar = accumulator();
// returns ~0.803
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` (x,y) pairs are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.
-   In comparison to the sample [Pearson product-moment correlation coefficient][pearson-correlation], the sample absolute [Pearson product-moment correlation coefficient][pearson-correlation] is useful when only concerned with the strength of the correlation and not the direction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmapcorr = require( '@stdlib/stats/incr/mapcorr' );

var accumulator;
var x;
var y;
var i;

// Initialize an accumulator:
accumulator = incrmapcorr( 5 );

// For each simulated datum, update the moving sample absolute correlation coefficient...
for ( i = 0; i < 100; i++ ) {
    x = randu() * 100.0;
    y = randu() * 100.0;
    accumulator( x, y );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

[pearson-correlation]: https://en.wikipedia.org/wiki/Pearson_correlation_coefficient

[covariance]: https://en.wikipedia.org/wiki/Covariance

</section>

<!-- /.links -->
