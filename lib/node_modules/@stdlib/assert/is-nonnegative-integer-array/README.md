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

# isNonNegativeIntegerArray

> Test if a value is an array-like object containing only nonnegative integers.

<section class="usage">

## Usage

```javascript
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' );
```

#### isNonNegativeIntegerArray( value )

Tests if a `value` is an array-like object containing **only** nonnegative `integer` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonNegativeIntegerArray( [ 3.0, new Number(3.0) ] );
// returns true

bool = isNonNegativeIntegerArray( [ 3.0, '3.0' ] );
// returns false
```

#### isNonNegativeIntegerArray.primitives( value )

Tests if a `value` is an array-like object containing **only**  nonnegative primitive `integer` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonNegativeIntegerArray.primitives( [ 1.0, 0.0, 10.0 ] );
// returns true

bool = isNonNegativeIntegerArray.primitives( [ 3.0, new Number(1.0) ] );
// returns false
```

#### isNonNegativeIntegerArray.objects( value )

Tests if a `value` is an array-like object containing **only**  nonnegative object `integer` values.

<!-- eslint-disable no-new-wrappers, max-len -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNonNegativeIntegerArray.objects( [ new Number(3.0), new Number(1.0) ] );
// returns true

bool = isNonNegativeIntegerArray.objects( [ 1.0, 0.0, 10.0 ] );
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
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' );

var bool = isNonNegativeIntegerArray( [ 5, 2, 3 ] );
// returns true

bool = isNonNegativeIntegerArray( [ 0, 1, 2, 3, 4 ] );
// returns true

bool = isNonNegativeIntegerArray( [ 1, new Number( 6 ), 3 ] );
// returns true

bool = isNonNegativeIntegerArray( [ 1, 'abc', 3 ] );
// returns false

bool = isNonNegativeIntegerArray( [ 2.3, 1, 3 ] );
// returns false

bool = isNonNegativeIntegerArray( [] );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
