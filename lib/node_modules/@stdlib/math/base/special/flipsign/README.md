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

# Flipsign

> Return a [double-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `x*y`.

<section class="usage">

## Usage

```javascript
var flipsign = require( '@stdlib/math/base/special/flipsign' );
```

#### flipsign( x, y )

Returns a [double-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `x*y`; i.e., only return `-x` when `y` is a negative number.

```javascript
var z = flipsign( -3.14, 10.0 );
// returns -3.14

z = flipsign( -3.14, -1.0 );
// returns 3.14

z = flipsign( 1.0, -0.0 );
// returns -1.0

z = flipsign( -3.14, -0.0 );
// returns 3.14

z = flipsign( -0.0, 1.0 );
// returns -0.0

z = flipsign( 0.0, -1.0 );
// returns -0.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   According to the [IEEE 754][ieee754] standard, a `NaN` has a biased exponent equal to `2047`, a significand greater than `0`, and a sign bit equal to **either** `1` **or** `0`. In which case, `NaN` may not correspond to just one but many binary representations. Accordingly, care should be taken to ensure that `y` is **not** `NaN`, else behavior may be indeterminate.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var flipsign = require( '@stdlib/math/base/special/flipsign' );

var x;
var y;
var z;
var i;

// Generate random double-precision floating-point numbers `x` and `y` and flip the sign of `x` only if `y` is negative...
for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    y = (randu()*10.0) - 5.0;
    z = flipsign( x, y );
    console.log( 'x: %d, y: %d => %d', x, y, z );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
