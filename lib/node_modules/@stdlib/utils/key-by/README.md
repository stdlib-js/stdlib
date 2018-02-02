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

# keyBy

> Convert a collection to an object whose keys are determined by a provided function and whose values are the collection values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var keyBy = require( '@stdlib/utils/key-by' );
```

#### keyBy( collection, fcn\[, thisArg ] )

Converts a `collection` to an object whose keys are determined by a provided `function` and whose values are the `collection` values.

<!-- eslint-disable object-curly-newline -->

```javascript
function toKey( value ) {
    return value.a;
}

var arr = [
    { 'a': 1 },
    { 'a': 2 }
];

var out = keyBy( arr, toKey );
// returns { '1': { 'a': 1 }, '2': { 'a': 2 } }
```

The invoked `function` is provided two arguments:

-   `value`: collection element
-   `index`: collection index

To set the function execution context, provide a `thisArg`.

```javascript
function toKey( value, index ) {
    this.sum += value;
    this.count += 1;
    return index;
}

var arr = [ 1, 2, 3, 4 ];

var context = {
    'sum': 0,
    'count': 0
};

var out = keyBy( arr, toKey, context );
// returns { '0': 1, '1': 2, '2': 3, '3': 4 }

var mean = context.sum / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).
-   If more than one element in a `collection` resolves to the same key, the key value is the `collection` element which last resolved to the key.
-   Object values are shallow copies.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var keyBy = require( '@stdlib/utils/key-by' );

var arr;
var obj;
var i;

function toKey( value ) {
    return value.name;
}

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = {
        'name': 'v'+i,
        'value': i
    };
}

obj = keyBy( arr, toKey );
console.log( obj );
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

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

</section>

<!-- /.links -->
