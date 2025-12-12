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

// MAIN //

/**
* Computes the variance of a double-precision floating-point strided array using a one-pass algorithm proposed by Youngs and Cramer.
*
* ## Method
*
* -   This implementation uses a one-pass algorithm, as proposed by Youngs and Cramer (1971).
*
* ## References
*
* -   Youngs, Edward A., and Elliot M. Cramer. 1971. "Some Results Relevant to Choice of Sum and Sum-of-Product Algorithms." _Technometrics_ 13 (3): 657–65. doi:[10.1080/00401706.1971.10488826](https://doi.org/10.1080/00401706.1971.10488826).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} variance
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = dvarianceyc( 4, 1, x, 2, 1 );
* // returns 6.25
*/
function dvarianceyc( N, correction, x, strideX, offsetX ) {
	var sum;
	var ix;
	var S;
	var v;
	var d;
	var n;
	var i;

	n = N - correction;
	if ( N <= 0 || n <= 0.0 ) {
		return NaN;
	}
	if ( N === 1 || strideX === 0 ) {
		return 0.0;
	}
	sum = x[ offsetX ];
	ix = offsetX + strideX;
	S = 0.0;
	for ( i = 2; i <= N; i++ ) {
		v = x[ ix ];
		sum += v;
		d = (i*v) - sum;
		S += (1.0/(i*(i-1))) * d * d;
		ix += strideX;
	}
	return S / n;
}


// EXPORTS //

module.exports = dvarianceyc;
