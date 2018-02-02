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

# isCollection

> Test if a value is a collection.

<section class="intro">

A collection is defined as either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

</section>

<!-- ./intro -->

<section class="usage">

## Usage

```javascript
var isCollection = require( '@stdlib/assert/is-collection' );
```

#### isCollection( value )

Tests if a value is a collection.

```javascript
var bool = isCollection( [] );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var isCollection = require( '@stdlib/assert/is-collection' );

var bool = isCollection( [] );
// returns true

bool = isCollection( new Float64Array( 10 ) );
// returns true

bool = isCollection( new Float32Array( 10 ) );
// returns true

bool = isCollection( new Int32Array( 10 ) );
// returns true

bool = isCollection( new Uint32Array( 10 ) );
// returns true

bool = isCollection( new Int16Array( 10 ) );
// returns true

bool = isCollection( new Uint16Array( 10 ) );
// returns true

bool = isCollection( new Int8Array( 10 ) );
// returns true

bool = isCollection( new Uint8Array( 10 ) );
// returns true

bool = isCollection( new Uint8ClampedArray( 10 ) );
// returns true

bool = isCollection( { 'length': 0 } );
// returns true

bool = isCollection( {} );
// returns false

bool = isCollection( 'beep' );
// returns false

bool = isCollection( isCollection );
// returns false

bool = isCollection( null );
// returns false

bool = isCollection( void 0 );
// returns false

bool = isCollection( 3.14 );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

</section>

<!-- /.links -->
