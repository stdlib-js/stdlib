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

# Mode

> [Triangular][triangular-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a [triangular][triangular-distribution] random variable with lower limit `a`, upper limit `b`, and mode `c` is

<!-- <equation class="equation" label="eq:triangular_mode" align="center" raw="\operatorname{mode}\left( X \right) = c" alt="Mode for a triangular distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{mode}\left( X \right) = c" data-equation="eq:triangular_mode">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/triangular/mode/docs/img/equation_triangular_mode.svg" alt="Mode for a triangular distribution.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mode = require( '@stdlib/stats/base/dists/triangular/mode' );
```

#### mode( a, b, c )

Returns the [mode][mode] of a [triangular][triangular-distribution] distribution with parameters `a` (minimum support), `b` (maximum support), and `c` (mode).

```javascript
var v = mode( 0.0, 1.0, 0.8 );
// returns 0.8

v = mode( 4.0, 12.0, 5.0 );
// returns 5.0

v = mode( 2.0, 8.0, 5.0 );
// returns 5.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = mode( NaN, 4.0, 2.0 );
// returns NaN

v = mode( 0.0, NaN, 2.0 );
// returns NaN

v = mode( 0.0, 4.0, NaN );
// returns NaN
```

If provided parameters not satisfying `a <= c <= b`, the function returns `NaN`.

```javascript
var y = mode( 1.0, 0.0, 1.5 );
// returns NaN

y = mode( 0.0, 1.0, -1.0 );
// returns NaN

y = mode( 0.0, -1.0, 0.5 );
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
var mode = require( '@stdlib/stats/base/dists/triangular/mode' );

var a;
var b;
var c;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    a = ( randu()*10.0 );
    b = ( randu()*10.0 ) + a;
    c = ( randu()*( b-a ) ) + a;
    v = mode( a, b, c );
    console.log( 'a: %d, b: %d, c: %d, mode(X;a,b,c): %d', a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), v.toFixed( 4 ) );
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

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->
