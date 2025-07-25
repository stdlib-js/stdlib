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
* Computes the variance of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.
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
* var x = toAccessorArray( [ 1.0, -2.0, NaN, 2.0 ] );
*
* var v = nanvariancetk(x.length, 1, arraylike2object( x ), 1, 0 );
* // returns ~4.3333
*/
function nanvariancetk( N, correction, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var S2;
	var ix;
	var nc;
	var S;
	var v;
	var n;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache a reference to the element accessor:
	get = x.accessors[ 0 ];

	if ( N === 1 || strideX === 0 ) {
		v = get( xbuf, offsetX );
		if ( v === v && N-correction > 0.0 ) {
			return 0.0;
		}
		return NaN;
	}

	ix = offsetX;
	S2 = 0.0;
	S = 0.0;
	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = get( xbuf, ix );
		if ( v === v ) {
			S2 += v * v;
			S += v;
			n += 1;
		}
		ix += strideX;
	}
	nc = n - correction;
	if ( nc <= 0.0 ) {
		return NaN;
	}
	return (S2 - ((S/n)*S)) / nc;
}


// EXPORTS //

module.exports = nanvariancetk;
