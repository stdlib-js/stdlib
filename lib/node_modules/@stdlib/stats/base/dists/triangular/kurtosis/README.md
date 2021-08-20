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

> [Triangular][triangular-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [triangular][triangular-distribution] random variable with lower limit `a`, upper limit `b`, and mode `c` is 

<!-- <equation class="equation" label="eq:triangular_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = -\frac{3}{5}" alt="Excess kurtosis for a triangular distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = -\frac{3}{5}" data-equation="eq:triangular_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@556e0ebc42f54244079cecc91c0883bb6c442244/lib/node_modules/@stdlib/stats/base/dists/triangular/kurtosis/docs/img/equation_triangular_kurtosis.svg" alt="Excess kurtosis for a triangular distribution.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats/base/dists/triangular/kurtosis' );
```

#### kurtosis( a, b, c )

Returns the [excess kurtosis][kurtosis] of a [triangular][triangular-distribution] distribution with minimum support `a`, maximum support`b`, and mode `c`.

```javascript
var v = kurtosis( 0.0, 1.0, 0.8 );
// returns -0.6

v = kurtosis( 4.0, 12.0, 5.0 );
// returns -0.6

v = kurtosis( 2.0, 8.0, 5.0 );
// returns -0.6
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = kurtosis( NaN, 4.0, 2.0 );
// returns NaN

v = kurtosis( 0.0, NaN, 2.0 );
// returns NaN

v = kurtosis( 0.0, 4.0, NaN );
// returns NaN
```

If provided parameters not satisfying `a <= c <= b`, the function returns `NaN`.

```javascript
var y = kurtosis( 1.0, 0.0, 1.5 );
// returns NaN

y = kurtosis( 0.0, 1.0, -1.0 );
// returns NaN

y = kurtosis( 0.0, -1.0, 0.5 );
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
var kurtosis = require( '@stdlib/stats/base/dists/triangular/kurtosis' );

var a;
var b;
var c;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = ( randu()*10.0 );
    b = ( randu()*10.0 ) + a;
    c = ( randu()*( b-a ) ) + a;
    v = kurtosis( a, b, c );
    console.log( 'a: %d, b: %d, c: %d, Kurt(X;a,b,c): %d', a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), v.toFixed( 4 ) );
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

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
