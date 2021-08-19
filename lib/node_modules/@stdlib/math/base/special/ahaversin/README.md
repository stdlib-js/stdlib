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

# Archaversine

> Compute the [inverse half-value versed sine][archaversine].

<section class="intro">

The [inverse half-value versed sine][archaversine] is defined as

<!-- <equation class="equation" label="eq:archaversine" align="center" raw="\operatorname{ahaversin}(\theta) = 2 \cdot \arcsin(\sqrt{\theta})" alt="Inverse half-value versed sine."> -->

<div class="equation" align="center" data-raw-text="\operatorname{ahaversin}(\theta) = 2 \cdot \arcsin(\sqrt{\theta})" data-equation="eq:archaversine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/ahaversin/docs/img/equation_archaversine.svg" alt="Inverse half-value versed sine.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ahaversin = require( '@stdlib/math/base/special/ahaversin' );
```

#### ahaversin( x )

Computes the [inverse half-value versed sine][archaversine].

```javascript
var v = ahaversin( 0.0 );
// returns 0.0

v = ahaversin( 1.0 );
// returns ~3.1416

v = ahaversin( 0.5 );
// returns ~1.5708
```

If `x < 0`, `x > 1`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = ahaversin( 1.5 );
// returns NaN

v = ahaversin( -3.14 );
// returns NaN

v = ahaversin( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var ahaversin = require( '@stdlib/math/base/special/ahaversin' );

var x = linspace( 0.0, 1.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( ahaversin( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[archaversine]: https://en.wikipedia.org/wiki/Versine

</section>

<!-- /.links -->
