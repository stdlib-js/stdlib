<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# isEqualUint16Array

> Test if two arguments are both Uint16Arrays and have equal values.

<section class="usage">

## Usage

```javascript
var isEqualUint16Array = require( '@stdlib/assert/is-equal-uint16array' );
```

#### isEqualUint16Array( v1, v2 )

Tests if two arguments are both Uint16Arrays and have equal values.

```javascript
var Uint16Array = require( '@stdlib/array/uint16' );

var x = new Uint16Array( [ 1, 2 ] );
var y = new Uint16Array( [ 1, 2 ] );
var bool = isEqualUint16Array( x, y );
// returns true

bool = isEqualUint16Array( x, new Uint16Array( [ 1, 3 ] ) );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Uint16Array = require( '@stdlib/array/uint16' );
var isEqualUint16Array = require( '@stdlib/assert/is-equal-uint16array' );

var x = new Uint16Array( [ 1, 2, 3 ] );
var y = new Uint16Array( [ 1, 2, 3 ] );
var out = isEqualUint16Array( x, y );
// returns true

x = new Uint16Array( [ 0, 0, 0 ] );
y = [ 0, 0, 0 ];
out = isEqualUint16Array( x, y );
// returns false

x = new Uint16Array( [ 1, 2, 3 ] );
y = new Uint16Array( [ 1, 2, 4 ] );
out = isEqualUint16Array( x, y );
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
