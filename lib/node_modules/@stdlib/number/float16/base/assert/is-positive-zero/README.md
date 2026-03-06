<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# isPositiveZero

> Test if a half-precision floating-point number is positive zero.

<section class="usage">

## Usage

```javascript
var isPositiveZero = require( '@stdlib/number/float16/base/assert/is-positive-zero' );
```

#### isPositiveZero( x )

Tests if a half-precision floating-point number is positive zero.

```javascript
var bool = isPositiveZero( 0.0 );
// returns true

bool = isPositiveZero( -0.0 );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isPositiveZero = require( '@stdlib/number/float16/base/assert/is-positive-zero' );

var bool = isPositiveZero( 0.0 );
// returns true

bool = isPositiveZero( -0.0 );
// returns false

bool = isPositiveZero( 5.0 );
// returns false

bool = isPositiveZero( -1.0 );
// returns false

bool = isPositiveZero( NaN );
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

</section>

<!-- /.links -->
