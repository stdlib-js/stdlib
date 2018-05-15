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

# incrmidrange

> Compute a [mid-range][mid-range] incrementally.

<section class="intro">

The [**mid-range**][mid-range], or **mid-extreme**, is the arithmetic mean of maximum and minimum values. Accordingly, the [mid-range][mid-range] is the midpoint of the [range][range] and a measure of central tendency.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrmidrange = require( '@stdlib/stats/incr/midrange' );
```

#### incrmidrange()

Returns an accumulator `function` which incrementally computes a [mid-range][mid-range].

```javascript
var accumulator = incrmidrange();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [mid-range][mid-range]. If not provided an input value `x`, the accumulator function returns the current [mid-range][mid-range].

```javascript
var accumulator = incrmidrange();

var midrange = accumulator();
// returns null

midrange = accumulator( -2.0 );
// returns -2.0

midrange = accumulator( 1.0 );
// returns -0.5

midrange = accumulator( 3.0 );
// returns 0.5

midrange = accumulator();
// returns 0.5
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmidrange = require( '@stdlib/stats/incr/midrange' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmidrange();

// For each simulated datum, update the mid-range...
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

[mid-range]: https://en.wikipedia.org/wiki/Mid-range

</section>

<!-- /.links -->
