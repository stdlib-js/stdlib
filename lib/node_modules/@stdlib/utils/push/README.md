<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# push

> Add one or more elements to the end of a collection.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var push = require( '@stdlib/utils/push' );
```

#### push( collection, ...items )

Adds one or more elements to the end of a `collection`. A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (i.e., an [`Object`][mdn-object] having a valid writable `length` property). 

```javascript
var arr = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];

var out = push( arr, 6.0, 7.0 );
// returns [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]

var bool = ( out === arr );
// returns true
```

In contrast to [`Array.prototype.push`][mdn-array-push], the function returns the extended collection, rather than the collection length. For [typed arrays][mdn-typed-array], the returned value is a new [typed array][mdn-typed-array] view whose underlying [`ArrayBuffer`][mdn-arraybuffer] may **not** equal the underlying [`ArrayBuffer`][mdn-arraybuffer] for the input `collection`.

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
var Float64Array= require( '@stdlib/array/float64' );

var buf = new ArrayBuffer( 3*8 ); // 8 bytes per double

var arr = new Float64Array( buf, 0, 2 );
arr[ 0 ] = 1.0;
arr[ 1 ] = 2.0;

var out = push( arr, 3.0 );
// returns <Float64Array>[ 1.0, 2.0, 3.0 ]

var bool = ( out === arr );
// returns false

bool = ( out.buffer === arr.buffer );
// returns true

out = push( out, 4.0 );
// returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]

bool = ( out.buffer === arr.buffer );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function adds one or more elements to a [typed array][mdn-typed-array] by setting values in the underlying [`ArrayBuffer`][mdn-arraybuffer]. If an [`ArrayBuffer`][mdn-arraybuffer] does not have enough bytes in which to store all elements, the function allocates a new [`ArrayBuffer`][mdn-arraybuffer] capable of holding `2^n` elements, where `n` is the next power of `2`. This procedure is similar to how environments internally handle dynamic memory allocation for [`Arrays`][mdn-array].
-   Beware when providing [typed arrays][mdn-typed-array] which are views pointing to a shared (or pooled) [`ArrayBuffer`][mdn-arraybuffer]. Because the function sets [`ArrayBuffer`][mdn-arraybuffer] bytes outside of a provided [view][mdn-typed-array], the function may overwrite bytes belonging to one or more external views. This could be a potential **security vulnerability**. Prefer providing [typed arrays][mdn-typed-array] which have an exclusive [`ArrayBuffer`][mdn-arraybuffer]; otherwise, be sure to plan for and guard against mutated state.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array= require( '@stdlib/array/float64' );
var push = require( '@stdlib/utils/push' );

var arr;
var i;

arr = new Float64Array();
for ( i = 0; i < 100; i++ ) {
    arr = push( arr, i );
}
console.log( arr );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-array-push]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

</section>

<!-- /.links -->
