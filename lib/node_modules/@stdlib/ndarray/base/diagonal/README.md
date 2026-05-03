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

# diagonal

> Return a view of the diagonal of a matrix (or stack of matrices).

<section class="intro">

For an `M`-by-`N` matrix `A`, the `k`-th diagonal is defined as

<!-- <equation class="equation" label="eq:diagonal_definition" align="center" raw="D_k = \{\, A_{i,j} : j - i = k \,\}" alt="Definition of the k-th diagonal of a matrix."> -->

```math
D_k = \{\, A_{i,j} : j - i = k \,\}
```

<!-- <div class="equation" align="center" data-raw-text="D_k = \{\, A_{i,j} : j - i = k \,\}" data-equation="eq:diagonal_definition">
    <img src="" alt="Definition of the k-th diagonal of a matrix.">
    <br>
</div> -->

<!-- </equation> -->

where `k = 0` corresponds to the main diagonal, `k > 0` corresponds to the super-diagonals (above the main diagonal), and `k < 0` corresponds to the sub-diagonals (below the main diagonal). For example, given the matrix

<!-- <equation class="equation" label="eq:diagonal_example" align="center" raw="A = \begin{bmatrix} a_{0,0} & a_{0,1} & a_{0,2} \\ a_{1,0} & a_{1,1} & a_{1,2} \\ a_{2,0} & a_{2,1} & a_{2,2} \end{bmatrix}" alt="Example matrix."> -->

```math
A = \begin{bmatrix} a_{0,0} & a_{0,1} & a_{0,2} \\ a_{1,0} & a_{1,1} & a_{1,2} \\ a_{2,0} & a_{2,1} & a_{2,2} \end{bmatrix}
```

<!-- <div class="equation" align="center" data-raw-text="A = \begin{bmatrix} a_{0,0} & a_{0,1} & a_{0,2} \\ a_{1,0} & a_{1,1} & a_{1,2} \\ a_{2,0} & a_{2,1} & a_{2,2} \end{bmatrix}" data-equation="eq:diagonal_example">
    <img src="" alt="Example matrix.">
    <br>
</div> -->

<!-- </equation> -->

the main diagonal is `[ a_{0,0}, a_{1,1}, a_{2,2} ]`, the super-diagonal `k = 1` is `[ a_{0,1}, a_{1,2} ]`, and the sub-diagonal `k = -1` is `[ a_{1,0}, a_{2,1} ]`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var diagonal = require( '@stdlib/ndarray/base/diagonal' );
```

#### diagonal( x, dims, k, writable )

Returns a view of the diagonal of a matrix (or stack of matrices) `x`.

```javascript
var array = require( '@stdlib/ndarray/array' );

var x = array( [ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ], [ 7.0, 8.0, 9.0 ] ] );
// returns <ndarray>[ [ 1.0, 2.0, 3.0 ], [ 4.0, 5.0, 6.0 ], [ 7.0, 8.0, 9.0 ] ]

var y = diagonal( x, [ 0, 1 ], 0, false );
// returns <ndarray>[ 1.0, 5.0, 9.0 ]
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **dims**: dimension indices defining the plane from which to extract the diagonal.
-   **k**: diagonal offset.
-   **writable**: boolean indicating whether the returned ndarray should be writable.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The order of the dimension indices contained in `dims` matters. The first element specifies the row-like dimension. The second element specifies the column-like dimension.
-   Each provided dimension index must reside on the interval `[-ndims, ndims-1]`.
-   The diagonal offset `k` is interpreted as `column - row`. Accordingly, when `k = 0`, the function returns the main diagonal; when `k > 0`, the function returns the diagonal above the main diagonal; and when `k < 0`, the function returns the diagonal below the main diagonal.
-   The returned ndarray is a **view** of the input ndarray. Accordingly, writing to the original ndarray will **mutate** the returned ndarray and vice versa.
-   The `writable` parameter **only** applies to ndarray constructors supporting **read-only** instances.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var diagonal = require( '@stdlib/ndarray/base/diagonal' );

// Create a stack of matrices:
var x = uniform( [ 2, 3, 3 ], -10.0, 10.0, {
    'dtype': 'float64'
});
console.log( ndarray2array( x ) );

// Extract the main diagonals from the stack:
var y = diagonal( x, [ 1, 2 ], 0, false );
console.log( ndarray2array( y ) );

// Extract super-diagonals from the stack:
y = diagonal( x, [ 1, 2 ], 1, false );
console.log( ndarray2array( y ) );

// Extract sub-diagonals from the stack:
y = diagonal( x, [ 1, 2 ], -1, false );
console.log( ndarray2array( y ) );
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
