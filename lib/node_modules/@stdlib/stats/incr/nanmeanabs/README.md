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

# incrnanmeanabs

> Compute an [arithmetic mean][arithmetic-mean] of absolute values incrementally, ignoring `NaN` values.

<section class="intro">

The [arithmetic mean][arithmetic-mean] of absolute values is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean_absolute_values" align="center" raw="\mu = \frac{1}{n} \sum_{i=0}^{n-1} |x_i|" alt="Equation for the arithmetic mean of absolute values."> -->

```math
\mu = \frac{1}{n} \sum_{i=0}^{n-1} |x_i|
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{n} \sum_{i=0}^{n-1} |x_i|" data-equation="eq:arithmetic_mean_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@49d8cabda84033d55d7b8069f19ee3dd8b8d1496/lib/node_modules/@stdlib/stats/incr/nanmeanabs/docs/img/equation_arithmetic_mean_absolute_values.svg" alt="Equation for the arithmetic mean of absolute values.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrnanmeanabs = require( '@stdlib/stats/incr/nanmeanabs' );
```

#### incrnanmeanabs()

Returns an accumulator function which incrementally computes an [arithmetic mean][arithmetic-mean] of absolute values, ignoring `NaN` values.

```javascript
var accumulator = incrnanmeanabs();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated mean. If not provided an input value `x`, the accumulator function returns the current mean.

```javascript
var accumulator = incrnanmeanabs();

var mu = accumulator( 2.0 );
// returns 2.0

mu = accumulator( NaN );
// returns 2.0

mu = accumulator( -1.0 );
// returns 1.5

mu = accumulator( -3.0 );
// returns 2.0

mu = accumulator();
// returns 2.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/base/uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var incrnanmeanabs = require( '@stdlib/stats/incr/nanmeanabs' );

// Initialize an accumulator:
var accumulator = incrnanmeanabs();

// For each simulated datum, update the mean...
var i;
for ( i = 0; i < 100; i++ ) {
    accumulator( ( bernoulli( 0.8 ) < 1 ) ? NaN : uniform( -100.0, 100.0 ) );
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

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

</section>

<!-- /.links -->
