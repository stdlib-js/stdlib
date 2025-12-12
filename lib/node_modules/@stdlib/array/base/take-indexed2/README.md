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

# takeIndexed2

> Take elements from two indexed arrays in a single pass.

<section class="usage">

## Usage

```javascript
var takeIndexed2 = require( '@stdlib/array/base/take-indexed2' );
```

#### takeIndexed2( x, y, indices )

Takes elements from two indexed arrays in a single pass.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5, 6, 7, 8 ];

var out = takeIndexed2( x, y, [ 1, 3 ] );
// returns [ [ 2, 4 ], [ 6, 8 ] ]
```

If `indices` is an empty array, the function returns empty arrays.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5, 6, 7, 8 ];

var out = takeIndexed2( x, y, [] );
// returns [ [], [] ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** perform bounds checking. If an index is less than zero or greater than the maximum index of `x` or `y`, the value of the corresponding element in the respective output array is undefined.
-   An _indexed_ array-like object is a data structure in which one retrieves elements via integer indices using bracket `[]` notation (e.g., `Float64Array`, `Int32Array`, `Array`, etc). This is in contrast to an _accessor_ array-like object in which one retrieves elements using `get` and `set` methods (e.g., `Complex64Array` and `Complex128Array`).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledBy = require( '@stdlib/array/base/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var linspace = require( '@stdlib/array/base/linspace' );
var takeIndexed2 = require( '@stdlib/array/base/take-indexed2' );

// Generate linearly spaced arrays:
var x = linspace( 0, 100, 11 );
console.log( x );

var y = linspace( 100, 200, 11 );
console.log( y );

// Generate an array of random indices:
var N = discreteUniform( 5, 15 );
var indices = filledBy( N, discreteUniform.factory( 0, x.length-1 ) );
console.log( indices );

// Take a random sample of elements from `x` and `y`:
var out = takeIndexed2( x, y, indices );
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
