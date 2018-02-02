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

# isStrictEqual

> Test if two arguments are strictly equal.

<section class="usage">

## Usage

```javascript
var isStrictEqual = require( '@stdlib/assert/is-strict-equal' );
```

#### isStrictEqual( a, b )

Tests if two arguments `a` and `b` are strictly equal.

```javascript
var bool = isStrictEqual( false, false );
// returns true

bool = isStrictEqual( '', '' );
// returns true

bool = isStrictEqual( {}, {} );
// returns false

bool = isStrictEqual( NaN, NaN );
// returns false
```

In contrast to the strict equality operator `===`, the function distinguishes between `+0` and `-0`.

<!-- eslint-disable no-compare-neg-zero -->

```javascript
var bool = ( 0.0 === -0.0 );
// returns true

bool = isStrictEqual( 0.0, -0.0 );
// returns false

bool = isStrictEqual( -0.0, -0.0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isStrictEqual = require( '@stdlib/assert/is-strict-equal' );

var bool = isStrictEqual( true, true );
// returns true

bool = isStrictEqual( true, false );
// returns false

bool = isStrictEqual( 'beep', 'beep' );
// returns true

bool = isStrictEqual( 3.14, 3.14 );
// returns true

bool = isStrictEqual( null, null );
// returns true

bool = isStrictEqual( 0.0, 0.0 );
// returns true

bool = isStrictEqual( -0.0, 0.0 );
// returns false

bool = isStrictEqual( NaN, NaN );
// returns false

bool = isStrictEqual( {}, {} );
// returns false

bool = isStrictEqual( [], [] );
// returns false

bool = isStrictEqual( isStrictEqual, isStrictEqual );
// returns true
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
