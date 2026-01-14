<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# contains

> Test if an array contains a provided search value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var contains = require( '@stdlib/array/base/assert/contains' );
```

#### contains( x, value )

Tests if an array contains a provided search value.

```javascript
var x = [ 1, 2, 3 ];

var out = contains( x, 2 );
// returns true
```

#### contains.factory( x )

Returns a function which tests if an array contains a provided search value.

```javascript
var x = [ 1, 2, 3 ];

var fcn = contains.factory( x );
// returns <Function>

var out = fcn( 2 );
// returns true

out = fcn( 4 );
// returns false
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
var AccessorArray = require( '@stdlib/array/base/accessor' );
var contains = require( '@stdlib/array/base/assert/contains' );

// Create an accessor array:
var arr = new AccessorArray( [ 1, 2, 3, 4 ] );

// Check whether the array contains various values...
var bool = contains( arr, 2 );
// returns true

bool = contains( arr, 4 );
// returns true

bool = contains( arr, 9 );
// returns false
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
