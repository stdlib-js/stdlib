<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# isBigInt

> Test if a value is a [BigInt][mdn-bigint].

<section class="usage">

## Usage

```javascript
var isBigInt = require( '@stdlib/assert/is-bigint' );
```

#### isBigInt( value )

Tests if a value is a [`BigInt`][mdn-bigint].

```javascript
var BigInt = require( '@stdlib/bigint/ctor' );

var bool = isBigInt( BigInt( '1' ) );
// returns true

bool = isBigInt( Object( BigInt( '1' ) ) );
// returns true
```

#### isBigInt.isPrimitive( value )

Tests if a `value` is a primitive [`BigInt`][mdn-bigint].

```javascript
var BigInt = require( '@stdlib/bigint/ctor' );

var bool = isBigInt.isPrimitive( BigInt( '1' ) );
// returns true

bool = isBigInt.isPrimitive( Object( BigInt( '1' ) ) );
// returns false
```

#### isBigInt.isObject( value )

Tests if a `value` is a [`BigInt`][mdn-bigint] object.

```javascript
var BigInt = require( '@stdlib/bigint/ctor' );

var bool = isBigInt.isObject( BigInt( '1' ) );
// returns false

bool = isBigInt.isObject( Object( BigInt( '1' ) ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

<!-- eslint no-undef: "error" -->

```javascript
var hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );
var BigInt = require( '@stdlib/bigint/ctor' );
var isBigInt = require( '@stdlib/assert/is-bigint' );

var bool;
if ( hasBigIntSupport() ) {
    bool = isBigInt( BigInt( '1' ) );
    // returns true
} else {
    console.log( 'Environment does not support BigInts.' );
}
bool = isBigInt( 1 );
// returns false

bool = isBigInt( '1' );
// returns false

bool = isBigInt( {} );
// returns false

bool = isBigInt( [] );
// returns false

bool = isBigInt( null );
// returns false

bool = isBigInt( void 0 );
// returns false

bool = isBigInt( true );
// returns false

bool = isBigInt( function foo() {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

</section>

<!-- /.links -->
