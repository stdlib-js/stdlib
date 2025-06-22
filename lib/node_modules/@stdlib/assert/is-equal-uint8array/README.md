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

# isEqualUint8Array

> Test if two arguments are both Uint8Arrays and have equal values.

<section class="usage">

## Usage

```javascript
var isEqualUint8Array = require( '@stdlib/assert/is-equal-uint8array' );
```

#### isEqualUint8Array( v1, v2 )

Tests if two arguments are both Uint8Arrays and have equal values.

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );

var x = new Uint8Array( [ 1, 2 ] );
var y = new Uint8Array( [ 1, 2 ] );
var bool = isEqualUint8Array( x, y );
// returns true

bool = isEqualUint8Array( x, new Uint8Array( [ 1, 3 ] ) );
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
var Uint8Array = require( '@stdlib/array/uint8' );
var isEqualUint8Array = require( '@stdlib/assert/is-equal-uint8array' );

var x = new Uint8Array( [ 1, 2, 3 ] );
var y = new Uint8Array( [ 1, 2, 3 ] );
var out = isEqualUint8Array( x, y );
// returns true

x = new Uint8Array( [ 0, 0, 0 ] );
y = [ 0, 0, 0 ];
out = isEqualUint8Array( x, y );
// returns false

x = new Uint8Array( [ 1, 2, 3 ] );
y = new Uint8Array( [ 1, 2, 4 ] );
out = isEqualUint8Array( x, y );
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
