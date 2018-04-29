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

# isNegativeInteger

> Test if a value is a number having a negative integer value.

<section class="usage">

## Usage

```javascript
var isNegativeInteger = require( '@stdlib/assert/is-negative-integer' );
```

#### isNegativeInteger( value )

Tests if a `value` is a `number` having a negative `integer` value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeInteger( -5.0 );
// returns true

bool = isNegativeInteger( new Number( -5.0 ) );
// returns true

bool = isNegativeInteger( 5.0 );
// returns false

bool = isNegativeInteger( -3.14 );
// returns false

bool = isNegativeInteger( null );
// returns false
```

#### isNegativeInteger.isPrimitive( value )

Tests if a `value` is a primitive `number` having a negative `integer` value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeInteger.isPrimitive( -3.0 );
// returns true

bool = isNegativeInteger.isPrimitive( new Number( -3.0 ) );
// returns false
```

#### isNegativeInteger.isObject( value )

Tests if a `value` is a `Number` object having a negative `integer` value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeInteger.isObject( -3.0 );
// returns false

bool = isNegativeInteger.isObject( new Number( -3.0 ) );
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
var isNegativeInteger = require( '@stdlib/assert/is-negative-integer' );

var bool = isNegativeInteger( -5.0 );
// returns true

bool = isNegativeInteger( new Number( -5.0 ) );
// returns true

bool = isNegativeInteger( 0.0 );
// returns false

bool = isNegativeInteger( -3.14 );
// returns false

bool = isNegativeInteger( 5.0 );
// returns false

bool = isNegativeInteger( '-5' );
// returns false

bool = isNegativeInteger( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
