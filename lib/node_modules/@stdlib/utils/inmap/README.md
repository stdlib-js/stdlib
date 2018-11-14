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

# inmap

> Invoke a function for each element in a collection and update the collection in-place.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var inmap = require( '@stdlib/utils/inmap' );
```

#### inmap( collection, fcn\[, thisArg ] )

Invokes a `function` for each element in a `collection` and updates the `collection` in-place.

```javascript
function scale( value, index ) {
    return value * index;
}

var arr = [ 1, 2, 3, 4 ];

var out = inmap( arr, scale );
// returns [ 0, 2, 6, 12 ]

var bool = ( out === arr );
// returns true
```

The invoked `function` is provided three arguments:

-   `value`: collection element
-   `index`: collection index
-   `collection`: input collection

Basic support for dynamic collections is provided. Note, however, that index incrementation is monotonically increasing.

```javascript
function scale1( value, index, collection ) {
    if ( index === collection.length-1 && collection.length < 10 ) {
        collection.push( index+2 );
    }
    return value * index;
}

var arr = [ 1, 2, 3, 4 ];

var out = inmap( arr, scale1 );
// returns [ 0, 2, 6, 12, 20, 30, 42, 56, 72, 90 ]

function scale2( value, index, collection ) {
    collection.shift();
    return value * index;
}

arr = [ 1, 2, 3, 4 ];

out = inmap( arr, scale2 );
// returns [ 3, 3 ]
```

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    this.sum += value;
    this.count += 1;
    return value;
}

var arr = [ 1, 2, 3, 4 ];

var context = {
    'sum': 0,
    'count': 0
};

var out = inmap( arr, sum, context );
// returns [ 1, 2, 3, 4 ]

var mean = context.sum / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   The function differs from [`Array.prototype.map`][mdn-array-map] in the following ways:

    -   The function returns the input `collection`.

    -   The function modifies `collection` elements in-place.

    -   The function does **not** skip `undefined` elements.

        <!-- eslint-disable no-sparse-arrays, stdlib/doctest-marker -->

        ```javascript
        function log( value, index ) {
            console.log( '%s: %s', index, value );
            return value;
        }

        var arr = [ 1, , , 4 ];

        var out = inmap( arr, log );
        /* =>
            0: 1
            1: undefined
            2: undefined
            3: 4
        */
        ```

    -   The function provides limited support for dynamic collections (i.e., collections whose `length` changes during execution).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
var inmap = require( '@stdlib/utils/inmap' );

var bool;
var arr;
var out;
var i;

function scale( value, index, collection ) {
    if ( isEven( index ) ) {
        collection.shift();
    } else {
        collection.push( index+1 );
    }
    return value * index;
}

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = i;
}
out = inmap( arr, scale );

bool = ( out === arr );
console.log( bool );

console.log( out );
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

[mdn-array-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

</section>

<!-- /.links -->
