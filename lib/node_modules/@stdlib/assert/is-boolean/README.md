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

# isBoolean

> Test if a value is a boolean.

<section class="usage">

### Usage

```javascript
var isBoolean = require( '@stdlib/assert/is-boolean' );
```

#### isBoolean( value )

Tests if a `value` is a `boolean`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isBoolean( false );
// returns true

bool = isBoolean( true );
// returns true

bool = isBoolean( new Boolean( false ) );
// returns true

bool = isBoolean( new Boolean( true ) );
// returns true
```

#### isBoolean.isPrimitive( value )

Tests if a `value` is a primitive `boolean`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isBoolean.isPrimitive( true );
// returns true

bool = isBoolean.isPrimitive( false );
// returns true

bool = isBoolean.isPrimitive( new Boolean( true ) );
// returns false
```

#### isBoolean.isObject( value )

Tests if a `value` is a `Boolean` object.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isBoolean.isObject( true );
// returns false

bool = isBoolean.isObject( new Boolean( false ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var isBoolean = require( '@stdlib/assert/is-boolean' );

var bool = isBoolean( false );
// returns true

bool = isBoolean( new Boolean( false ) );
// returns true

bool = isBoolean( 'true' );
// returns false

bool = isBoolean( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
