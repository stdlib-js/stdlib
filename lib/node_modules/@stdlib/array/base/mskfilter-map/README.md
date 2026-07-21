<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# mskfilterMap

> Apply a mask and a callback function to a provided input array.

<section class="usage">

## Usage

```javascript
var mskfilterMap = require( '@stdlib/array/base/mskfilter-map' );
```

#### mskfilterMap( x, mask, clbk\[, thisArg] )

Returns a new array after applying a mask and a callback function to a provided input array.

```javascript
function clbk( value ) {
    return value * 2;
}

var x = [ 1, 2, 3, 4 ];
var m = [ 0, 1, 0, 1 ];

var y = mskfilterMap( x, m, clbk );
// returns [ 4, 8 ]
```

The function supports the following parameters:

-   **x**: input array.
-   **mask**: mask array.
-   **clbk**: callback to apply.
-   **thisArg**: callback execution context (_optional_).

To set the execution context of the callback function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function clbk( x ) {
    this.count += 1;
    return x;
}

var x = [ 1, 2, 3, 4 ];
var m = [ 1, 1, 0, 1 ];

var ctx = {
    'count': 0
};

var y = mskfilterMap( x, m, clbk, ctx );
// returns [ 1, 2, 4 ]

var v = ctx.count;
// returns 3
```

The function **always** returns a new "generic" array.

#### mskfilterMap.assign( x, mask, out, stride, offset, clbk\[, thisArg] )

Applies a mask and a callback function to a provided input array and assigns results to elements in a provided output array.

```javascript
function clbk( value ) {
    return value * 2;
}

var x = [ 1, 2, 3, 4 ];
var m = [ 0, 1, 0, 1 ];

var out = [ 0, 0, 0, 0 ];
var arr = mskfilterMap.assign( x, m, out, -2, out.length-1, clbk );
// returns [ 0, 8, 0, 4 ]

var bool = ( arr === out );
// returns true
```

The function supports the following parameters:

-   **x**: input array.
-   **mask**: mask array.
-   **out**: output array.
-   **stride**: output array stride.
-   **offset**: output array offset.
-   **clbk**: callback function.
-   **thisArg**: callback execution context (_optional_).

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a `mask` array element is truthy, the corresponding element in `x` is **included** in the output array; otherwise, the corresponding element in `x` is "masked" and thus **excluded** from the output array.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeroTo = require( '@stdlib/array/base/zero-to' );
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var abs2 = require( '@stdlib/math/base/special/abs2' );
var mskfilterMap = require( '@stdlib/array/base/mskfilter-map' );

// Generate a linearly spaced array:
var x = zeroTo( 20 );
console.log( x );

// Generate a random mask:
var mask = bernoulli( x.length, 0.5, {
    'dtype': 'generic'
});
console.log( mask );

// Filter an array using the mask:
var y = mskfilterMap( x, mask, abs2 );
console.log( y );
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
