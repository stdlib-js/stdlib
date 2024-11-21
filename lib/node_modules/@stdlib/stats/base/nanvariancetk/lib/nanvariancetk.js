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
* Computes the variance of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {NumericArray} x - input array
* @param {integer} stride - stride length
* @returns {number} variance
*
* @example
* var x = [ 1.0, -2.0, NaN, 2.0 ];
*
* var v = nanvariancetk( x.length, 1, x, 1 );
* // returns ~4.3333
*/
function nanvariancetk( N, correction, x, stride ) {
	var S2;
	var ix;
	var nc;
	var S;
	var v;
	var n;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( N === 1 || stride === 0 ) {
		v = x[ 0 ];
		if ( v === v && N-correction > 0.0 ) {
			return 0.0;
		}
		return NaN;
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	S2 = 0.0;
	S = 0.0;
	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( v === v ) {
			S2 += v * v;
			S += v;
			n += 1;
		}
		ix += stride;
	}
	nc = n - correction;
	if ( nc <= 0.0 ) {
		return NaN;
	}
	return (S2 - ((S/n)*S)) / nc;
}


// EXPORTS //

module.exports = nanvariancetk;
