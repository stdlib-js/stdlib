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

# cfillEqual

> Replace elements in a one-dimensional single-precision complex floating-point ndarray equal to a provided search element with a specified scalar constant.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cfillEqual = require( '@stdlib/blas/ext/base/ndarray/cfill-equal' );
```

#### cfillEqual( arrays )

Replaces elements in a one-dimensional single-precision complex floating-point ndarray equal to a provided search element with a specified scalar constant.

```javascript
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var x = new Complex64Vector( [ 0.0, 0.0, -2.0, 3.0, 0.0, 0.0, 4.0, -6.0 ] );

var searchElement = scalar2ndarray( new Complex64( 0.0, 0.0 ), {
    'dtype': 'complex64'
});

var alpha = scalar2ndarray( new Complex64( 5.0, 5.0 ), {
    'dtype': 'complex64'
});

cfillEqual( [ x, searchElement, alpha ] );
// x => <ndarray>[ <Complex64>[ 5.0, 5.0 ], <Complex64>[ -2.0, 3.0 ], <Complex64>[ 5.0, 5.0 ], <Complex64>[ 4.0, -6.0 ] ]
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
-   When comparing elements, the function checks for equality of real and imaginary components using the strict equality operator `===`. As a consequence, `NaN` components are considered distinct (i.e., as `NaN === NaN` always evaluates to `false`, elements having one or more `NaN` components are never replaced), and `-0` and `+0` are considered the same.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var cfillEqual = require( '@stdlib/blas/ext/base/ndarray/cfill-equal' );

var opts = {
    'dtype': 'float32'
};

var x = new Complex64Vector( discreteUniform( 20, 0, 2, opts ) );
console.log( ndarray2array( x ) );

var searchElement = scalar2ndarray( new Complex64( 0.0, 0.0 ), {
    'dtype': 'complex64'
});
console.log( 'Search Element:', ndarraylike2scalar( searchElement ) );

var alpha = scalar2ndarray( new Complex64( 5.0, 5.0 ), {
    'dtype': 'complex64'
});
console.log( 'Alpha:', ndarraylike2scalar( alpha ) );

cfillEqual( [ x, searchElement, alpha ] );
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
