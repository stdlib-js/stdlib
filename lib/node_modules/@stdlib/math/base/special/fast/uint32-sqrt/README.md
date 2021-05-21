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

# Square Root

> Compute an integer [square root][square-root].

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sqrtUint32 = require( '@stdlib/math/base/special/fast/uint32-sqrt' );
```

#### sqrtUint32( x )

Returns an **approximate** [square root][square-root] of an unsigned 32-bit integer `x`.

```javascript
var v = sqrtUint32( 9 >>> 0 );
// returns 3

v = sqrtUint32( 2 >>> 0 );
// returns 1

v = sqrtUint32( 3 >>> 0 );
// returns 1

v = sqrtUint32( 0 >>> 0 );
// returns 0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Prefer hardware `sqrt` over a software implementation.
-   When using a software `sqrt`, this implementation provides a performance boost when an application requires only **approximate** computations for integer arguments.
-   For applications requiring high-precision, this implementation is **never** suitable.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var sqrtUint32 = require( '@stdlib/math/base/special/fast/uint32-sqrt' );

var v;
var i;

for ( i = 0; i < 101; i++ ) {
    v = sqrtUint32( i >>> 0 );
    console.log( 'sqrt(%d) ≈ %d', i, v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[square-root]: https://en.wikipedia.org/wiki/Square_root

</section>

<!-- /.links -->
