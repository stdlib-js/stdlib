<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# acot

> Compute the [inverse cotangent][arccotangent] of a number.

<section class="usage">

## Usage

```javascript
var acot = require( '@stdlib/math/base/special/acot' );
```

#### acot( x )

Computes the [inverse cotangent][arccotangent] of a `number` (in radians).

```javascript
var v = acot( 2.0 );
// returns ~0.4636

v = acot( Infinity );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var acot = require( '@stdlib/math/base/special/acot' );

var x = linspace( -5.0, 5.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( acot( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[arccotangent]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

</section>

<!-- /.links -->
