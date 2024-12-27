<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# Cumulative Distribution Function

> Planck (discrete exponential) distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a Planck random variable is

<!-- <equation class="equation" label="eq:planck_cdf" align="center" raw="F(x;\lambda) = 1 - e^{-\lambda \cdot (\lfloor x \rfloor + 1)}" alt="CDF for a Planck distribution."> -->

```math
F(x;\lambda) = 1 - e^{-\lambda (\lfloor x \rfloor + 1)}
```

<!-- </equation> -->

where `λ` is the shape parameter and `x` denotes the count of events in a quantized system.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/planck/cdf' );
```

#### cdf( x, lambda )

Evaluates the [cumulative distribution function][cdf] for a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var y = cdf( 2.0, 0.5 );
// returns ~0.7769

y = cdf( 2.0, 1.5 );
// returns ~0.9889
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.5 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided a shape parameter `lambda` which is nonpositive, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0 );
// returns NaN
```

#### cdf.factory( lambda )

Returns a function for evaluating the [cumulative distribution function][cdf] of a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var mycdf = cdf.factory( 1.5 );
var y = mycdf( 3.0 );
// returns ~0.9975

y = mycdf( 1.0 );
// returns ~0.9502
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/array/uniform' );
var cdf = require( '@stdlib/stats/base/dists/planck/cdf' );

var x = discreteUniform( 10, 0, 5 );
var lambda = uniform( 10, 0.1, 5.0 );

var y;
var i;
for ( i = 0; i < lambda.length; i++ ) {
    y = cdf( x[ i ], lambda[ i ] );
    console.log( 'x: %d, λ: %d, F(x;λ): %d', x[ i ].toFixed( 4 ), lambda[ i ].toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

</section>

<!-- /.links -->
