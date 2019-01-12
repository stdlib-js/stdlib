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

# Strided Iterator

> Create an [iterator][mdn-iterator-protocol] from a strided array-like object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stridedarray2iterator = require( '@stdlib/array/to-strided-iterator' );
```

#### stridedarray2iterator( N, src, stride, offset\[, mapFcn\[, thisArg]] )

Returns an [iterator][mdn-iterator-protocol] which iterates over elements in an array-like `object` according to specified stride parameters.

```javascript
var values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

var N = 4;
var stride = -2;
var offset = 6;

var it = stridedarray2iterator( N, values, stride, offset );
// returns <Object>

var v = it.next().value;
// returns 7

v = it.next().value;
// returns 5

v = it.next().value;
// returns 3

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an iterator protocol-compliant object.

To invoke a function for each `src` value, provide a callback function.

```javascript
function fcn( v ) {
    return v * 10.0;
}

var it = stridedarray2iterator( 4, [ 1, 2, 3, 4 ], 1, 0, fcn );
// returns <Object>

var v = it.next().value;
// returns 10.0

v = it.next().value;
// returns 20.0

v = it.next().value;
// returns 30.0

// ...
```

The invoked function is provided four arguments:

-   `value`: iterated value
-   `index`: iterated value index
-   `n`: iteration count (zero-based)
-   `src`: source array-like object

```javascript
function fcn( v, i ) {
    return v * (i+1);
}

var it = stridedarray2iterator( 4, [ 1, 2, 3, 4 ], 1, 0, fcn );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 4

v = it.next().value;
// returns 9

// ...
```

To set the callback function execution context, provide a `thisArg`.

```javascript
function fcn( v ) {
    this.count += 1;
    return v * 10.0;
}

var ctx = {
    'count': 0
};

var it = stridedarray2iterator( 4, [ 1, 2, 3, 4 ], 1, 0, fcn, ctx );
// returns <Object>

var v = it.next().value;
// returns 10.0

v = it.next().value;
// returns 20.0

v = it.next().value;
// returns 30.0

var count = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned [iterator][mdn-iterator-protocol] is iterable.
-   If provided a generic `array`, the returned [iterator][mdn-iterator-protocol] does **not** ignore holes. To achieve greater performance for sparse arrays, use a custom [iterator][mdn-iterator-protocol].
-   A returned [iterator][mdn-iterator-protocol] does **not** copy a provided array-like `object`. To ensure iterable reproducibility, copy a provided array-like `object` **before** creating an [iterator][mdn-iterator-protocol]. Otherwise, any changes to the contents of an array-like `object` will be reflected in the returned [iterator][mdn-iterator-protocol].
-   In environments supporting `Symbol.iterator`, the function **explicitly** does **not** invoke an array's `@@iterator` method, regardless of whether this method is defined. To convert an array to an implementation defined [iterator][mdn-iterator-protocol], invoke this method directly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var inmap = require( '@stdlib/utils/inmap' );
var randu = require( '@stdlib/random/base/randu' );
var stridedarray2iterator = require( '@stdlib/array/to-strided-iterator' );

function scale( v, i ) {
    return v * (i+1);
}

// Create an array filled with random numbers:
var arr = inmap( new Float64Array( 100 ), randu );

// Create an iterator which scales every fourth value in reverse order:
var it = stridedarray2iterator( 25, arr, -4, 99, scale );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
