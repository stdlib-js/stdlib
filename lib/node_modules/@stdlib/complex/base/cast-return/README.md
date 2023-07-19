<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# castReturn

> Wrap a function and cast a function's return value to a complex number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var castReturn = require( '@stdlib/complex/base/cast-return' );
```

#### castReturn( fcn, nargs, ctor )

Returns a function which wraps a function and casts a function's return value to a complex number.

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var addf = require( '@stdlib/math/base/ops/addf' );

var f = castReturn( addf, 2, Complex64 );
// returns <Function>
```

The function accepts the following arguments:

-   **fcn**: the function to wrap.
-   **nargs**: the number of arguments to be provided to the wrapped function.
-   **ctor**: complex number constructor for converting real numbers to complex numbers.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned function **assumes** that the wrapped function returns either a real or complex number.
-   The returned function **assumes** that, if a return value is non-numeric (i.e., not of type `number`), then the return value is a complex number. The returned function does **not** verify that non-numeric return values are, in fact, complex number objects. The returned function returns non-numeric return values from the wrapped function without modification.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var addf = require( '@stdlib/math/base/ops/addf' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );
var castReturn = require( '@stdlib/complex/base/cast-return' );

var f = castReturn( addf, 2, Complex64 );

// ...

var z = f( 3.0, 4.0 );
// returns <Complex64>

var re = realf( z );
// returns 7.0

var im = imagf( z );
// returns 0.0

console.log( '%d + %di', re, im );
// => '7 + 0i'
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
