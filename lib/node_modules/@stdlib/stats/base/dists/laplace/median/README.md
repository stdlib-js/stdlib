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

# Median

> [Laplace][laplace-distribution] distribution [median][median].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [median][median] for a [Laplace][laplace-distribution] random variable with location parameter `mu` and scale parameter `b > 0` is

<!-- <equation class="equation" label="eq:laplace_median" align="center" raw="\operatorname{Median}\left( X \right) = \mu" alt="Median for a Laplace distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Median}\left( X \right) = \mu" data-equation="eq:laplace_median">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/laplace/median/docs/img/equation_laplace_median.svg" alt="Median for a Laplace distribution.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var median = require( '@stdlib/stats/base/dists/laplace/median' );
```

#### median( mu, b )

Returns the [median][median] for a [Laplace][laplace-distribution] distribution with location parameter `mu` and scale parameter `b`.

```javascript
var y = median( 2.0, 1.0 );
// returns 2.0

y = median( 0.0, 1.0 );
// returns 0.0

y = median( -1.0, 4.0 );
// returns -1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = median( NaN, 1.0 );
// returns NaN

y = median( 0.0, NaN );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = median( 0.0, 0.0 );
// returns NaN

y = median( 0.0, -1.0 );
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
var median = require( '@stdlib/stats/base/dists/laplace/median' );

var mu;
var b;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = ( randu()*10.0 ) - 5.0;
    b = randu() * 20.0;
    y = median( mu, b );
    console.log( 'µ: %d, b: %d, Median(X;µ,b): %d', mu.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
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

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

[median]: https://en.wikipedia.org/wiki/Median

</section>

<!-- /.links -->
