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

var dapxsum = require( '@stdlib/blas/ext/base/dapxsum' ).ndarray;


// MAIN //

/**
* Computes the arithmetic mean of a double-precision floating-point strided array using a one-pass trial mean algorithm.
*
* ## References
*
* -   Ling, Robert F. 1974. "Comparison of Several Algorithms for Computing Sample Means and Variances." _Journal of the American Statistical Association_ 69 (348). American Statistical Association, Taylor & Francis, Ltd.: 859–66. doi:[10.2307/2286154](https://doi.org/10.2307/2286154).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} arithmetic mean
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = dmeanli( 4, x, 2, 1 );
* // returns 1.25
*/
function dmeanli( N, x, strideX, offsetX ) {
	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || strideX === 0 ) {
		return x[ offsetX ];
	}
	return x[ offsetX ] + ( dapxsum( N-1, -x[ offsetX ], x, strideX, offsetX+strideX ) / N ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = dmeanli;
