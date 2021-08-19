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

# Vercosine

> Compute the [versed cosine][versed-cosine].

<section class="intro">

The [versed cosine][versed-cosine] is defined as

<!-- <equation class="equation" label="eq:vercosine" align="center" raw="\operatorname{vercos}(\theta) = 1 + \cos \theta" alt="Versed cosine."> -->

<div class="equation" align="center" data-raw-text="\operatorname{vercos}(\theta) = 1 + \cos \theta" data-equation="eq:vercosine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/vercos/docs/img/equation_vercosine.svg" alt="Versed cosine.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var vercos = require( '@stdlib/math/base/special/vercos' );
```

#### vercos( x )

Computes the [versed cosine][versed-cosine] of a `number` (in radians).

```javascript
var v = vercos( 0.0 );
// returns 2.0

v = vercos( 3.141592653589793/2.0 );
// returns 1.0

v = vercos( -3.141592653589793/6.0 );
// returns ~1.8660
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );
var vercos = require( '@stdlib/math/base/special/vercos' );

var x = linspace( 0.0, TWO_PI, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( vercos( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[versed-cosine]: https://en.wikipedia.org/wiki/Versine

</section>

<!-- /.links -->
