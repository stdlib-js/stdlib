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

# mskbinary5d

> Apply a binary callback to elements in two five-dimensional nested input arrays according to elements in a five-dimensional nested mask array and assign results to elements in a five-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mskbinary5d = require( '@stdlib/array/base/mskbinary5d' );
```

#### mskbinary5d( arrays, shape, fcn )

Applies a binary callback to elements in two five-dimensional nested input arrays according to elements in a five-dimensional nested mask array and assigns results to elements in a five-dimensional nested output array.

```javascript
var add = require( '@stdlib/math/base/ops/add' );
var zeros5d = require( '@stdlib/array/base/zeros5d' );

var x = [ [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ] ];
var z = zeros5d( [ 1, 1, 1, 2, 2 ] );

var mask = [ [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ] ];

var shape = [ 1, 1, 1, 2, 2 ];

mskbinary5d( [ x, x, mask, z ], shape, add );
// z => [ [ [ [ [ 2.0, 0.0 ], [ 6.0, 8.0 ] ] ] ] ]
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

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var bernoulli = require( '@stdlib/random/base/bernoulli' ).factory;
var filled5dBy = require( '@stdlib/array/base/filled5d-by' );
var zeros5d = require( '@stdlib/array/base/zeros5d' );
var add = require( '@stdlib/math/base/ops/add' );
var mskbinary5d = require( '@stdlib/array/base/mskbinary5d' );

var shape = [ 1, 2, 1, 3, 3 ];

var x = filled5dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = filled5dBy( shape, discreteUniform( -100, 100 ) );
console.log( y );

var mask = filled5dBy( shape, bernoulli( 0.5 ) );
console.log( mask );

var z = zeros5d( shape );
console.log( z );

mskbinary5d( [ x, y, mask, z ], shape, add );
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
