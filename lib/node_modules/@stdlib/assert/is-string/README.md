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

# isString

> Test if a value is a string.

<section class="usage">

## Usage

```javascript
var isString = require( '@stdlib/assert/is-string' );
```

#### isString( value )

Tests if a value is a `string`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isString( 'beep' );
// returns true

bool = isString( new String( 'beep' ) );
// returns true
```

#### isString.isPrimitive( value )

Tests if a `value` is a primitive `string`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isString.isPrimitive( 'beep' );
// returns true

bool = isString.isPrimitive( new String( 'boop' ) );
// returns false
```

#### isString.isObject( value )

Tests if a `value` is a `String` object.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isString.isObject( 'beep' );
// returns false

bool = isString.isObject( new String( 'boop' ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers, no-restricted-syntax, no-empty-function -->

<!-- eslint no-undef: "error" -->

```javascript
var isString = require( '@stdlib/assert/is-string' );

var bool = isString( 'beep' );
// returns true

bool = isString( new String( 'beep' ) );
// returns true

bool = isString( 5 );
// returns false

bool = isString( null );
// returns false

bool = isString( void 0 );
// returns false

bool = isString( {} );
// returns false

bool = isString( [] );
// returns false

bool = isString( function foo() {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
