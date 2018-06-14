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

# incrminmax

> Compute a minimum and maximum incrementally.

<section class="usage">

## Usage

```javascript
var incrminmax = require( '@stdlib/stats/incr/minmax' );
```

#### incrminmax( \[out] )

Returns an accumulator `function` which incrementally computes a minimum and maximum.

```javascript
var accumulator = incrminmax();
```

By default, the returned accumulator `function` returns the minimum and maximum as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var accumulator = incrminmax( new Float64Array( 2 ) );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns updated minimum and maximum values. If not provided an input value `x`, the accumulator function returns the current minimum and maximum values.

```javascript
var accumulator = incrminmax();

var mm = accumulator();
// returns null

mm = accumulator( 2.0 );
// returns [ 2.0, 2.0 ]

mm = accumulator( 1.0 );
// returns [ 1.0, 2.0 ]

mm = accumulator( 3.0 );
// returns [ 1.0, 3.0 ]

mm = accumulator( -7.0 );
// returns [ -7.0, 3.0 ]

mm = accumulator( -5.0 );
// returns [ -7.0, 3.0 ]

mm = accumulator();
// returns [ -7.0, 3.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated values are equal to `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var incrminmax = require( '@stdlib/stats/incr/minmax' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrminmax();

// For each simulated datum, update the minimum and maximum...
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
