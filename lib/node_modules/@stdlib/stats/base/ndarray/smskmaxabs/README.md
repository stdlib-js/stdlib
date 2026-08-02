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

# smskmaxabs

> Calculate the maximum absolute value of a one-dimensional single-precision floating-point ndarray according to a mask.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var smskmaxabs = require( '@stdlib/stats/base/ndarray/smskmaxabs' );
```

#### smskmaxabs( arrays )

Computes the maximum absolute value of a one-dimensional single-precision floating-point ndarray according to a mask.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );
var Uint8Vector = require( '@stdlib/ndarray/vector/uint8' );

var x = new Float32Vector( [ 1.0, -5.0, 4.0, 2.0 ] );
var mask = new Uint8Vector( [ 0, 0, 1, 0 ] );

var v = smskmaxabs( [ x, mask ] );
// returns 5.0
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional mask ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a mask array element is `0`, the corresponding element in the input ndarray is considered valid and **included** in computation. If a mask array element is `1`, the corresponding element in the input ndarray is considered invalid/missing and **excluded** from computation.
-   If provided an empty ndarray or a mask with all elements set to `1`, the function returns `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/uniform' );
var bernoulli = require( '@stdlib/random/bernoulli' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var smskmaxabs = require( '@stdlib/stats/base/ndarray/smskmaxabs' );

var x = uniform( [ 10 ], -50.0, 50.0, {
    'dtype': 'float32'
});
console.log( ndarray2array( x ) );

var mask = bernoulli( [ 10 ], 0.2, {
    'dtype': 'uint8'
});
console.log( ndarray2array( mask ) );

var v = smskmaxabs( [ x, mask ] );
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
