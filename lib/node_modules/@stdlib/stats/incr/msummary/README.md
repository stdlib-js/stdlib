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

# incrmsummary

> Compute a moving statistical summary incrementally.

<section class="usage">

## Usage

```javascript
var incrmsummary = require( '@stdlib/stats/incr/msummary' );
```

#### incrmsummary( window )

Returns an accumulator `function` which incrementally computes a moving statistical summary. The `window` parameter defines the number of values over which to compute the moving summary.

```javascript
var accumulator = incrmsummary( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated summary. If not provided an input value `x`, the accumulator function returns the current summary.

```javascript
var accumulator = incrmsummary( 3 );

var summary = accumulator();
// returns {}

// Fill the window...
summary = accumulator( 2.0 ); // [2.0]
/* returns
    {
        'window': 3,
        'sum': 2.0,
        'mean': 2.0,
        'variance': 0.0,
        'stdev': 0.0,
        'min': 2.0,
        'max': 2.0,
        'range': 0.0,
        'midrange': 2.0
    }
*/

summary = accumulator( 1.0 ); // [2.0, 1.0]
/* returns
    {
        'window': 3,
        'sum': 3.0,
        'mean': 1.5,
        'variance': 0.5,
        'stdev': 0.7071067811865476,
        'min': 1.0,
        'max': 2.0,
        'range': 1.0,
        'midrange': 1.5
    }
*/

summary = accumulator( -3.0 ); // [2.0, 1.0, -3.0]
/* returns
    {
        'window': 3,
        'sum': 0.0,
        'mean': 0.0,
        'variance': 7.0,
        'stdev': 2.6457513110645907,
        'min': -3.0,
        'max': 2.0,
        'range': 5.0,
        'midrange': -0.5
    }
*/

// Window begins sliding...
summary = accumulator( -7.0 ); // [1.0, -3.0, -7.0]
// returns {...}

summary = accumulator( -5.0 ); // [-3.0, -7.0, -5.0]
// returns {...}

summary = accumulator();
// returns {...}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned summaries are calculated from smaller sample sizes. Until the window is full, each returned summary is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrmsummary = require( '@stdlib/stats/incr/msummary' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmsummary( 5 );

// For each simulated datum, update the moving summary...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
