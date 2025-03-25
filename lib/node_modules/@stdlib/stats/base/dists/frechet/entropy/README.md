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

> [Fréchet][frechet-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] for a [Fréchet][frechet-distribution] random variable shape `α > 0`, scale `s > 0`, and location parameter `m` is

<!-- <equation class="equation" label="eq:frechet_entropy" align="center" raw="h\left( X \right) = 1+{\frac{\gamma }{\alpha }}+\gamma +\ln \left({\frac{s}{\alpha }}\right)" alt="Differential entropy for a Fréchet distribution."> -->

```math
h\left( X \right) = 1+{\frac{\gamma }{\alpha }}+\gamma +\ln \left({\frac{s}{\alpha }}\right)
```

<!-- <div class="equation" align="center" data-raw-text="h\left( X \right) = 1+{\frac{\gamma }{\alpha }}+\gamma +\ln \left({\frac{s}{\alpha }}\right)" data-equation="eq:frechet_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/frechet/entropy/docs/img/equation_frechet_entropy.svg" alt="Differential entropy for a Fréchet distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `γ` is the [Euler–Mascheroni constant][euler-mascheroni].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/frechet/entropy' );
```

#### entropy( alpha, s, m )

Returns the [differential entropy][entropy] for a [Fréchet][frechet-distribution] distribution with shape `alpha > 0`, scale `s > 0`, and location parameter `m` (in [nats][nats]).

```javascript
var y = entropy( 2.0, 1.0, 1.0 );
// returns ~1.173

y = entropy( 1.0, 1.0, -1.0 );
// returns ~2.154

y = entropy( 1.0, 1.0, 2.0 );
// returns ~2.154
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = entropy( NaN, 1.0, -2.0 );
// returns NaN

y = entropy( 1.0, NaN, -2.0 );
// returns NaN

y = entropy( 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = entropy( 0.0, 3.0, 2.0 );
// returns NaN

y = entropy( 0.0, -1.0, 2.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = entropy( 1.0, 0.0, 2.0 );
// returns NaN

y = entropy( 1.0, -1.0, 2.0 );
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
var entropy = require( '@stdlib/stats/base/dists/frechet/entropy' );

var alpha;
var m;
var s;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*20.0 ) + EPS;
    s = ( randu()*20.0 ) + EPS;
    m = ( randu()*40.0 ) - 20.0;
    y = entropy( alpha, s, m );
    console.log( 'α: %d, s: %d, m: %d, h(X;α,s,m): %d', alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[euler-mascheroni]: https://en.wikipedia.org/wiki/Euler%E2%80%93Mascheroni_constant

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
