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

# incrnangmean

> Compute a [geometric mean][geometric-mean] incrementally, ignoring `NaN` values.

<section class="intro">

The [geometric mean][geometric-mean] is defined as the nth root of a product of _n_ numbers.

<!-- <equation class="equation" label="eq:geometric_mean" align="center" raw="\biggl( \prod_{i=0}^{n-1} x_i \biggr)^{\frac{1}{n}} = \sqrt[n]{x_0 x_1 \cdots x_{n-1}}" alt="Equation for the geometric mean."> -->

```math
\biggl( \prod_{i=0}^{n-1} x_i \biggr)^{\frac{1}{n}} = \sqrt[n]{x_0 x_1 \cdots x_{n-1}}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrnangmean = require( '@stdlib/stats/incr/nangmean' );
```

#### incrnangmean()

Returns an accumulator `function` which incrementally computes a [geometric mean][geometric-mean], ignoring `NaN` values.

```javascript
var accumulator = incrnangmean();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [geometric mean][geometric-mean]. If not provided an input value `x`, the accumulator function returns the current [geometric mean][geometric-mean].

```javascript
var accumulator = incrnangmean();

var prod = accumulator( 2.0 );
// returns 2.0

prod = accumulator( 1.0 );
// returns ~1.414

prod = accumulator( NaN );
// returns ~1.414

prod = accumulator( 3.0 );
// returns ~1.817

prod = accumulator();
// returns ~1.817
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
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var uniform = require( '@stdlib/random/base/uniform' );
var incrnangmean = require( '@stdlib/stats/incr/nangmean' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrnangmean();

// For each simulated value, update the geometric mean...
for ( i = 0; i < 100; i++ ) {
    if ( bernoulli( 0.2 ) ) {
        v = NaN;
    } else {
        v = uniform( 0.0, 100.0 );
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

[geometric-mean]: https://en.wikipedia.org/wiki/Geometric_mean

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
