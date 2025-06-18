<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

> Planck distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][variance] for a Planck random variable is

<!-- <equation class="equation" label="eq:planck_variance" align="center" raw="\operatorname{Var}\left( X \right) = \frac{e^{-\lambda}}{\left( 1 - e^{-\lambda} \right)^{2}}" alt="Variance for a Planck distribution."> -->

```math
\mathop{\mathrm{Var}}\left( X \right) = \frac{e^{-\lambda}}{\left( 1 - e^{-\lambda} \right)^{2}}
```

<!-- </equation> -->

where `λ` is the shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var variance = require( '@stdlib/stats/base/dists/planck/variance' );
```

#### variance( lambda )

Returns the [variance][variance] of a Planck distribution with shape parameter `λ`.

```javascript
var v = variance( 0.1 );
// returns ~99.9167

v = variance( 1.5 );
// returns ~0.3697
```

If provided a shape parameter `λ` which is nonpositive, the function returns `NaN`.

```javascript
var v = variance( NaN );
// returns NaN

v = variance( -1.0 );
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
var variance = require( '@stdlib/stats/base/dists/planck/variance' );

var lambda = uniform( 10, 0.1, 10.0 );

var v;
var i;
for ( i = 0; i < lambda.length; i++ ) {
    v = variance( lambda[ i ] );
    console.log( 'λ: %d, Var(X;λ): %d', lambda[ i ].toFixed( 4 ), v.toFixed( 4 ) );
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

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
