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

# iterFill

> Create an [iterator][mdn-iterator-protocol] which replaces all values from a provided [iterator][mdn-iterator-protocol] from a start index to an end index with a static value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterFill = require( '@stdlib/iter/fill' );
```

#### iterFill( iterator, value\[, begin\[, end]] )

Returns an [iterator][mdn-iterator-protocol] which replaces all values from a provided [`iterator`][mdn-iterator-protocol] from a `begin` index to an `end` index with a static `value`.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var it = iterFill( array2iterator( [ 1, 2, 3, 4 ] ), 3.14 );
// returns <Object>

var v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

By default, the returned [iterator][mdn-iterator-protocol] replaces/fills a provided [iterator's][mdn-iterator-protocol] first iterated value through an [iterator's][mdn-iterator-protocol] last iterated value. To specify an alternative start iteration index at which to begin filling (zero-based and **inclusive**), provide a `begin` argument.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var it = iterFill( array2iterator( [ 1, 2, 3, 4 ] ), 3.14, 2 );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

var bool = it.next().done;
// returns true
```

By default, the returned [iterator][mdn-iterator-protocol] continues filling until it replaces all of a provided [iterator's][mdn-iterator-protocol] iterated values. To specify an end iteration index at which to stop filling (zero-based and **non-inclusive**), provide an `end` argument.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var it = iterFill( array2iterator( [ 1, 2, 3, 4 ] ), 3.14, 1, 3 );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

If `begin` is greater than or equal to `end`, the returned [iterator][mdn-iterator-protocol] does not replace any iterated values.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var it = iterFill( array2iterator( [ 1, 2, 3, 4 ] ), 3.14, 3, 1 );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If `end` exceeds the length of the provided [`iterator`][mdn-iterator-protocol], the returned [iterator][mdn-iterator-protocol] replaces the subsequence of iterated values starting from `begin` until the last iterated value of the provided [`iterator`][mdn-iterator-protocol].
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/iter/randu' );
var iterFill = require( '@stdlib/iter/fill' );

var rand;
var it;
var r;

// Create a seeded iterator for generating pseudorandom numbers:
rand = randu({
    'seed': 1234,
    'iter': 100
});

// Create an iterator which replaces a subsequence of 10 generated numbers:
it = iterFill( rand, 3.14, 10, 20 );

// Perform manual iteration...
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
