<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# DataView

> [Constructor][mdn-dataview] which returns a data view representing a provided array buffer.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var DataView = require( '@stdlib/array/dataview' );
```

#### DataView( buffer\[, byteOffset\[, byteLength]] )

Returns a [`DataView`][mdn-dataview] representing a provided array buffer.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );

var buf = new ArrayBuffer( 5 );
// returns <ArrayBuffer>

var dv = new DataView( buf );
// returns <DataView>
```

* * *

### Properties

#### DataView.prototype.buffer

**Read-only** property which returns the underlying array buffer.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );

var buf1 = new ArrayBuffer( 5 );
var dv = new DataView( buf1 );

var buf2 = dv.buffer;
// returns <ArrayBuffer>

var bool = ( buf1 === buf2 );
// returns true
```

#### DataView.prototype.byteLength

**Read-only** property which returns the length (in bytes) of the [`DataView`][mdn-dataview].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );

var buf = new ArrayBuffer( 5 );
var dv = new DataView( buf );

var byteLength = dv.byteLength;
// returns 5
```

#### DataView.prototype.byteOffset

**Read-only** property which returns the number of bytes from the [`DataView`][mdn-dataview] to the start of the underlying array buffer.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );

var buf = new ArrayBuffer( 5 );
var dv = new DataView( buf, 3 );

var byteOffset = dv.byteOffset;
// returns 3
```

* * *

### Methods

TODO: document methods

</section>

<!-- /.usage -->

* * *

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var toBinaryString = require( '@stdlib/number/uint8/base/to-binary-string' );
var randu = require( '@stdlib/random/base/randu' );
var Uint8Array = require( '@stdlib/array/uint8' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );

// Create a new ArrayBuffer:
var buf = new ArrayBuffer( 64 );

// Create a new DataView:
var dv = new DataView( buf );

// Set values in the view:
var i;
for ( i = 0; i < dv.byteLength/8; i++ ) {
    dv.setFloat64( i*8, randu()*100.0, IS_LITTLE_ENDIAN );
}

// Create a "bytes" view of the underlying array buffer:
var bytes = new Uint8Array( dv.buffer );

// Print the bytes:
for ( i = 0; i < bytes.length; i++ ) {
    console.log( 'byte %d: %s', i, toBinaryString( bytes[ i ] ) );
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

[mdn-dataview]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView

</section>

<!-- /.links -->
