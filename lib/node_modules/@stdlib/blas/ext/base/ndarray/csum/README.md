<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# csum

> Compute the sum of all elements in a one-dimensional single-precision complex floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var csum = require( '@stdlib/blas/ext/base/ndarray/csum' );
```

#### csum( arrays )

Computes the sum of all elements in a one-dimensional single-precision complex floating-point ndarray.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Complex64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
var x = new ndarray( 'complex64', xbuf, [ 2 ], [ 1 ], 0, 'row-major' );

var v = csum( [ x ] );
// returns <Complex64>[ 5.0, 5.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional ndarray, the function returns `0.0 + 0.0i`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex64Array = require( '@stdlib/array/complex64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var csum = require( '@stdlib/blas/ext/base/ndarray/csum' );

var xbuf = discreteUniform( 10, -50, 50, {
    'dtype': 'float32'
});
xbuf = new Complex64Array( xbuf );

var x = new ndarray( 'complex64', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var v = csum( [ x ] );
console.log( v );
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
