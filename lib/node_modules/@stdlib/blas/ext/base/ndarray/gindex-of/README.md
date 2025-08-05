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

# gindexOf

> Return the first index of a search element in a one-dimensional ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gindexOf = require( '@stdlib/blas/ext/base/ndarray/gindex-of' );
```

#### gindexOf( arrays )

Returns the first index of a specified search element in a one-dimensional ndarray.

```javascript
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var searchElement = scalar2ndarray( 2.0, {
    'dtype': 'generic'
});

var fromIndex = scalar2ndarray( 0, {
    'dtype': 'generic'
});

var idx = gindexOf( [ x, searchElement, fromIndex ] );
// returns 3
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing the search element.
    -   a zero-dimensional ndarray containing the index from which to begin searching.

If the function is unable to find a search element, the function returns `-1`.

```javascript
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var searchElement = scalar2ndarray( 10.0, {
    'dtype': 'generic'
});

var fromIndex = scalar2ndarray( 0, {
    'dtype': 'generic'
});

var idx = gindexOf( [ x, searchElement, fromIndex ] );
// returns -1
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a specified starting search index is negative, the function resolves the starting search index by counting backward from the last element (where `-1` refers to the last element).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );
var gindexOf = require( '@stdlib/blas/ext/base/ndarray/gindex-of' );

var xbuf = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var searchElement = scalar2ndarray( 80.0, {
    'dtype': 'generic'
});
console.log( 'Search Element:', ndarraylike2scalar( searchElement ) );

var fromIndex = scalar2ndarray( 0, {
    'dtype': 'generic'
});
console.log( 'From Index:', ndarraylike2scalar( fromIndex ) );

var idx = gindexOf( [ x, searchElement, fromIndex ] );
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
