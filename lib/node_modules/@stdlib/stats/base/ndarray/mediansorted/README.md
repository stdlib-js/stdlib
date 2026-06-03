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

# mediansorted

> Compute the median value of a sorted one-dimensional ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mediansorted = require( '@stdlib/stats/base/ndarray/mediansorted' );
```

#### mediansorted( arrays )

Computes the median value of a sorted one-dimensional ndarray.

```javascript
var vector = require( '@stdlib/ndarray/vector/ctor' );

var x = vector( [ 1.0, 2.0, 3.0 ], 'generic' );

var v = mediansorted( [ x ] );
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
var mediansorted = require( '@stdlib/stats/base/ndarray/mediansorted' );

// Create a linearly spaced sorted array:
var x = linspace( [ 11 ], 0.0, 10.0, {
    'dtype': 'generic'
});
console.log( ndarray2array( x ) );

var v = mediansorted( [ x ] );
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
