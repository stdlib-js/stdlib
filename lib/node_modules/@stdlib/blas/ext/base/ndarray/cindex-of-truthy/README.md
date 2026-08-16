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

# cindexOfTruthy

> Return the index of the first truthy element in a one-dimensional single-precision complex floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cindexOfTruthy = require( '@stdlib/blas/ext/base/ndarray/cindex-of-truthy' );
```

#### cindexOfTruthy( arrays )

Returns the index of the first truthy element in a one-dimensional single-precision complex floating-point ndarray.

```javascript
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );

var x = new Complex64Vector( [ 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 2.0, 0.0 ] );

var idx = cindexOfTruthy( [ x ] );
// returns 2
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray.

If the function is unable to find a truthy element, the function returns `-1`.

```javascript
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );

var x = new Complex64Vector( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var idx = cindexOfTruthy( [ x ] );
// returns -1
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A complex number is truthy when at least one of its real or imaginary components is truthy.
-   The function explicitly treats `NaN` values as falsy.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var cindexOfTruthy = require( '@stdlib/blas/ext/base/ndarray/cindex-of-truthy' );

var opts = {
    'dtype': 'float32'
};

var x = new Complex64Vector( bernoulli( 20, 0.7, opts ) );
console.log( ndarray2array( x ) );

var idx = cindexOfTruthy( [ x ] );
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
