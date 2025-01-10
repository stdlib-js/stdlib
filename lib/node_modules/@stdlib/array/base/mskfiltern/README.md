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

# mskfiltern

> Apply a mask to one or more provided input arrays in a single pass.

<section class="usage">

## Usage

```javascript
var mskfiltern = require( '@stdlib/array/base/mskfiltern' );
```

#### mskfiltern( x, \[...arrays,] mask )

Returns new arrays by applying a mask to one or more provided input arrays in a single pass.

```javascript
var x = [ 1, 2, 3, 4 ];
var idx = [ 0, 1, 2, 3 ];

var out = mskfiltern( x, idx, [ 0, 1, 0, 1 ] );
// returns [ [ 2, 4 ], [ 1, 3 ] ]
```

The function supports the following parameters:

-   **x**: first input array.
-   **...arrays**: additional input arrays.
-   **mask**: mask array.

The function **always** returns new "generic" arrays.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a `mask` array element is truthy, the corresponding elements in the input arrays are **included** in the respective output arrays; otherwise, the corresponding elements in the input arrays are "masked" and thus **excluded** from the respective output arrays.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeroTo = require( '@stdlib/array/base/zero-to' );
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var mskfiltern = require( '@stdlib/array/base/mskfiltern' );

// Generate linearly spaced arrays:
var x = zeroTo( 20 );
console.log( x );

var idx = zeroTo( x.length );
console.log( idx );

// Generate a random mask:
var mask = bernoulli( x.length, 0.5, {
    'dtype': 'generic'
});
console.log( mask );

// Filter both arrays using the mask:
var out = mskfiltern( x, idx, mask );
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
