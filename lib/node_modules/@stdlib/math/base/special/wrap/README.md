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

# wrap

> Wrap a value on the half-open interval `[min,max)`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var wrap = require( '@stdlib/math/base/special/wrap' );
```

#### wrap( v, min, max )

Wraps a value on the half-open interval `[min,max)`.

```javascript
var v = wrap( 3.14, 0.0, 5.0 );
// returns 3.14

v = wrap( -3.14, 0.0, 5.0 );
// returns ~1.86

v = wrap( 10.0, 0.0, 5.0 );
// returns 0.0

v = wrap( -0.0, 0.0, 5.0 );
// returns 0.0

v = wrap( 0.0, -3.14, -0.0 );
// returns -3.14
```

If provided `NaN` for any argument, the function returns `NaN`.

```javascript
var v = wrap( NaN, 0.0, 5.0 );
// returns NaN

v = wrap( 0.0, NaN, 5.0 );
// returns NaN

v = wrap( 3.14, 0.0, NaN );
// returns NaN
```

If provided `min == max`, the function returns `NaN`.

```javascript
var v = wrap( 3.14, 3.0, 3.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function does **not** distinguish between positive and negative zero. Where appropriate, the function returns positive zero.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var wrap = require( '@stdlib/math/base/special/wrap' );

var min;
var max;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    min = discreteUniform( 0.0, 10.0 );
    max = discreteUniform( 5.0, 15.0 );
    v = discreteUniform( -20.0, 20.0 );
    console.log( 'wrap(%d,%d,%d) => %d', v, min, max, wrap( v, min, max ) );
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

</section>

<!-- /.links -->
