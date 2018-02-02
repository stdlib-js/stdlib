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

# isUndefinedOrNull

> Test if a value is undefined or null.

<section class="usage">

## Usage

```javascript
var isUndefinedOrNull = require( '@stdlib/assert/is-undefined-or-null' );
```

#### isUndefinedOrNull( value )

Tests if a `value` is `undefined` or `null`.

<!-- eslint-disable no-undefined -->

```javascript
var bool = isUndefinedOrNull( undefined );
// returns true

bool = isUndefinedOrNull( null );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-undefined, no-restricted-syntax, no-empty-function -->

<!-- eslint no-undef: "error" -->

```javascript
var isUndefinedOrNull = require( '@stdlib/assert/is-undefined-or-null' );

var bool;
var x;

bool = isUndefinedOrNull( x );
// returns true

bool = isUndefinedOrNull( undefined );
// returns true

bool = isUndefinedOrNull( void 0 );
// returns true

bool = isUndefinedOrNull( null );
// returns true

bool = isUndefinedOrNull( 'beep' );
// returns false

bool = isUndefinedOrNull( 5 );
// returns false

bool = isUndefinedOrNull( true );
// returns false

bool = isUndefinedOrNull( {} );
// returns false

bool = isUndefinedOrNull( [] );
// returns false

bool = isUndefinedOrNull( function foo() {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
