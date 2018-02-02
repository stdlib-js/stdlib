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

# modf

> Decompose a [double-precision floating-point number][ieee754] into integral and fractional parts.

<section class="usage">

## Usage

```javascript
var modf = require( '@stdlib/math/base/special/modf' );
```

#### modf( \[out,] x )

Decomposes a [double-precision floating-point number][ieee754] into integral and fractional parts, each having the same type and sign as `x`.

```javascript
var parts = modf( 3.14 );
// returns [ 3.0, 0.14000000000000012 ]

parts = modf( +0.0 );
// returns [ +0.0, +0.0 ]

parts = modf( -0.0 );
// returns [ -0.0, -0.0 ]

parts = modf( Infinity );
// returns [ Infinity, +0.0 ]

parts = modf( -Infinity );
// returns [ -Infinity, -0.0 ]

parts = modf( NaN );
// returns [ NaN, NaN ]
```

To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var parts = modf( out, 3.14 );
// returns <Float64Array>[ 3.0, 0.14000000000000012 ]

var bool = ( parts === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var modf = require( '@stdlib/math/base/special/modf' );

var parts;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*1000.0) - 500.0;
    parts = modf( x );
    console.log( 'modf(%d) => integral: %d. fraction: %d.', x, parts[ 0 ], parts[ 1 ] );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
