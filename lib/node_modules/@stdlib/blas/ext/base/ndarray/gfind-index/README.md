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

# gfindIndex

> Return the index of the first element in a one-dimensional ndarray which passes a test implemented by a predicate function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gfindIndex = require( '@stdlib/blas/ext/base/ndarray/gfind-index' );
```

#### gfindIndex( arrays, clbk\[, thisArg] )

Returns the index of the first element in a one-dimensional ndarray which passes a test implemented by a predicate function.

```javascript
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var idx = gfindIndex( [ x ], isEven );
// returns 2
```

If no element passes a test implemented by a predicate function, the function returns `-1`.

```javascript
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

var xbuf = [ 1.0, 3.0, 5.0, 7.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var idx = gfindIndex( [ x ], isEven );
// returns -1
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray.
-   **clbk**: callback function.
-   **thisArg**: callback execution context (_optional_).

The callback function is provided the following arguments:

-   **value**: current array element.
-   **idx**: current array element index.
-   **array**: the input ndarray.

To set the callback execution context, provide a `thisArg`.

```javascript
var ndarray = require( '@stdlib/ndarray/base/ctor' );

function isEven( v ) {
    this.count += 1;
    return v % 2.0 === 0.0;
}

var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
var ctx = {
    'count': 0
};

var v = gfindIndex( [ x ], isEven, ctx );
// returns 2

var count = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional ndarray, the function returns `-1`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gfindIndex = require( '@stdlib/blas/ext/base/ndarray/gfind-index' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

var xbuf = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var idx = gfindIndex( [ x ], isEven );
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
