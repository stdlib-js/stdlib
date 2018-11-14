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

# group

> Group values as arrays associated with distinct keys.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var group = require( '@stdlib/utils/group' );
```

#### group( collection, \[options,] groups )

Groups values as arrays associated with distinct keys.

```javascript
var arr = [ 'beep', 'boop', 'foo', 'bar' ];
var groups = [ 'b', 'b', 'f', 'b' ];

var out = group( arr, groups );
// returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
```

The function accepts the following `options`:

-   `returns`: specifies the output format. If the option equals `'values'`, the function outputs element values. If the option equals `'indices'`, the function outputs element indices. If the option equals `'*'`, the function outputs both element indices and values. Default: `'values'`.

By default, the function returns element values. To return element indices, set the `returns` option to `'indices'`.

```javascript
var arr = [ 'beep', 'boop', 'foo', 'bar' ];
var groups = [ 'b', 'b', 'f', 'b' ];

var opts = {
    'returns': 'indices'
};
var out = group( arr, opts, groups );
// returns { 'b': [ 0, 1, 3 ], 'f': [ 2 ] }
```

To return index-element pairs, set the `returns` option to `'*'`.

```javascript
var arr = [ 'beep', 'boop', 'foo', 'bar' ];
var groups = [ 'b', 'b', 'f', 'b' ];

var opts = {
    'returns': '*'
};
var out = group( arr, opts, groups );
// returns { 'b': [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], 'f': [ [ 2, 'foo' ] ] }
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Both `collection` and `groups` **must** be collections. A collection may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   Each value in `groups` should resolve to a value which can be serialized as an `object` key. As a counterexample,

    ```javascript
    var arr = [ 'beep', 'boop', 'foo', 'bar' ];
    var groups = [ {}, {}, {}, {} ];

    var out = group( arr, groups );
    // returns { '[object Object]': [ 'beep', 'boop', 'foo', 'bar' ] }
    ```

    while each "group" is unique, all collection elements resolve to the same group because each group identifier serializes to the same `string`. 

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var group = require( '@stdlib/utils/group' );

var vals;
var arr;
var out;
var g;
var i;
var j;

vals = [ 'beep', 'boop', 'foo', 'bar', 'woot', 'woot' ];

// Generate a random collection...
arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    j = floor( randu()*vals.length );
    arr[ i ] = vals[ j ];
}

// Randomly assign collection values to groups...
g = new Array( arr.length );
for ( i = 0; i < arr.length; i++ ) {
    g[ i ] = floor( randu()*vals.length );
}

// Compute the groups:
out = group( arr, g );
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
