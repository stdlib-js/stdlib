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

# isSameValue

> Test if two arguments are the same value.

<section class="usage">

## Usage

```javascript
var isSameValue = require( '@stdlib/assert/is-same-value' );
```

#### isSameValue( a, b )

Tests if two arguments `a` and `b` are the same value.

```javascript
var bool = isSameValue( false, false );
// returns true

bool = isSameValue( '', '' );
// returns true

bool = isSameValue( {}, {} );
// returns false
```

In contrast to the strict equality operator `===`, the function distinguishes between `+0` and `-0` and treats `NaNs` as the same value.

<!-- eslint-disable no-compare-neg-zero, use-isnan -->

```javascript
var bool = ( 0.0 === -0.0 );
// returns true

bool = isSameValue( 0.0, -0.0 );
// returns false

bool = isSameValue( -0.0, -0.0 );
// returns true

bool = ( NaN === NaN );
// returns false

bool = isSameValue( NaN, NaN );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function implements the [SameValue Algorithm][ecma-262-same-value-algorithm] as specified in ECMAScript 5.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isSameValue = require( '@stdlib/assert/is-same-value' );

var bool = isSameValue( true, true );
// returns true

bool = isSameValue( true, false );
// returns false

bool = isSameValue( 'beep', 'beep' );
// returns true

bool = isSameValue( 3.14, 3.14 );
// returns true

bool = isSameValue( null, null );
// returns true

bool = isSameValue( 0.0, 0.0 );
// returns true

bool = isSameValue( -0.0, 0.0 );
// returns false

bool = isSameValue( NaN, NaN );
// returns true

bool = isSameValue( {}, {} );
// returns false

bool = isSameValue( [], [] );
// returns false

bool = isSameValue( isSameValue, isSameValue );
// returns true
```

</section>

<!-- /.examples -->

<section class="links">

[ecma-262-same-value-algorithm]: http://ecma-international.org/ecma-262/5.1/#sec-9.12

</section>

<!-- /.links -->
