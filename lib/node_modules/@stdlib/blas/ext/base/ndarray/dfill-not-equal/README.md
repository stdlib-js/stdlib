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

# dfillNotEqual

> Replace elements in a one-dimensional double-precision floating-point ndarray not equal to a provided search element with a specified scalar constant.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dfillNotEqual = require( '@stdlib/blas/ext/base/ndarray/dfill-not-equal' );
```

#### dfillNotEqual( arrays )

Replaces elements in a one-dimensional double-precision floating-point ndarray not equal to a provided search element with a specified scalar constant.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float64Vector( [ 0.0, -2.0, 3.0, 0.0, 4.0, -6.0 ] );

var searchElement = scalar2ndarray( 0.0, {
    'dtype': 'float64'
});

var alpha = scalar2ndarray( 5.0, {
    'dtype': 'float64'
});

dfillNotEqual( [ x, searchElement, alpha ] );
// x => <ndarray>[ 0.0, 5.0, 5.0, 0.0, 5.0, 5.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing the search element.
    -   a zero-dimensional ndarray containing the scalar constant.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input ndarray is modified **in-place** (i.e., the input ndarray is **mutated**).
-   When comparing elements, the function checks for equality using the strict equality operator `===`. As a consequence, `NaN` values are considered distinct (i.e., as `NaN !== NaN` always evaluates to `true`, `NaN` elements are always replaced), and `-0` and `+0` are considered the same.

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
var dfillNotEqual = require( '@stdlib/blas/ext/base/ndarray/dfill-not-equal' );

var opts = {
    'dtype': 'float64'
};

var x = discreteUniform( [ 10 ], 0, 3, opts );
console.log( ndarray2array( x ) );

var searchElement = scalar2ndarray( 1, opts );
console.log( 'Search Element: %d', ndarraylike2scalar( searchElement ) );

var alpha = scalar2ndarray( 5, opts );
console.log( 'Alpha: %d', ndarraylike2scalar( alpha ) );

dfillNotEqual( [ x, searchElement, alpha ] );
console.log( ndarray2array( x ) );
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
