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

> [Geometric][geometric-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [geometric][geometric-distribution] random variable is

<!-- <equation class="equation" label="eq:geometric_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{pe^t}{1-(1-p) e^t} \text{ for } t<-\ln(1-p)" alt="Moment-generating function (MGF) for a geometric distribution."> -->

<div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{pe^t}{1-(1-p) e^t} \text{ for } t&lt;-\ln(1-p)" data-equation="eq:geometric_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/geometric/mgf/docs/img/equation_geometric_mgf_function.svg" alt="Moment-generating function (MGF) for a geometric distribution.">
    <br>
</div>

<!-- </equation> -->

where `0 < p <= 1` is the success probability. For `t >= -ln(1-p)`, the MGF is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/geometric/mgf' );
```

#### mgf( t, p )

Evaluates the moment-generating function ([MGF][mgf]) of a [geometric][geometric-distribution] distribution with success probability `p`.

```javascript
var y = mgf( 0.2, 0.5 );
// returns ~1.569

y = mgf( 0.4, 0.5 );
// returns ~2.936
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0 );
// returns NaN

y = mgf( 0.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = mgf( -2.0, -1.0 );
// returns NaN

y = mgf( 0.2, 2.0 );
// returns NaN
```

If `t >= -ln(1-p)`, the function returns `NaN`.

```javascript
var y = mgf( 0.8, 0.5 );
// returns NaN
```

#### mgf.factory( p )

Returns a function for evaluating the [moment-generating function][mgf] of a [geometric][geometric-distribution] distribution with parameter `p` (success probability).

```javascript
var mymgf = mgf.factory( 0.8 );
var y = mymgf( -0.2 );
// returns ~0.783
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
var mgf = require( '@stdlib/stats/base/dists/geometric/mgf' );

var p;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu();
    p = randu();
    y = mgf( t, p );
    console.log( 't: %d, p: %d, M_X(t;p): %d', t, p.toFixed( 4 ), y.toFixed( 4 ) );
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

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
