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

# Mode

> [Chi-squared][chisquare-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a [chi-squared][chisquare-distribution] random variable is

<!-- <equation class="equation" label="eq:chisquare_mode" align="center" raw="\operatorname{mode}\left( X \right) = \max(k-2,0)" alt="Mode for a chi-squared distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{mode}\left( X \right) = \max(k-2,0)" data-equation="eq:chisquare_mode">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chisquare/mode/docs/img/equation_chisquare_mode.svg" alt="Mode for a chi-squared distribution.">
    <br>
</div>

<!-- </equation> -->

where `k >= 0` is the degrees of freedom.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mode = require( '@stdlib/stats/base/dists/chisquare/mode' );
```

#### mode( k )

Returns the [mode][mode] of a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var v = mode( 9.0 );
// returns 7.0

v = mode( 0.5 );
// returns 0.0
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var v = mode( -1.0 );
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
var mode = require( '@stdlib/stats/base/dists/chisquare/mode' );

var k;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    k = randu() * 20.0;
    v = mode( k );
    console.log( 'k: %d, mode(X,k): %d', k.toFixed( 4 ), v.toFixed( 4 ) );
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

[chisquare-distribution]: https://en.wikipedia.org/wiki/Chi-squared_distribution

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->
