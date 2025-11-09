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

# mskmin

> Calculate the minimum value of a one-dimensional ndarray according to a mask.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mskmin = require( '@stdlib/stats/base/ndarray/mskmin' );
```

#### mskmin( arrays )

Computes the minimum value of a one-dimensional ndarray according to a mask.

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = [ 1.0, -2.0, 4.0, 2.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var maskbuf = [ 0, 0, 1, 0 ];
var mask = new ndarray( 'generic', maskbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var v = mskmin( [ x, mask ] );
// returns -2.0
```

The function has the following parameters:

-   **arrays**: array-like object containing an input ndarray and a mask ndarray.

If a `mask` array element is `0`, the corresponding element in the input ndarray is considered valid and **included** in computation. If a `mask` array element is `1`, the corresponding element in the input ndarray is considered invalid/missing and **excluded** from computation.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty ndarray or a mask with all elements set to `1`, the function returns `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var mskmin = require( '@stdlib/stats/base/ndarray/mskmin' );

var xbuf = uniform( 10, -50.0, 50.0, {
    'dtype': 'generic'
});
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var maskbuf = bernoulli( xbuf.length, 0.2, {
    'dtype': 'generic'
});
var mask = new ndarray( 'generic', maskbuf, [ maskbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( mask ) );

var v = mskmin( [ x, mask ] );
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
