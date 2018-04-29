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

# isProbabilityArray

> Test if a value is an array-like object containing only probabilities.

<section class="intro">

A **probability** is defined as a numeric value on the interval `[0,1]`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isProbabilityArray = require( '@stdlib/assert/is-probability-array' );
```

#### isProbabilityArray( value )

Tests if a `value` is an array-like object containing **only** probabilities.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var Uint8Array = require( '@stdlib/array/uint8' );

var bool = isProbabilityArray( [ 0.6, 0.5, 0.25 ] );
// returns true

bool = isProbabilityArray( [ 0.6, 0.5, new Number( 0.25 ) ] );
// returns true

bool = isProbabilityArray( new Uint8Array( [ 0, 1 ] ) );
// returns true

bool = isProbabilityArray( [ 3.14, 0.0 ] );
// returns false
```

#### isProbabilityArray.primitives( value )

Tests if a `value` is an array-like object `array` containing **only** primitive probabilities.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isProbabilityArray.primitives( [ 1.0, 0.0, 0.8 ] );
// returns true

bool = isProbabilityArray.primitives( [ 0.9, new Number(1.0) ] );
// returns false
```

#### isProbabilityArray.objects( value )

Tests if a `value` is an array-like object `array` containing **only** `Number` objects whose values are probabilities.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isProbabilityArray.objects( [ new Number(1.0), new Number(1.0) ] );
// returns true

bool = isProbabilityArray.objects( [ 1.0, 0.0, 0.6 ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );
var isProbabilityArray = require( '@stdlib/assert/is-probability-array' );

var arr = [ 0.0, 1.0, 0.5 ];
var bool = isProbabilityArray( arr );
// returns true

arr = [ 0.5, 0.25, 0.25 ];
bool = isProbabilityArray( arr );
// returns true

arr = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
bool = isProbabilityArray( arr );
// returns true

arr = [ 3.14, -1.0 ];
bool = isProbabilityArray( arr );
// returns false

bool = isProbabilityArray( [] );
// returns false

bool = isProbabilityArray( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
