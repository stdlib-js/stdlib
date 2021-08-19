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

# Arcvercosine

> Compute the [inverse versed cosine][inverse-versed-cosine].

<section class="intro">

The [inverse versed cosine][inverse-versed-cosine] is defined as

<!-- <equation class="equation" label="eq:arcvercosine" align="center" raw="\operatorname{avercos}(\theta) = \arccos(1+\theta)" alt="Inverse versed cosine."> -->

<div class="equation" align="center" data-raw-text="\operatorname{avercos}(\theta) = \arccos(1+\theta)" data-equation="eq:arcvercosine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/avercos/docs/img/equation_arcvercosine.svg" alt="Inverse versed cosine.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var avercos = require( '@stdlib/math/base/special/avercos' );
```

#### avercos( x )

Computes the [inverse versed cosine][inverse-versed-cosine].

```javascript
var v = avercos( 0.0 );
// returns 0.0

v = avercos( -3.141592653589793/2.0 );
// returns ~2.1783

v = avercos( -3.141592653589793/6.0 );
// returns ~1.0742
```

If `x < -2`, `x > 0`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = avercos( 1.0 );
// returns NaN

v = avercos( -3.14 );
// returns NaN

v = avercos( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var avercos = require( '@stdlib/math/base/special/avercos' );

var x = linspace( -2.0, 0.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( avercos( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[inverse-versed-cosine]: https://en.wikipedia.org/wiki/Versine

</section>

<!-- /.links -->
