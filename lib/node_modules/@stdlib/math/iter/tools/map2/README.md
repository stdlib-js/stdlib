<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# iterMap2

> Create an [iterator][mdn-iterator-protocol] which invokes a binary function accepting numeric arguments for each iterated value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterMap2 = require( '@stdlib/math/iter/tools/map2' );
```

#### iterMap2( iter0, iter1, fcn\[, options] )

Returns an [iterator][mdn-iterator-protocol] which invokes a binary `function` accepting numeric arguments for each iterated value.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var copysign = require( '@stdlib/math/base/special/copysign' );

var it1 = array2iterator( [ 1.0, 2.0, 3.0, 4.0 ] );
var it2 = array2iterator( [ 1.0, -1.0, -1.0, 1.0 ] );

var it = iterMap2( it1, it2, copysign );
// returns <Object>

var r = it.next().value;
// returns 1.0

r = it.next().value;
// returns -2.0

r = it.next().value;
// returns -3.0

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

The invoked `function` is provided two arguments:

-   `x`: iterated value from first input [iterator][mdn-iterator-protocol].
-   `y`: iterated value from second input [iterator][mdn-iterator-protocol].

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function fcn( x, y ) {
    return x + y + 10;
}

var it1 = array2iterator( [ 1, 2, 3, 4 ] );
var it2 = array2iterator( [ 1, 2, 3, 4 ] );

var it = iterMap2( it1, it2, fcn );
// returns <Object>

var r = it.next().value;
// returns 12

r = it.next().value;
// returns 14

r = it.next().value;
// returns 16

// ...
```

The function supports the following `options`:

-   **invalid**: return value when an input [iterator][mdn-iterator-protocol] yields a non-numeric value. Default: `NaN`.

By default, the function returns an [iterator][mdn-iterator-protocol] which returns `NaN` when an input [iterator][mdn-iterator-protocol] yields a non-numeric value. To specify a different return value, set the `invalid` option.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var copysign = require( '@stdlib/math/base/special/copysign' );

var it1 = array2iterator( [ '1.0', '2.0', '3.0' ] );
var it2 = array2iterator( [ 1.0, 2.0, 3.0 ] );

var opts = {
    'invalid': null
};
var it = iterMap2( it1, it2, copysign, opts );
// returns <Object>

var v = it.next().value;
// returns null

v = it.next().value;
// returns null

// ...
```

If provided a numeric value as an [`iterator`][mdn-iterator-protocol] argument, the value is broadcast as an **infinite** [iterator][mdn-iterator-protocol] which **always** returns the provided value.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var copysign = require( '@stdlib/math/base/special/copysign' );

var it1 = array2iterator( [ 1.0, 2.0 ] );

var it = iterMap2( it1, -4.0, copysign );
// returns <Object>

var v = it.next().value;
// returns -1.0

v = it.next().value;
// returns -2.0

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [iterator][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   The length of the returned [iterator][mdn-iterator-protocol] is equal to the length of the shortest provided [iterator][mdn-iterator-protocol]. In other words, the returned [iterator][mdn-iterator-protocol] ends once **one** of the provided [iterators][mdn-iterator-protocol] ends.
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/iter/randu' );
var uniform = require( '@stdlib/random/iter/uniform' );
var copysign = require( '@stdlib/math/base/special/copysign' );
var iterMap2 = require( '@stdlib/math/iter/tools/map2' );

// Create seeded iterators for generating pseudorandom numbers:
var rand1 = randu({
    'seed': 1234,
    'iter': 10
});

var rand2 = uniform( -1.0, 1.0, {
    'seed': 1234,
    'iter': 10
});

// Create an iterator which consumes the pseudorandom number iterators:
var it = iterMap2( rand1, rand2, copysign );

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

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
