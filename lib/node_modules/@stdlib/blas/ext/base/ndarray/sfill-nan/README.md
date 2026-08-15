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

# sfillNaN

> Replace elements in a one-dimensional single-precision floating-point ndarray equal to `NaN` with a specified scalar constant.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sfillNaN = require( '@stdlib/blas/ext/base/ndarray/sfill-nan' );
```

#### sfillNaN( arrays )

Replaces elements in a one-dimensional single-precision floating-point ndarray equal to `NaN` with a specified scalar constant.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float32Vector( [ NaN, -2.0, 3.0, NaN, 4.0, -6.0 ] );

var alpha = scalar2ndarray( 0.0, {
    'dtype': 'float32'
});

sfillNaN( [ x, alpha ] );
// x => <ndarray>[ 0.0, -2.0, 3.0, 0.0, 4.0, -6.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing the scalar constant.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input ndarray is modified **in-place** (i.e., the input ndarray is **mutated**).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var nans = require( '@stdlib/ndarray/nans' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var sfillNaN = require( '@stdlib/blas/ext/base/ndarray/sfill-nan' );

var opts = {
    'dtype': 'float32'
};

var x = nans( [ 10 ], opts );
console.log( ndarray2array( x ) );

var alpha = scalar2ndarray( 5.0, opts );
console.log( 'Alpha: %d', ndarraylike2scalar( alpha ) );

sfillNaN( [ x, alpha ] );
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
