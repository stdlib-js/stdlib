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

# isBooleanArray

> Test if a value is an array-like object of booleans.

<section class="usage">

## Usage

```javascript
var isBooleanArray = require( '@stdlib/assert/is-boolean-array' );
```

#### isBooleanArray( value )

Tests if a `value` is an array-like object of `booleans`.

```javascript
var bool = isBooleanArray( [ true, false, false, true ] );
// returns true
```

#### isBooleanArray.primitives( value )

Tests if a `value` is an array-like object containing **only** `boolean` primitives.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isBooleanArray.primitives( [ true, false ] );
// returns true

bool = isBooleanArray.primitives( [ false, new Boolean( true ) ] );
// returns false
```

#### isBooleanArray.objects( value )

Tests if a `value` is an array-like object containing **only** `Boolean` objects.

<!-- eslint-disable no-new-wrappers, max-len -->

```javascript
var bool = isBooleanArray.objects( [ new Boolean( false ), new Boolean( true ) ] );
// returns true

bool = isBooleanArray.objects( [ new Boolean( false ), true ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var isBooleanArray = require( '@stdlib/assert/is-boolean-array' );

var bool = isBooleanArray( [ true, false ] );
// returns true

bool = isBooleanArray( [ true, new Boolean( false ) ] );
// returns true

bool = isBooleanArray( [ true, 'false' ] );
// returns false

bool = isBooleanArray( [] );
// returns false

bool = isBooleanArray( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
