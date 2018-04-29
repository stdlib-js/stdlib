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

# isIntegerArray

> Test if a value is an array-like object containing only integers.

<section class="usage">

## Usage

```javascript
var isIntegerArray = require( '@stdlib/assert/is-integer-array' );
```

#### isIntegerArray( value )

Tests if a `value` is an array-like object containing **only** `integer` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isIntegerArray( [ -3, new Number(3) ] );
// returns true

bool = isIntegerArray( [ -3, 'abc' ] );
// returns false
```

#### isIntegerArray.primitives( value )

Tests if a `value` is an array-like object containing **only** primitive `integer` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isIntegerArray.primitives( [ -1.0, 0.0, 4.0 ] );
// returns true

bool = isIntegerArray.primitives( [ -1.0, 2.2 ] );
// returns false

bool = isIntegerArray.primitives( [ -3.0, new Number(2.0) ] );
// returns false
```

#### isIntegerArray.objects( value )

Tests if a `value` is an array-like object containing **only** `Number` objects having `integer` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isIntegerArray.objects( [ new Number(-1.0), new Number(2.0) ] );
// returns true

bool = isIntegerArray.objects( [ -1.0, 0.0, 1.0 ] );
// returns false

bool = isIntegerArray.objects( [ -3.0, new Number(1.0) ] );
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
var isIntegerArray = require( '@stdlib/assert/is-integer-array' );

var bool = isIntegerArray( [ -5, 0, 2, 5 ] );
// returns true

bool = isIntegerArray( [ -4, -3, 1, 3 ] );
// returns true

bool = isIntegerArray( [ -1, new Number( -6 ), 2 ] );
// returns true

bool = isIntegerArray( [ -1, 'abc', 3 ] );
// returns false

bool = isIntegerArray( [ -2.3, 0, 3 ] );
// returns false

bool = isIntegerArray( [] );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
