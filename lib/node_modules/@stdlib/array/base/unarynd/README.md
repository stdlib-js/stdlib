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

# unarynd

> Apply a unary callback to elements in an n-dimensional nested input array and assign results to elements in an n-dimensional nested output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var unarynd = require( '@stdlib/array/base/unarynd' );
```

#### unarynd( arrays, shape, fcn )

Applies a unary callback to elements in an n-dimensional nested input array and assigns results to elements in an n-dimensional nested output array.

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

var x = [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ];
var shape = [ 2, 2 ];

// Compute the absolute values in-place:
unarynd( [ x, x ], shape, abs );
// x => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one input nested array and one output nested array.
-   **shape**: array shape.
-   **fcn**: unary function to apply.

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
var abs = require( '@stdlib/math/base/special/abs' );
var unarynd = require( '@stdlib/array/base/unarynd' );

var shape = [ 3, 3 ];

var x = filledndBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

var y = zerosnd( shape );
console.log( y );

unarynd( [ x, y ], shape, abs );
console.log( y );

shape = [ 3, 3, 3 ];

x = filledndBy( shape, discreteUniform( -100, 100 ) );
console.log( x );

y = zerosnd( shape );
console.log( y );

unarynd( [ x, y ], shape, abs );
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
