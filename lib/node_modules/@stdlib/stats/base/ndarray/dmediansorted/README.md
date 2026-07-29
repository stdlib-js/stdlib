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

# dmediansorted

> Compute the median value of a sorted one-dimensional double-precision floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dmediansorted = require( '@stdlib/stats/base/ndarray/dmediansorted' );
```

#### dmediansorted( arrays )

Computes the median value of a sorted one-dimensional double-precision floating-point ndarray.

```javascript
var Float64Vector = require( '@stdlib/ndarray/vector/float64' );

var x = new Float64Vector( [ 1.0, 2.0, 3.0 ] );

var v = dmediansorted( [ x ] );
// returns 2.0
```

The function has the following parameters:

-   **arrays**: array-like object containing a sorted one-dimensional input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty ndarray, the function returns `NaN`.
-   The one-dimensional input ndarray must be sorted in either **strictly** ascending or descending order.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/blas/ext/linspace' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dmediansorted = require( '@stdlib/stats/base/ndarray/dmediansorted' );

var x = linspace( [ 11 ], 0.0, 10.0, true, {
    'dtype': 'float64'
});
console.log( ndarray2array( x ) );

var v = dmediansorted( [ x ] );
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
