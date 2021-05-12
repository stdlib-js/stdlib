<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# isfinite

> Test if a double-precision floating-point numeric value is finite.

<section class="usage">

## Usage

```javascript
var isfinite = require( '@stdlib/math/base/assert/is-finite' );
```

#### isfinite( x )

Tests if a double-precision floating-point `numeric` value is finite.

```javascript
var bool = isfinite( 3.14 );
// returns true

bool = isfinite( Infinity );
// returns false

bool = isfinite( -Infinity );
// returns false

bool = isfinite( NaN );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var isfinite = require( '@stdlib/math/base/assert/is-finite' );

var bool = isfinite( 5.0 );
// returns true

bool = isfinite( -2.0e64 );
// returns true

bool = isfinite( PINF );
// returns false

bool = isfinite( NINF );
// returns false

bool = isfinite( NaN );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
