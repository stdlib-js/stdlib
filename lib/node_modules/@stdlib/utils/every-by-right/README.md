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

# everyByRight

> Test whether all elements in a collection pass a test implemented by a predicate function, iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var everyByRight = require( '@stdlib/utils/every-by-right' );
```

#### everyByRight( collection, predicate\[, thisArg ] )

Tests whether all elements in a `collection` pass a test implemented by a `predicate` function, iterating from right to left.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var arr = [ 1, 2, 3, 4 ];

var bool = everyByRight( arr, isPositive );
// returns true
```

If a `predicate` function returns a non-truthy value, the function **immediately** returns `false`.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var arr = [ 1, -2, 3, 4 ];

var bool = everyByRight( arr, isPositive );
// returns false
```

The invoked `function` is provided three arguments:

-   `value`: collection element
-   `index`: collection index
-   `collection`: input collection

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    if ( value < 0 ) {
        return false;
    }
    this.sum += value;
    this.count += 1;
    return true;
}

var arr = [ 1, 2, 3, 4 ];

var context = {
    'sum': 0,
    'count': 0
};

var bool = everyByRight( arr, sum, context );
// returns true

var mean = context.sum / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   If provided an empty collection, the function returns `true`.

    ```javascript
    function untrue() {
        return false;
    }
    var bool = everyByRight( [], untrue );
    // returns true
    ```

-   The function differs from [`Array.prototype.every`][mdn-array-every] in the following ways:

    -   The function does **not** skip `undefined` elements.

        <!-- eslint-disable no-sparse-arrays, stdlib/doctest-marker -->

        ```javascript
        function log( value, index ) {
            console.log( '%s: %s', index, value );
            return true;
        }

        var arr = [ 1, , , 4 ];

        var bool = everyByRight( arr, log );
        /* =>
            3: 4
            2: undefined
            1: undefined
            0: 1
        */
        ```

    -   The function provides limited support for dynamic collections (i.e., collections whose `length` changes during execution). Note, however, that index incrementation is **not** guaranteed to be monotonically **decreasing**.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var everyByRight = require( '@stdlib/utils/every-by-right' );

function isPositive( value ) {
    return ( value > 0 );
}

var bool;
var arr;
var i;

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = randu();
}

bool = everyByRight( arr, isPositive );
// returns <boolean>
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

[mdn-array-every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

</section>

<!-- /.links -->
