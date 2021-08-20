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

# Skewness

> [Pareto (Type I)][pareto-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [Pareto (Type I)][pareto-distribution] random variable with shape parameter `α` and scale parameter `β` is

<!-- <equation class="equation" label="eq:pareto_type1_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \frac{2(1+\alpha)}{\alpha-3}\,\sqrt{\frac{\alpha-2}{\alpha}}" alt="Skewness for a Pareto (Type I) distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \frac{2(1+\alpha)}{\alpha-3}\,\sqrt{\frac{\alpha-2}{\alpha}}" data-equation="eq:pareto_type1_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/pareto-type1/skewness/docs/img/equation_pareto_type1_skewness.svg" alt="Skewness for a Pareto (Type I) distribution.">
    <br>
</div>

<!-- </equation> -->

for `α > 3` and `β > 0`. Otherwise, the skewness is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/pareto-type1/skewness' );
```

#### skewness( alpha, beta )

Returns the [skewness][skewness] of a [Pareto (Type I)][pareto-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var v = skewness( 3.5, 1.0 );
// returns ~11.784

v = skewness( 4.0, 12.0 );
// returns ~7.071

v = skewness( 8.0, 2.0 );
// returns ~3.118
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = skewness( NaN, 2.0 );
// returns NaN

v = skewness( 2.0, NaN );
// returns NaN
```

If provided `alpha <= 3`, the function returns `NaN`.

```javascript
var v = skewness( 3.0, 1.0 );
// returns NaN

v = skewness( 1.0, 3.0 );
// returns NaN

v = skewness( 0.0, 2.0 );
// returns NaN

v = skewness( -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var v = skewness( 1.0, 0.0 );
// returns NaN

v = skewness( 1.0, -1.0 );
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
var skewness = require( '@stdlib/stats/base/dists/pareto-type1/skewness' );

var alpha;
var beta;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*10.0 ) + EPS;
    beta = ( randu()*10.0 ) + EPS;
    v = skewness( alpha, beta );
    console.log( 'α: %d, β: %d, skew(X;α,β): %d', alpha.toFixed( 4 ), beta.toFixed( 4 ), v.toFixed( 4 ) );
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

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
