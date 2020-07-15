/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var sapxsum = require( '@stdlib/blas/ext/base/sapxsum' ).ndarray;


// MAIN //

/**
* Computes the arithmetic mean of a single-precision floating-point strided array using a one-pass trial mean algorithm.
*
* ## References
*
* -   Ling, Robert F. 1974. "Comparison of Several Algorithms for Computing Sample Means and Variances." _Journal of the American Statistical Association_ 69 (348). American Statistical Association, Taylor & Francis, Ltd.: 859–66. doi:[10.2307/2286154](https://doi.org/10.2307/2286154).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} stride - stride length
* @returns {number} arithmetic mean
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
* var N = x.length;
*
* var v = smeanli( N, x, 1 );
* // returns ~0.3333
*/
function smeanli( N, x, stride ) {
	var ix;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || stride === 0 ) {
		return x[ 0 ];
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	return float64ToFloat32( x[ ix ] + float64ToFloat32( sapxsum( N-1, -x[ ix ], x, stride, ix+stride ) / N ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = smeanli;
