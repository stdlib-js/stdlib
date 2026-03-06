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

# quinary3d

> Apply a quinary callback to elements in five three-dimensional nested input arrays and assign results to elements in a three-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quinary3d = require( '@stdlib/array/base/quinary3d' );
```

#### quinary3d( arrays, shape, fcn )

Applies a quinary callback to elements in five three-dimensional nested input arrays and assigns results to elements in a three-dimensional nested output array.

```javascript
var add = require( '@stdlib/number/float64/base/add5' );
var zeros3d = require( '@stdlib/array/base/zeros3d' );

var x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
var out = zeros3d( [ 1, 2, 2 ] );

var shape = [ 1, 2, 2 ];

quinary3d( [ x, x, x, x, x, out ], shape, add );
// out => [ [ [ 5.0, 10.0 ], [ 15.0, 20.0 ] ] ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing five input nested arrays and one output nested array.
-   **shape**: array shape.
-   **fcn**: quinary function to apply.

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
var filled3dBy = require( '@stdlib/array/base/filled3d-by' );
var zeros3d = require( '@stdlib/array/base/zeros3d' );
var add = require( '@stdlib/number/float64/base/add5' );
var quinary3d = require( '@stdlib/array/base/quinary3d' );

var shape = [ 3, 3, 3 ];

var x = filled3dBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = filled3dBy( shape, discreteUniform( -100, 100 ) );
console.log( y );

var z = filled3dBy( shape, discreteUniform( -100, 100 ) );
console.log( z );

var w = filled3dBy( shape, discreteUniform( -100, 100 ) );
console.log( w );

var v = filled3dBy( shape, discreteUniform( -100, 100 ) );
console.log( v );

var out = zeros3d( shape );
console.log( out );

quinary3d( [ x, y, z, w, v, out ], shape, add );
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
