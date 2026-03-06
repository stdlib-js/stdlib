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

# binarynd

> Apply a binary callback to elements in two n-dimensional nested input arrays and assign results to elements in an n-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var binarynd = require( '@stdlib/array/base/binarynd' );
```

#### binarynd( arrays, shape, fcn )

Applies a binary callback to elements in two n-dimensional nested input arrays and assigns results to elements in an n-dimensional nested output array.

```javascript
var add = require( '@stdlib/number/float64/base/add' );

var x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
var shape = [ 2, 2 ];

binarynd( [ x, x, x ], shape, add );
// x => [ [ 2.0, 4.0 ], [ 6.0, 8.0 ] ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing two input nested arrays and one output nested array.
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
var filledndBy = require( '@stdlib/array/base/fillednd-by' );
var zerosnd = require( '@stdlib/array/base/zerosnd' );
var add = require( '@stdlib/number/float64/base/add' );
var binarynd = require( '@stdlib/array/base/binarynd' );

var shape = [ 3, 3 ];

var x = filledndBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = filledndBy( shape, discreteUniform( -100, 100 ) );
console.log( y );

var z = zerosnd( shape );
console.log( z );

binarynd( [ x, y, z ], shape, add );
console.log( z );

shape = [ 3, 3, 3 ];

x = filledndBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

y = filledndBy( shape, discreteUniform( -100, 100 ) );
console.log( y );

z = zerosnd( shape );
console.log( z );

binarynd( [ x, y, z ], shape, add );
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
