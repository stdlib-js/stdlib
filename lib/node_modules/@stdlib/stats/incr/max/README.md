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

# incrmax

> Compute a maximum value incrementally.

<section class="usage">

## Usage

```javascript
var incrmax = require( '@stdlib/stats/incr/max' );
```

#### incrmax()

Returns an accumulator `function` which incrementally computes a maximum value.

```javascript
var accumulator = incrmax();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated maximum value. If not provided an input value `x`, the accumulator function returns the current maximum value.

```javascript
var accumulator = incrmax();

var max = accumulator( 2.0 );
// returns 2.0

max = accumulator( 1.0 );
// returns 2.0

max = accumulator( 3.0 );
// returns 3.0

max = accumulator();
// returns 3.0
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
var incrmax = require( '@stdlib/stats/incr/max' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmax();

// For each simulated datum, update the max...
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
