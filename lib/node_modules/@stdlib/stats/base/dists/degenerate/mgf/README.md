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

# Moment-Generating Function

> [Degenerate][degenerate] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [degenerate][degenerate] random variable is

<!-- <equation class="equation" label="eq:degenerate_mgf" align="center" raw="M_X(t) := e^{\mu t}" alt="Moment-generating function (MGF) of a degenerate distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := e^{\mu t}" data-equation="eq:degenerate_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/degenerate/mgf/docs/img/equation_degenerate_mgf.svg" alt="Moment-generating function (MGF) of a degenerate distribution.">
    <br>
</div>

<!-- </equation> -->

where `mu` is the distribution mean.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/degenerate/mgf' );
```

#### mgf( t, mu )

Evaluates the moment-generating function ([MGF][mgf]) of a [degenerate][degenerate] distribution with parameter `mu` (mean).

```javascript
var y = mgf( 1.0, 1.0 );
// returns ~2.718

y = mgf( 2.0, 3.0 );
// returns ~403.429
```

If provided `NaN` for any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0 );
// returns NaN

y = mgf( 0.0, NaN );
// returns NaN
```

#### mgf.factory( mu )

Returns a function for evaluating the [moment-generating function][mgf] of a [degenerate][degenerate] distribution with parameter `mu` (mean).

```javascript
var mymgf = mgf.factory( 10.0 );

var y = mymgf( 0.1 );
// returns ~2.718
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
var mgf = require( '@stdlib/stats/base/dists/degenerate/mgf' );

var mu;
var t;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    t = round( randu()*5.0 );
    mu = round( randu()*5.0 );
    y = mgf( t, mu );
    console.log( 'x: %d, µ: %d, M_X(t;µ): %d', t, mu, y );
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

[degenerate]: https://en.wikipedia.org/wiki/Degenerate_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
