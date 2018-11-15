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

# bifurcateBy

> Split values into two groups according to a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var bifurcateBy = require( '@stdlib/utils/bifurcate-by' );
```

#### bifurcateBy( collection, \[options,] predicate )

Splits values into two groups according to a `predicate` function, which specifies which group an element in the input `collection` belongs to. If a `predicate` function returns a truthy value, a collection element belongs to the first group; otherwise, a collection element belongs to the second group.

```javascript
function predicate( v ) {
    return v[ 0 ] === 'b';
}
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var out = bifurcateBy( arr, predicate );
// returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```

A `predicate` function is provided two arguments:

-   `value`: collection element
-   `index`: collection index

```javascript
function predicate( v, i ) {
    console.log( '%d: %s', i, v );
    return v[ 0 ] === 'b';
}
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var out = bifurcateBy( arr, predicate );
// returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```

The function accepts the following `options`:

-   `returns`: specifies the output format. If the option equals `'values'`, the function outputs element values. If the option equals `'indices'`, the function outputs element indices. If the option equals `'*'`, the function outputs both element indices and values. Default: `'values'`.
-   `thisArg`: execution context.

By default, the function returns element values. To return element indices, set the `returns` option to `'indices'`.

```javascript
function predicate( v ) {
    return v[ 0 ] === 'b';
}
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var opts = {
    'returns': 'indices'
};
var out = bifurcateBy( arr, opts, predicate );
// returns [ [ 0, 1, 3 ], [ 2 ] ]
```

To return index-element pairs, set the `returns` option to `'*'`.

```javascript
function predicate( v ) {
    return v[ 0 ] === 'b';
}
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var opts = {
    'returns': '*'
};
var out = bifurcateBy( arr, opts, predicate );
// returns [ [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], [ [ 2, 'foo' ] ] ]
```

To set the `predicate` execution context, provide a `thisArg`.

```javascript
function predicate( v ) {
    this.count += 1;
    return v[ 0 ] === 'b';
}
var context = {
    'count': 0
};
var opts = {
    'thisArg': context
};
var arr = [ 'beep', 'boop', 'foo', 'bar' ];

var out = bifurcateBy( arr, opts, predicate );
// returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]

console.log( context.count );
// => 4
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var bifurcateBy = require( '@stdlib/utils/bifurcate-by' );

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

function predicate( v ) {
    return v[ 0 ] === 'b';
}

// Compute the groups:
out = bifurcateBy( arr, predicate );
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
