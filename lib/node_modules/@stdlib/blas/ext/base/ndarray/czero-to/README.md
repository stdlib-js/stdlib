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

# czeroTo

> Fill a one-dimensional single-precision complex floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from zero.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var czeroTo = require( '@stdlib/blas/ext/base/ndarray/czero-to' );
```

#### czeroTo( arrays )

Fills a one-dimensional single-precision complex floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from zero.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var x = new ndarray( 'complex64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var out = czeroTo( [ x ] );
// returns <ndarray>[ <Complex64>[ 0.0, 0.0 ], <Complex64>[ 1.0, 0.0 ], <Complex64>[ 2.0, 0.0 ], <Complex64>[ 3.0, 0.0 ] ]
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray.

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
var zeros = require( '@stdlib/array/zeros' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var czeroTo = require( '@stdlib/blas/ext/base/ndarray/czero-to' );

var xbuf = zeros( 10, 'complex64' );
var x = new ndarray( 'complex64', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

czeroTo( [ x ] );
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
