<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# zeroTo

> Generate a linearly spaced numeric array whose elements increment by 1 starting from zero.

<section class="usage">

## Usage

```javascript
var zeroTo = require( '@stdlib/array/base/zero-to' );
```

#### zeroTo( n )

Generates a linearly spaced numeric array whose elements increment by `1` starting from zero.

```javascript
var arr = zeroTo( 6 );
// returns [ 0, 1, 2, 3, 4, 5 ]
```

If `n <= 0`, the function returns an empty array.

```javascript
var arr = zeroTo( 0 );
// returns []

arr = zeroTo( -1 );
// returns []
```

If `n` is a non-integer value greater than zero, the function returns an array having `ceil(n)` elements.

```javascript
var arr = zeroTo( 5.1 );
// returns [ 0, 1, 2, 3, 4, 5 ]
```

#### zeroTo.assign( out, stride, offset )

Fills an array with linearly spaced numeric elements which increment by 1 starting from zero.

```javascript
var out = [ 0, 0, 0, 0, 0, 0 ];

var arr = zeroTo.assign( out, -1, out.length-1 );
// returns [ 5, 4, 3, 2, 1, 0 ]

var bool = ( arr === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var sort2hp = require( '@stdlib/blas/ext/base/gsort2hp' );
var filledBy = require( '@stdlib/array/base/filled-by' );
var randu = require( '@stdlib/random/base/randu' );
var zeroTo = require( '@stdlib/array/base/zero-to' );

// Generate an array of random numbers:
var x = filledBy( 10, randu );

// Generate an array of indices:
var idx = zeroTo( x.length );

// Create a temporary array to avoid mutation:
var tmp = x.slice();

// Sort the index array according to the sort order of `x`:
sort2hp( x.length, 1, tmp, 1, idx, 1 );

console.log( x );
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
