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

> [Lévy][levy-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [Lévy][levy-distribution] random variable with location `μ` and scale `c > 0` is

<!-- <equation class="equation" label="eq:levy_entropy" align="center" raw="h\left( X \right) = \frac{1+3\gamma+\ln(16\pi c^2)}{2}" alt="Differential entropy for a Lévy distribution."> -->

<div class="equation" align="center" data-raw-text="h\left( X \right) = \frac{1+3\gamma+\ln(16\pi c^2)}{2}" data-equation="eq:levy_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/levy/entropy/docs/img/equation_levy_entropy.svg" alt="Differential entropy for a Lévy distribution.">
    <br>
</div>

<!-- </equation> -->

where `γ` is the [Euler-Mascheroni constants][euler-mascheroni].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/levy/entropy' );
```

#### entropy( mu, c )

Returns the [differential entropy][entropy] for a [Lévy][levy-distribution] distribution with location parameter `mu` and scale parameter `c` (in [nats][nats]).

```javascript
var y = entropy( 2.0, 1.0 );
// returns ~3.324

y = entropy( 0.0, 1.0 );
// returns ~3.324

y = entropy( -1.0, 4.0 );
// returns ~4.711
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = entropy( NaN, 1.0 );
// returns NaN

y = entropy( 0.0, NaN );
// returns NaN
```

If provided `c <= 0`, the function returns `NaN`.

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
var entropy = require( '@stdlib/stats/base/dists/levy/entropy' );

var mu;
var c;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    mu = ( randu()*10.0 ) - 5.0;
    c = randu() * 20.0;
    y = entropy( mu, c );
    console.log( 'µ: %d, c: %d, h(X;µ,c): %d', mu.toFixed( 4 ), c.toFixed( 4 ), y.toFixed( 4 ) );
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

[levy-distribution]: https://en.wikipedia.org/wiki/L%C3%A9vy_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[euler-mascheroni]: https://en.wikipedia.org/wiki/Euler%E2%80%93Mascheroni_constant

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
