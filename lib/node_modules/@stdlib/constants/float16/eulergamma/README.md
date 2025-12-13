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

# FLOAT16_EULER_GAMMA

> The [Euler–Mascheroni constant][eulergamma].

<section class="intro">

The [Euler–Mascheroni constant][eulergamma] `γ` is defined as the limiting difference between the harmonic series and the natural logarithm:

<!-- <equation class="equation" label="eq:eulergamma" align="center" raw="\gamma = \lim_{n \to \infty} \left( \sum_{k=1}^{n} \frac{1}{k} - \ln(n) \right)" alt="Euler–Mascheroni constant"> -->

```math
\gamma = \lim_{n \to \infty} \left( \sum_{k=1}^{n} \frac{1}{k} - \ln(n) \right)
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var FLOAT16_EULER_GAMMA = require( '@stdlib/constants/float16/eulergamma' );
```

#### FLOAT16_EULER_GAMMA

The [Euler–Mascheroni constant][eulergamma].

```javascript
var bool = ( FLOAT16_EULER_GAMMA === 0.5771484375 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

The value is approximately `0.5772156649015328606...` in double precision. Due to the limited precision of half-precision floating-point format (float16), the constant is rounded to `0.5771484375`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT16_EULER_GAMMA = require( '@stdlib/constants/float16/eulergamma' );

console.log( FLOAT16_EULER_GAMMA );
// => 0.5771484375
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[eulergamma]: https://en.wikipedia.org/wiki/Euler-Mascheroni_constant

</section>

<!-- /.links -->
