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

# isNonPositiveFinite

> Test if a numeric value is a nonpositive finite number.

<section class="usage">

## Usage

```javascript
var isNonPositiveFinite = require( '@stdlib/math/base/assert/is-nonpositive-finite' );
```

#### isNonPositiveFinite( x )

Tests if a `numeric` value is a nonpositive finite number.

```javascript
var bool = isNonPositiveFinite( 3.14 );
// returns true

bool = isNonPositiveFinite( -2.0 );
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
var isNonPositiveFinite = require( '@stdlib/math/base/assert/is-nonpositive-finite' );

var bool = isNonPositiveFinite( 3.14 );
// returns true

bool = isNonPositiveFinite( 0.0 );
// returns true

bool = isNonPositiveFinite( -2.0 );
// returns false

bool = isNonPositiveFinite( Infinity );
// returns false

bool = isNonPositiveFinite( NaN );
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
