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

# Kurtosis

> [Laplace][laplace-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [Laplace][laplace-distribution] random variable with location parameter `mu` and scale parameter `b > 0` is

<!-- <equation class="equation" label="eq:laplace_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = 3" alt="Excess kurtosis for a Laplace distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = 3" data-equation="eq:laplace_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/laplace/kurtosis/docs/img/equation_laplace_kurtosis.svg" alt="Excess kurtosis for a Laplace distribution.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/laplace/kurtosis' );
```

#### kurtosis( mu, b )

Returns the [excess kurtosis][kurtosis] for a [Laplace][laplace-distribution] distribution with location parameter `mu` and scale parameter `b`.

```javascript
var y = kurtosis( 2.0, 1.0 );
// returns 3.0

y = kurtosis( 0.0, 1.0 );
// returns 3.0

y = kurtosis( -1.0, 4.0 );
// returns 3.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = kurtosis( NaN, 1.0 );
// returns NaN

y = kurtosis( 0.0, NaN );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = kurtosis( 0.0, 0.0 );
// returns NaN

y = kurtosis( 0.0, -1.0 );
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
var kurtosis = require( '@stdlib/stats/base/dists/laplace/kurtosis' );

var mu;
var b;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = ( randu()*10.0 ) - 5.0;
    b = randu() * 20.0;
    y = kurtosis( mu, b );
    console.log( 'µ: %d, b: %d, Kurt(X;µ,b): %d', mu.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
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

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
