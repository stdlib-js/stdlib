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

# rempio2

> Compute `x - nπ/2 = r`.

<section class="usage">

## Usage

```javascript
var rempio2 = require( '@stdlib/math/base/special/rempio2' );
```

#### rempio2( x, y )

Computes `x - nπ/2 = r`. The function returns `n` and stores the remainder `r` as two numbers in `y`, such that `y[0]+y[1] = r`.

```javascript
var y = [ 0.0, 0.0 ];
var n = rempio2( 128.0, y );
// returns 81

var y1 = y[ 0 ];
// returns ~0.765

var y2 = y[ 1 ];
// returns ~3.618e-17
```

When `x` is `NaN` or infinite, the function returns zero and sets the elements of `y` to `NaN`.

```javascript
var y = [ 0.0, 0.0 ];
var n = rempio2( NaN, y );
// returns 0

var y1 = y[ 0 ];
// returns NaN

var y2 = y[ 1 ];
// returns NaN

y = [ 0.0, 0.0 ];
n = rempio2( Infinity, y );
// returns 0

y1 = y[ 0 ];
// returns NaN

y2 = y[ 1 ];
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For input values larger than `2^20*π/2` in magnitude, the function **only** returns the last three binary digits of `n` and not the full result.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var rempio2 = require( '@stdlib/math/base/special/rempio2' );

var x = linspace( 0.0, 100.0, 100 );
var y = [ 0.0, 0.0 ];
var n;
var i;

for ( i = 0; i < x.length; i++ ) {
    n = rempio2( x[ i ], y );
    console.log( '%d - %dπ/2 = %d + %d', x[ i ], n, y[ 0 ], y[ 1 ] );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
