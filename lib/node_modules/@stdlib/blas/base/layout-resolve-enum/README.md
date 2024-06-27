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

# resolve

> Return the enumeration constant associated with a supported BLAS memory layout value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var resolve = require( '@stdlib/blas/base/layout-resolve-enum' );
```

#### resolve( layout )

Returns the enumeration constant associated with a BLAS memory layout value.

```javascript
var str2enum = require( '@stdlib/blas/base/layout-str2enum' );

var v = resolve( 'row-major' );
// returns <number>

v = resolve( str2enum( 'row-major' ) );
// returns <number>
```

If unable to resolve an enumeration constant, the function returns `null`.

```javascript
var v = resolve( 'beep' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Downstream consumers of this function should **not** rely on specific integer values (e.g., `ROW_MAJOR == 0`). Instead, the function should be used in an opaque manner.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var resolve = require( '@stdlib/blas/base/layout-resolve-enum' );

var v = resolve( 'row-major' );
// returns <number>

v = resolve( 'column-major' );
// returns <number>
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
