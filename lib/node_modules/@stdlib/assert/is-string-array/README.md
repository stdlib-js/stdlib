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

# isStringArray

> Test if a value is an array of strings.

<section class="usage">

## Usage

```javascript
var isStringArray = require( '@stdlib/assert/is-string-array' );
```

#### isStringArray( value )

Tests if a `value` is an array of strings.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isStringArray( [ 'beep', new String('boop') ] );
// returns true

bool = isStringArray( [ 'beep', null ] );
// returns false
```

#### isStringArray.primitives( value )

Tests if a `value` is an `array` containing **only** `string` primitives.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isStringArray.primitives( [ 'beep', 'boop' ] );
// returns true

bool = isStringArray.primitives( [ 'beep', new String('boop') ] );
// returns false
```

#### isStringArray.objects( value )

Tests if a `value` is an `array` containing **only** `String` objects.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isStringArray.objects( [ new String('beep'), new String('boop') ] );
// returns true

bool = isStringArray.objects( [ 'beep', new String('boop') ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var isStringArray = require( '@stdlib/assert/is-string-array' );

var bool = isStringArray( [ 'Hello World!' ] );
// returns true

bool = isStringArray( [ 'a', 'b', 'c' ] );
// returns true

bool = isStringArray( [ new String( 'abc' ), 'def', 'ghi' ] );
// returns true

bool = isStringArray( 'abc' );
// returns false

bool = isStringArray( [] );
// returns false

bool = isStringArray( [ 'a', NaN ] );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
