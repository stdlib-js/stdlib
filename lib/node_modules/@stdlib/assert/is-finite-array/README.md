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

# isFiniteArray

> Test if a value is an array-like object containing only finite numbers.

<section class="usage">

## Usage

```javascript
var isFiniteArray = require( '@stdlib/assert/is-finite-array' );
```

#### isFiniteArray( value )

Tests if a `value` is an array-like object containing **only** finite `numbers`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isFiniteArray( [ -3.0, new Number(3.0) ] );
// returns true

bool = isFiniteArray( [ -3.0, 'abc' ] );
// returns false

bool = isFiniteArray( [ -3.0, 1.0/0.0 ] );
// returns false
```

#### isFiniteArray.primitives( value )

Tests if a `value` is an array-like object containing **only** primitive finite `numbers`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isFiniteArray.primitives( [ -1.0, 0.0, 4.5 ] );
// returns true

bool = isFiniteArray.primitives( [ -1.0, 1.0/0.0 ] );
// returns false

bool = isFiniteArray.primitives( [ -3.0, new Number(2.0) ] );
// returns false
```

#### isFiniteArray.objects( value )

Tests if a `value` is an array-like object containing **only** `Number` objects having finite values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isFiniteArray.objects( [ new Number(-1.0), new Number(2.0) ] );
// returns true

bool = isFiniteArray.objects( [ -1.0, 0.0, 1.0 ] );
// returns false

bool = isFiniteArray.objects( [ -3.0, new Number(1.0) ] );
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
var isFiniteArray = require( '@stdlib/assert/is-finite-array' );

var bool = isFiniteArray( [ -5.0, 0.0, 2.0, 5.0 ] );
// returns true

bool = isFiniteArray( [ -4.0, -3.14, 1.0, 3.14 ] );
// returns true

bool = isFiniteArray( [ -1.0, new Number( -6.0 ), 2.0 ] );
// returns true

bool = isFiniteArray( [ -1.0, 'abc', 3.0 ] );
// returns false

bool = isFiniteArray( [ -2.3, 1.0/0.0, 3.0 ] );
// returns false

bool = isFiniteArray( [] );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
