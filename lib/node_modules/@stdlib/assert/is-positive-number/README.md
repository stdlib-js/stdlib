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

# isPositiveNumber

> Test if a value is a number having a positive value.

<section class="usage">

## Usage

```javascript
var isPositiveNumber = require( '@stdlib/assert/is-positive-number' );
```

#### isPositiveNumber( value )

Tests if a `value` is a `number` having a positive value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPositiveNumber( 5.0 );
// returns true

bool = isPositiveNumber( new Number( 5.0 ) );
// returns true

bool = isPositiveNumber( 3.14 );
// returns true

bool = isPositiveNumber( -5.0 );
// returns false

bool = isPositiveNumber( null );
// returns false
```

#### isPositiveNumber.isPrimitive( value )

Tests if a `value` is a primitive `number` having a positive value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPositiveNumber.isPrimitive( 3.0 );
// returns true

bool = isPositiveNumber.isPrimitive( new Number( 3.0 ) );
// returns false
```

#### isPositiveNumber.isObject( value )

Tests if a `value` is a `Number` object having a positive value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPositiveNumber.isObject( 3.0 );
// returns false

bool = isPositiveNumber.isObject( new Number( 3.0 ) );
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
var isPositiveNumber = require( '@stdlib/assert/is-positive-number' );

var bool = isPositiveNumber( 5.0 );
// returns true

bool = isPositiveNumber( new Number( 5.0 ) );
// returns true

bool = isPositiveNumber( 3.14 );
// returns true

bool = isPositiveNumber( 0.0 );
// returns false

bool = isPositiveNumber( -5.0 );
// returns false

bool = isPositiveNumber( '5' );
// returns false

bool = isPositiveNumber( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
