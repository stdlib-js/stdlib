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

# isNegativeNumberArray

> Test if a value is an array-like object containing only negative numbers.

<section class="usage">

## Usage

```javascript
var isNegativeNumberArray = require( '@stdlib/assert/is-negative-number-array' );
```

#### isNegativeNumberArray( value )

Tests if a `value` is an array-like object containing **only** negative numbers.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeNumberArray( [ -3.0, new Number(-3.0) ] );
// returns true

bool = isNegativeNumberArray( [ -3.0, '-3.0' ] );
// returns false
```

#### isNegativeNumberArray.primitives( value )

Tests if a `value` is an array-like object `array` containing **only** primitive negative numbers.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeNumberArray.primitives( [ -1.0, -5.0, -10.0 ] );
// returns true

bool = isNegativeNumberArray.primitives( [ -3.0, new Number(-1.0) ] );
// returns false
```

#### isNegativeNumberArray.objects( value )

Tests if a `value` is an array-like object `array` containing **only** object negative numbers.

<!-- eslint-disable no-new-wrappers, max-len -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNegativeNumberArray.objects( [ new Number(-1.0), new Number(-1.0) ] );
// returns true

bool = isNegativeNumberArray.objects( [ -1.0, -5.0, -10.0 ] );
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
var isNegativeNumberArray = require( '@stdlib/assert/is-negative-number-array' );

var bool = isNegativeNumberArray( [ -5.0, -0.2, -3.9 ] );
// returns true

bool = isNegativeNumberArray( [ -1, -2, -3 ] );
// returns true

bool = isNegativeNumberArray( [ -1, new Number( -6 ), -3 ] );
// returns true

bool = isNegativeNumberArray( [ 0, -2, -4 ] );
// returns false

bool = isNegativeNumberArray( [ -1, 'abc', -3 ] );
// returns false

bool = isNegativeNumberArray( -78.0 );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
