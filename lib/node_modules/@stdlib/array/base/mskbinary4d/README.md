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

# mskbinary4d

> Apply a binary callback to elements in two four-dimensional nested input arrays according to elements in a four-dimensional nested mask array and assign results to elements in a four-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mskbinary4d = require( '@stdlib/array/base/mskbinary4d' );
```

#### mskbinary4d( arrays, shape, fcn )

Applies a binary callback to elements in two four-dimensional nested input arrays according to elements in a four-dimensional nested mask array and assigns results to elements in a four-dimensional nested output array.

```javascript
var add = require( '@stdlib/number/float64/base/add' );
var zeros4d = require( '@stdlib/array/base/zeros4d' );

var x = [ [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ];
var z = zeros4d( [ 1, 1, 2, 2 ] );

var mask = [ [ [ [ 0, 1 ], [ 0, 0 ] ] ] ];

var shape = [ 1, 1, 2, 2 ];

mskbinary4d( [ x, x, mask, z ], shape, add );
// z => [ [ [ [ 2.0, 0.0 ], [ 6.0, 8.0 ] ] ] ]
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
var filled4dBy = require( '@stdlib/array/base/filled4d-by' );
var zeros4d = require( '@stdlib/array/base/zeros4d' );
var add = require( '@stdlib/number/float64/base/add' );
var mskbinary4d = require( '@stdlib/array/base/mskbinary4d' );

var shape = [ 2, 1, 3, 3 ];

var x = filled4dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = filled4dBy( shape, discreteUniform( -100, 100 ) );
console.log( y );

var mask = filled4dBy( shape, bernoulli( 0.5 ) );
console.log( mask );

var z = zeros4d( shape );
console.log( z );

mskbinary4d( [ x, y, mask, z ], shape, add );
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
