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

# Haversine

> Compute the half-value [versed sine][versed-sine].

<section class="intro">

The half-value [versed sine][versed-sine] is defined as

<!-- <equation class="equation" label="eq:haversine" align="center" raw="\operatorname{haversin}(\theta) = \frac{1 - \cos \theta}{2}" alt="Haversed sine."> -->

<div class="equation" align="center" data-raw-text="\operatorname{haversin}(\theta) = \frac{1 - \cos \theta}{2}" data-equation="eq:haversine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@26abdafc2789332d3fcc28c36d4b22669a5fde03/lib/node_modules/@stdlib/math/base/special/haversin/docs/img/equation_haversine.svg" alt="Haversed sine.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var haversin = require( '@stdlib/math/base/special/haversin' );
```

#### haversin( x )

Computes the half-value [versed sine][versed-sine] (in radians).

```javascript
var v = haversin( 0.0 );
// returns 0.0

v = haversin( 3.141592653589793/2.0 );
// returns ~0.5

v = haversin( -3.141592653589793/6.0 );
// returns ~0.06699
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );
var haversin = require( '@stdlib/math/base/special/haversin' );

var x = linspace( 0.0, TWO_PI, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( haversin( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[versed-sine]: https://en.wikipedia.org/wiki/Versine

</section>

<!-- /.links -->
