<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

> Planck (discrete exponential) distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a Planck random variable is

<!-- <equation class="equation" label="eq:planck_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{1 - e^{-\lambda}}{1 - e^{t - \lambda}}" alt="Moment-generating function (MGF) for the Planck distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = \frac{1 - e^{-\lambda}}{1 - e^{t - \lambda}}
```

<!-- </equation> -->

where `λ` is the shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mgf = require( '@stdlib/stats/base/dists/planck/mgf' );
```

#### mgf( t, lambda )

Evaluates the moment-generating function ([MGF][mgf]) of a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var y = mgf( 0.2, 0.5 );
// returns ~1.5181

y = mgf( 0.4, 1.5 );
// returns ~1.1645
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0 );
// returns NaN

y = mgf( 0.0, NaN );
// returns NaN
```

If provided a shape parameter `lambda` which is nonpositive, the function returns `NaN`.

```javascript
var y = mgf( 2.0, -1.0 );
// returns NaN
```

#### mgf.factory( lambda )

Returns a function for evaluating the [moment-generating function][mgf] of a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var mymgf = mgf.factory( 0.8 );
var y = mymgf( -0.2 );
// returns ~0.8711
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
var uniform = require( '@stdlib/random/array/uniform' );
var mgf = require( '@stdlib/stats/base/dists/planck/mgf' );

var lambda = uniform( 10, 0.1, 5.0 );
var t = uniform( 10, 0.0, 10.0 );

var y;
var i;
for ( i = 0; i < lambda.length; i++ ) {
    y = mgf( t[ i ], lambda[ i ] );
    console.log( 't: %d, λ: %d, M_X(t;λ): %d', t[ i ].toFixed( 4 ), lambda[ i ].toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
