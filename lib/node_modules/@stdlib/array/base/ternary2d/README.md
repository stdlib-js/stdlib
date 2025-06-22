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

# ternary2d

> Apply a ternary callback to elements in three two-dimensional nested input arrays and assign results to elements in a two-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ternary2d = require( '@stdlib/array/base/ternary2d' );
```

#### ternary2d( arrays, shape, fcn )

Applies a ternary callback to elements in three two-dimensional nested input arrays and assigns results to elements in a two-dimensional nested output array.

```javascript
var add = require( '@stdlib/number/float64/base/add3' );
var zeros2d = require( '@stdlib/array/base/zeros2d' );

var x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
var out = zeros2d( [ 2, 2 ] );

var shape = [ 2, 2 ];

ternary2d( [ x, x, x, out ], shape, add );
// out => [ [ 3.0, 6.0 ], [ 9.0, 12.0 ] ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing three input nested arrays and one output nested array.
-   **shape**: array shape.
-   **fcn**: ternary function to apply.

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
var filled2dBy = require( '@stdlib/array/base/filled2d-by' );
var zeros2d = require( '@stdlib/array/base/zeros2d' );
var add = require( '@stdlib/number/float64/base/add3' );
var ternary2d = require( '@stdlib/array/base/ternary2d' );

var shape = [ 3, 3 ];

var x = filled2dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = filled2dBy( shape, discreteUniform( -100, 100 ) );
console.log( y );

var z = filled2dBy( shape, discreteUniform( -100, 100 ) );
console.log( z );

var out = zeros2d( shape );
console.log( out );

ternary2d( [ x, y, z, out ], shape, add );
console.log( out );
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
