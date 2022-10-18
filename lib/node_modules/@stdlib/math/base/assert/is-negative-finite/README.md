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

# isNegativeFinite

> Test if a double-precision floating-point numeric value is a negative finite number.

<section class="usage">

## Usage

```javascript
var isNegativeFinite = require( '@stdlib/math/base/assert/is-negative-finite' );
```

#### isNegativeFinite( x )

Tests if a double-precision floating-point `numeric` value is a negative finite number.

```javascript
var bool = isNegativeFinite( -3.14 );
// returns true

bool = isNegativeFinite( 2.0 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isNegativeFinite = require( '@stdlib/math/base/assert/is-negative-finite' );

var bool = isNegativeFinite( -3.14 );
// returns true

bool = isNegativeFinite( 3.14 );
// returns false

bool = isNegativeFinite( 0.0 );
// returns false

bool = isNegativeFinite( -0.0 );
// returns false

bool = isNegativeFinite( NaN );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
