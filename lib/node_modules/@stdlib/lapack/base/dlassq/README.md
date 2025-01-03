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

# dlassq

> Return an updated sum of squares represented in scaled form.

<section class="intro">

This routine returns the values $s_{textrm{out}}$ and $\\textrm{ss}_{\\textrm{out}}$ such that

<!-- <equation class="equation" label="eq:sum_of_squares" align="center" raw="s_{\textrm{out}}^2 \cdot \textrm{ss}_{\textrm{out}} = x_0^2 + \ldots + x_{N-1}^2 + s_{\textrm{in}}^2 \cdot \textrm{ss}_{\textrm{in}}" alt="Sum of squares represented in scaled form"> -->

<div class="equation" align="center" data-raw-text="s_{\textrm{out}}^2 \cdot \textrm{ss}_{\textrm{out}} = x_0^2 + \ldots + x_{N-1}^2 + s_{\textrm{in}}^2 \cdot \textrm{ss}_{\textrm{in}}" data-equation="eq:sum_of_squares">
    <img src="" alt="Sum of squares represented in scaled form">
    <br>
</div>

<!-- </equation> -->

where $x_i = X_{(i-1) \\cdot \\textrm{sx}}$ and $\\textrm{sx}$ is the stride of `X`. The value of $\\textrm{ss}\_{\\textrm{in}}$ is assumed to be nonnegative.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dlassq = require( '@stdlib/lapack/base/dlassq' );
```

#### dlassq( N, X, strideX, scale, sumsq )

Returns an updated sum of squares represented in scaled form.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

var out = dlassq( 4, X, 1, 1.0, 0.0 );
// returns <Float64Array>[ 1.0, 30.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **X**: input [`Float64Array`][mdn-float64array].
-   **strideX**: stride length for `X`.
-   **scale**: scaling factor.
-   **sumsq**: basic sum of squares from which output is factored out.

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array:
var X0 = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );

// Create an offset view:
var X1 = new Float64Array( X0.buffer, X0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Compute the sum of squares:
var out = dlassq( X1.length, X1, 1, 1.0, 0.0 );
// returns <Float64Array>[ 1.0, 30.0 ]
```

The returned [`Float64Array`][mdn-float64array] contains an updated scale factor and an updated sum of squares, respectively.

#### dlassq.ndarray( N, X, sx, ox, scale, sumsq, out, so, oo )

Returns an updated sum of squares represented in scaled form using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var out = new Float64Array( [ 0.0, 0.0 ] );

dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, 0 );
// out => <Float64Array>[ 1.0, 30.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `X`.
-   **out**: output [`Float64Array`][mdn-float64array]
-   **so**: stride length for `out`.
-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var X = new Float64Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0 ] );
var out = new Float64Array( [ 0.0, 0.0, 999.9, 0.0, 999.9 ] );

dlassq.ndarray( 4, X, 2, 0, 1.0, 0.0, out, 2, 1 );
// out => <Float64Array>[ 0.0, 1.0, 999.9, 30.0, 999.9 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dlassq()` corresponds to the [LAPACK][LAPACK] function [`dlassq`][lapack-dlassq].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dlassq = require( '@stdlib/lapack/base/dlassq' );

var X = discreteUniform( 10, -10, 10, {
    'dtype': 'float64'
});
console.log( X );

var out = dlassq( X.length, X, 1, 1.0, 0.0 );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
TODO
```

#### TODO

TODO.

```c
TODO
```

TODO

```c
TODO
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
TODO
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-dlassq]: https://www.netlib.org/lapack/explore-html/d8/d76/group__lassq_gae8f40b0a34771b4f2d9c863de3af7be5.html#gae8f40b0a34771b4f2d9c863de3af7be5

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
