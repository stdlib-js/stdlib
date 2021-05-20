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

# acos

> Compute the [arccosine][arccosine] of a number.

<section class="usage">

## Usage

```javascript
var acos = require( '@stdlib/math/base/special/acos' );
```

#### acos( x )

Computes the [arccosine][arccosine] of a `number` (in radians).

```javascript
var v = acos( 1.0 );
// returns 0.0

v = acos( 0.707 ); // ~pi/4
// returns ~0.7855

v = acos( 0.866 ); // ~pi/6
// returns ~0.5236

v = acos( NaN );
// returns NaN
```

The domain of `x` is restricted to `[-1,1]`. If `|x| > 1`, the function returns `NaN`.

```javascript
var v = acos( -3.14 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var acos = require( '@stdlib/math/base/special/acos' );

var x = linspace( -1.0, 1.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( acos( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[arccosine]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

</section>

<!-- /.links -->
