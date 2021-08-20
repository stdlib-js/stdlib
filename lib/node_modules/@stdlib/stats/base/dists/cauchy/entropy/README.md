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

# Entropy

> [Cauchy][cauchy-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] for a [Cauchy][cauchy-distribution] random variable with location parameter `x0` and scale parameter `Ɣ > 0` is

<!-- <equation class="equation" label="eq:cauchy_entropy" align="center" raw="h\left( X \right) = \log(\gamma)\,+\,\log(4\,\pi)" alt="Differential entropy for a Cauchy distribution."> -->

<div class="equation" align="center" data-raw-text="h\left( X \right) = \log(\gamma)\,+\,\log(4\,\pi)" data-equation="eq:cauchy_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/cauchy/entropy/docs/img/equation_cauchy_entropy.svg" alt="Differential entropy for a Cauchy distribution.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/cauchy/entropy' );
```

#### entropy( x0, gamma )

Returns the [differential entropy][entropy] of a [Cauchy][cauchy-distribution] distribution with location parameter `x0` and scale parameter `gamma` (in [nats][nats]).

```javascript
var v = entropy( 10.0, 5.0 );
// returns ~4.14

v = entropy( 7.0, 2.0 );
// returns ~3.224
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = entropy( NaN, 5.0 );
// returns NaN

v = entropy( 20.0, NaN );
// returns NaN
```

If provided `gamma <= 0`, the function returns `NaN`.

```javascript
var v = entropy( 1.0, -1.0 );
// returns NaN

v = entropy( 1.0, 0.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var entropy = require( '@stdlib/stats/base/dists/cauchy/entropy' );

var gamma;
var x0;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    x0 = randu() * 100.0;
    gamma = ( randu()*10.0 ) + EPS;
    v = entropy( x0, gamma );
    console.log( 'x0: %d, γ: %d, h(X;x0,γ): %d', x0.toFixed( 4 ), gamma.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cauchy-distribution]: https://en.wikipedia.org/wiki/Cauchy_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
