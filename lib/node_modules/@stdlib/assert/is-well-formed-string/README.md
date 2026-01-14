<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# isWellFormedString

> Test if a string is well-formed.

<section class="usage">

## Usage

```javascript
var isWellFormedString = require( '@stdlib/assert/is-well-formed-string' );
```

#### isWellFormedString( str )

Tests if a `string` is well-formed.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isWellFormedString( '' );
// returns true

bool = isWellFormedString( new String( '' ) );
// returns true

bool = isWellFormedString( '\uDBFF' );
// returns false

bool = isWellFormedString( '\uDBFFFF\uDBFF' );
// returns false

bool = isWellFormedString( [] );
// returns false

bool = isWellFormedString( '-5' );
// returns true

bool = isWellFormedString( null );
// returns false
```

#### isWellFormedString.isPrimitive( str )

Tests if a `string` is a well-formed `string` primitive.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isWellFormedString.isPrimitive( '' );
// returns true

bool = isWellFormedString.isPrimitive( new String( '' ) );
// returns false
```

#### isWellFormedString.isObject( str )

Tests if a `string` is a well-formed `String` object.

<!-- eslint-disable no-new-wrappers -->

```javascript
var bool = isWellFormedString.isObject( '' );
// returns false

bool = isWellFormedString.isObject( new String( '' ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var isWellFormedString = require( '@stdlib/assert/is-well-formed-string' );

var bool = isWellFormedString( '' );
// returns true

bool = isWellFormedString( new String( '' ) );
// returns true

bool = isWellFormedString( '\uDBFF' );
// returns false

bool = isWellFormedString( '\uDBFF\uDBFF' );
// returns false

bool = isWellFormedString( [] );
// returns false

bool = isWellFormedString( '-5' );
// returns true

bool = isWellFormedString( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
