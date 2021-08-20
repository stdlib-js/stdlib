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

> [Gumbel][gumbel-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [Gumbel][gumbel-distribution] random variable with location `μ` and scale `β` is

<!-- <equation class="equation" label="eq:gumbel_skewness" align="center" raw="\operatorname{skew}\left( X \right) = {\frac{12{\sqrt{6}}\,\zeta(3)}{\pi^{3}}} \approx 1.14" alt="Skewness for a Gumbel distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = {\frac{12{\sqrt{6}}\,\zeta(3)}{\pi^{3}}} \approx 1.14" data-equation="eq:gumbel_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/gumbel/skewness/docs/img/equation_gumbel_skewness.svg" alt="Skewness for a Gumbel distribution.">
    <br>
</div>

<!-- </equation> -->

where `ζ` is the [Riemann zeta function][zeta].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/gumbel/skewness' );
```

#### skewness( mu, beta )

Returns the [skewness][skewness] for a [Gumbel][gumbel-distribution] distribution with location parameter `mu` and scale parameter `beta`.

```javascript
var y = skewness( 2.0, 1.0 );
// returns ~1.14

y = skewness( 0.0, 1.0 );
// returns ~1.14

y = skewness( -1.0, 4.0 );
// returns ~1.14
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = skewness( NaN, 1.0 );
// returns NaN

y = skewness( 0.0, NaN );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = skewness( 0.0, 0.0 );
// returns NaN

y = skewness( 0.0, -1.0 );
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
var skewness = require( '@stdlib/stats/base/dists/gumbel/skewness' );

var beta;
var mu;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = ( randu()*10.0 ) - 5.0;
    beta = randu() * 20.0;
    y = skewness( mu, beta );
    console.log( 'µ: %d, β: %d, skew(X;µ,β): %d', mu.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
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

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

[zeta]: https://en.wikipedia.org/wiki/Riemann_zeta_function

</section>

<!-- /.links -->
