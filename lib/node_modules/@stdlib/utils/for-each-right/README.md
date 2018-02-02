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

# forEachRight

> Invoke a function for each element in a collection, iterating from the right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var forEachRight = require( '@stdlib/utils/for-each-right' );
```

#### forEachRight( collection, fcn\[, thisArg ] )

Invokes a `function` for each element in a `collection`, iterating from right to left.

```javascript
function log( value, index ) {
    console.log( '%s: %d', index, value );
}

var arr = [ 1, 2, 3, 4 ];

forEachRight( arr, log );
/* =>
    3: 4
    2: 3
    1: 2
    0: 1
*/
```

The invoked `function` is provided three arguments:

-   `value`: collection element
-   `index`: collection index
-   `collection`: input collection

Basic support for dynamic collections is provided. Note, however, that index incrementation is **not** guaranteed to be monotonically **decreasing**.

```javascript
var arr = [ 1, 2, 3, 4 ];
var i = 0;

function log1( value, index, collection ) {
    console.log( '%s: %d', index, value );
    i += 1;
    if ( index === 0 && collection.length < 10 ) {
        collection.unshift( i+1 );
    }
}

forEachRight( arr, log1 );
/* =>
    3: 4
    2: 3
    1: 2
    0: 1
    0: 5
    0: 6
    0: 7
    0: 8
    0: 9
    0: 10
*/

function log2( value, index, collection ) {
    console.log( '%s: %d', index, value );
    collection.pop();
}

arr = [ 1, 2, 3, 4 ];

forEachRight( arr, log2 );
/* =>
    3: 4
    1: 2
*/
```

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    this.sum += value;
    this.count += 1;
}

var arr = [ 1, 2, 3, 4 ];

var context = {
    'sum': 0,
    'count': 0
};

forEachRight( arr, sum, context );

var mean = context.sum / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   The function differs from [`Array.prototype.forEach`][mdn-array-foreach] in the following ways:

    -   The function returns the input `collection`.

    -   The function does **not** skip `undefined` elements.

        <!-- eslint-disable no-sparse-arrays -->

        ```javascript
        function log( value, index ) {
            console.log( '%s: %s', index, value );
        }

        var arr = [ 1, , , 4 ];

        forEachRight( arr, log );
        /* =>
            3: 4
            2: undefined
            1: undefined
            0: 1
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
var forEachRight = require( '@stdlib/utils/for-each-right' );

var arr;
var i;

function log( value, index, collection ) {
    console.log( '%s: %d', index, value );
    i += 1;
    if ( isEven( i ) ) {
        collection.pop();
    } else {
        collection.unshift( i+1 );
    }
}

arr = new Array( 100 );
for ( i = arr.length-1; i >= 0; i-- ) {
    arr[ i ] = i;
}

i = 0;
forEachRight( arr, log );
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

[mdn-array-foreach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

</section>

<!-- /.links -->
