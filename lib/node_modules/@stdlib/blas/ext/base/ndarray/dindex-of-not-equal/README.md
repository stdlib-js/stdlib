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

# dindexOfNotEqual

> Return the first index of an element in a one-dimensional double-precision floating-point ndarray which is not equal to a specified search element.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dindexOfNotEqual = require( '@stdlib/blas/ext/base/ndarray/dindex-of-not-equal' );
```

#### dindexOfNotEqual( arrays )

Returns the first index of an element in a one-dimensional double-precision floating-point ndarray which is not equal to a specified search element.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float64Vector( [ 1.0, 1.0, 3.0 ] );

var searchElement = scalar2ndarray( 1.0, {
    'dtype': 'float64'
});

var idx = dindexOfNotEqual( [ x, searchElement ] );
// returns 2
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing the search element.

If the function is unable to find an element which is not equal to a specified search element, the function returns `-1`.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float64Vector( [ 1.0, 1.0, 1.0 ] );

var searchElement = scalar2ndarray( 1.0, {
    'dtype': 'float64'
});

var idx = dindexOfNotEqual( [ x, searchElement ] );
// returns -1
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When searching for a search element, the function checks for inequality using the strict inequality operator `!==`. As a consequence, `NaN` values are considered distinct from all values (including other `NaN` values), and `-0` and `+0` are considered the same.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var dindexOfNotEqual = require( '@stdlib/blas/ext/base/ndarray/dindex-of-not-equal' );

var opts = {
    'dtype': 'float64'
};

var x = discreteUniform( [ 10 ], 0, 2, opts );
console.log( ndarray2array( x ) );

var searchElement = scalar2ndarray( 0, opts );
console.log( 'Search Element:', ndarraylike2scalar( searchElement ) );

var idx = dindexOfNotEqual( [ x, searchElement ] );
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
