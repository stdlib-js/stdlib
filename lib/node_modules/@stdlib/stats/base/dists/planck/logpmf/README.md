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

# Logarithm of Probability Mass Function

> Evaluate the logarithm of the [probability mass function][pmf] (PMF) for a Planck (discrete exponential) distribution.

<section class="intro">

The [probability mass function][pmf] (PMF) for a Planck random variable is defined as

<!-- <equation class="equation" label="eq:planck_pmf" align="center" raw="\Pr(X = x, \lambda) = \begin{cases}(1 - e^{-\lambda})e^{-\lambda x} & \text{for } x = 0, 1, 2, \ldots \\ 0 & \text{otherwise} \end{cases}" alt="Probability mass function (PMF) for a Planck distribution."> -->

```math
\Pr(X = x, \lambda) = \begin{cases}(1 - e^{-\lambda})e^{-\lambda x} & \text{for } x = 0, 1, 2, \ldots \\ 0 & \text{otherwise} \end{cases}
```

<!-- </equation> -->

where `λ` is the shape parameter and `x` denotes the count of events in a quantized system.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpmf = require( '@stdlib/stats/base/dists/planck/logpmf' );
```

#### logpmf( x, lambda )

Evaluates the logarithm of the [probability mass function][pmf] (PMF) of a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var y = logpmf( 4.0, 0.3 );
// returns ~-2.5502

y = logpmf( 2.0, 1.7 );
// returns ~-3.6017

y = logpmf( -1.0, 2.5 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpmf( NaN, 0.0 );
// returns NaN

y = logpmf( 0.0, NaN );
// returns NaN
```

If provided a shape parameter `lambda` which is nonpositive number, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, -1.0 );
// returns NaN
```

#### logpmf.factory( lambda )

Returns a function for evaluating the logarithm of the [probability mass function][pmf] (PMF) of a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var mylogpmf = logpmf.factory( 0.5 );
var y = mylogpmf( 3.0 );
// returns ~-2.4328

y = mylogpmf( 1.0 );
// returns ~-1.4328
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpmf` or `logcdf` functions is preferable to manually computing the logarithm of the `pmf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/array/uniform' );
var logpmf = require( '@stdlib/stats/base/dists/planck/logpmf' );

var x = discreteUniform( 10, 0, 5 );
var lambda = uniform( 10, 0.1, 5.0 );

var y;
var i;
for ( i = 0; i < lambda.length; i++ ) {
    y = logpmf( x[ i ], lambda[ i ] );
    console.log( 'x: %d, λ: %d, ln( P( X = x; λ ) ): %d', x[ i ], lambda[ i ].toFixed( 4 ), y.toFixed( 4 ) );
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

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
