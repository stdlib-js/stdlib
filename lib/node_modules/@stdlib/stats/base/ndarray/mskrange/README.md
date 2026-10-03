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

# mskrange

> Calculate the [range][range] of a one-dimensional ndarray according to a mask.

<section class="intro">

The [**range**][range] is defined as the difference between the maximum and minimum values.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mskrange = require( '@stdlib/stats/base/ndarray/mskrange' );
```

#### mskrange( arrays )

Computes the [range][range] of a one-dimensional ndarray according to a mask.

```javascript
var vector = require( '@stdlib/ndarray/vector/ctor' );

var x = vector( [ 1.0, -2.0, 4.0, 2.0 ], 'generic' );
var mask = vector( [ 0, 0, 1, 0 ], 'uint8' );

var v = mskrange( [ x, mask ] );
// returns 4.0
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
var mskrange = require( '@stdlib/stats/base/ndarray/mskrange' );

var opts = {
    'dtype': 'generic'
};
var mopts = {
    'dtype': 'uint8'
};

var x = uniform( [ 10 ], -50.0, 50.0, opts );
console.log( ndarray2array( x ) );

var mask = bernoulli( [ 10 ], 0.2, mopts );
console.log( ndarray2array( mask ) );

var v = mskrange( [ x, mask ] );
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

[range]: https://en.wikipedia.org/wiki/Range_%28statistics%29

</section>

<!-- /.links -->
