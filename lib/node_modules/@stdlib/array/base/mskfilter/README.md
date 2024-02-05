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

# mskfilter

> Return a new array by applying a mask to a provided input array.

<section class="usage">

## Usage

```javascript
var mskfilter = require( '@stdlib/array/base/mskfilter' );
```

#### mskfilter( x, mask )

Returns a new array by applying a mask to a provided input array.

```javascript
var x = [ 1, 2, 3, 4 ];

var y = mskfilter( x, [ 0, 1, 0, 1 ] );
// returns [ 2, 4 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function **always** returns a new "generic" array.
-   If a `mask` array element is truthy, the corresponding element in `x` is **included** in the output array; otherwise, the corresponding element in `x` is "masked" and thus **excluded** from the output array.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeroTo = require( '@stdlib/array/base/zero-to' );
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var mskfilter = require( '@stdlib/array/base/mskfilter' );

// Generate a linearly spaced array:
var x = zeroTo( 20 );

// Generate a random mask:
var mask = bernoulli( x.length, 0.5, {
    'dtype': 'generic'
});

// Filter an array using the mask:
var y = mskfilter( x, mask );

console.log( x );
console.log( mask );
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
