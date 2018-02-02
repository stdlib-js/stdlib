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

# lcm

> Compute the [least common multiple][lcm] (lcm).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [least common multiple][lcm] (lcm) of two non-zero integers `a` and `b` is the smallest positive integer that is divisible by both `a` and `b`. The lcm is also known as the **lowest common multiple** or **smallest common multiple** and finds common use in calculating the **lowest common denominator** (lcd).

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var lcm = require( '@stdlib/math/base/special/lcm' );
```

#### lcm( a, b )

Computes the [least common multiple][lcm] (lcm).

```javascript
var v = lcm( 48, 18 );
// returns 144
```

If either `a` or `b` is `0`, the function returns `0`.

```javascript
var v = lcm( 0, 0 );
// returns 0

v = lcm( 2, 0 );
// returns 0

v = lcm( 0, 3 );
// returns 0
```

Both `a` and `b` must have integer values; otherwise, the function returns `NaN`.

```javascript
var v = lcm( 3.14, 18 );
// returns NaN

v = lcm( 48, 3.14 );
// returns NaN

v = lcm( NaN, 18 );
// returns NaN

v = lcm( 48, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var lcm = require( '@stdlib/math/base/special/lcm' );

var a;
var b;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    a = round( randu()*50 );
    b = round( randu()*50 );
    v = lcm( a, b );
    console.log( 'lcm(%d,%d) = %d', a, b, v );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[lcm]: https://en.wikipedia.org/wiki/Least_common_multiple

</section>

<!-- /.links -->
