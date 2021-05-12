<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# isfinitef

> Test if a single-precision floating-point numeric value is finite.

<section class="usage">

## Usage

```javascript
var isfinitef = require( '@stdlib/math/base/assert/is-finitef' );
```

#### isfinitef( x )

Tests if a single-precision floating-point `numeric` value is finite.

```javascript
var bool = isfinitef( 3.14 );
// returns true

bool = isfinitef( Infinity );
// returns false

bool = isfinitef( -Infinity );
// returns false

bool = isfinitef( NaN );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var isfinitef = require( '@stdlib/math/base/assert/is-finitef' );

var bool = isfinitef( 5.0 );
// returns true

bool = isfinitef( -2.0e32 );
// returns true

bool = isfinitef( PINF );
// returns false

bool = isfinitef( NINF );
// returns false

bool = isfinitef( NaN );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
