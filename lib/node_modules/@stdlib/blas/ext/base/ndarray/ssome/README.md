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

# ssome

> Test whether a one-dimensional single-precision floating-point ndarray contains at least `k` truthy elements.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ssome = require( '@stdlib/blas/ext/base/ndarray/ssome' );
```

#### ssome( arrays )

Tests whether a one-dimensional single-precision floating-point ndarray contains at least `k` truthy elements.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Float32Vector( [ 0.0, 0.0, 1.0, 2.0 ] );

var k = scalar2ndarray( 2, {
    'dtype': 'generic'
});

var v = ssome( [ x, k ] );
// returns true
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray specifying the minimum number of truthy elements.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional ndarray, the function returns `false`.
-   The function explicitly treats `NaN` values as falsy.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bernoulli = require( '@stdlib/random/bernoulli' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ssome = require( '@stdlib/blas/ext/base/ndarray/ssome' );

var x = bernoulli( [ 10 ], 0.3, {
    'dtype': 'float32'
});
console.log( ndarray2array( x ) );

var k = scalar2ndarray( 3, {
    'dtype': 'generic'
});

var v = ssome( [ x, k ] );
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
