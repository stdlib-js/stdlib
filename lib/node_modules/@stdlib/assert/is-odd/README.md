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

# isOdd

> Test if a value is an odd number.

<section class="usage">

## Usage

```javascript
var isOdd = require( '@stdlib/assert/is-odd' );
```

#### isOdd( value )

Tests if a `value` is an odd `number`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isOdd( 5.0 );
// returns true

bool = isOdd( new Number( 5.0 ) );
// returns true

bool = isOdd( 6.0 );
// returns false

bool = isOdd( -3.14 );
// returns false

bool = isOdd( null );
// returns false

bool = isOdd( NaN );
// returns false
```

#### isOdd.isPrimitive( value )

Tests if a `value` is an odd primitive number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isOdd.isPrimitive( -5.0 );
// returns true

bool = isOdd.isPrimitive( new Number( -5.0 ) );
// returns false
```

#### isOdd.isObject( value )

Tests if a `value` is a `Number` object having an odd number value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isOdd.isObject( 5.0 );
// returns false

bool = isOdd.isObject( new Number( 5.0 ) );
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
var isOdd = require( '@stdlib/assert/is-odd' );

var bool = isOdd( 5.0 );
// returns true

bool = isOdd( new Number( 5 ) );
// returns true

bool = isOdd( 0.0 );
// returns false

bool = isOdd( 4.0 );
// returns false

bool = isOdd( NaN );
// returns false

bool = isOdd( '5' );
// returns false

bool = isOdd( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
