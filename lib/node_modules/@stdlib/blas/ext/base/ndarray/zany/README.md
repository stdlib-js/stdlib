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

# zany

> Test whether at least one element in a one-dimensional double-precision complex floating-point ndarray is truthy.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var zany = require( '@stdlib/blas/ext/base/ndarray/zany' );
```

#### zany( arrays )

Tests whether at least one element in a one-dimensional double-precision complex floating-point ndarray is truthy.

```javascript
var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );

var x = new Complex128Vector( [ 0.0, 0.0, 1.0, 2.0 ] );

var v = zany( [ x ] );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A complex number is truthy when at least one of its real or imaginary components is truthy.
-   If provided an empty one-dimensional ndarray, the function returns `false`.
-   The function explicitly treats `NaN` values as falsy.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zany = require( '@stdlib/blas/ext/base/ndarray/zany' );

var buf = bernoulli( 10*2, 0.5, {
    'dtype': 'float64'
});
var x = new Complex128Vector( buf.buffer );
console.log( ndarray2array( x ) );

var v = zany( [ x ] );
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
