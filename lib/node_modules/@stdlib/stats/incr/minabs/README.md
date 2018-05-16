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

# incrminabs

> Compute a minimum absolute value incrementally.

<section class="usage">

## Usage

```javascript
var incrminabs = require( '@stdlib/stats/incr/minabs' );
```

#### incrminabs()

Returns an accumulator `function` which incrementally computes a minimum absolute value.

```javascript
var accumulator = incrminabs();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated minimum absolute value. If not provided an input value `x`, the accumulator function returns the current minimum absolute value.

```javascript
var accumulator = incrminabs();

var min = accumulator( 2.0 );
// returns 2.0

min = accumulator( 1.0 );
// returns 1.0

min = accumulator( -3.0 );
// returns 1.0

min = accumulator();
// returns 1.0
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
var incrminabs = require( '@stdlib/stats/incr/minabs' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrminabs();

// For each simulated datum, update the minimum absolute value...
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
