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

# asinh

> Compute the [hyperbolic arcsine][inverse-hyperbolic] of a number.

<section class="usage">

## Usage

```javascript
var asinh = require( '@stdlib/math/base/special/fast/asinh' );
```

#### asinh( x )

Computes the [hyperbolic arcsine][inverse-hyperbolic] of a `number` (in radians).

```javascript
var v = asinh( 0.0 );
// returns 0.0

v = asinh( -0.0 );
// returns -0.0

v = asinh( 2.0 );
// returns ~1.444

v = asinh( -2.0 );
// returns ~-1.444

v = asinh( NaN );
// returns NaN

v = asinh( -Infinity );
// returns -Infinity

v = asinh( Infinity );
// returns Infinity
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For large `x`, the function will overflow.

    ```javascript
    var v = asinh( 1.0e200 );
    // returns Infinity
    // (expected 461.2101657793691)
    ```

-   For small `x`, the function will underflow.

    ```javascript
    var v = asinh( 1.0e-50 );
    // returns 0.0
    // (expected 1.0e-50)
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var asinh = require( '@stdlib/math/base/special/fast/asinh' );

var x = linspace( -5.0, 5.0, 103 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( asinh( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[inverse-hyperbolic]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

</section>

<!-- /.links -->
