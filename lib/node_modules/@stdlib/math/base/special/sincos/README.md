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

# sincos

> Simultaneously compute the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of a number.

<section class="usage">

## Usage

```javascript
var sincos = require( '@stdlib/math/base/special/sincos' );
```

#### sincos( \[out,] x )

Simultaneously computes the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of a `number` (in radians).

```javascript
var v = sincos( 0.0 );
// returns [ ~0.0, ~1.0 ]

v = sincos( 3.141592653589793/2.0 );
// returns [ ~1.0, ~0.0 ]

v = sincos( -3.141592653589793/6.0 );
// returns [ ~-0.5, ~0.866 ]
```

By default, the function returns the sine and cosine as a two-element `array`. To avoid extra memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var v = sincos( out, 0.0 );
// returns <Float64Array>[ ~0.0, ~1.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/math/utils/linspace' );
var TWO_PI = require( '@stdlib/constants/math/float64-two-pi' );
var sincos = require( '@stdlib/math/base/special/sincos' );

var x = linspace( 0.0, TWO_PI, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( sincos( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/sin

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cos

</section>

<!-- /.links -->
