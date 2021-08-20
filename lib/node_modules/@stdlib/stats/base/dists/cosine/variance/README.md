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

> [Raised cosine][cosine-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][variance] for a [raised cosine][cosine-distribution] random variable with location parameter `mu` and scale parameter `s` is

<!-- <equation class="equation" label="eq:cosine_variance" align="center" raw="\operatorname{Var}\left( X \right) = s^{2}\left({\frac{1}{3}}-{\frac{2}{\pi^{2}}}\right)" alt="Variance for a raised cosine distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Var}\left( X \right) = s^{2}\left({\frac{1}{3}}-{\frac{2}{\pi^{2}}}\right)" data-equation="eq:cosine_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/cosine/variance/docs/img/equation_cosine_variance.svg" alt="Variance for a raised cosine distribution.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var variance = require( '@stdlib/stats/base/dists/cosine/variance' );
```

#### variance( mu, s )

Returns the [variance][variance] for a [raised cosine][cosine-distribution] distribution with location parameter `mu` and scale parameter `s`.

```javascript
var y = variance( 2.0, 1.0 );
// returns ~0.131

y = variance( 0.0, 1.0 );
// returns ~0.131

y = variance( -1.0, 4.0 );
// returns ~2.091
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = variance( NaN, 1.0 );
// returns NaN

y = variance( 0.0, NaN );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = variance( 0.0, 0.0 );
// returns NaN

y = variance( 0.0, -1.0 );
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
var variance = require( '@stdlib/stats/base/dists/cosine/variance' );

var mu;
var s;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = ( randu()*10.0 ) - 5.0;
    s = randu() * 20.0;
    y = variance( mu, s );
    console.log( 'µ: %d, s: %d, Var(X;µ,s): %d', mu.toFixed( 4 ), s.toFixed( 4 ), y.toFixed( 4 ) );
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

[cosine-distribution]: https://en.wikipedia.org/wiki/Raised_cosine_distribution

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
