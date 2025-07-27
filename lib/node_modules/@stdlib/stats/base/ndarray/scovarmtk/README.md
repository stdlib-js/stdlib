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

# scovarmtk

> Calculate the [covariance][covariance] of two one-dimensional single-precision floating-point ndarrays provided known means and using a one-pass textbook algorithm.

<section class="intro">

The population [covariance][covariance] of two finite size populations of size `N` is given by

<!-- <equation class="equation" label="eq:population_covariance" align="center" raw="\operatorname{\mathrm{cov_N}} = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu_x)(y_i - \mu_y)" alt="Equation for the population covariance."> -->

```math
\mathop{\mathrm{cov_N}} = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu_x)(y_i - \mu_y)
```

<!-- </equation> -->

where the population means are given by

<!-- <equation class="equation" label="eq:population_mean_for_x" align="center" raw="\mu_x = \frac{1}{N} \sum_{i=0}^{N-1} x_i" alt="Equation for the population mean for first array."> -->

```math
\mu_x = \frac{1}{N} \sum_{i=0}^{N-1} x_i
```

<!-- </equation> -->

and

<!-- <equation class="equation" label="eq:population_mean_for_y" align="center" raw="\mu_y = \frac{1}{N} \sum_{i=0}^{N-1} y_i" alt="Equation for the population mean for second array."> -->

```math
\mu_y = \frac{1}{N} \sum_{i=0}^{N-1} y_i
```

<!-- </equation> -->

Often in the analysis of data, the true population [covariance][covariance] is not known _a priori_ and must be estimated from samples drawn from population distributions. If one attempts to use the formula for the population [covariance][covariance], the result is biased and yields a **biased sample covariance**. To compute an **unbiased sample covariance** for samples of size `n`,

<!-- <equation class="equation" label="eq:unbiased_sample_covariance" align="center" raw="\operatorname{\mathrm{cov_n}} = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x}_n)(y_i - \bar{y}_n)" alt="Equation for computing an unbiased sample variance."> -->

```math
\mathop{\mathrm{cov_n}} = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x}_n)(y_i - \bar{y}_n)
```

<!-- </equation> -->

where sample means are given by

<!-- <equation class="equation" label="eq:sample_mean_for_x" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the sample mean for first array."> -->

```math
\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- </equation> -->

and

<!-- <equation class="equation" label="eq:sample_mean_for_y" align="center" raw="\bar{y} = \frac{1}{n} \sum_{i=0}^{n-1} y_i" alt="Equation for the sample mean for second array."> -->

```math
\bar{y} = \frac{1}{n} \sum_{i=0}^{n-1} y_i
```

<!-- </equation> -->

The use of the term `n-1` is commonly referred to as Bessel's correction. Depending on the characteristics of the population distributions, other correction factors (e.g., `n-1.5`, `n+1`, etc) can yield better estimators.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var scovarmtk = require( '@stdlib/stats/base/ndarray/scovarmtk' );
```

#### scovarmtk( arrays )

Computes the covariance of two one-dimensional single-precision floating-point ndarrays provided known means and using a one-pass textbook algorithm.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var opts = {
    'dtype': 'float32'
};

var xbuf = new Float32Array( [ 1.0, -2.0, 2.0 ] );
var x = new ndarray( opts.dtype, xbuf, [ 3 ], [ 1 ], 0, 'row-major' );

var ybuf = new Float32Array( [ 2.0, -2.0, 1.0 ] );
var y = new ndarray( opts.dtype, ybuf, [ 3 ], [ 1 ], 0, 'row-major' );

var correction = scalar2ndarray( 1.0, opts );
var meanx = scalar2ndarray( 1.0/3.0, opts );
var meany = scalar2ndarray( 1.0/3.0, opts );

var v = scovarmtk( [ x, y, correction, meanx, meany ] );
// returns ~3.8333
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays in order:

    1.  first one-dimensional input ndarray.
    2.  second one-dimensional input ndarray.
    3.  a zero-dimensional ndarray specifying the degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [covariance][covariance] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment and `N` corresponds to the number of elements in each input ndarray. When computing the population [covariance][covariance], setting this parameter to `0` is the standard choice (i.e., the provided arrays contain data constituting entire populations). When computing the unbiased sample [covariance][covariance], setting this parameter to `1` is the standard choice (i.e., the provided arrays contain data sampled from larger populations; this is commonly referred to as Bessel's correction).
    4.  a zero-dimensional ndarray specifying the mean of the first one-dimensional ndarray.
    5.  a zero-dimensional ndarray specifying the mean of the second one-dimensional ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Both input ndarrays should have the same number of elements.
-   If provided empty one-dimensional ndarrays, the function returns `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var scovarmtk = require( '@stdlib/stats/base/ndarray/scovarmtk' );

// Define array options:
var opts = {
    'dtype': 'float32'
};

// Create one-dimensional ndarrays containing pseudorandom numbers:
var xbuf = discreteUniform( 10, -50, 50, opts );
var x = new ndarray( opts.dtype, xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var ybuf = discreteUniform( 10, -50, 50, opts );
var y = new ndarray( opts.dtype, ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( y ) );

// Specify the degrees of freedom adjustment:
var correction = scalar2ndarray( 1.0, opts );

// Specify the known means:
var meanx = scalar2ndarray( 0.0, opts );
var meany = scalar2ndarray( 0.0, opts );

// Calculate the sample covariance:
var v = scovarmtk( [ x, y, correction, meanx, meany ] );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[covariance]: https://en.wikipedia.org/wiki/Covariance

</section>

<!-- /.links -->
