<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# incrnanmin

> Compute a minimum value incrementally, ignoring `NaN` values.

<section class="usage">

## Usage

```javascript
var incrnanmin = require( '@stdlib/stats/incr/nanmin' );
```

#### incrnanmin()

Returns an accumulator `function` which incrementally computes a minimum value, ignoring `NaN` values.

```javascript
var accumulator = incrnanmin();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated minimum value. If not provided an input value `x`, the accumulator function returns the current minimum value.

```javascript
var accumulator = incrnanmin();

var min = accumulator( 2.0 );
// returns 2.0

min = accumulator( 1.0 );
// returns 1.0

min = accumulator( NaN );
// returns 1.0

min = accumulator( 3.0 );
// returns 1.0

min = accumulator();
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   If all provided values are `NaN`, the accumulator returns `null`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```javascript
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var uniform = require( '@stdlib/random/base/uniform' );
var incrnanmin = require( '@stdlib/stats/incr/nanmin' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrnanmin();

// For each simulated datum, update the min...
for ( i = 0; i < 100; i++ ) {
    if ( bernoulli( 0.2 ) ) {
        v = NaN;
    } else {
        v = uniform( 0.0, 100.0 );
    }
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
