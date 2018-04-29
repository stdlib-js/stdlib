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

# isNumber

> Test if a value is a number.

<section class="usage">

## Usage

```javascript
var isNumber = require( '@stdlib/assert/is-number' );
```

#### isNumber( value )

Tests if a `value` is a `number`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNumber( 3.14 );
// returns true

bool = isNumber( new Number( 3.14 ) );
// returns true

bool = isNumber( NaN );
// returns true

bool = isNumber( null );
// returns false
```

#### isNumber.isPrimitive( value )

Tests if a `value` is a primitive `number`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNumber.isPrimitive( 3.14 );
// returns true

bool = isNumber.isPrimitive( NaN );
// returns true

bool = isNumber.isPrimitive( new Number( 3.14 ) );
// returns false
```

#### isNumber.isObject( value )

Tests if a `value` is a `Number` object.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNumber.isObject( 3.14 );
// returns false

bool = isNumber.isObject( new Number( 3.14 ) );
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
var isNumber = require( '@stdlib/assert/is-number' );

var bool = isNumber( 5 );
// returns true

bool = isNumber( new Number( 5 ) );
// returns true

bool = isNumber( NaN );
// returns true

bool = isNumber( '5' );
// returns false

bool = isNumber( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
