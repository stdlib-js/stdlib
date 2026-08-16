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

# incrnanhmean

> Compute a [harmonic mean][harmonic-mean] incrementally, ignoring `NaN` values.

<section class="intro">

The [harmonic mean][harmonic-mean] of positive real numbers `x_0, x_1, ..., x_{n-1}` is defined as

<!-- <equation class="equation" label="eq:harmonic_mean" align="center" raw="\begin{align}H &= \frac{n}{\frac{1}{x_0} + \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}}} \\ &= \frac{\displaystyle n}{\displaystyle\sum_{i=0}^{n-1} \frac{1}{x_i}} \\ &= \biggl( \frac{\displaystyle\sum_{i=0}^{n-1} \frac{1}{x_i}}{\displaystyle n} \biggr)^{-1}\end{align}" alt="Equation for the harmonic mean."> -->

```math
\begin{align}H &= \frac{n}{\frac{1}{x_0} + \frac{1}{x_1} + \cdots + \frac{1}{x_{n-1}}} \\ &= \frac{\displaystyle n}{\displaystyle\sum_{i=0}^{n-1} \frac{1}{x_i}} \\ &= \biggl( \frac{\displaystyle\sum_{i=0}^{n-1} \frac{1}{x_i}}{\displaystyle n} \biggr)^{-1}\end{align}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrnanhmean = require( '@stdlib/stats/incr/nanhmean' );
```

#### incrnanhmean()

Returns an accumulator `function` which incrementally computes a [harmonic mean][harmonic-mean], ignoring `NaN` values.

```javascript
var accumulator = incrnanhmean();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [harmonic mean][harmonic-mean]. If not provided an input value `x`, the accumulator function returns the current [harmonic mean][harmonic-mean].

```javascript
var accumulator = incrnanhmean();

var v = accumulator( 2.0 );
// returns 2.0

v = accumulator( 1.0 );
// returns ~1.33

v = accumulator( NaN );
// returns ~1.33

v = accumulator( 3.0 );
// returns ~1.64

v = accumulator();
// returns ~1.64
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
var incrnanhmean = require( '@stdlib/stats/incr/nanhmean' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrnanhmean();

// For each simulated datum, update the harmonic mean...
for ( i = 0; i < 100; i++ ) {
    if ( bernoulli( 0.2 ) ) {
        v = NaN;
    } else {
        v = uniform( 1.0, 100.0 );
    }
    accumulator( v );
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

[harmonic-mean]: https://en.wikipedia.org/wiki/Harmonic_mean

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
