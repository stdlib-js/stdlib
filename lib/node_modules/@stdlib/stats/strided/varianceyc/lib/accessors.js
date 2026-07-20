/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Computes the variance of a strided array using a one-pass algorithm proposed by Youngs and Cramer.
*
* ## Method
*
* -   This implementation uses a one-pass algorithm, as proposed by Youngs and Cramer (1971).
*
* ## References
*
* -   Youngs, Edward A., and Elliot M. Cramer. 1971. "Some Results Relevant to Choice of Sum and Sum-of-Product Algorithms." _Technometrics_ 13 (3): 657–65. doi:[10.1080/00401706.1971.10488826](https://doi.org/10.1080/00401706.1971.10488826).
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} variance
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
*
* var v = varianceyc( x.length, 1.0, arraylike2object( x ), 1, 0 );
* // returns 10.7
*/
function varianceyc( N, correction, x, strideX, offsetX ) {
	var xbuf;
	var xget;
	var sum;
	var ix;
	var S;
	var v;
	var d;
	var n;
	var i;

	n = N - correction;

	// Cache a reference to array data:
	xbuf = x.data;

	// Cache a reference to an element accessor:
	xget = x.accessors[ 0 ];

	sum = xget( xbuf, offsetX );
	ix = offsetX + strideX;
	S = 0.0;
	for ( i = 2; i <= N; i++ ) {
		v = xget( xbuf, ix );
		sum += v;
		d = (i*v) - sum;
		S += (1.0/(i*(i-1))) * d * d;
		ix += strideX;
	}
	return S / n;
}


// EXPORTS //

module.exports = varianceyc;
