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

# dmeanli

> Compute the [arithmetic mean][arithmetic-mean] of a one-dimensional double-precision floating-point ndarray using a one-pass trial mean algorithm.

<section class="intro">

The [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the arithmetic mean."> -->

```math
\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@42d8f64d805113ab899c79c7c39d6c6bac7fe25c/lib/node_modules/@stdlib/stats/base/ndarray/mean/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dmeanli = require( '@stdlib/stats/base/ndarray/dmeanli' );
```

#### dmeanli( arrays )

Computes the [arithmetic mean][arithmetic-mean] of a one-dimensional double-precision floating-point ndarray using a one-pass trial mean algorithm.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var v = dmeanli( [ x ] );
// returns 2.5
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional ndarray, the function returns `NaN`.
-   The underlying algorithm is a specialized case of Welford's algorithm. Similar to the method of assumed mean, the first ndarray element is used as a trial mean. The trial mean is subtracted from subsequent data values, and the average deviations used to adjust the initial guess. Accordingly, the algorithm's accuracy is best when data is **unordered** (i.e., the data is **not** sorted in either ascending or descending order such that the first value is an "extreme" value).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dmeanli = require( '@stdlib/stats/base/ndarray/dmeanli' );

var xbuf = discreteUniform( 10, -50, 50, {
    'dtype': 'float64'
});
var x = new ndarray( 'float64', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var v = dmeanli( [ x ] );
console.log( v );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Welford, B. P. 1962. "Note on a Method for Calculating Corrected Sums of Squares and Products." _Technometrics_ 4 (3). Taylor & Francis: 419–20. doi:[10.1080/00401706.1962.10490022][@welford:1962a].
-   van Reeken, A. J. 1968. "Letters to the Editor: Dealing with Neely's Algorithms." _Communications of the ACM_ 11 (3): 149–50. doi:[10.1145/362929.362961][@vanreeken:1968a].
-   Ling, Robert F. 1974. "Comparison of Several Algorithms for Computing Sample Means and Variances." _Journal of the American Statistical Association_ 69 (348). American Statistical Association, Taylor & Francis, Ltd.: 859–66. doi:[10.2307/2286154][@ling:1974a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

[@welford:1962a]: https://doi.org/10.1080/00401706.1962.10490022

[@vanreeken:1968a]: https://doi.org/10.1145/362929.362961

[@ling:1974a]: https://doi.org/10.2307/2286154

</section>

<!-- /.links -->
