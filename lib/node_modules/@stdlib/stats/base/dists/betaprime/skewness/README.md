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

> [Beta prime][betaprime-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [beta prime][betaprime-distribution] random variable with first shape parameter `α` and second shape parameter `β` is

<!-- <equation class="equation" label="eq:betaprime_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \frac{2(2\alpha + \beta - 1)}{\beta - 3}{\sqrt{\frac{\beta - 2}{\alpha (\alpha + \beta - 1)}}}" alt="Skewness for a beta prime distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \frac{2(2\alpha + \beta - 1)}{\beta - 3}{\sqrt{\frac{\beta - 2}{\alpha (\alpha + \beta - 1)}}}" data-equation="eq:betaprime_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/betaprime/skewness/docs/img/equation_betaprime_skewness.svg" alt="Skewness for a beta prime distribution.">
    <br>
</div>

<!-- </equation> -->

when `α > 0` and `β > 3`. Otherwise, the skewness is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/betaprime/skewness' );
```

#### skewness( alpha, beta )

Returns the [skewness][skewness] of a [beta prime][betaprime-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var v = skewness( 2.0, 4.0 );
// returns ~6.261

v = skewness( 4.0, 12.0 );
// returns ~1.724

v = skewness( 8.0, 4.0 );
// returns ~5.729
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = skewness( NaN, 4.0 );
// returns NaN

v = skewness( 2.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var v = skewness( 0.0, 4.0 );
// returns NaN

v = skewness( -1.0, 4.0 );
// returns NaN
```

If provided `beta <= 3`, the function returns `NaN`.

```javascript
var v = skewness( 1.0, 2.5 );
// returns NaN

v = skewness( 1.0, 0.0 );
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
var skewness = require( '@stdlib/stats/base/dists/betaprime/skewness' );

var alpha;
var beta;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*10.0 ) + EPS;
    beta = ( randu()*10.0 ) + 3.0 + EPS;
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

[betaprime-distribution]: https://en.wikipedia.org/wiki/Beta_prime_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
