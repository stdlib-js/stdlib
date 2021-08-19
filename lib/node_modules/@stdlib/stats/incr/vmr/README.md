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

# incrvmr

> Compute a [variance-to-mean ratio][variance-to-mean-ratio] (VMR) incrementally.

<section class="intro">

The [unbiased sample variance][sample-variance] is defined as

<!-- <equation class="equation" label="eq:unbiased_sample_variance" align="center" raw="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2" alt="Equation for the unbiased sample variance."> -->

<div class="equation" align="center" data-raw-text="s^2 = \frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2" data-equation="eq:unbiased_sample_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7fe559e94716008fb414ec7c6b3d0e3e1194f2ba/lib/node_modules/@stdlib/stats/incr/vmr/docs/img/equation_unbiased_sample_variance.svg" alt="Equation for the unbiased sample variance.">
    <br>
</div>

<!-- </equation> -->

and the [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the arithmetic mean."> -->

<div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@86f8c49b0e95ee794f0b098b8d17444c0cbeea0a/lib/node_modules/@stdlib/stats/incr/vmr/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div>

<!-- </equation> -->

The [variance-to-mean ratio][variance-to-mean-ratio] (VMR) is thus defined as

<!-- <equation class="equation" label="eq:variance_to_mean_ratio" align="center" raw="D = \frac{s^2}{\bar{x}}" alt="Equation for the variance-to-mean ratio (VMR)."> -->

<div class="equation" align="center" data-raw-text="D = \frac{s^2}{\bar{x}}" data-equation="eq:variance_to_mean_ratio">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@86f8c49b0e95ee794f0b098b8d17444c0cbeea0a/lib/node_modules/@stdlib/stats/incr/vmr/docs/img/equation_variance_to_mean_ratio.svg" alt="Equation for the variance-to-mean ratio (VMR).">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrvmr = require( '@stdlib/stats/incr/vmr' );
```

#### incrvmr( \[mean] )

Returns an accumulator `function` which incrementally computes a [variance-to-mean ratio][variance-to-mean-ratio].

```javascript
var accumulator = incrvmr();
```

If the mean is already known, provide a `mean` argument.

```javascript
var accumulator = incrvmr( 3.0 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated accumulated value. If not provided an input value `x`, the accumulator function returns the current accumulated value.

```javascript
var accumulator = incrvmr();

var D = accumulator( 2.0 );
// returns 0.0

D = accumulator( 1.0 ); // => s^2 = ((2-1.5)^2+(1-1.5)^2) / (2-1)
// returns ~0.33

D = accumulator( 3.0 ); // => s^2 = ((2-2)^2+(1-2)^2+(3-2)^2) / (3-1)
// returns 0.5

D = accumulator();
// returns 0.5
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

-   The following table summarizes how to interpret the [variance-to-mean ratio][variance-to-mean-ratio]:

    |        VMR        |   Description   |     Example Distribution     |
    | :---------------: | :-------------: | :--------------------------: |
    |         0         |  not dispersed  |           constant           |
    | 0 &lt; VMR &lt; 1 | under-dispersed |           binomial           |
    |         1         |        --       |            Poisson           |
    |         >1        |  over-dispersed | geometric, negative-binomial |

    Accordingly, one can use the [variance-to-mean ratio][variance-to-mean-ratio] to assess whether observed data can be modeled as a Poisson process. When observed data is "under-dispersed", observed data may be more regular than as would be the case for a Poisson process. When observed data is "over-dispersed", observed data may contain clusters (i.e., clumped, concentrated data).

-   The [variance-to-mean ratio][variance-to-mean-ratio] is typically computed on nonnegative values. The measure may lack meaning for data which can assume both positive and negative values.

-   The [variance-to-mean ratio][variance-to-mean-ratio] is also known as the **index of dispersion**, **dispersion index**, **coefficient of dispersion**, and **relative variance**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrvmr = require( '@stdlib/stats/incr/vmr' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrvmr();

// For each simulated datum, update the variance-to-mean ratio...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

[variance-to-mean-ratio]: https://en.wikipedia.org/wiki/Index_of_dispersion

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[sample-variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
