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

# SharedArrayBuffer

> [Constructor][mdn-sharedarraybuffer] returning an object used to represent a generic, fixed-length raw binary data buffer which can be used to create views of shared memory.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var SharedArrayBuffer = require( '@stdlib/array/shared-buffer' );
```

#### SharedArrayBuffer( size )

Returns a [`SharedArrayBuffer`][mdn-sharedarraybuffer] having a specified number of bytes.

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var buf = new SharedArrayBuffer( 5 );
    // returns <SharedArrayBuffer>
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
```

* * *

### Properties

#### SharedArrayBuffer.length

Number of input arguments the constructor accepts.

<!-- eslint-disable stdlib/require-globals -->

```javascript
var len = SharedArrayBuffer.length;
// returns 1
```

#### SharedArrayBuffer.prototype.byteLength

**Read-only** property which returns the length (in bytes) of the [`SharedArrayBuffer`][mdn-sharedarraybuffer].

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var buf = new SharedArrayBuffer( 5 );
    var byteLength = buf.byteLength;
    // returns 5
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
```

* * *

### Methods

#### SharedArrayBuffer.prototype.slice( \[start\[, end]] )

Copies the bytes of a [`SharedArrayBuffer`][mdn-sharedarraybuffer] to a new [`SharedArrayBuffer`][mdn-sharedarraybuffer].

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var b1 = new SharedArrayBuffer( 10 );

    var b2 = b1.slice();
    // returns <SharedArrayBuffer>

    var bool = ( b2 === b1 );
    // returns false
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
```

By default, the method copies from the beginning of the [`SharedArrayBuffer`][mdn-sharedarraybuffer]. To beginning copying from a different byte index, provide a `start` argument, specifying the starting byte index (inclusive).

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var b1 = new SharedArrayBuffer( 10 );
    var b2 = b1.slice( 2 );

    var nbytes = b2.byteLength;
    // returns 8
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
```

If `start < 0`, the index is relative to the end of the [`SharedArrayBuffer`][mdn-sharedarraybuffer].

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var b1 = new SharedArrayBuffer( 10 );
    var b2 = b1.slice( -2 );

    var nbytes = b2.byteLength;
    // returns 2
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
```

By default, the method copies to the end of the [`SharedArrayBuffer`][mdn-sharedarraybuffer]. To copy until a particular byte index, provide an `end` index, specifying the ending byte index (exclusive).

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var b1 = new SharedArrayBuffer( 10 );
    var b2 = b1.slice( 2, 6 );

    var nbytes = b2.byteLength;
    // returns 4
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
```

If `end < 0`, the index is relative to the end of the [`SharedArrayBuffer`][mdn-sharedarraybuffer].

<!-- eslint-disable stdlib/require-globals, no-unused-vars, no-inner-declarations -->

```javascript
try {
    var b1 = new SharedArrayBuffer( 10 );
    var b2 = b1.slice( 2, -2 );

    var nbytes = b2.byteLength;
    // returns 6
} catch ( err ) {
    console.log( 'Environment does not support SharedArrayBuffers.' );
}
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

<!-- TODO: update example to show explicit threading use case -->

<!-- eslint no-undef: "error" -->

<!-- eslint-disable no-unused-vars -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var toBinaryString = require( '@stdlib/number/uint8/base/to-binary-string' );
var SharedArrayBuffer = require( '@stdlib/array/shared-buffer' );

function main() {
    var bytes;
    var buf;
    var arr;
    var i;

    // Create a new SharedArrayBuffer:
    buf = new SharedArrayBuffer( 64 );

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
}

try {
    main();
} catch ( err ) {
    console.error( 'Environment does not provide SharedArrayBuffer support.' );
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

[mdn-sharedarraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer

</section>

<!-- /.links -->
