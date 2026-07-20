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

// MODULES //

var nansumpw = require( './nansumpw.js' );


// VARIABLES //

var WORKSPACE = [ 0.0, 0 ];


// MAIN //

/**
* Computes the variance of a strided array ignoring `NaN` values and using a two-pass algorithm.
*
* ## Method
*
* -   This implementation uses a two-pass approach, as suggested by Neely (1966).
*
* ## References
*
* -   Neely, Peter M. 1966. "Comparison of Several Algorithms for Computation of Means, Standard Deviations and Correlation Coefficients." _Communications of the ACM_ 9 (7). Association for Computing Machinery: 496–99. doi:[10.1145/365719.365958](https://doi.org/10.1145/365719.365958).
* -   Schubert, Erich, and Michael Gertz. 2018. "Numerically Stable Parallel Computation of (Co-)Variance." In _Proceedings of the 30th International Conference on Scientific and Statistical Database Management_. New York, NY, USA: Association for Computing Machinery. doi:[10.1145/3221269.3223036](https://doi.org/10.1145/3221269.3223036).
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
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var v = nanvariancepn( 5, 1, arraylike2object( x ), 2, 1 );
* // returns 6.25
*/
function nanvariancepn( N, correction, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var mu;
	var ix;
	var M2;
	var nc;
	var M;
	var d;
	var v;
	var n;
	var i;

	// Cache references to array data:
	xbuf = x.data;

	// Cache references to element accessors:
	get = x.accessors[ 0 ];

	if ( N === 1 || strideX === 0 ) {
		v = get( xbuf, offsetX );
		if ( v === v && N-correction > 0.0 ) {
			return 0.0;
		}
		return NaN;
	}
	// Compute an estimate for the mean...
	WORKSPACE[ 0 ] = 0.0;
	WORKSPACE[ 1 ] = 0;
	nansumpw( N, WORKSPACE, x, strideX, offsetX );
	n = WORKSPACE[ 1 ];
	nc = n - correction;
	if ( nc <= 0.0 ) {
		return NaN;
	}
	mu = WORKSPACE[ 0 ] / n;

	// Compute the variance...
	ix = offsetX;
	M2 = 0.0;
	M = 0.0;
	for ( i = 0; i < N; i++ ) {
		v = get( xbuf, ix );
		if ( v === v ) {
			d = v - mu;
			M2 += d * d;
			M += d;
		}
		ix += strideX;
	}
	return (M2/nc) - ((M/n)*(M/nc));
}


// EXPORTS //

module.exports = nanvariancepn;
