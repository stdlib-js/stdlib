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

# countIf

> Count the number of elements in an array which pass a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var countIf = require( '@stdlib/array/base/count-if' );
```

#### countIf( x, predicate\[, thisArg] )

Counts the number of elements in an array which pass a test implemented by a predicate function.

```javascript
function predicate( value ) {
    return ( value > 0 );
}

var x = [ 0, 1, 0, 1, 2 ];

var out = countIf( x, predicate );
// returns 3
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

var x = [ 0, 1, 0, 1, 2 ];

var context = {
    'count': 0
};

var out = countIf( x, predicate, context );
// returns 3

var cnt = context.count;
// returns 5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

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
var countIf = require( '@stdlib/array/base/count-if' );

var x = discreteUniform( 10, -5, 5, {
    'dtype': 'int32'
});
// returns <Int32Array>

var out = countIf( x, naryFunction( isPositiveInteger, 1 ) );
// returns <number>

console.log( x );
console.log( out );
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

</section>

<!-- /.links -->
