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

# incrmrange

> Compute a moving [range][range] incrementally.

<section class="intro">

The [**range**][range] is defined as the difference between the maximum and minimum values.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmrange = require( '@stdlib/stats/incr/mrange' );
```

#### incrmrange( window )

Returns an accumulator `function` which incrementally computes a moving [range][range]. The `window` parameter defines the number of values over which to compute the moving [range][range].

```javascript
var accumulator = incrmrange( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [range][range]. If not provided an input value `x`, the accumulator function returns the current [range][range].

```javascript
var accumulator = incrmrange( 3 );

var r = accumulator();
// returns null

// Fill the window...
r = accumulator( 2.0 ); // [2.0]
// returns 0.0

r = accumulator( 1.0 ); // [2.0, 1.0]
// returns 1.0

r = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 2.0

// Window begins sliding...
r = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns 10.0

r = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns 10.0

r = accumulator();
// returns 10.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmrange = require( '@stdlib/stats/incr/mrange' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmrange( 5 );

// For each simulated datum, update the moving range...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

[range]: https://en.wikipedia.org/wiki/Range_%28statistics%29

</section>

<!-- /.links -->
