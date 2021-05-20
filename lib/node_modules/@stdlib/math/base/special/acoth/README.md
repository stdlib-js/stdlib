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

# acoth

> Compute the [inverse hyperbolic cotangent][hyperbolic-arctangent] of a number.

<section class="usage">

## Usage

```javascript
var acoth = require( '@stdlib/math/base/special/acoth' );
```

#### acoth( x )

Computes the [inverse hyperbolic cotangent][hyperbolic-arctangent] of a `number` (in radians).

```javascript
var v = acoth( 2.0 );
// returns ~0.5493

v = acoth( 1.0 );
// returns Infinity
```

The domain of the inverse hyperbolic cotangent is the union of the intervals `(-inf,-1]` and `[1,inf)`. If provided a value on the open interval `(-1,1)`, the function returns `NaN`.

```javascript
var v = acoth( 0.0 );
// returns NaN

v = acoth( 0.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var acoth = require( '@stdlib/math/base/special/acoth' );

var x = linspace( 1.0, 5.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( acoth( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[hyperbolic-arctangent]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

</section>

<!-- /.links -->
