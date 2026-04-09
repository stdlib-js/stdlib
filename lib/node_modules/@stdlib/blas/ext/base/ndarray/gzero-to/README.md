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

# gzeroTo

> Fill a one-dimensional ndarray with linearly spaced numeric elements which increment by `1` starting from zero.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gzeroTo = require( '@stdlib/blas/ext/base/ndarray/gzero-to' );
```

#### gzeroTo( arrays )

Fills a one-dimensional ndarray with linearly spaced numeric elements which increment by `1` starting from zero.

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = [ 0.0, 0.0, 0.0, 0.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
// returns <ndarray>[ 0.0, 0.0, 0.0, 0.0 ]

var out = gzeroTo( [ x ] );
// returns <ndarray>[ 0.0, 1.0, 2.0, 3.0 ]
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
var gzeroTo = require( '@stdlib/blas/ext/base/ndarray/gzero-to' );

var xbuf = zeros( 10, 'generic' );
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

gzeroTo( [ x ] );
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
