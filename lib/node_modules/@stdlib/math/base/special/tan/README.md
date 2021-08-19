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

# Tangent

> Evaluate the [tangent][tangent] of a number.

<section class="intro">

The [tangent][tangent] is defined as

<!-- <equation class="equation" label="eq:tangent" align="center" raw="\tan x = \frac{\sin x}{\cos x}" alt="Tangent definition."> -->

<div class="equation" align="center" data-raw-text="\tan x = \frac{\sin x}{\cos x}" data-equation="eq:tangent">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/tan/docs/img/equation_tangent.svg" alt="Tangent definition.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var tan = require( '@stdlib/math/base/special/tan' );
```

#### tan( x )

Evaluates the [tangent][tangent] of a `number` (in radians).

```javascript
var v = tan( 0.0 );
// returns ~0.0

v = tan( -3.141592653589793/4.0 );
// returns ~-1.0

v = tan( 3.141592653589793/4.0 );
// returns ~1.0

v = tan( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var PI = require( '@stdlib/constants/float64/pi' );
var tan = require( '@stdlib/math/base/special/tan' );

var x = linspace( -PI/2.0, PI/2.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( tan( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[tangent]: http://mathworld.wolfram.com/Tangent.html

</section>

<!-- /.links -->
