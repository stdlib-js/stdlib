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

# isEqualInt8Array

> Test if two arguments are both Int8Arrays and have equal values.

<section class="usage">

## Usage

```javascript
var isEqualInt8Array = require( '@stdlib/assert/is-equal-int8array' );
```

#### isEqualInt8Array( v1, v2 )

Tests if two arguments are both Int8Arrays and have equal values.

```javascript
var Int8Array = require( '@stdlib/array/int8' );

var x = new Int8Array( [ 1, 2 ] );
var y = new Int8Array( [ 1, 2 ] );
var bool = isEqualInt8Array( x, y );
// returns true

bool = isEqualInt8Array( x, new Int8Array( [ 1, 3 ] ) );
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
var Int8Array = require( '@stdlib/array/int8' );
var isEqualInt8Array = require( '@stdlib/assert/is-equal-int8array' );

var x = new Int8Array( [ 1, 2, 3 ] );
var y = new Int8Array( [ 1, 2, 3 ] );
var out = isEqualInt8Array( x, y );
// returns true

x = new Int8Array( [ 0, 0, 0 ] );
y = [ 0, 0, 0 ];
out = isEqualInt8Array( x, y );
// returns false

x = new Int8Array( [ 1, 2, 3 ] );
y = new Int8Array( [ 1, 2, 4 ] );
out = isEqualInt8Array( x, y );
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
