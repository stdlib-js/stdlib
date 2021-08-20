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

# Variance

> [Pareto (Type I)][pareto-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][variance] for a [Pareto (Type I)][pareto-distribution] random variable is

<!-- <equation class="equation" label="eq:pareto_type1_variance" align="center" raw="\operatorname{Var}\left( X \right) = \begin{cases} \infty & \text{for }\alpha\in(0,2] \\ \frac{\beta^2\alpha}{(\alpha-1)^2(\alpha-2)} & \text{for }\alpha>2 \end{cases}" alt="Variance for a Pareto (Type I) distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Var}\left( X \right) = \begin{cases} \infty &amp; \text{for }\alpha\in(0,2] \\ \frac{\beta^2\alpha}{(\alpha-1)^2(\alpha-2)} &amp; \text{for }\alpha&gt;2 \end{cases}" data-equation="eq:pareto_type1_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/pareto-type1/variance/docs/img/equation_pareto_type1_variance.svg" alt="Variance for a Pareto (Type I) distribution.">
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
var variance = require( '@stdlib/stats/base/dists/pareto-type1/variance' );
```

#### variance( alpha, beta )

Returns the [variance][variance] of a [Pareto (Type I)][pareto-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var v = variance( 2.5, 1.0 );
// returns ~2.222

v = variance( 4.0, 12.0 );
// returns 32.0

v = variance( 8.0, 2.0 );
// returns ~0.109
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = variance( NaN, 2.0 );
// returns NaN

v = variance( 2.0, NaN );
// returns NaN
```

If provided `0 < alpha <= 2`, the function returns `+Infinity`.

```javascript
var v = variance( 0.5, 2.0 );
// returns Infinity

v = variance( 1.5, 1.0 );
// returns Infinity
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var v = variance( 0.0, 1.0 );
// returns NaN

v = variance( -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var v = variance( 1.0, 0.0 );
// returns NaN

v = variance( 1.0, -1.0 );
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
var variance = require( '@stdlib/stats/base/dists/pareto-type1/variance' );

var alpha;
var beta;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*10.0 ) + EPS;
    beta = ( randu()*10.0 ) + EPS;
    v = variance( alpha, beta );
    console.log( 'α: %d, β: %d, Var(X;α,β): %d', alpha.toFixed( 4 ), beta.toFixed( 4 ), v.toFixed( 4 ) );
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

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
