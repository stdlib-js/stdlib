<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# Cumulative Distribution Function

> [Studentized range][studentized-range] distribution [cumulative distribution function][cdf] (CDF).

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/studentized-range/cdf' );
```

#### cdf( x, r, v\[, nranges=1] )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [studentized range][studentized-range] distribution with sample size `r` and `v` degrees of freedom. Optionally, the number of groups whose maximum range is considered can be specified via the `nranges` parameter.

```javascript
var y = cdf( 0.5, 3.0, 2.0 );
// returns ~0.0644

y = cdf( 12.1, 17.0, 2.0 );
// returns ~0.913

y = cdf( 0.5, 3.0, 2.0, 2 );
// returns ~0.01
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 2.0, 2.0 );
// returns NaN

y = cdf( 1.5, NaN, 2.0 );
// returns NaN
```

If provided `v < 2` or `r < 2`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0, 3.0 );
// returns NaN

y = cdf( 2.0, 3.0, 1.5 );
// returns NaN
```

#### cdf.factory( r, v\[, nranges=1] )

Returns a `function` for evaluating the [cdf][cdf] of a [studentized range][studentized-range] distribution with sample size `r` and `v` degrees of freedom. Optionally. Optionally, the number of groups whose maximum range is considered can be specified via the `nranges` parameter.

```javascript
var mycdf = cdf.factory( 3.0, 2.0 );
var y = mycdf( 3.0 );
// returns ~0.712

y = mycdf( 1.0 );
// returns ~0.216
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/studentized-range/cdf' );

var v;
var q;
var r;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    q = randu() * 12.0;
    r = ( randu() * 20.0 ) + 2.0;
    v = ( randu() * 10.0 ) + 2.0;
    y = cdf( q, r, v );
    console.log( 'q: %d, r: %d, v: %d, F(x;v): %d', q.toFixed( 4 ), r.toFixed( 4 ), v.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[studentized-range]: https://en.wikipedia.org/wiki/Studentized_range_distribution

</section>

<!-- /.links -->
