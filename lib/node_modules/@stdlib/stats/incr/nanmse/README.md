<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# incrnanmse

> Compute the [mean squared error][mean-squared-error] (MSE) incrementally, ignoring `NaN` values.

<section class="intro">

The [mean squared error][mean-squared-error] is defined as

<!-- <equation class="equation" label="eq:mean_squared_error" align="center" raw="\operatorname{MSE} = \frac{1}{n} \sum_{i=0}^{n-1} (y_i - x_i)^2" alt="Equation for the mean squared error."> -->

```math
\mathop{\mathrm{MSE}} = \frac{1}{n} \sum_{i=0}^{n-1} (y_i - x_i)^2
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{MSE} = \frac{1}{n} \sum_{i=0}^{n-1} (y_i - x_i)^2" data-equation="eq:mean_squared_error">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@f5d4f0cac0a117ba1e0c70706a2fb284f69e7291/lib/node_modules/@stdlib/stats/incr/mse/docs/img/equation_mean_squared_error.svg" alt="Equation for the mean squared error.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrnanmse = require( '@stdlib/stats/incr/nanmse' );
```

#### incrnanmse()

Returns an accumulator `function` which incrementally computes the [mean squared error][mean-squared-error], ignoring `NaN` values.

```javascript
var accumulator = incrnanmse();
```

#### accumulator( \[x, y] )

If provided input values `x` and `y`, the accumulator function returns an updated [mean squared error][mean-squared-error]. If not provided input values `x` and `y`, the accumulator function returns the current [mean squared error][mean-squared-error].

```javascript
var accumulator = incrnanmse();

var m = accumulator( 2.0, 3.0 );
// returns 1.0

m = accumulator( NaN, 5.0 );
// returns 1.0

m = accumulator( -1.0, -4.0 );
// returns 5.0

m = accumulator( -3.0, 5.0 );
// returns ~24.67

m = accumulator();
// returns ~24.67
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   If either input value is `NaN`, the accumulator function ignores the input value and returns the current [mean squared error][mean-squared-error].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrnanmse = require( '@stdlib/stats/incr/nanmse' );

var accumulator;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrnanmse();

// For each simulated datum, update the mean squared error...
for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.2 ) {
        v1 = NaN;
        v2 = NaN;
    } else {
        v1 = ( randu()*100.0 ) - 50.0;
        v2 = ( randu()*100.0 ) - 50.0;
    }
    accumulator( v1, v2 );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mean-squared-error]: https://en.wikipedia.org/wiki/Mean_squared_error

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
