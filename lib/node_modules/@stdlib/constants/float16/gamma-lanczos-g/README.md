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

# FLOAT16_GAMMA_LANCZOS_G

> Arbitrary constant `g` to be used in Lanczos approximation functions.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var FLOAT16_GAMMA_LANCZOS_G = require( '@stdlib/constants/float16/gamma-lanczos-g' );
```

#### FLOAT16_GAMMA_LANCZOS_G

Arbitrary constant `g` to be used in [Lanczos approximation][lanczos-approximation] functions.

```javascript
var bool = ( FLOAT16_GAMMA_LANCZOS_G === 4.7421875 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

The value is `607/128 = 4.7421875`, which is exactly representable in half-precision floating-point format. This constant is used in the Lanczos approximation of the Gamma function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT16_GAMMA_LANCZOS_G = require( '@stdlib/constants/float16/gamma-lanczos-g' );

console.log( FLOAT16_GAMMA_LANCZOS_G );
// => 4.7421875
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[lanczos-approximation]: https://en.wikipedia.org/wiki/Lanczos_approximation

</section>

<!-- /.links -->
