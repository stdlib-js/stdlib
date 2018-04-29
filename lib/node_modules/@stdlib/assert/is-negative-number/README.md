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

# isNegativeNumber

> Test if a value is a number having a negative value.

<section class="usage">

## Usage

```javascript
var isNegativeNumber = require( '@stdlib/assert/is-negative-number' );
```

#### isNegativeNumber( value )

Tests if a `value` is a `number` having a negative value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeNumber( -5.0 );
// returns true

bool = isNegativeNumber( new Number( -5.0 ) );
// returns true

bool = isNegativeNumber( -3.14 );
// returns true

bool = isNegativeNumber( 5.0 );
// returns false

bool = isNegativeNumber( null );
// returns false
```

#### isNegativeNumber.isPrimitive( value )

Tests if a `value` is a primitive `number` having a negative value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeNumber.isPrimitive( -3.0 );
// returns true

bool = isNegativeNumber.isPrimitive( new Number( -3.0 ) );
// returns false
```

#### isNegativeNumber.isObject( value )

Tests if a `value` is a `Number` object having a negative value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeNumber.isObject( -3.0 );
// returns false

bool = isNegativeNumber.isObject( new Number( -3.0 ) );
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

var isNegativeNumber = require( '@stdlib/assert/is-negative-number' );

var bool = isNegativeNumber( -5.0 );
// returns true

bool = isNegativeNumber( new Number( -5.0 ) );
// returns true

bool = isNegativeNumber( -3.14 );
// returns true

bool = isNegativeNumber( 0.0 );
// returns false

bool = isNegativeNumber( 5.0 );
// returns false

bool = isNegativeNumber( '-5' );
// returns false

bool = isNegativeNumber( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
