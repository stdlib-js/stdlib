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

# incrmeanstdev

> Compute an [arithmetic mean][arithmetic-mean] and a [corrected sample standard deviation][sample-stdev] incrementally.

<section class="intro">

The [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the arithmetic mean."> -->

<div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5ca648efa8739942a21b07ad7df1947cdd01b662/lib/node_modules/@stdlib/stats/incr/meanstdev/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div>

<!-- </equation> -->

and the [corrected sample standard deviation][sample-stdev] is defined as

<!-- <equation class="equation" label="eq:corrected_sample_standard_deviation" align="center" raw="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}" alt="Equation for the corrected sample standard deviation."> -->

<div class="equation" align="center" data-raw-text="s = \sqrt{\frac{1}{n-1} \sum_{i=0}^{n-1} ( x_i - \bar{x} )^2}" data-equation="eq:corrected_sample_standard_deviation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5ca648efa8739942a21b07ad7df1947cdd01b662/lib/node_modules/@stdlib/stats/incr/meanstdev/docs/img/equation_corrected_sample_standard_deviation.svg" alt="Equation for the corrected sample standard deviation.">
    <br>
</div>

<!-- </equation> -->

<section class="usage">

## Usage

```javascript
var incrmeanstdev = require( '@stdlib/stats/incr/meanstdev' );
```

#### incrmeanstdev( \[out] )

Returns an accumulator `function` which incrementally computes an [arithmetic mean][arithmetic-mean] and [corrected sample standard deviation][sample-stdev].

```javascript
var accumulator = incrmeanstdev();
```

By default, the returned accumulator `function` returns the accumulated values as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var accumulator = incrmeanstdev( new Float64Array( 2 ) );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns updated accumulated values. If not provided an input value `x`, the accumulator function returns the current accumulated values.

```javascript
var accumulator = incrmeanstdev();

var ms = accumulator();
// returns null

ms = accumulator( 2.0 );
// returns [ 2.0, 0.0 ]

ms = accumulator( 1.0 );
// returns [ 1.5, ~0.71 ]

ms = accumulator( 3.0 );
// returns [ 2.0, 1.0 ]

ms = accumulator( -7.0 );
// returns [ -0.25, ~4.57 ]

ms = accumulator( -5.0 );
// returns [ -1.2, ~4.49 ]

ms = accumulator();
// returns [ -1.2, ~4.49 ]
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
var Float64Array = require( '@stdlib/array/float64' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var incrmeanstdev = require( '@stdlib/stats/incr/meanstdev' );

var offset;
var acc;
var buf;
var out;
var ms;
var N;
var v;
var i;
var j;

// Define the number of accumulators:
N = 5;

// Create an array buffer for storing accumulator output:
buf = new ArrayBuffer( N*2*8 ); // 8 bytes per element

// Initialize accumulators:
acc = [];
for ( i = 0; i < N; i++ ) {
    // Compute the byte offset:
    offset = i * 2 * 8; // stride=2, bytes_per_element=8

    // Create a new view for storing accumulated values:
    out = new Float64Array( buf, offset, 2 );

    // Initialize an accumulator which will write results to the view:
    acc.push( incrmeanstdev( out ) );
}

// Simulate data and update the sample means and standard deviations...
for ( i = 0; i < 100; i++ ) {
    for ( j = 0; j < N; j++ ) {
        v = randu() * 100.0 * (j+1);
        acc[ j ]( v );
    }
}

// Print the final results:
console.log( 'Mean\tStDev' );
for ( i = 0; i < N; i++ ) {
    ms = acc[ i ]();
    console.log( '%d\t%d', ms[ 0 ].toFixed( 3 ), ms[ 1 ].toFixed( 3 ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[sample-stdev]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
