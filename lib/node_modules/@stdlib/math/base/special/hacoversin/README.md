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

# Hacoversine

> Compute the half-value [coversed sine][coversed-sine].

<section class="intro">

The half-value [coversed sine][coversed-sine] is defined as

<!-- <equation class="equation" label="eq:hacoversine" align="center" raw="\operatorname{hacoversin}(\theta) = \frac{1 - \sin \theta}{2}" alt="Half-value coversed sine."> -->

<div class="equation" align="center" data-raw-text="\operatorname{hacoversin}(\theta) = \frac{1 - \sin \theta}{2}" data-equation="eq:hacoversine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/hacoversin/docs/img/equation_hacoversine.svg" alt="Half-value coversed sine.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var hacoversin = require( '@stdlib/math/base/special/hacoversin' );
```

#### hacoversin( x )

Computes the half-value [coversed sine][coversed-sine] (in radians).

```javascript
var v = hacoversin( 0.0 );
// returns 0.5

v = hacoversin( 3.141592653589793/2.0 );
// returns 0.0

v = hacoversin( -3.141592653589793/6.0 );
// returns 0.75
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );
var hacoversin = require( '@stdlib/math/base/special/hacoversin' );

var x = linspace( 0.0, TWO_PI, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( hacoversin( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[coversed-sine]: https://en.wikipedia.org/wiki/Versine

</section>

<!-- /.links -->
