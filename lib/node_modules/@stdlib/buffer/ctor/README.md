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

# Buffer

> [Buffer][node-buffer] constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Buffer = require( '@stdlib/buffer/ctor' );
```

#### Buffer( size )

Allocates a [`Buffer`][node-buffer] having a specified number of bytes.

<!-- eslint-disable stdlib/require-globals, no-buffer-constructor -->

```javascript
var b = new Buffer( 10 );
// returns <Buffer>
```

#### Buffer( array )

Allocates a [`Buffer`][node-buffer] from an array of octets.

<!-- eslint-disable stdlib/require-globals, no-buffer-constructor -->

```javascript
var b = new Buffer( [ 1, 2, 3, 4 ] );
// returns <Buffer>[ 1, 2, 3, 4 ]
```

#### Buffer( buffer )

Copies [buffer][node-buffer] data to a new [`Buffer`][node-buffer] instance.

<!-- eslint-disable stdlib/require-globals, no-buffer-constructor -->

```javascript
var b1 = new Buffer( [ 1, 2, 3, 4 ] );
var b2 = new Buffer( b1 );
// returns <Buffer>[ 1, 2, 3, 4 ]
```

#### Buffer( str\[, encoding] )

Returns a [`Buffer`][node-buffer] containing a provided `string`.

<!-- eslint-disable stdlib/require-globals, no-buffer-constructor -->

```javascript
var b = new Buffer( 'beep boop' );
// returns <Buffer>
```

* * *

### Properties

TODO: add properties

* * *

### Methods

TODO: add methods

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
var ctor = require( '@stdlib/buffer/ctor' );

var b;
var i;

// Allocate uninitialized memory:
if ( typeof ctor.alloc === 'function' ) {
    b = ctor.alloc( 10 );
} else {
    b = new ctor( 10 );
}

// Zero fill the buffer...
for ( i = 0; i < b.length; i++ ) {
    b[ i ] = 0;
}
console.log( b );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[node-buffer]: https://nodejs.org/api/buffer.html

</section>

<!-- /.links -->
