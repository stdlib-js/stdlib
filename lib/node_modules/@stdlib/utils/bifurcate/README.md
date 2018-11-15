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

# bifurcate

> Split values into two groups.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var bifurcate = require( '@stdlib/utils/bifurcate' );
```

#### bifurcate( collection, \[options,] filter )

Splits values into two groups. If an element in `filter` is truthy, the corresponding element in `collection` belongs to the first group; otherwise, the `collection` element belongs to the second group.

```javascript
var arr = [ 'beep', 'boop', 'foo', 'bar' ];
var filter = [ true, true, false, true ];

var out = bifurcate( arr, filter );
// returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```

The function accepts the following `options`:

-   `returns`: specifies the output format. If the option equals `'values'`, the function outputs element values. If the option equals `'indices'`, the function outputs element indices. If the option equals `'*'`, the function outputs both element indices and values. Default: `'values'`.

By default, the function returns element values. To return element indices, set the `returns` option to `'indices'`.

```javascript
var arr = [ 'beep', 'boop', 'foo', 'bar' ];
var filter = [ true, true, false, true ];

var opts = {
    'returns': 'indices'
};
var out = bifurcate( arr, opts, filter );
// returns [ [ 0, 1, 3 ], [ 2 ] ]
```

To return index-element pairs, set the `returns` option to `'*'`.

```javascript
var arr = [ 'beep', 'boop', 'foo', 'bar' ];
var filter = [ true, true, false, true ];

var opts = {
    'returns': '*'
};
var out = bifurcate( arr, opts, filter );
// returns [ [ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ], [ [ 2, 'foo' ] ] ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Both `collection` and `filter` **must** be collections. A collection may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var bifurcate = require( '@stdlib/utils/bifurcate' );

var vals;
var arr;
var out;
var f;
var i;
var j;

vals = [ 'beep', 'boop', 'foo', 'bar', 'woot', 'woot' ];

// Generate a random collection...
arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    j = floor( randu()*vals.length );
    arr[ i ] = vals[ j ];
}

// Randomly assign collection values to a group...
f = new Array( arr.length );
for ( i = 0; i < arr.length; i++ ) {
    f[ i ] = ( randu() < 0.5 );
}

// Compute the groups:
out = bifurcate( arr, f );
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
