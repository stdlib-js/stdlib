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

# incrmminabs

> Compute a moving minimum absolute value incrementally.

<section class="usage">

## Usage

```javascript
var incrmminabs = require( '@stdlib/stats/incr/mminabs' );
```

#### incrmminabs( window )

Returns an accumulator `function` which incrementally computes a moving minimum absolute value. The `window` parameter defines the number of values over which to compute the moving minimum absolute value.

```javascript
var accumulator = incrmminabs( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated minimum absolute value. If not provided an input value `x`, the accumulator function returns the current minimum absolute value.

```javascript
var accumulator = incrmminabs( 3 );

var m = accumulator();
// returns null

// Fill the window...
m = accumulator( 2.0 ); // [2.0]
// returns 2.0

m = accumulator( 1.0 ); // [2.0, 1.0]
// returns 1.0

m = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 1.0

// Window begins sliding...
m = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns 1.0

m = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns 3.0

m = accumulator();
// returns 3.0
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
var incrmminabs = require( '@stdlib/stats/incr/mminabs' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmminabs( 5 );

// For each simulated datum, update the moving minimum absolute value...
for ( i = 0; i < 100; i++ ) {
    v = ( randu()*100.0 ) - 50.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
