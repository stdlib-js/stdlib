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

# Arccoversine

> Compute the [inverse coversed sine][inverse-coversed-sine].

<section class="intro">

The [inverse coversed sine][inverse-coversed-sine] is defined as

<!-- <equation class="equation" label="eq:arccoversine" align="center" raw="\operatorname{acoversin}(\theta) = \arcsin(1-\theta)" alt="Inverse coversed sine."> -->

<div class="equation" align="center" data-raw-text="\operatorname{acoversin}(\theta) = \arcsin(1-\theta)" data-equation="eq:arccoversine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/acoversin/docs/img/equation_arccoversine.svg" alt="Inverse coversed sine.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var acoversin = require( '@stdlib/math/base/special/acoversin' );
```

#### acoversin( x )

Computes the [inverse coversed sine][inverse-coversed-sine].

```javascript
var v = acoversin( 0.0 );
// returns ~1.5708

v = acoversin( 3.141592653589793/2.0 );
// returns ~-0.6075

v = acoversin( 3.141592653589793/6.0 );
// returns ~0.4966
```

If `x < 0`, `x > 2`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = acoversin( -1.0 );
// returns NaN

v = acoversin( 3.14 );
// returns NaN

v = acoversin( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var acoversin = require( '@stdlib/math/base/special/acoversin' );

var x = linspace( 0.0, 2.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( acoversin( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[inverse-coversed-sine]: https://en.wikipedia.org/wiki/Versine

</section>

<!-- /.links -->
