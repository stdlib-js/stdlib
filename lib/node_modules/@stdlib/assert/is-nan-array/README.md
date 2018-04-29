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

# isNaNArray

> Test if a value is an array-like object containing only NaN values.

<section class="usage">

## Usage

```javascript
var isNaNArray = require( '@stdlib/assert/is-nan-array' );
```

#### isNaNArray( value )

Tests if a `value` is an array-like object containing **only** `NaN` values.

```javascript
var bool = isNaNArray( [ NaN, NaN, NaN ] );
// returns true

bool = isNaNArray( [ NaN, 2 ] );
// returns false
```

#### isNaNArray.primitives( value )

Tests if a `value` is an array-like object containing **only** primitive `NaN` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNaNArray.primitives( [ NaN, NaN, NaN ] );
// returns true

bool = isNaNArray.primitives( [ NaN, new Number( NaN ) ] );
// returns false
```

#### isNaNArray.objects( value )

Tests if a `value` is an array-like object containing **only** object `NaN` values.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isNaNArray.objects( [ new Number( NaN ), new Number( NaN ) ] );
// returns true

bool = isNaNArray.objects( [ NaN, new Number( NaN ) ] );
// returns false

bool = isNaNArray.objects( [ NaN, NaN, NaN ] );
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
var Float64Array = require( '@stdlib/array/float64' );
var isNaNArray = require( '@stdlib/assert/is-nan-array' );

var bool = isNaNArray( [ NaN ] );
// returns true

bool = isNaNArray( [ NaN, NaN, NaN ] );
// returns true

bool = isNaNArray( [ new Number( NaN ), NaN, NaN ] );
// returns true

bool = isNaNArray( new Float64Array( [ NaN, NaN ] ) );
// returns true

bool = isNaNArray( NaN );
// returns false

bool = isNaNArray( [ 'a', 'b', 'c' ] );
// returns false

bool = isNaNArray( [ 'a', NaN ] );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
