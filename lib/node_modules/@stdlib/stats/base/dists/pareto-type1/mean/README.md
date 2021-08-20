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

# Mean

> [Pareto (Type I)][pareto-distribution] distribution [expected value][expected-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][expected-value] for a [Pareto (Type I)][pareto-distribution] random variable is

<!-- <equation class="equation" label="eq:pareto_type1_expectation" align="center" raw="\mathbb{E}\left[ X \right] = \begin{cases} \infty & \text{for }\alpha\le 1 \\ \frac{\alpha\,\beta}{\alpha-1} & \text{for }\alpha>1 \end{cases}" alt="Expected value for a Pareto (Type I) distribution."> -->

<div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = \begin{cases} \infty &amp; \text{for }\alpha\le 1 \\ \frac{\alpha\,\beta}{\alpha-1} &amp; \text{for }\alpha&gt;1 \end{cases}" data-equation="eq:pareto_type1_expectation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/pareto-type1/mean/docs/img/equation_pareto_type1_expectation.svg" alt="Expected value for a Pareto (Type I) distribution.">
    <br>
</div>

<!-- </equation> -->

where `α > 0` is the shape parameter and `β > 0` is the scale parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats/base/dists/pareto-type1/mean' );
```

#### mean( alpha, beta )

Returns the [expected value][expected-value] of a [Pareto (Type I)][pareto-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var v = mean( 2.0, 1.0 );
// returns 2.0

v = mean( 4.0, 12.0 );
// returns 16.0

v = mean( 8.0, 2.0 );
// returns ~2.286
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = mean( NaN, 2.0 );
// returns NaN

v = mean( 2.0, NaN );
// returns NaN
```

If provided `0 < alpha <= 1`, the function returns `+Infinity`.

```javascript
var v = mean( 0.8, 1.0 );
// returns Infinity
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var v = mean( 0.0, 1.0 );
// returns NaN

v = mean( -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var v = mean( 1.0, 0.0 );
// returns NaN

v = mean( 1.0, -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var mean = require( '@stdlib/stats/base/dists/pareto-type1/mean' );

var alpha;
var beta;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*10.0 ) + EPS;
    beta = ( randu()*10.0 ) + EPS;
    v = mean( alpha, beta );
    console.log( 'α: %d, β: %d, E(X;α,β): %d', alpha.toFixed( 4 ), beta.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pareto-distribution]: https://en.wikipedia.org/wiki/Pareto_distribution

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->
