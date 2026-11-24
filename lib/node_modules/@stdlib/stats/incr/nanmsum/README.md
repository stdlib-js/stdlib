<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# incrnanmsum

> Compute a moving sum incrementally, ignoring `NaN` values.

<section class="intro">

For a window of size `W`, the moving sum is defined as

<!-- <equation class="equation" label="eq:moving_sum" align="center" raw="s = \sum_{i=0}^{W-1} x_i" alt="Equation for the moving sum."> -->

```math
s = \sum_{i=0}^{W-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{W-1} x_i" data-equation="eq:moving_sum">
    <img src="./docs/img/equation_moving_sum.svg" alt="Equation for the moving sum.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrnanmsum = require( '@stdlib/stats/incr/nanmsum' );
```

#### incrnanmsum( window )

Returns an accumulator function which incrementally computes a moving sum. The `window` parameter defines the number of values over which to compute the moving sum.

```javascript
var accumulator = incrnanmsum( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated sum. If not provided an input value `x`, the accumulator function returns the current sum.

```javascript
var accumulator = incrnanmsum( 3 );

var sum = accumulator();
// returns null

sum = accumulator( 2.0 );
// returns 2.0

sum = accumulator( NaN );
// returns 2.0

sum = accumulator( -5.0 );
// returns -3.0

sum = accumulator( 3.0 );
// returns 0.0

sum = accumulator( 5.0 );
// returns 3.0

sum = accumulator();
// returns 3.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/base/uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var incrnanmsum = require( '@stdlib/stats/incr/nanmsum' );

// Initialize an accumulator:
var accumulator = incrnanmsum( 5 );

// For each simulated datum, update the moving sum...
var i;
for ( i = 0; i < 100; i++ ) {
    accumulator( ( bernoulli( 0.8 ) < 1 ) ? NaN : uniform( -50.0, 50.0 ) );
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

</section>

<!-- /.links -->
