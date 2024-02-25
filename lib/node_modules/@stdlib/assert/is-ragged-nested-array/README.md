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

# isRaggedNestedArray

> Test if a value is a ragged nested array.

<section class="usage">

## Usage

```javascript
var isRaggedNestedArray = require( '@stdlib/assert/is-ragged-nested-array' );
```

#### isRaggedNestedArray( value )

Tests if a value is a ragged nested array. 

```javascript
var bool = isRaggedNestedArray( [ [ 1, 2, 3 ], [ 4, 5 ] ] );
// returns true

bool = isRaggedNestedArray( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-empty-function, no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```javascript
var isRaggedNestedArray = require( '@stdlib/assert/is-ragged-nested-array' );

var bool = isRaggedNestedArray( [ [ 1, 2, 3 ], [ 4, 5 ] ] );
// returns true

bool = isRaggedNestedArray( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
// returns false

bool = isRaggedNestedArray( 'beep' );
// returns false

bool = isRaggedNestedArray( null );
// returns false

bool = isRaggedNestedArray( void 0 );
// returns false

bool = isRaggedNestedArray( 5 );
// returns false

bool = isRaggedNestedArray( true );
// returns false

bool = isRaggedNestedArray( {} );
// returns false

bool = isRaggedNestedArray( function noop() {} );
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

</section>

<!-- /.links -->
