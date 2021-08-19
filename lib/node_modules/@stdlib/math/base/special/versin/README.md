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

# Versine

> Compute the [versed sine][versed-sine].

<section class="intro">

The [versed sine][versed-sine] is defined as

<!-- <equation class="equation" label="eq:versine" align="center" raw="\operatorname{versin}(\theta) = 1 - \cos \theta" alt="Versed sine."> -->

<div class="equation" align="center" data-raw-text="\operatorname{versin}(\theta) = 1 - \cos \theta" data-equation="eq:versine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/versin/docs/img/equation_versine.svg" alt="Versed sine.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var versin = require( '@stdlib/math/base/special/versin' );
```

#### versin( x )

Computes the [versed sine][versed-sine] of a `number` (in radians).

```javascript
var v = versin( 0.0 );
// returns 0.0

v = versin( 3.141592653589793/2.0 );
// returns ~1.0

v = versin( -3.141592653589793/6.0 );
// returns ~0.13397
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );
var versin = require( '@stdlib/math/base/special/versin' );

var x = linspace( 0.0, TWO_PI, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( versin( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[versed-sine]: https://en.wikipedia.org/wiki/Versine

</section>

<!-- /.links -->
