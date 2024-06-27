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

# enum2str

> Return the BLAS transpose operation string associated with a BLAS transpose operation enumeration constant.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var enum2str = require( '@stdlib/blas/base/transpose-operation-enum2str' );
```

#### enum2str( operation )

Returns the BLAS transpose operation string associated with a BLAS transpose operation enumeration constant.

```javascript
var str2enum = require( '@stdlib/blas/base/transpose-operation-str2enum' );

var v = str2enum( 'transpose' );
// returns <number>

var s = enum2str( v );
// returns 'transpose'
```

If unable to resolve a operation string, the function returns `null`.

```javascript
var v = enum2str( -999999999 );
// returns null
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
var str2enum = require( '@stdlib/blas/base/transpose-operation-str2enum' );
var enum2str = require( '@stdlib/blas/base/transpose-operation-enum2str' );

var str = enum2str( str2enum( 'transpose' ) );
// returns 'transpose'

str = enum2str( str2enum( 'conjugate-transpose' ) );
// returns 'conjugate-transpose'
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
