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

# gjoinBetween

> Return a string by joining one-dimensional ndarray elements using a specified separator for each pair of consecutive elements.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gjoinBetween = require( '@stdlib/blas/ext/base/ndarray/gjoin-between' );
```

#### gjoinBetween( arrays )

Returns a string by joining one-dimensional ndarray elements using a specified separator for each pair of consecutive elements.

```javascript
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = [ 1, 2, 3, 4 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var prefix = scalar2ndarray( 'op: ', {
    'dtype': 'generic'
});

var suffix = scalar2ndarray( '', {
    'dtype': 'generic'
});

var sbuf = [ ' + ', ' - ', ' != ' ];
var separators = new ndarray( 'generic', sbuf, [ 3 ], [ 1 ], 0, 'row-major' );

var out = gjoinBetween( [ x, prefix, suffix, separators ] );
// returns 'op: 1 + 2 - 3 != 4'
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing a prefix string.
    -   a zero-dimensional ndarray containing a suffix string.
    -   a one-dimensional ndarray containing separator strings.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If the input ndarray is empty, the function returns the prefix and suffix joined together.
-   The `separators` ndarray is assumed to have at least `N-1` elements (i.e., equal to the number of "gaps" between consecutive elements), where `N` is the number of elements in the input ndarray.
-   If an array element is either `null` or `undefined`, the function serializes the element as an empty string.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var filled = require( '@stdlib/array/base/filled' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gjoinBetween = require( '@stdlib/blas/ext/base/ndarray/gjoin-between' );

var xbuf = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var prefix = scalar2ndarray( '[ ', {
    'dtype': 'generic'
});

var suffix = scalar2ndarray( ' ]', {
    'dtype': 'generic'
});

var sbuf = filled( ' | ', xbuf.length - 1 );
var separators = new ndarray( 'generic', sbuf, [ sbuf.length ], [ 1 ], 0, 'row-major' );

var out = gjoinBetween( [ x, prefix, suffix, separators ] );
console.log( out );
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
