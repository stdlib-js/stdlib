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

# isBoxedPrimitive

> Test if a value is a JavaScript boxed primitive.

<section class="usage">

## Usage

```javascript
var isBoxedPrimitive = require( '@stdlib/assert/is-boxed-primitive' );
```

#### isBoxedPrimitive( value )

Tests if a `value` is a JavaScript boxed primitive.

<!-- eslint-disable no-new-wrappers-->

```javascript
var bool = isBoxedPrimitive( new Boolean( false ) );
// returns true

bool = isBoxedPrimitive( true );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Boxed primitive objects can be created with one of the following:

    -   `new Boolean()`
    -   `new Number()`
    -   `new String()`
    -   `Object( Symbol() )` (ES6/ES2015)

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-new-object, no-new-wrappers, no-empty-function, no-array-constructor -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isBoxedPrimitive = require( '@stdlib/assert/is-boxed-primitive' );

var bool = isBoxedPrimitive( new Boolean( false ) );
// returns true

bool = isBoxedPrimitive( new String( 'beep' ) );
// returns true

bool = isBoxedPrimitive( new Number( 3.14 ) );
// returns true

bool = isBoxedPrimitive( false );
// returns false

bool = isBoxedPrimitive( 0 );
// returns false

bool = isBoxedPrimitive( '' );
// returns false

bool = isBoxedPrimitive( null );
// returns false

bool = isBoxedPrimitive( void 0 );
// returns false

bool = isBoxedPrimitive( [] );
// returns false

bool = isBoxedPrimitive( {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
