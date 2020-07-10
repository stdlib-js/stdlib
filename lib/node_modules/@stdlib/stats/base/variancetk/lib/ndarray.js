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
* Computes the variance of a strided array using a one-pass textbook algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {NumericArray} x - input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} variance
*
* @example
* var floor = require( '@stdlib/math/base/special/floor' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
* var N = floor( x.length / 2 );
*
* var v = variancetk( N, 1, x, 2, 1 );
* // returns 6.25
*/
function variancetk( N, correction, x, stride, offset ) {
	var S2;
	var ix;
	var S;
	var v;
	var n;
	var i;

	n = N - correction;
	if ( N <= 0 || n <= 0.0 ) {
		return NaN;
	}
	if ( N === 1 || stride === 0 ) {
		return 0.0;
	}
	ix = offset;
	S2 = 0.0;
	S = 0.0;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		S2 += v * v;
		S += v;
		ix += stride;
	}
	return (S2 - ((S/N)*S)) / n;
}


// EXPORTS //

module.exports = variancetk;
