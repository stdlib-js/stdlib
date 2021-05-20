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

> Compute the [hyperbolic arcsine][hyperbolic-arcsine] of a number.

<section class="usage">

## Usage

```javascript
var asinh = require( '@stdlib/math/base/special/asinh' );
```

#### asinh( x )

Computes the [hyperbolic arcsine][hyperbolic-arcsine] of a `number` (in radians).

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

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var asinh = require( '@stdlib/math/base/special/asinh' );

var x = linspace( -5.0, 5.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( asinh( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[hyperbolic-arcsine]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

</section>

<!-- /.links -->
