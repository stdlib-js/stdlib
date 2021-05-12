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

# Positive Infinity

> [Half-precision floating-point][half-precision-floating-point-format] positive infinity.

<section class="usage">

## Usage

```javascript
var FLOAT16_PINF = require( '@stdlib/constants/float16/pinf' );
```

#### FLOAT16_PINF

[Half-precision floating-point][half-precision-floating-point-format] positive infinity.

```javascript
// FLOAT16_PINF is implicitly promoted to a double-precision floating-point number...
var bool = ( FLOAT16_PINF === Infinity );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT16_PINF = require( '@stdlib/constants/float16/pinf' );

console.log( FLOAT16_PINF );
// => +Infinity
```

</section>

<!-- /.examples -->

<section class="links">

[half-precision-floating-point-format]: https://en.wikipedia.org/wiki/Half-precision_floating-point_format

</section>

<!-- /.links -->
