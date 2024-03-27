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

> Count the number of elements in an array that satisfy the provided testing function.

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

Counts the number of elements in an array that satisfy the provided testing function.

```javascript
var x = [ 0, 1, 0, 1, 2 ];

function predicate( val ) {
    return ( val % 2 === 0 );
}

var out = countIf( x, predicate );
// returns 3
```

If a `predicate` function returns a truthy value, the function counts that value.

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: input array.

To set the `predicate` function execution context, provide a `thisArg`.

```javascript
var x = [ 1, 2, 3, 4 ];

var context = {
    'target': 3
};

function predicate( value ) {
    return ( value > this.target );
}

var out = countIf( x, predicate, context );
// returns 1
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
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var countIf = require( '@stdlib/array/base/count-if' );

var x = bernoulli( 100, 0.5, {
    'dtype': 'generic'
});
console.log( x );

function predicate( val ) {
    return val === 1;
}
var n = countIf( x, predicate );
console.log( n );
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
