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

# uimuldw

> Compute the double word product of two unsigned 32-bit integers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var uimuldw = require( '@stdlib/math/base/special/uimuldw' );
```

#### uimuldw( \[out,] a, b )

Multiplies two unsigned 32-bit integers and returns an `array` of two unsigned 32-bit integers (in big endian order) which represents the unsigned 64-bit integer product.

```javascript
var v = uimuldw( 1, 10 );
// returns [ 0, 10 ]

v = uimuldw( 0x80000000, 0x80000000 ); // 2^31 * 2^31 = 4611686018427388000 => 32-bit integer overflow
// returns [ 1073741824, 0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When computing the product of 32-bit integer values in double-precision floating-point format (the default JavaScript numeric data type), computing the double word product is necessary in order to **avoid** exceeding the [maximum safe double-precision floating-point integer value][@stdlib/constants/math/float64-max-safe-integer].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lpad = require( '@stdlib/string/left-pad' );
var uimuldw = require( '@stdlib/math/base/special/uimuldw' );

var i;
var j;
var y;

for ( i = 0xFFFFFFF0; i < 0xFFFFFFFF; i++ ) {
    for ( j = i; j < 0xFFFFFFFF; j++) {
        y = uimuldw( i, j );
        console.log( '%d x %d = 0x%s%s', i, j, lpad( y[0].toString( 16 ), 8, '0' ), lpad( y[1].toString( 16 ), 8, '0' ) );
    }
}
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/constants/math/float64-max-safe-integer]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/constants/math/float64-max-safe-integer

</section>

<!-- /.links -->
