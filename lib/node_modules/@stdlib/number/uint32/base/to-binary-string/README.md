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

# Binary String

> Return a string giving the literal bit representation of an [unsigned 32-bit integer][integer].

<section class="usage">

## Usage

```javascript
var toBinaryString = require( '@stdlib/number/uint32/base/to-binary-string' );
```

#### toBinaryString( x )

Returns a `string` giving the literal bit representation of an [unsigned 32-bit integer][integer].

```javascript
var Uint32Array = require( '@stdlib/array/uint32' );

var a = new Uint32Array( [ 1, 4, 9 ] );

var str = toBinaryString( a[0] );
// returns '00000000000000000000000000000001'

str = toBinaryString( a[1] );
// returns '00000000000000000000000000000100'

str = toBinaryString( a[2] );
// returns '00000000000000000000000000001001'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Except for [typed arrays][typed-arrays], JavaScript does **not** provide native user support for [unsigned 32-bit integers][integer]. According to the [ECMAScript standard][ecma-262], `number` values correspond to [double-precision floating-point numbers][ieee754]. While this function is intended for [unsigned 32-bit integers][integer], the function will accept [floating-point][ieee754] values and represent the values **as if** they are [unsigned 32-bit integers][integer]. Accordingly, care **should** be taken to ensure that **only** nonnegative integer values less than `4,294,967,296` (`2^32`) are provided.

    ```javascript
    var str = toBinaryString( 1 );
    // returns '00000000000000000000000000000001'

    str = toBinaryString( 4 );
    // returns '00000000000000000000000000000100'

    str = toBinaryString( 9 );
    // returns '00000000000000000000000000001001'

    str = toBinaryString( 4294967295 );
    // returns '11111111111111111111111111111111'
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var Uint32Array = require( '@stdlib/array/uint32' );
var toBinaryString = require( '@stdlib/number/uint32/base/to-binary-string' );

var x;
var y;
var b;
var i;

// Generate random unsigned 32-bit integers...
x = new Uint32Array( 100 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( randu()*1.0e5 );
}

// Convert unsigned 32-bit integers to literal bit representations...
for ( i = 0; i < x.length; i++ ) {
    b = toBinaryString( x[i] );
    y = parseInt( b, 2 );
    console.log( 'x: %d, b: %s, y: %d', x[i], b, y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[integer]: https://en.wikipedia.org/wiki/Integer_%28computer_science%29

[typed-arrays]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

[ecma-262]: http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.19

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
