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

# isFalsy

> Test if a value is falsy.

<section class="usage">

## Usage

```javascript
var isFalsy = require( '@stdlib/assert/is-falsy' );
```

#### isFalsy( value )

Tests if a `value` is a value which translates to `false` when evaluated in a boolean context.

```javascript
var bool = isFalsy( false );
// returns true

bool = isFalsy( '' );
// returns true

bool = isFalsy( 0 );
// returns true

bool = isFalsy( NaN );
// returns true

bool = isFalsy( null );
// returns true

bool = isFalsy( void 0 );
// returns true

bool = isFalsy( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-empty-function, no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```javascript
var isFalsy = require( '@stdlib/assert/is-falsy' );

var bool = isFalsy( false );
// returns true

bool = isFalsy( 0 );
// returns true

bool = isFalsy( NaN );
// returns true

bool = isFalsy( '' );
// returns true

bool = isFalsy( void 0 );
// returns true

bool = isFalsy( null );
// returns true

bool = isFalsy( 'beep' );
// returns false

bool = isFalsy( 5 );
// returns false

bool = isFalsy( true );
// returns false

bool = isFalsy( [] );
// returns false

bool = isFalsy( {} );
// returns false

bool = isFalsy( function foo() {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
