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


// VARIABLES //

var M = 5;


// MAIN //

/**
* Adds a scalar constant to each element in a strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {NumericArray} input array
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];
*
* gapx( 3, 5.0, x, 1, x.length-3 );
* // x => [ 1.0, -2.0, 3.0, 1.0, 10.0, -1.0 ]
*/
function gapx( N, alpha, x, strideX, offsetX ) {
	var ix;
	var m;
	var o;
	var i;

	if ( N <= 0 || alpha === 0.0 ) {
		return x;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		return accessors( N, alpha, o, strideX, offsetX );
	}
	ix = offsetX;

	// Use loop unrolling if the stride is equal to `1`...
	if ( strideX === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				x[ ix ] += alpha;
				ix += strideX;
			}
		}
		if ( N < M ) {
			return x;
		}
		for ( i = m; i < N; i += M ) {
			x[ ix ] += alpha;
			x[ ix+1 ] += alpha;
			x[ ix+2 ] += alpha;
			x[ ix+3 ] += alpha;
			x[ ix+4 ] += alpha;
			ix += M;
		}
		return x;
	}
	for ( i = 0; i < N; i++ ) {
		x[ ix ] += alpha;
		ix += strideX;
	}
	return x;
}


// EXPORTS //

module.exports = gapx;
