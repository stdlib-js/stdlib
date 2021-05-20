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

# atan

> Compute the [arctangent][arctangent] of a number.

<section class="usage">

## Usage

```javascript
var atan = require( '@stdlib/math/base/special/atan' );
```

#### atan( x )

Computes the [arctangent][arctangent] of a `number`.

```javascript
var v = atan( 0.0 );
// returns ~0.0

v = atan( -3.141592653589793/2.0 );
// returns ~-1.004

v = atan( 3.141592653589793/2.0 );
// returns ~1.004

v = atan( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var atan = require( '@stdlib/math/base/special/atan' );

var x = linspace( -1000.0, 1000.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( atan( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[arctangent]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

</section>

<!-- /.links -->
