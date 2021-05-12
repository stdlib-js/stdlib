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

# Negative Infinity

> [Single-precision floating-point][ieee754] negative infinity.

<section class="usage">

## Usage

```javascript
var FLOAT32_NINF = require( '@stdlib/constants/float32/ninf' );
```

#### FLOAT32_NINF

[Single-precision floating-point][ieee754] negative infinity.

```javascript
// FLOAT32_NINF is implicitly promoted to a double-precision floating-point number...
var bool = ( FLOAT32_NINF === -Infinity );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT32_NINF = require( '@stdlib/constants/float32/ninf' );

console.log( FLOAT32_NINF );
// => -Infinity
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
