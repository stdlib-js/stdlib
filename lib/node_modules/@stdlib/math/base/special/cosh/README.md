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

# cosh

> Compute the [hyperbolic cosine][hyperbolic-cosine] of a number.

<section class="usage">

## Usage

```javascript
var cosh = require( '@stdlib/math/base/special/cosh' );
```

#### cosh( x )

Computes the [hyperbolic cosine][hyperbolic-cosine] of a `number` (in radians).

```javascript
var v = cosh( 0.0 );
// returns 1.0

v = cosh( 2.0 );
// returns ~3.762

v = cosh( -2.0 );
// returns ~3.762

v = cosh( 710.0 );
// returns Infinity

v = cosh( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var cosh = require( '@stdlib/math/base/special/cosh' );

var x = linspace( -5.0, 5.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( cosh( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[hyperbolic-cosine]: http://mathworld.wolfram.com/HyperbolicCosine.html

</section>

<!-- /.links -->
