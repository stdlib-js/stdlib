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

# mskunary4d

> Apply a unary callback to elements in a four-dimensional nested input array according to elements in a four-dimensional nested mask array and assign results to elements in a four-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mskunary4d = require( '@stdlib/array/base/mskunary4d' );
```

#### mskunary4d( arrays, shape, fcn )

Applies a unary callback to elements in a four-dimensional nested input array according to elements in a four-dimensional nested mask array and assigns results to elements in a four-dimensional nested output array.

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

var x = [ [ [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] ] ];
var mask = [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ];

var shape = [ 1, 1, 2, 2 ];

// Compute the absolute values in-place:
mskunary4d( [ x, mask, x ], shape, abs );
// x => [ [ [ [ 1.0, -2.0 ], [ 3.0, 4.0 ] ] ] ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one input nested array, an input nested mask array, and one output nested array.
-   **shape**: array shape.
-   **fcn**: unary function to apply.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes that the input and output arrays have the same shape.
-   An element in an input array is "masked" if the corresponding element in the mask array is non-zero.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var bernoulli = require( '@stdlib/random/base/bernoulli' ).factory;
var filled4dBy = require( '@stdlib/array/base/filled4d-by' );
var zeros4d = require( '@stdlib/array/base/zeros4d' );
var abs = require( '@stdlib/math/base/special/abs' );
var mskunary4d = require( '@stdlib/array/base/mskunary4d' );

var shape = [ 2, 3, 3, 3 ];

var x = filled4dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var mask = filled4dBy( shape, bernoulli( 0.5 ) );
console.log( mask );

var y = zeros4d( shape );
console.log( y );

mskunary4d( [ x, mask, y ], shape, abs );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
