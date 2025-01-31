<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# mskbinary2d

> Apply a binary callback to elements in two two-dimensional nested input arrays according to elements in a two-dimensional nested mask array and assign results to elements in a two-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mskbinary2d = require( '@stdlib/array/base/mskbinary2d' );
```

#### mskbinary2d( arrays, shape, fcn )

Applies a binary callback to elements in two two-dimensional nested input arrays according to elements in a two-dimensional nested mask array and assigns results to elements in a two-dimensional nested output array.

```javascript
var add = require( '@stdlib/math/base/ops/add' );
var zeros2d = require( '@stdlib/array/base/zeros2d' );

var x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
var z = zeros2d( [ 2, 2 ] );

var mask = [ [ 0, 1 ], [ 0, 0 ] ];

var shape = [ 2, 2 ];

mskbinary2d( [ x, x, mask, z ], shape, add );
// z => [ [ 2.0, 0.0 ], [ 6.0, 8.0 ] ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing two input nested arrays, an input nested mask array, and one output nested array.
-   **shape**: array shape.
-   **fcn**: binary function to apply.

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
var filled2dBy = require( '@stdlib/array/base/filled2d-by' );
var zeros2d = require( '@stdlib/array/base/zeros2d' );
var add = require( '@stdlib/math/base/ops/add' );
var mskbinary2d = require( '@stdlib/array/base/mskbinary2d' );

var shape = [ 3, 3 ];

var x = filled2dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = filled2dBy( shape, discreteUniform( -100, 100 ) );
console.log( y );

var mask = filled2dBy( shape, bernoulli( 0.5 ) );
console.log( mask );

var z = zeros2d( shape );
console.log( z );

mskbinary2d( [ x, y, mask, z ], shape, add );
console.log( z );
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
