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

# iterMap

> Create an [iterator][mdn-iterator-protocol] which invokes a unary function accepting a single numeric argument for each iterated value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterMap = require( '@stdlib/math/iter/tools/map' );
```

#### iterMap( iterator, fcn\[, options] )

Returns an [iterator][mdn-iterator-protocol] which invokes a unary `function` accepting a single numeric argument for each iterated value.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var sin = require( '@stdlib/math/base/special/sin' );

var it = iterMap( array2iterator( [ 1, 2, 3, 4 ] ), sin );
// returns <Object>

var r = it.next().value;
// returns <number>

r = it.next().value;
// returns <number>

r = it.next().value;
// returns <number>

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

The invoked `function` is provided one argument:

-   `value`: iterated value.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function fcn( v ) {
    return v + 10;
}

var it = iterMap( array2iterator( [ 1, 2, 3, 4 ] ), fcn );
// returns <Object>

var r = it.next().value;
// returns 11

r = it.next().value;
// returns 12

r = it.next().value;
// returns 13

// ...
```

The function supports the following `options`:

-   **invalid**: return value when an input [iterator][mdn-iterator-protocol] yields a non-numeric value. Default: `NaN`.

By default, the function returns an [iterator][mdn-iterator-protocol] which returns `NaN` when an input [iterator][mdn-iterator-protocol] yields a non-numeric value. To specify a different return value, set the `invalid` option.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var sin = require( '@stdlib/math/base/special/sin' );

var opts = {
    'invalid': null
};
var it = iterMap( array2iterator( [ '1', '2', '3' ] ), sin, opts );
// returns <Object>

var v = it.next().value;
// returns null

v = it.next().value;
// returns null

// ...
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/iter/randu' );
var sin = require( '@stdlib/math/base/special/sin' );
var iterMap = require( '@stdlib/math/iter/tools/map' );

// Create a seeded iterator for generating pseudorandom numbers:
var rand = randu({
    'seed': 1234,
    'iter': 10
});

// Create an iterator which consumes the pseudorandom number iterator:
var it = iterMap( rand, sin );

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
