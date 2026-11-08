<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# slastIndexEqual

> Return the index of the last element in a one-dimensional single-precision floating-point ndarray equal to a corresponding element in another one-dimensional single-precision floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var slastIndexEqual = require( '@stdlib/blas/ext/base/ndarray/slast-index-equal' );
```

#### slastIndexEqual( arrays )

Returns the index of the last element in a one-dimensional single-precision floating-point ndarray equal to a corresponding element in another one-dimensional single-precision floating-point ndarray.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float32Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
var y = new Float32Vector( [ 0.0, 0.0, 3.0, 0.0 ] );

var fromIndex = scalar2ndarray( 3, {
    'dtype': 'generic'
});

var idx = slastIndexEqual( [ x, y, fromIndex ] );
// returns 2
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   first one-dimensional input ndarray.
    -   second one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing the index from which to begin searching.

If the function is unable to find matching elements, the function returns `-1`.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float32Vector( [ 1.0, 2.0, 3.0, 4.0 ] );
var y = new Float32Vector( [ 5.0, 6.0, 7.0, 8.0 ] );

var fromIndex = scalar2ndarray( 3, {
    'dtype': 'generic'
});

var idx = slastIndexEqual( [ x, y, fromIndex ] );
// returns -1
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a specified starting search index is negative, the function resolves the starting search index by counting backward from the last element (where `-1` refers to the last element).
-   When comparing elements, the function checks for equality using the strict equality operator `===`. As a consequence, `NaN` values are considered distinct, and `-0` and `+0` are considered the same.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var slastIndexEqual = require( '@stdlib/blas/ext/base/ndarray/slast-index-equal' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( [ 10 ], 0, 10, opts );
console.log( ndarray2array( x ) );

var y = discreteUniform( [ 10 ], 0, 10, opts );
console.log( ndarray2array( y ) );

var fromIndex = scalar2ndarray( 9, {
    'dtype': 'generic'
});

var idx = slastIndexEqual( [ x, y, fromIndex ] );
console.log( idx );
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
