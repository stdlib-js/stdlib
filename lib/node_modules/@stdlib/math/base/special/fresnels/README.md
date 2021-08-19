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

# fresnels

> Compute the [Fresnel integral][fresnel-integral] S(x).

<section class="intro">

The [Fresnel integral][fresnel-integral] S(x) is defined as

<!-- <equation class="equation" label="eq:fresnel_integral" align="center" raw="S(x) = \int_0^x \sin\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t." alt="Fresnel integral S(x)"> -->

<div class="equation" align="center" data-raw-text="S(x) = \int_0^x \sin\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t." data-equation="eq:fresnel_integral">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/fresnels/docs/img/equation_fresnel_integral.svg" alt="Fresnel integral S(x)">
    <br>
</div>

<!-- </equation> -->

Some sources define S(x) using t<sup>2</sup> for the argument of the sine. To get this function, multiply the computed integral by `√(π/2)` and multiply the argument `x` by `√(2/π)`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fresnels = require( '@stdlib/math/base/special/fresnels' );
```

#### fresnels( x )

Computes the [Fresnel integral][fresnel-integral] S(x).

```javascript
var v = fresnels( 0.0 );
// returns ~0.0

v = fresnels( 1.0 );
// returns ~0.438

v = fresnels( Infinity );
// returns ~0.5

v = fresnels( -Infinity );
// returns ~-0.5

v = fresnels( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var fresnels = require( '@stdlib/math/base/special/fresnels' );

var x = linspace( 0.0, 10.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( fresnels( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[fresnel-integral]: https://en.wikipedia.org/wiki/Fresnel_integral

</section>

<!-- /.links -->
