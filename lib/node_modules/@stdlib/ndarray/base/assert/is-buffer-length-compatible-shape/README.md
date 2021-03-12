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

# isBufferLengthCompatibleShape

> Determine if a buffer length is compatible with an array shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var isBufferLengthCompatibleShape = require( '@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape' );
```

#### isBufferLengthCompatibleShape( len, shape )

Returns a `boolean` indicating if a buffer `length` is compatible with a provided `shape` array.

<!-- eslint-disable id-length -->

```javascript
var shape = [ 2, 2 ];

var bool = isBufferLengthCompatibleShape( 10, shape );
// returns true

bool = isBufferLengthCompatibleShape( 3, shape );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var isBufferLengthCompatibleShape = require( '@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape' );

var shape;
var bool;
var len;
var i;

len = 500; // buffer length

shape = [ 0, 0, 0 ];
for ( i = 0; i < 100; i++ ) {
    // Generate a random array shape:
    shape[ 0 ] = discreteUniform( 1, 10 );
    shape[ 1 ] = discreteUniform( 1, 10 );
    shape[ 2 ] = discreteUniform( 1, 10 );

    // Determine if the buffer length is compatible with the shape array:
    bool = isBufferLengthCompatibleShape( len, shape );
    console.log( 'Buffer length: %d. Shape: %s. Compatible: %s.', len, shape.join( 'x' ), bool );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
