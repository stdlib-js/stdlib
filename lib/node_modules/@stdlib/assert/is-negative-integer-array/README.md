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

# isNegativeIntegerArray

> Test if a value is an array-like object containing only negative integers.

<section class="usage">

## Usage

```javascript
var isNegativeIntegerArray = require( '@stdlib/assert/is-negative-integer-array' );
```

#### isNegativeIntegerArray( value )

Tests if a `value` is an array-like object containing **only** negative `integer` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeIntegerArray( [ -3, new Number(-3) ] );
// returns true

bool = isNegativeIntegerArray( [ -3, '3.0' ] );
// returns false
```

#### isNegativeIntegerArray.primitives( value )

Tests if a `value` is an array-like object containing **only** negative primitive `integer` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeIntegerArray.primitives( [ -1.0, -10.0 ] );
// returns true

bool = isNegativeIntegerArray.primitives( [ -1.0, 0.0, -10.0 ] );
// returns false

bool = isNegativeIntegerArray.primitives( [ -3.0, new Number(-1.0) ] );
// returns false
```

#### isNegativeIntegerArray.objects( value )

Tests if a `value` is an array-like object containing **only** `Number` objects holding negative `integer` values.

<!-- eslint-disable no-new-wrappers, max-len -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeIntegerArray.objects( [ new Number(-1.0), new Number(-10.0) ] );
// returns true

bool = isNegativeIntegerArray.objects( [ -1.0, 0.0, -10.0 ] );
// returns false

bool = isNegativeIntegerArray.objects( [ -3.0, new Number(-1.0) ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isNegativeIntegerArray = require( '@stdlib/assert/is-negative-integer-array' );

var bool = isNegativeIntegerArray( [ -5, -2, -3 ] );
// returns true

bool = isNegativeIntegerArray( [ -4, -3, -2, -1 ] );
// returns true

bool = isNegativeIntegerArray( [ -1, new Number( -6 ), -3 ] );
// returns true

bool = isNegativeIntegerArray( [ -3, -2, -1, 0 ] );
// returns false

bool = isNegativeIntegerArray( [ -1, 'abc', -3 ] );
// returns false

bool = isNegativeIntegerArray( [ -2.3, -1, -3 ] );
// returns false

bool = isNegativeIntegerArray( [] );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
