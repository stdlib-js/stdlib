<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# ndarraylike2scalar

> Convert an ndarray-like object to a scalar value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );
```

#### ndarraylike2scalar( x )

Converts an ndarray-like object to a scalar value.

```javascript
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var arr = scalar2ndarray( 1.0 );
// returns <ndarray>

var out = ndarraylike2scalar( arr );
// returns 1.0
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
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var compose = require( '@stdlib/utils/compose' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var oneTo = require( '@stdlib/array/one-to' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );

// Create a list of scalars:
var scalars = oneTo( 10 );

// Create a composite function which round-trips a scalar to an ndarray and back:
var f = compose( ndarraylike2scalar, naryFunction( scalar2ndarray, 1 ) );

// Apply the function to the list of scalars:
logEachMap( '%d => %d', scalars, f );
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
