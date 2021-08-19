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

# Archavercosine

> Compute the [inverse half-value versed cosine][archavercosine].

<section class="intro">

The [inverse half-value versed cosine][archavercosine] is defined as

<!-- <equation class="equation" label="eq:archavercosine" align="center" raw="\operatorname{ahavercos}(\theta) = 2 \cdot \arccos(\sqrt{\theta})" alt="Inverse half-value versed cosine."> -->

<div class="equation" align="center" data-raw-text="\operatorname{ahavercos}(\theta) = 2 \cdot \arccos(\sqrt{\theta})" data-equation="eq:archavercosine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/ahavercos/docs/img/equation_archavercosine.svg" alt="Inverse half-value versed cosine.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ahavercos = require( '@stdlib/math/base/special/ahavercos' );
```

#### ahavercos( x )

Computes the [inverse half-value versed cosine][archavercosine].

```javascript
var v = ahavercos( 0.0 );
// returns ~3.1416

v = ahavercos( 1.0 );
// returns 0.0

v = ahavercos( 0.5 );
// returns ~1.5708
```

If `x < 0`, `x > 1`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = ahavercos( 1.5 );
// returns NaN

v = ahavercos( -3.14 );
// returns NaN

v = ahavercos( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var ahavercos = require( '@stdlib/math/base/special/ahavercos' );

var x = linspace( 0.0, 1.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( ahavercos( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[archavercosine]: https://en.wikipedia.org/wiki/Versine

</section>

<!-- /.links -->
