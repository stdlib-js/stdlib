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

# incrme

> Compute the [mean error][mean-absolute-error] (ME) incrementally.

<section class="intro">

The [mean error][mean-absolute-error] is defined as

<!-- <equation class="equation" label="eq:mean_error" align="center" raw="\operatorname{ME} = \frac{1}{n} \sum_{i=0}^{n-1} (y_i - x_i)" alt="Equation for the mean error."> -->

<div class="equation" align="center" data-raw-text="\operatorname{ME} = \frac{1}{n} \sum_{i=0}^{n-1} (y_i - x_i)" data-equation="eq:mean_error">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7d6e6319f451be0997d35a6cf491b08e1f2cb5cf/lib/node_modules/@stdlib/stats/incr/me/docs/img/equation_mean_error.svg" alt="Equation for the mean error.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrme = require( '@stdlib/stats/incr/me' );
```

#### incrme()

Returns an accumulator `function` which incrementally computes the [mean error][mean-absolute-error].

```javascript
var accumulator = incrme();
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [mean error][mean-absolute-error]. If not provided input values `x` and `y`, the accumulator function returns the current [mean error][mean-absolute-error].

```javascript
var accumulator = incrme();

var m = accumulator( 2.0, 3.0 );
// returns 1.0

m = accumulator( -1.0, -4.0 );
// returns -1.0

m = accumulator( -3.0, 5.0 );
// returns 2.0

m = accumulator();
// returns 2.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   Be careful when interpreting the [mean error][mean-absolute-error] as errors can cancel. This stated, that errors can cancel makes the [mean error][mean-absolute-error] suitable for measuring the bias in forecasts.
-   **Warning**: the [mean error][mean-absolute-error] is scale-dependent and, thus, the measure should **not** be used to make comparisons between datasets having different scales.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrme = require( '@stdlib/stats/incr/me' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrme();

// For each simulated datum, update the mean error...
for ( i = 0; i < 100; i++ ) {
    v1 = ( randu()*100.0 ) - 50.0;
    v2 = ( randu()*100.0 ) - 50.0;
    accumulator( v1, v2 );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

[mean-absolute-error]: https://en.wikipedia.org/wiki/Mean_absolute_error

</section>

<!-- /.links -->
