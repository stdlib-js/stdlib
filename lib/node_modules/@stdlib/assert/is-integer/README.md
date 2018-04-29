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

# isInteger

> Test if a value is a number having an integer value.

<section class="usage">

## Usage

```javascript
var isInteger = require( '@stdlib/assert/is-integer' );
```

#### isInteger( value )

Tests if a value is a `number` having an `integer` value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isInteger( 5.0 );
// returns true

bool = isInteger( new Number( 5.0 ) );
// returns true

bool = isInteger( -3.14 );
// returns false

bool = isInteger( null );
// returns false
```

#### isInteger.isPrimitive( value )

Tests if a `value` is a primitive `number` having an `integer` value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isInteger.isPrimitive( -3.0 );
// returns true

bool = isInteger.isPrimitive( new Number( -3.0 ) );
// returns false
```

#### isInteger.isObject( value )

Tests if a `value` is a `Number` object having an `integer` value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isInteger.isObject( 3.0 );
// returns false

bool = isInteger.isObject( new Number( 3.0 ) );
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
var isInteger = require( '@stdlib/assert/is-integer' );

var bool = isInteger( -5.0 );
// returns true

bool = isInteger( 0.0 );
// returns true

bool = isInteger( new Number( 5.0 ) );
// returns true

bool = isInteger( 5.256 );
// returns false

bool = isInteger( 1.0/0.0 );
// returns false

bool = isInteger( -1.0/0.0 );
// returns false

bool = isInteger( '5' );
// returns false

bool = isInteger( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
