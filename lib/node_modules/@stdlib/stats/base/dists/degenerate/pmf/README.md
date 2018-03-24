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

# Probability Mass Function

> [Degenerate distribution][degenerate-distribution] [probability mass function][pmf] (PMF).

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pmf = require( '@stdlib/stats/base/dists/degenerate/pmf' );
```

#### pmf( x, mu )

Evaluates the [PMF][pmf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = pmf( 2.0, 8.0 );
// returns 0.0

y = pmf( 8.0, 8.0 );
// returns 1.0
```

#### pmf.factory( mu )

Returns a function for evaluating the [PMF][pmf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var mypmf = pmf.factory( 10.0 );

var y = mypmf( 10.0 );
// returns 1.0

y = mypmf( 5.0 );
// returns 0.0

y = mypmf( 12.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pmf = require( '@stdlib/stats/base/dists/degenerate/pmf' );

var mu;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*5.0 );
    mu = round( randu()*5.0 );
    y = pmf( x, mu );
    console.log( 'x: %d, µ: %d, P(X=x;µ): %d', x, mu, y );
}
```

</section>

<!-- /.examples -->

<section class="links">

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
