<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

> Test whether all elements in an array pass a test implemented by a predicate function, iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var everyByRight = require( '@stdlib/array/base/every-by-right' );
```

#### everyByRight( x, predicate\[, thisArg] )

Tests whether all elements in an array pass a test implemented by a `predicate` function, iterating from right to left.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var x = [ 1, 2, 3, 4 ];

var bool = everyByRight( x, isPositive );
// returns true
```

If a `predicate` function returns a non-truthy value, the function **immediately** returns `false`.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var x = [ 1, -2, 3, 4 ];

var bool = everyByRight( x, isPositive );
// returns false
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: input array.

To set the `predicate` function execution context, provide a `thisArg`.

```javascript
function predicate( value ) {
    this.count += 1;
    return ( value > 0 );
}

var x = [ 1, -2, 3, 4 ];

var context = {
    'count': 0
};

var bool = everyByRight( x, predicate, context );
// returns false

var cnt = context.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function performs a linear scan and returns immediately upon encountering a non-truthy return value. Unlike [`Array.prototype.every`][mdn-array-every], when performing a linear scan, the function does **not** skip `undefined` elements.
-   If provided an empty array, the function returns `true`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var naryFunction = require( '@stdlib/utils/nary-function' );
var everyByRight = require( '@stdlib/array/base/every-by-right' );

var x = discreteUniform( 10, 0, 10, {
    'dtype': 'int32'
});
// returns <Int32Array>

var out = everyByRight( x, naryFunction( isPositiveInteger, 1 ) );
// returns <boolean>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array-every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

</section>

<!-- /.links -->
