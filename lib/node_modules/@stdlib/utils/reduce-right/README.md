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

# reduceRight

> Apply a function against an accumulator and each element in a collection and return the accumulated result, iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reduceRight = require( '@stdlib/utils/reduce-right' );
```

#### reduceRight( collection, initial, reducer\[, thisArg ] )

Applies a `function` against an accumulator and each element in a `collection` and returns the accumulated result, iterating from right to left.

```javascript
function sum( accumulator, value ) {
    return accumulator + value;
}

var arr = [ 1, 2, 3, 4 ];

var out = reduceRight( arr, 0, sum );
// returns 10
```

The `reducer` function is provided four arguments:

-   `accumulator`: accumulated value
-   `value`: collection element
-   `index`: collection index
-   `collection`: input collection

Basic support for dynamic collections is provided. Note, however, that index incrementation is **not** guaranteed to be monotonically **decreasing**.

```javascript
var arr = [ 1, 2, 3, 4 ];
var i = 0;

function sum1( accumulator, value, index, collection ) {
    i += 1;
    if ( index === 0 && collection.length < 10 ) {
        collection.unshift( i+1 );
    }
    return accumulator + value;
}

var out = reduceRight( arr, 0, sum1 );
// returns 55

function sum2( accumulator, value, index, collection ) {
    collection.pop();
    return accumulator + value;
}

arr = [ 1, 2, 3, 4 ];

out = reduceRight( arr, 0, sum2 );
// returns 6
```

To set the function execution context, provide a `thisArg`.

```javascript
function sum( accumulator, value ) {
    this.count += 1;
    return accumulator + value;
}

var arr = [ 1, 2, 3, 4 ];

var context = {
    'count': 0
};

var out = reduceRight( arr, 0, sum, context );
// returns 10

var mean = out / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   The function differs from [`Array.prototype.reduceRight`][mdn-array-reduceright] in the following ways:

    -   The function **requires** an `initial` value for the `accumulator`. The `initial` value is used during the first invocation of the `reducer` function.

    -   The function does **not** skip the first element in the `collection`.

    -   The function does **not** skip `undefined` elements.

        <!-- eslint-disable no-sparse-arrays, stdlib/doctest-marker -->

        ```javascript
        function log( accumulator, value, index ) {
            console.log( '%s: %s', index, value );
            return accumulator;
        }

        var arr = [ 1, , , 4 ];

        var out = reduceRight( arr, 0, log );
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
var reduceRight = require( '@stdlib/utils/reduce-right' );

var arr;
var s;
var i;

function sum( acc, value ) {
    return acc + value;
}

arr = new Array( 1000 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = i;
}

s = reduceRight( arr, 0, sum );
console.log( s );
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

[mdn-array-reduceright]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight

</section>

<!-- /.links -->
