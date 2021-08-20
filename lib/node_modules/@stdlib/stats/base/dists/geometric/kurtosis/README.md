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

> [Geometric][geometric-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [geometric][geometric-distribution] random variable is

<!-- <equation class="equation" label="eq:geometric_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = 6+{\frac{p^{2}}{1-p}}" alt="Excess kurtosis for a geometric distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = 6+{\frac{p^{2}}{1-p}}" data-equation="eq:geometric_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/geometric/kurtosis/docs/img/equation_geometric_kurtosis.svg" alt="Excess kurtosis for a geometric distribution.">
    <br>
</div>

<!-- </equation> -->

where `p` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/geometric/kurtosis' );
```

#### kurtosis( p )

Returns the [excess kurtosis][kurtosis] of a [geometric][geometric-distribution] distribution with success probability `p`.

```javascript
var v = kurtosis( 0.1 );
// returns ~6.011

v = kurtosis( 0.5 );
// returns 6.5
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = kurtosis( NaN );
// returns NaN

v = kurtosis( 1.5 );
// returns NaN

v = kurtosis( -1.0 );
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
var round = require( '@stdlib/math/base/special/round' );
var kurtosis = require( '@stdlib/stats/base/dists/geometric/kurtosis' );

var v;
var i;
var p;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    v = kurtosis( p );
    console.log( 'p: %d, Kurt(X;p): %d', p.toFixed( 4 ), v.toFixed( 4 ) );
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

[geometric-distribution]: https://en.wikipedia.org/wiki/Geometric_distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
