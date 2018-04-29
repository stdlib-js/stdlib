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

# ArrayBuffer

> [Constructor][mdn-arraybuffer] which returns an object used to represent a generic, fixed-length raw binary data buffer.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );
```

#### ArrayBuffer( size )

Returns an [`ArrayBuffer`][mdn-arraybuffer] having a specified number of bytes.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var buf = new ArrayBuffer( 5 );
// returns <ArrayBuffer>
```

* * *

### Properties

#### ArrayBuffer.length

Number of input arguments the constructor accepts.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var len = ArrayBuffer.length;
// returns 1
```

#### ArrayBuffer.prototype.byteLength

**Read-only** property which returns the length (in bytes) of the [`ArrayBuffer`][mdn-arraybuffer].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var buf = new ArrayBuffer( 5 );
var byteLength = buf.byteLength;
// returns 5
```

* * *

### Methods

#### ArrayBuffer.isView( arr )

Static method which returns a `boolean` indicating if provided a buffer view.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var view = new Float64Array( 10 );

var bool = ArrayBuffer.isView( view );
// returns true
```

#### ArrayBuffer.prototype.slice( \[start\[, end]] )

Copies the bytes of an `ArrayBuffer` to a new [`ArrayBuffer`][mdn-arraybuffer].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var b1 = new ArrayBuffer( 10 );

var b2 = b1.slice();
// returns <ArrayBuffer>

var bool = ( b2 === b1 );
// returns false
```

By default, the method copies from the beginning of the [`ArrayBuffer`][mdn-arraybuffer]. To beginning copying from a different byte index, provide a `start` argument, specifying the starting byte index (inclusive).

<!-- eslint-disable stdlib/require-globals -->

```javascript
var b1 = new ArrayBuffer( 10 );
var b2 = b1.slice( 2 );

var nbytes = b2.byteLength;
// returns 8
```

If `start < 0`, the index is relative to the end of the [`ArrayBuffer`][mdn-arraybuffer].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var b1 = new ArrayBuffer( 10 );
var b2 = b1.slice( -2 );

var nbytes = b2.byteLength;
// returns 2
```

By default, the method copies to the end of the [`ArrayBuffer`][mdn-arraybuffer]. To copy until a particular byte index, provide an `end` index, specifying the ending byte index (exclusive).

<!-- eslint-disable stdlib/require-globals -->

```javascript
var b1 = new ArrayBuffer( 10 );
var b2 = b1.slice( 2, 6 );

var nbytes = b2.byteLength;
// returns 4
```

If `end < 0`, the index is relative to the end of the [`ArrayBuffer`][mdn-arraybuffer].

<!-- eslint-disable stdlib/require-globals -->

```javascript
var b1 = new ArrayBuffer( 10 );
var b2 = b1.slice( 2, -2 );

var nbytes = b2.byteLength;
// returns 6
```

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
var randu = require( '@stdlib/random/base/randu' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var toBinaryString = require( '@stdlib/number/uint8/base/to-binary-string' );
var ArrayBuffer = require( '@stdlib/array/buffer' );

var bytes;
var buf;
var arr;
var i;

// Create a new ArrayBuffer:
buf = new ArrayBuffer( 64 );

// Create a Float64 array buffer view:
arr = new Float64Array( buf.byteLength/8 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = randu() * 100.0;
}

// Create a "bytes" view of the array buffer:
bytes = new Uint8Array( arr.buffer );

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

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

</section>

<!-- /.links -->
