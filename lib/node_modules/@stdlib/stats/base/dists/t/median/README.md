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

> [Student's t][t-distribution] distribution [median][median].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [median][median] for a [Student's t][t-distribution] random variable with degrees of freedom `ν` is

<!-- <equation class="equation" label="eq:t_median" align="center" raw="\operatorname{Median}\left( X \right) = 0" alt="Median for a Student's t distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Median}\left( X \right) = 0" data-equation="eq:t_median">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/t/median/docs/img/equation_t_median.svg" alt="Median for a Student's t distribution.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var median = require( '@stdlib/stats/base/dists/t/median' );
```

#### median( v )

Returns the [median][median] of a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var y = median( 9.0 );
// returns 0.0

y = median( 1.5 );
// returns 0.0
```

If provided `v < 0`, the function returns `NaN`.

```javascript
var y = median( -1.0 );
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
var median = require( '@stdlib/stats/base/dists/t/median' );

var v;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    v = randu() * 20.0;
    y = median( v );
    console.log( 'v: %d, Median(X,v): %d', v.toFixed( 4 ), y.toFixed( 4 ) );
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

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

[median]: https://en.wikipedia.org/wiki/Median

</section>

<!-- /.links -->
