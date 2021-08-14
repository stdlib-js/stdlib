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

# incrcv

> Compute the [coefficient of variation][coefficient-of-variation] (CV) incrementally.

<section class="intro">

The [corrected sample standard deviation][sample-stdev] is defined as

<!-- <equation class="equation" label="eq:corrected_sample_standard_deviation" align="center" raw="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}" alt="Equation for the corrected sample standard deviation."> -->

<div class="equation" align="center" data-raw-text="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}" data-equation="eq:corrected_sample_standard_deviation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@6dd7df93fd2c6e40fd0662844acf8b69b887dcec/lib/node_modules/@stdlib/stats/incr/cv/docs/img/equation_corrected_sample_standard_deviation.svg" alt="Equation for the corrected sample standard deviation.">
    <br>
</div>

<!-- </equation> -->

and the [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the arithmetic mean."> -->

<div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@6dd7df93fd2c6e40fd0662844acf8b69b887dcec/lib/node_modules/@stdlib/stats/incr/cv/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div>

<!-- </equation> -->

The [coefficient of variation][coefficient-of-variation] (also known as **relative standard deviation**, RSD) is defined as

<!-- <equation class="equation" label="eq:coefficient_of_variation" align="center" raw="c_v = \frac{s}{\bar{x}}" alt="Equation for the coefficient of variation (CV)."> -->

<div class="equation" align="center" data-raw-text="c_v = \frac{s}{\bar{x}}" data-equation="eq:coefficient_of_variation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@6dd7df93fd2c6e40fd0662844acf8b69b887dcec/lib/node_modules/@stdlib/stats/incr/cv/docs/img/equation_coefficient_of_variation.svg" alt="Equation for the coefficient of variation (CV).">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrcv = require( '@stdlib/stats/incr/cv' );
```

#### incrcv( \[mean] )

Returns an accumulator `function` which incrementally computes the [coefficient of variation][coefficient-of-variation].

```javascript
var accumulator = incrcv();
```

If the mean is already known, provide a `mean` argument.

```javascript
var accumulator = incrcv( 3.0 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated accumulated value. If not provided an input value `x`, the accumulator function returns the current accumulated value.

```javascript
var accumulator = incrcv();

var cv = accumulator( 2.0 );
// returns 0.0

cv = accumulator( 1.0 ); // => s^2 = ((2-1.5)^2+(1-1.5)^2) / (2-1)
// returns ~0.47

cv = accumulator( 3.0 ); // => s^2 = ((2-2)^2+(1-2)^2+(3-2)^2) / (3-1)
// returns 0.5

cv = accumulator();
// returns 0.5
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   The [coefficient of variation][coefficient-of-variation] is typically computed on nonnegative values. The measure may lack meaning for data which can assume both positive and negative values.
-   For small and moderately sized samples, the accumulated value tends to be too low and is thus a **biased** estimator. Provided the generating distribution is known (e.g., a normal distribution), you may want to adjust the accumulated value or use an alternative implementation providing an unbiased estimator.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrcv = require( '@stdlib/stats/incr/cv' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrcv();

// For each simulated datum, update the coefficient of variation...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

[coefficient-of-variation]: https://en.wikipedia.org/wiki/Coefficient_of_variation

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[sample-stdev]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
