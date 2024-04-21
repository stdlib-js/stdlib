<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# srot

> Apply a plane rotation.

<section class="intro">

This BLAS level 1 routine applies a real plane rotation to real single-precision floating-point vectors. The plane rotation is applied to `N` points, where the points to be rotated are contained in vectors `x` and `y` and where the cosine and sine of the angle of rotation are `c` and `s`, respectively. The operation is as follows:

<!-- <equation class="equation" label="eq:srot" align="center" raw="\begin{bmatrix}x_i \\ y_i\end{bmatrix} = \begin{bmatrix} c & s \\ -s & c\end{bmatrix}\begin{bmatrix} x_i \\ y_i \end{bmatrix}" alt="Plane rotation"> -->

<!-- </equation> -->

where `x_i` and `y_i` are the individual elements on which the rotation is applied.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var srot = require( '@stdlib/blas/base/srot' );
```

#### srot( N, x, strideX, y, strideY, c, s )

Applies a plane rotation.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

srot( x.length, x, 1, y, 1, 0.8, 0.6 );
// x => <Float32Array>[ ~4.4, ~5.8, ~7.2, ~8.6, 10.0 ]
// y => <Float32Array>[ ~4.2, ~4.4, ~4.6, ~4.8, 5.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Float32Array`][mdn-float32array].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Float32Array`][mdn-float32array].
-   **strideY**: index increment for `y`.
-   **c**: cosine of the angle of rotation.
-   **s**: sine of the angle of rotation.

The `N` and stride parameters determine how values in the strided arrays are accessed at runtime. For example, to apply a plane rotation to every other element, 

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

srot( 3, x, 2, y, 2, 0.8, 0.6 );
// x => <Float32Array>[ ~5.0, 2.0, ~7.8, 4.0, ~10.6, 6.0 ]
// y => <Float32Array>[ 5.0, 8.0, ~5.4, 10.0, ~5.8, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

srot( 3, x1, 1, y1, 1, 0.8, 0.6 );
// x0 => <Float32Array>[ 1.0, ~7.6, 9.0, ~10.4, 5.0, 6.0 ]
// y0 => <Float32Array>[ 7.0, 8.0, 9.0, ~6.8, 7.0, ~7.2 ]
```

#### srot.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

srot.ndarray( 4, x, 1, 1, y, 1, 1, 0.8, 0.6 );
// x => <Float32Array>[ 1.0, ~5.8, ~7.2, ~8.6, 10.0 ]
// y => <Float32Array>[ 6.0, ~4.4, ~4.6, ~4.8, 5.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from third element,...,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

srot.ndarray( 2, x, 2, 2, y, 2, 2, 0.8, 0.6 );
// x => <Float32Array>[ 1.0, 2.0, ~7.8, 4.0, ~10.6, 6.0 ]
// y => <Float32Array>[ 7.0, 8.0, ~5.4, 10.0, ~5.8, 12.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `x` and `y` unchanged.
-   `srot()` corresponds to the [BLAS][blas] level 1 function [`srot`][srot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var srot = require( '@stdlib/blas/base/srot' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 10, 0, 500, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 255, opts );
console.log( y );

// Applies a plane rotation :
srot( x.length, x, 1, y, 1, 0.8, 0.6 );
console.log( x );
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

[blas]: http://www.netlib.org/blas

[srot]: https://www.netlib.org/lapack/explore-html/d1/d45/group__rot_ga432ce08bbcda714c82c7a31552f96937.html#ga432ce08bbcda714c82c7a31552f96937

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
