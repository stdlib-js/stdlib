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

# isEqualUint8ClampedArray

> Test if two arguments are both Uint8ClampedArrays and have equal values.

<section class="usage">

## Usage

```javascript
var isEqualUint8ClampedArray = require( '@stdlib/assert/is-equal-uint8clampedarray' );
```

#### isEqualUint8ClampedArray( v1, v2 )

Tests if two arguments are both Uint8ClampedArrays and have equal values.

```javascript
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );

var x = new Uint8ClampedArray( [ 1, 2 ] );
var y = new Uint8ClampedArray( [ 1, 2 ] );
var bool = isEqualUint8ClampedArray( x, y );
// returns true

bool = isEqualUint8ClampedArray( x, new Uint8ClampedArray( [ 1, 3 ] ) );
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
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var isEqualUint8ClampedArray = require( '@stdlib/assert/is-equal-uint8clampedarray' );

var x = new Uint8ClampedArray( [ 1, 2, 3 ] );
var y = new Uint8ClampedArray( [ 1, 2, 3 ] );
var out = isEqualUint8ClampedArray( x, y );
// returns true

x = new Uint8ClampedArray( [ 0, 0, 0 ] );
y = [ 0, 0, 0 ];
out = isEqualUint8ClampedArray( x, y );
// returns false

x = new Uint8ClampedArray( [ 1, 2, 3 ] );
y = new Uint8ClampedArray( [ 1, 2, 4 ] );
out = isEqualUint8ClampedArray( x, y );
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
