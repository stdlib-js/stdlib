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

# takeIndexed

> Take elements from an indexed array.

<section class="usage">

## Usage

```javascript
var takeIndexed = require( '@stdlib/array/base/take-indexed' );
```

#### takeIndexed( x, indices )

Takes elements from an indexed array.

```javascript
var x = [ 1, 2, 3, 4 ];

var y = takeIndexed( x, [ 1, 3 ] );
// returns [ 2, 4 ]
```

If `indices` is an empty array, the function returns an empty array.

```javascript
var x = [ 1, 2, 3, 4 ];

var y = takeIndexed( x, [] );
// returns []
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** perform bounds checking. If an index is less than zero or greater than the maximum index of `x`, the value of the corresponding element in the output array is undefined.
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
var takeIndexed = require( '@stdlib/array/base/take-indexed' );

// Generate a linearly spaced array:
var x = linspace( 0, 100, 11 );

// Generate an array of random indices:
var N = discreteUniform( 5, 15 );
var indices = filledBy( N, discreteUniform.factory( 0, x.length-1 ) );

// Take a random sample of elements from `x`:
var y = takeIndexed( x, indices );

console.log( x );
console.log( indices );
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
