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

# iterNonPositiveEvenIntegersSeq

> Create an iterator which generates a sequence of nonpositive even integers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var iterNonPositiveEvenIntegersSeq = require( '@stdlib/math/iter/sequences/nonpositive-even-integers' );
```

#### iterNonPositiveEvenIntegersSeq( \[options] )

Returns an iterator which generates a sequence of nonpositive even integers.

<!-- eslint-disable id-length -->

```javascript
var it = iterNonPositiveEvenIntegersSeq();
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns -2

v = it.next().value;
// returns -4

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `4503599627370497`.

By default, the function returns a finite iterator to avoid exceeding the maximum safe double-precision floating-point integer. To adjust the number of iterations, set the `iter` option.

<!-- eslint-disable id-length -->

```javascript
var opts = {
    'iter': 2
};
var it = iterNonPositiveEvenIntegersSeq( opts );
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns -2

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable id-length -->

```javascript
var iterNonPositiveEvenIntegersSeq = require( '@stdlib/math/iter/sequences/nonpositive-even-integers' );

// Create an iterator:
var opts = {
    'iter': 100
};
var it = iterNonPositiveEvenIntegersSeq( opts );

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
