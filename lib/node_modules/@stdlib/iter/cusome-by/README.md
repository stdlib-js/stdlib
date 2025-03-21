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

# iterCuSomeBy

> Create an iterator which cumulatively tests whether at least `n` iterated values pass a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterCuSomeBy = require( '@stdlib/iter/cusome-by' );
```

#### iterCuSomeBy( iterator, n, predicate\[, thisArg] )

Returns an [iterator][mdn-iterator-protocol] which cumulatively tests whether at least `n` iterated values pass a test implemented by a `predicate` function.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function isPositive( v ) {
    return ( v > 0 );
}

var arr = array2iterator( [ 0, 0, 0, 1, 1 ] );

var it = iterCuSomeBy( arr, 2, isPositive );

var v = it.next().value;
// returns false

v = it.next().value;
// returns false

v = it.next().value;
// returns false

v = it.next().value;
// returns false

v = it.next().value;
// returns true

var bool = it.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

A `predicate` function is provided two arguments:

-   **value**: iterated value.
-   **index**: iteration index (zero-based).

To set the `predicate` function execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function predicate( v ) {
    this.count += 1;
    return ( v > 0 );
}

var arr = array2iterator( [ 0, 0, 1, 1, 1 ] );

var ctx = {
    'count': 0
};

var it = iterCuSomeBy( arr, 3, predicate, ctx );
// returns <Object>

var v = it.next().value;
// returns false

v = it.next().value;
// returns false

v = it.next().value;
// returns false

v = it.next().value;
// returns false

v = it.next().value;
// returns true

var count = ctx.count;
// returns 5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `predicate` function is invoked for each iterated value until the `nth` truthy `predicate` function return value. The returned iterator continues iterating until it reaches the end of the input iterator, even after the condition is met.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/iter/randu' );
var iterCuSomeBy = require( '@stdlib/iter/cusome-by' );

function threshold( r ) {
    return ( r > 0.95 );
}

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
    'iter': 100
};
var riter = randu( opts );

// Create an iterator which tracks whether at least two values have exceeded the threshold:
var it = iterCuSomeBy( riter, 2, threshold );

// Perform manual iteration...
var r;
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}
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

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
