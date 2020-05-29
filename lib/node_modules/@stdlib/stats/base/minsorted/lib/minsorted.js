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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );


// MAIN //

/**
* Computes the minimum value of a sorted strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - sorted input array
* @param {integer} stride - stride length
* @returns {number} minimum value
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var N = x.length;
*
* var v = minsorted( N, x, 1 );
* // returns 1.0
*/
function minsorted( N, x, stride ) {
	var v1;
	var v2;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || stride === 0 ) {
		return x[ 0 ];
	}
	if ( stride < 0 ) {
		v1 = x[ (1-N) * stride ];
		v2 = x[ 0 ];
	} else {
		v1 = x[ 0 ];
		v2 = x[ (N-1) * stride ];
	}
	if ( isnan( v1 ) || isnan( v2 ) ) {
		return NaN;
	}
	if ( v1 === v2 ) {
		if ( isNegativeZero( v1 ) || isNegativeZero( v2 ) ) {
			return -0.0;
		}
		return v1;
	}
	if ( v1 < v2 ) {
		return v1;
	}
	return v2;
}


// EXPORTS //

module.exports = minsorted;
