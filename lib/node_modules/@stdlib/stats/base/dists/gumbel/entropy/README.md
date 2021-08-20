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

> [Gumbel][gumbel-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] for a [gumbel][gumbel-distribution] random variable with location `μ` and scale `β` is

<!-- <equation class="equation" label="eq:gumbel_entropy" align="center" raw="h\left( X \right) = \ln(\beta )+\gamma+1" alt="Differential entropy for a gumbel distribution."> -->

<div class="equation" align="center" data-raw-text="h\left( X \right) = \ln(\beta )+\gamma+1" data-equation="eq:gumbel_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/gumbel/entropy/docs/img/equation_gumbel_entropy.svg" alt="Differential entropy for a gumbel distribution.">
    <br>
</div>

<!-- </equation> -->

where `γ` is the [Euler–Mascheroni constant][euler-mascheroni].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/gumbel/entropy' );
```

#### entropy( mu, beta )

Returns the [differential entropy][entropy] for a [Gumbel][gumbel-distribution] distribution with location parameter `mu` and scale parameter `beta` (in [nats][nats]).

```javascript
var y = entropy( 2.0, 1.0 );
// returns ~1.577

y = entropy( 0.0, 1.0 );
// returns ~1.577

y = entropy( -1.0, 4.0 );
// returns ~2.964
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = entropy( NaN, 1.0 );
// returns NaN

y = entropy( 0.0, NaN );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = entropy( 0.0, 0.0 );
// returns NaN

y = entropy( 0.0, -1.0 );
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
var entropy = require( '@stdlib/stats/base/dists/gumbel/entropy' );

var beta;
var mu;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = ( randu()*10.0 ) - 5.0;
    beta = randu() * 20.0;
    y = entropy( mu, beta );
    console.log( 'µ: %d, β: %d, h(X;µ,β): %d', mu.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
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

[euler-mascheroni]: https://en.wikipedia.org/wiki/Euler%E2%80%93Mascheroni_constant

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
