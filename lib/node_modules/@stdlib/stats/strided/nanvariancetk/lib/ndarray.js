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

var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Computes the variance of a strided array ignoring `NaN` values and using a one-pass textbook algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} variance
*
* @example
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];
*
* var v = nanvariancetk( 5, 1, x, 2, 1 );
* // returns 6.25
*/
function nanvariancetk( N, correction, x, strideX, offsetX ) {
	var S2;
	var ix;
	var nc;
	var o;
	var S;
	var v;
	var n;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		return accessors( N, correction, o, strideX, offsetX );
	}
	if ( N === 1 || strideX === 0 ) {
		v = x[ offsetX ];
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
		v = x[ ix ];
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
