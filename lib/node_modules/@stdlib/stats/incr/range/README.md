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

# incrrange

> Compute a [range][range] incrementally.

<section class="intro">

The [**range**][range] is defined as the difference between the maximum and minimum values.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var incrrange = require( '@stdlib/stats/incr/range' );
```

#### incrrange()

Returns an accumulator `function` which incrementally computes a [range][range].

```javascript
var accumulator = incrrange();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated [range][range]. If not provided an input value `x`, the accumulator function returns the current [range][range].

```javascript
var accumulator = incrrange();

var range = accumulator( -2.0 );
// returns 0.0

range = accumulator( 1.0 );
// returns 3.0

range = accumulator( 3.0 );
// returns 5.0

range = accumulator();
// returns 5.0
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
var incrrange = require( '@stdlib/stats/incr/range' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrrange();

// For each simulated datum, update the range...
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
