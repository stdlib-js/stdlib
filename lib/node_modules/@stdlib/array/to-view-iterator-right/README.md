<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# arrayview2iteratorRight

> Create an iterator from an array-like object view, iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var arrayview2iteratorRight = require( '@stdlib/array/to-view-iterator-right' );
```

#### arrayview2iteratorRight( src\[, begin\[, end]]\[, mapFcn\[, thisArg]] )

Returns an iterator which iterates from right to left over each element in an array-like `object` view.

```javascript
var it = arrayview2iteratorRight( [ 1, 2, 3, 4 ] );
// returns <Object>

var v = it.next().value;
// returns 4

v = it.next().value;
// returns 3

v = it.next().value;
// returns 2

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The `begin` and `end` arguments define the starting (inclusive) and ending (non-inclusive) indices of the array view. By default, the returned iterator starts iterating from the last element in an array-like `object` (i.e., from the "end"). To specify an alternative view end, provide an `end` argument (non-inclusive).

```javascript
var it = arrayview2iteratorRight( [ 1, 2, 3, 4 ], 0, 3 );
// returns <Object>

var v = it.next().value;
// returns 3

v = it.next().value;
// returns 2

v = it.next().value;
// returns 1

var bool = it.next().done;
// returns true
```

If `end` is less than `0`, the first iterated value is resolved relative to the last view element. For example, the following generates the same behavior as in the previous example

```javascript
var it = arrayview2iteratorRight( [ 1, 2, 3, 4 ], 0, -1 );
// returns <Object>

var v = it.next().value;
// returns 3

v = it.next().value;
// returns 2

v = it.next().value;
// returns 1

var bool = it.next().done;
// returns true
```

By default, the returned iterator iterates through the first element in an array-like `object` view. To specify an alternative view beginning, provide a `begin` argument (inclusive).

```javascript
var it = arrayview2iteratorRight( [ 1, 2, 3, 4 ], 1 );
// returns <Object>

var v = it.next().value;
// returns 4

v = it.next().value;
// returns 3

v = it.next().value;
// returns 2

var bool = it.next().done;
// returns true
```

If `begin` is less than `0`, the last iterated value is resolved relative to the last view element. For example, the following generates the same behavior as in the previous example

```javascript
var it = arrayview2iteratorRight( [ 1, 2, 3, 4 ], -3 );
// returns <Object>

var v = it.next().value;
// returns 4

v = it.next().value;
// returns 3

v = it.next().value;
// returns 2

var bool = it.next().done;
// returns true
```

To invoke a function for each `src` value, provide a callback function.

```javascript
function fcn( v ) {
    return v * 10.0;
}

var it = arrayview2iteratorRight( [ 1, 2, 3, 4 ], fcn );
// returns <Object>

var v = it.next().value;
// returns 40.0

v = it.next().value;
// returns 30.0

v = it.next().value;
// returns 20.0

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

var it = arrayview2iteratorRight( [ 1, 2, 3, 4 ], fcn );
// returns <Object>

var v = it.next().value;
// returns 16

v = it.next().value;
// returns 9

v = it.next().value;
// returns 4

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

var it = arrayview2iteratorRight( [ 1, 2, 3, 4 ], fcn, ctx );
// returns <Object>

var v = it.next().value;
// returns 40.0

v = it.next().value;
// returns 30.0

v = it.next().value;
// returns 20.0

var count = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
-   If provided a generic `array`, the returned iterator does **not** ignore holes. To achieve greater performance for sparse arrays, use a custom iterator.
-   A returned iterator does **not** copy a provided array-like `object`. To ensure iterable reproducibility, copy a provided array-like `object` **before** creating an iterator. Otherwise, any changes to the contents of an array-like `object` will be reflected in the returned iterator.
-   In environments supporting `Symbol.iterator`, the function **explicitly** does **not** invoke an array's `@@iterator` method, regardless of whether this method is defined. To convert an array to an implementation defined iterator, invoke this method directly.

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
var arrayview2iteratorRight = require( '@stdlib/array/to-view-iterator-right' );

function scale( v, i ) {
    return v * (i+1);
}

// Create an array filled with random numbers:
var arr = inmap( new Float64Array( 100 ), randu );

// Create an iterator from an array view which scales iterated values:
var it = arrayview2iteratorRight( arr, 40, 60, scale );

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

</section>

<!-- /.links -->
