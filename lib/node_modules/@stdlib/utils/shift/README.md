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

# shift

> Remove and return the first element of a collection.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var shift = require( '@stdlib/utils/shift' );
```

#### shift( collection )

Removes and returns the first element of a `collection`. A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (i.e., an [`Object`][mdn-object] having a valid writable `length` property). 

```javascript
var arr = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];

var out = shift( arr );
// returns [ [ 2.0, 3.0, 4.0, 5.0 ], 1.0 ]

var bool = ( out[ 0 ] === arr );
// returns true

var lastValue = out[ 1 ];
// returns 1.0
```

In contrast to [`Array.prototype.shift`][mdn-array-shift] which returns only the removed element, the function also returns the shortened collection. For [typed arrays][mdn-typed-array] having a length greater than `0`, the returned collection is a new [typed array][mdn-typed-array] view.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var arr = new Float64Array( 2 );
arr[ 0 ] = 1.0;
arr[ 1 ] = 2.0;

var out = shift( arr );
// returns [ <Float64Array>[ 2.0 ], 1.0 ]

var bool = ( out[ 0 ] === arr );
// returns false

bool = ( out[ 0 ].buffer === arr.buffer );
// returns true

var lastValue = out[ 1 ];
// returns 1.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When provided a [typed array][mdn-typed-array], the function does **not** change the underlying [`ArrayBuffer`][mdn-arraybuffer]. The function returns a new [typed array][mdn-typed-array] view whose length is one less than the input [typed array][mdn-typed-array] length. Accordingly, the function does **not** reduce the memory footprint of an input [typed array][mdn-typed-array].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var shift = require( '@stdlib/utils/shift' );

var arr;
var out;
var i;

arr = new Float64Array( 100 );
for ( i = 0; i < 100; i++ ) {
    out = shift( arr );
    arr = out[ 0 ];
    console.log( 'Length: %d', arr.length );
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

[mdn-array-shift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

</section>

<!-- /.links -->
