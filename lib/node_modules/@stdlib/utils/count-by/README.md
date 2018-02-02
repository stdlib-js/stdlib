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

# countBy

> Group values according to an indicator function and return group counts.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var countBy = require( '@stdlib/utils/count-by' );
```

#### countBy( collection, \[options,] indicator )

Groups values according to an `indicator` function, i.e., a function which specifies which group an element in the input `collection` belongs to, and returns group counts.

```javascript
function indicator( v ) {
    return v[ 0 ];
}
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var out = countBy( arr, indicator );
// returns { 'b': 3, 'f': 1 }
```

An `indicator` function is provided two arguments:

-   `value`: collection element
-   `index`: collection index

```javascript
function indicator( v, i ) {
    console.log( '%d: %d', i, v );
    return v[ 0 ];
}
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var out = countBy( arr, indicator );
// returns { 'b': 3, 'f': 1 }
```

The function accepts the following `options`:

-   `thisArg`: execution context.

To set the `indicator` execution context, provide a `thisArg`.

```javascript
function indicator( v ) {
    this.count += 1;
    return v[ 0 ];
}
var context = {
    'count': 0
};
var opts = {
    'thisArg': context
};
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var out = countBy( arr, opts, indicator );
// returns { 'b': 3, 'f': 1 }

console.log( context.count );
// => 4
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   The value returned by an `indicator` function should be a value which can be serialized as an `object` key. As a counterexample,

    ```javascript
    function indicator( v ) {
        return {};
    }
    var arr = [ 'beep', 'boop', 'foo', 'bar' ];

    var out = countBy( arr, indicator );
    // returns { '[object Object]': 4 }
    ```

    while each group identifier is unique, all collection elements resolve to the same group because each group identifier serializes to the same `string`. 

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var countBy = require( '@stdlib/utils/count-by' );

var vals;
var arr;
var out;
var i;
var j;

vals = [ 'beep', 'boop', 'foo', 'bar', 'woot', 'woot' ];

// Generate a random collection...
arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    j = floor( randu()*vals.length );
    arr[ i ] = vals[ j ];
}

function indicator( v ) {
    // Use the first letter of each element to define groups:
    return v[ 0 ];
}

// Compute the group counts:
out = countBy( arr, indicator );
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

</section>

<!-- /.links -->
