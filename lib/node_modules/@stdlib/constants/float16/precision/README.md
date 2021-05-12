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

# Precision

> Effective number of bits in the [significand][significand] of a [half-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var FLOAT16_PRECISION = require( '@stdlib/constants/float16/precision' );
```

#### FLOAT16_PRECISION

Effective number of bits in the [significand][significand] of a [half-precision floating-point number][ieee754].

```javascript
var bool = ( FLOAT16_PRECISION === 11 ); // including implicit bit
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT16_PRECISION = require( '@stdlib/constants/float16/precision' );

console.log( FLOAT16_PRECISION );
// => 11
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[significand]: https://en.wikipedia.org/wiki/Significand

</section>

<!-- /.links -->
