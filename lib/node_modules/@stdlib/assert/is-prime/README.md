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

# isPrime

> Test if a value is a prime number.

<section class="intro">

A **prime number** is defined as an integer value greater than `1` which is only divisible by `1` and itself.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isPrime = require( '@stdlib/assert/is-prime' );
```

#### isPrime( value )

Tests if a `value` is a prime number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPrime( 5.0 );
// returns true

bool = isPrime( new Number( 5.0 ) );
// returns true

bool = isPrime( 3.14 );
// returns false

bool = isPrime( -5.0 );
// returns false

bool = isPrime( NaN );
// returns false

bool = isPrime( null );
// returns false
```

#### isPrime.isPrimitive( value )

Tests if a `value` is a primitive prime number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPrime.isPrimitive( 5.0 );
// returns true

bool = isPrime.isPrimitive( new Number( 5.0 ) );
// returns false
```

#### isPrime.isObject( value )

Tests if a `value` is a `Number` object having a value which is a prime number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPrime.isObject( 5.0 );
// returns false

bool = isPrime.isObject( new Number( 5.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isPrime = require( '@stdlib/assert/is-prime' );

var bool = isPrime( 5.0 );
// returns true

bool = isPrime( new Number( 5.0 ) );
// returns true

bool = isPrime( 11.0 );
// returns true

bool = isPrime( 2.0 );
// returns true

bool = isPrime( 3.14 );
// returns false

bool = isPrime( -5.0 );
// returns false

bool = isPrime( NaN );
// returns false

bool = isPrime( '0.5' );
// returns false

bool = isPrime( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
