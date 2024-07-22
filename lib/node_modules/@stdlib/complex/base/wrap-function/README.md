<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# wrap

> Wrap a function accepting complex number arguments to support providing both real and complex numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var wrap = require( '@stdlib/complex/base/wrap-function' );
```

#### wrap( fcn, nargs, ctor )

Returns a function which wraps a function accepting complex number arguments to support providing both real and complex numbers.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var caddf = require( '@stdlib/complex/float32/base/add' );

var f = wrap( caddf, 2, Complex64 );
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

-   The returned function **assumes** that the wrapped function accepts **only** complex number input arguments (i.e., every argument must be a complex number).
-   The returned function **assumes** that, if an input argument is non-numeric (i.e., not of type `number`), then the input argument is a complex number. The returned function does **not** verify that non-numeric input arguments are, in fact, complex number objects. The returned function passes non-numeric input arguments to the wrapped function without modification.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var caddf = require( '@stdlib/complex/float32/base/add' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var wrap = require( '@stdlib/complex/base/wrap-function' );

var f = wrap( caddf, 2, Complex64 );

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
