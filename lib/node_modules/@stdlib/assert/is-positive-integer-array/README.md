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

# isPositiveIntegerArray

> Test if a value is an array-like object containing only positive integers.

<section class="usage">

## Usage

```javascript
var isPositiveIntegerArray = require( '@stdlib/assert/is-positive-integer-array' );
```

#### isPositiveIntegerArray( value )

Tests if a `value` is an array-like object containing **only** positive `integer` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPositiveIntegerArray( [ 3.0, new Number(3.0) ] );
// returns true

bool = isPositiveIntegerArray( [ 3.0, '3.0' ] );
// returns false
```

#### isPositiveIntegerArray.primitives( value )

Tests if a `value` is an array-like object containing **only** positive primitive `integer` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPositiveIntegerArray.primitives( [ 1.0, 2.0, 10.0 ] );
// returns true

bool = isPositiveIntegerArray.primitives( [ 3.0, new Number(1.0) ] );
// returns false
```

#### isPositiveIntegerArray.objects( value )

Tests if a `value` is an array-like object containing **only** positive object `integer` values.

<!-- eslint-disable no-new-wrappers, max-len -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isPositiveIntegerArray.objects( [ new Number(3.0), new Number(1.0) ] );
// returns true

bool = isPositiveIntegerArray.objects( [ 1.0, 2.0, 10.0 ] );
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
var isPositiveIntegerArray = require( '@stdlib/assert/is-positive-integer-array' );

var bool = isPositiveIntegerArray( [ 5, 2, 3 ] );
// returns true

bool = isPositiveIntegerArray( [ 1, new Number( 6 ), 3 ] );
// returns true

bool = isPositiveIntegerArray( [ 0, 1, 2, 3, 4 ] );
// returns false

bool = isPositiveIntegerArray( [ 1, 'abc', 3 ] );
// returns false

bool = isPositiveIntegerArray( [ 2.3, 1, 3 ] );
// returns false

bool = isPositiveIntegerArray( [] );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
