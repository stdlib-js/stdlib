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

# Variance

> [Bradford][bradford-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][variance] for a [Bradford][bradford-distribution] random variable is

<!-- <equation class="equation" label="eq:bradford_variance" align="center" raw="\mathop{\mathrm{Var}}\left( X \right) = \frac{(c+2) \ln(1+c) - 2c}{2c (\ln(1+c))^2}" alt="Variance for a Bradford distribution."> -->

```math
\mathop{\mathrm{Var}}\left( X \right) = \frac{(c+2) \ln(1+c) - 2c}{2c (\ln(1+c))^2}
```

<!-- <div class="equation" align="center" data-raw-text="\mathop{\mathrm{Var}}\left( X \right) = \frac{(c+2) \ln(1+c) - 2c}{2c (\ln(1+c))^2}" data-equation="eq:bradford_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bradford/variance/docs/img/equation_bradford_variance.svg" alt="Variance for a Bradford distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `c` is the shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var variance = require( '@stdlib/stats/base/dists/bradford/variance' );
```

#### variance( c )

Returns the [variance][variance] of a [Bradford][bradford-distribution] distribution with shape parameter `c`.

```javascript
var v = variance( 0.1 );
// returns ~0.083

v = variance( 10.0 );
// returns ~0.076
```

If provided a shape parameter `c <= 0`, the function returns `NaN`.

```javascript
var v = variance( 0.0 );
// returns NaN

v = variance( -1.5 );
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
var uniform = require( '@stdlib/random/array/uniform' );
var variance = require( '@stdlib/stats/base/dists/bradford/variance' );

var c = uniform( 10, 0.1, 10.0 );

var v;
var i;
for ( i = 0; i < c.length; i++ ) {
    v = variance( c[ i ] );
    console.log( 'c: %d, Var(X;c): %d', c[ i ].toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[bradford-distribution]: https://en.wikipedia.org/wiki/Bradford%27s_law

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
