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

# isObjectArray

> Test if a value is an array-like object containing only objects.

<section class="usage">

## Usage

```javascript
var isObjectArray = require( '@stdlib/assert/is-object-array' );
```

#### isObjectArray( value )

Tests if a `value` is an array-like object containing **only** `objects`.

<!-- eslint-disable no-new-wrappers, object-curly-newline -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isObjectArray( [ {}, new Number(3.0) ] );
// returns true

bool = isObjectArray( [ {}, { 'beep': 'boop' } ] );
// returns true

bool = isObjectArray( [ {}, '3.0' ] );
// returns false

bool = isObjectArray( [] );
// returns false

bool = isObjectArray( [ null, {} ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers, object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isObjectArray = require( '@stdlib/assert/is-object-array' );

var bool = isObjectArray( [ { 'beep': 'boop' }, {}, {} ] );
// returns true

bool = isObjectArray( [ new Date(), new Number( 3 ) ] );
// returns true

bool = isObjectArray( [ {}, new String( 'abc' ), {} ] );
// returns true

bool = isObjectArray( [ [], {} ] );
// returns false

bool = isObjectArray( [ 'a', 'b' ] );
// returns false

bool = isObjectArray( [] );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
