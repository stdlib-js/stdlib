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

# isBuffer

> Test if a value is a [Buffer][node-buffer] object.

<section class="usage">

## Usage

```javascript
var isBuffer = require( '@stdlib/assert/is-buffer' );
```

#### isBuffer( value )

Tests if a `value` is a [`Buffer`][node-buffer] object.

<!-- TODO: update once Buffer wrapper -->

<!-- eslint-disable no-buffer-constructor -->

```javascript
var Buffer = require( '@stdlib/buffer/ctor' );

var value = new Buffer( [ 1, 2, 3, 4 ] );

var bool = isBuffer( value );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The implementation supports both [Node.js][node-buffer] and [browser polyfill][browser-buffer] `Buffer` objects.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- TODO: update once Buffer wrapper -->

<!-- eslint no-undef: "error" -->

<!-- eslint-disable no-buffer-constructor, no-restricted-syntax, no-empty-function -->

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var Buffer = require( '@stdlib/buffer/ctor' );
var isBuffer = require( '@stdlib/assert/is-buffer' );

var bool = isBuffer( new Buffer( [ 1, 2, 3, 4 ] ) );
// returns true

bool = isBuffer( new Buffer( 'beep' ) );
// returns true

bool = isBuffer( [] );
// returns false

bool = isBuffer( {} );
// returns false

bool = isBuffer( new Int8Array() );
// returns false

bool = isBuffer( function foo() {} );
// returns false

bool = isBuffer( null );
// returns false

bool = isBuffer( void 0 );
// returns false

bool = isBuffer( 'beep' );
// returns false

bool = isBuffer( 5 );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[node-buffer]: http://nodejs.org/api/buffer.html

[browser-buffer]: https://github.com/feross/buffer

</section>

<!-- /.links -->
