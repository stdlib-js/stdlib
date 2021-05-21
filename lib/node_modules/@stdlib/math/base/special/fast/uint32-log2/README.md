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

# Binary Logarithm

> Compute an integer [binary logarithm][binary-logarithm].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var log2Uint32 = require( '@stdlib/math/base/special/fast/uint32-log2' );
```

#### log2Uint32( x )

Returns an **approximate** [binary logarithm][binary-logarithm] of an unsigned 32-bit integer `x`.

```javascript
var v = log2Uint32( 4 >>> 0 );
// returns 2

v = log2Uint32( 8 >>> 0 );
// returns 3

v = log2Uint32( 9 >>> 0 );
// returns 3
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This implementation provides a performance boost when an application requires only **approximate** computations for integer arguments.
-   For applications requiring high-precision, this implementation is **never** suitable.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var log2Uint32 = require( '@stdlib/math/base/special/fast/uint32-log2' );

var v;
var i;

for ( i = 1; i < 101; i++ ) {
    v = log2Uint32( i >>> 0 );
    console.log( 'log2(%d) ≈ %d', i, v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[binary-logarithm]: https://en.wikipedia.org/wiki/Binary_logarithm

</section>

<!-- /.links -->
