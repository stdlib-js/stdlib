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

# FLOAT16_PHI

> [Golden ratio][phi].

<section class="intro">

The [golden ratio][phi] can be defined algebraically as

<!-- <equation class="equation" label="eq:golden_ratio" align="center" raw="\phi = \frac{1 + \sqrt{5}}{2}" alt="Golden ratio"> -->

```math
\phi = \frac{1 + \sqrt{5}}{2}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var FLOAT16_PHI = require( '@stdlib/constants/float16/phi' );
```

#### FLOAT16_PHI

The [golden ratio][phi].

```javascript
var bool = ( FLOAT16_PHI === 1.6181640625 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

The value is approximately `1.6180339887498948482...` in double precision. Due to the limited precision of half-precision floating-point format (float16), the constant is rounded to `1.6181640625`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT16_PHI = require( '@stdlib/constants/float16/phi' );

console.log( FLOAT16_PHI );
// => 1.6181640625
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[phi]: https://en.wikipedia.org/wiki/Golden_ratio

</section>

<!-- /.links -->
