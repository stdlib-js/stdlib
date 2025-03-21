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

> [Fréchet][frechet-distribution] distribution [expected value][mean].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][mean] for a [Fréchet][frechet-distribution] random variable shape `α > 0`, scale `s > 0`, and location parameter `m` is

<!-- <equation class="equation" label="eq:frechet_mean" align="center" raw="\mathbb{E}\left[ X \right] = \begin{cases}\ m+s\Gamma\left(1-{\frac{1}{\alpha}}\right) & {\text{ for }}\alpha >1\\\ \infty & {\text{ otherwise }}\end{cases}" alt="Expected value for a Fréchet distribution."> -->

```math
\mathbb{E}\left[ X \right] = \begin{cases}\ m+s\Gamma\left(1-{\frac{1}{\alpha}}\right) & {\text{ for }}\alpha >1\\\ \infty & {\text{ otherwise }}\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = \begin{cases}\ m+s\Gamma\left(1-{\frac{1}{\alpha}}\right) &amp; {\text{ for }}\alpha &gt;1\\\ \infty &amp; {\text{ otherwise }}\end{cases}" data-equation="eq:frechet_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/mean/docs/img/equation_frechet_mean.svg" alt="Expected value for a Fréchet distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `Γ` is the [gamma function][gamma-function].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats/base/dists/frechet/mean' );
```

#### mean( alpha, s, m )

Returns the [expected value][mean] for a [Fréchet][frechet-distribution] distribution with shape `alpha > 0`, scale `s > 0`, and location parameter `m`.

```javascript
var y = mean( 2.0, 1.0, 1.0 );
// returns ~2.772

y = mean( 4.0, 4.0, -1.0 );
// returns ~3.902

y = mean( 1.0, 1.0, 2.0 );
// returns Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mean( NaN, 1.0, -2.0 );
// returns NaN

y = mean( 1.0, NaN, -2.0 );
// returns NaN

y = mean( 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = mean( 0.0, 3.0, 2.0 );
// returns NaN

y = mean( 0.0, -1.0, 2.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = mean( 1.0, 0.0, 2.0 );
// returns NaN

y = mean( 1.0, -1.0, 2.0 );
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
var mean = require( '@stdlib/stats/base/dists/frechet/mean' );

var alpha;
var m;
var s;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*20.0 ) + EPS;
    s = ( randu()*20.0 ) + EPS;
    m = ( randu()*40.0 ) - 20.0;
    y = mean( alpha, s, m );
    console.log( 'α: %d, s: %d, m: %d, E(X;α,s,m): %d', alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[mean]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->
