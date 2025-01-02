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

# Entropy

> Planck (discrete exponential) distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a Planck random variable is

<!-- <equation class="equation" label="eq:planck_entropy" align="center" raw="H\left( X \right) = \frac{\lambda e^{-\lambda}}{1 - e^{-\lambda}} - \log\left( 1 - e^{-\lambda} \right)" alt="Differential entropy for a Planck distribution."> -->

```math
H\left( X \right) = \frac{\lambda e^{-\lambda}}{1 - e^{-\lambda}} - \log\left( 1 - e^{-\lambda} \right)
```

<!-- </equation> -->

where `λ` is the shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/planck/entropy' );
```

#### entropy( lambda )

Returns the [differential entropy][entropy] of a Planck distribution with shape parameter `lambda` (in [nats][nats]).

```javascript
var v = entropy( 0.1 );
// returns ~3.3030

v = entropy( 1.5 );
// returns ~0.6833
```

If provided a shape parameter `lambda` which is `NaN` or nonpositive, the function returns `NaN`.

```javascript
var v = entropy( NaN );
// returns NaN

v = entropy( -1.5 );
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
var entropy = require( '@stdlib/stats/base/dists/planck/entropy' );

var lambda = uniform( 10, 0.1, 5.0 );

var v;
var i;
for ( i = 0; i < lambda.length; i++ ) {
    v = entropy( lambda[ i ] );
    console.log( 'λ: %d, H(X;λ): %d', lambda[ i ].toFixed( 4 ), v.toFixed( 4 ) );
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

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
