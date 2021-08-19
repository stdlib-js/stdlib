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

# Arcversine

> Compute the [inverse versed sine][inverse-versed-sine].

<section class="intro">

The [inverse versed sine][inverse-versed-sine] is defined as

<!-- <equation class="equation" label="eq:arcversine" align="center" raw="\operatorname{aversin}(\theta) = \arccos(1-\theta)" alt="Inverse versed sine."> -->

<div class="equation" align="center" data-raw-text="\operatorname{aversin}(\theta) = \arccos(1-\theta)" data-equation="eq:arcversine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/aversin/docs/img/equation_arcversine.svg" alt="Inverse versed sine.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var aversin = require( '@stdlib/math/base/special/aversin' );
```

#### aversin( x )

Computes the [inverse versed sine][inverse-versed-sine].

```javascript
var v = aversin( 0.0 );
// returns 0.0

v = aversin( 3.141592653589793/2.0 );
// returns ~2.1783

v = aversin( 3.141592653589793/6.0 );
// returns ~1.0742
```

If `x < 0`, `x > 2`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = aversin( -1.0 );
// returns NaN

v = aversin( 3.14 );
// returns NaN

v = aversin( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var aversin = require( '@stdlib/math/base/special/aversin' );

var x = linspace( 0.0, 2.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( aversin( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[inverse-versed-sine]: https://en.wikipedia.org/wiki/Versine

</section>

<!-- /.links -->
