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

> [Cauchy][cauchy-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a [Cauchy][cauchy-distribution] random variable with location parameter `x0` and scale parameter `Ɣ > 0` is

<!-- <equation class="equation" label="eq:cauchy_mode" align="center" raw="\operatorname{mode}\left( X \right) = x_0" alt="Mode for a Cauchy distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{mode}\left( X \right) = x_0" data-equation="eq:cauchy_mode">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/cauchy/mode/docs/img/equation_cauchy_mode.svg" alt="Mode for a Cauchy distribution.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mode = require( '@stdlib/stats/base/dists/cauchy/mode' );
```

#### mode( x0, gamma )

Returns the [mode][mode] of a [Cauchy][cauchy-distribution] distribution with location parameter `x0` and scale parameter `gamma`.

```javascript
var v = mode( 10.0, 5.0 );
// returns 10.0

v = mode( 7.0, 2.0 );
// returns 7.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = mode( NaN, 5.0 );
// returns NaN

v = mode( 20.0, NaN );
// returns NaN
```

If provided `gamma <= 0`, the function returns `NaN`.

```javascript
var v = mode( 1.0, -1.0 );
// returns NaN

v = mode( 1.0, 0.0 );
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
var mode = require( '@stdlib/stats/base/dists/cauchy/mode' );

var gamma;
var x0;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    x0 = randu() * 100.0;
    gamma = ( randu()*10.0 ) + EPS;
    v = mode( x0, gamma );
    console.log( 'x0: %d, γ: %d, mode(X;x0,γ): %d', x0.toFixed( 4 ), gamma.toFixed( 4 ), v.toFixed( 4 ) );
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

[cauchy-distribution]: https://en.wikipedia.org/wiki/Cauchy_distribution

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->
