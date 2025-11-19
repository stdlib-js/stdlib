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

// VARIABLES //

var M = 5;


// MAIN //

/**
* Multiplies `x` by a scalar `alpha`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} stride - index increment
* @param {NonNegativeInteger} offset - starting index
* @returns {NumericArray} input array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];
*
* gscal( 3, 5.0, arraylike2object( toAccessorArray( x ) ), 1, x.length-3 );
* // x => [ 1.0, -2.0, 3.0, -20.0, 25.0, -30.0 ]
*/
function gscal( N, alpha, x, stride, offset ) {
	var xbuf;
	var xget;
	var xset;
	var ix;
	var m;
	var i;

	xbuf = x.data;
	xget = x.accessors[ 0 ];
	xset = x.accessors[ 1 ];

	ix = offset;
	if ( stride === 0 ) {
		xset( xbuf, ix, xget( xbuf, ix ) * N * alpha );
		return x;
	}

	// Use loop unrolling if the stride is equal to `1`...
	if ( stride === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				xset( xbuf, ix, xget( xbuf, ix ) * alpha );
				ix += stride;
			}
		}
		if ( N < M ) {
			return x;
		}
		for ( i = m; i < N; i += M ) {
			xset( xbuf, ix, xget( xbuf, ix ) * alpha );
			xset( xbuf, ix+1, xget( xbuf, ix+1 ) * alpha );
			xset( xbuf, ix+2, xget( xbuf, ix+2 ) * alpha );
			xset( xbuf, ix+3, xget( xbuf, ix+3 ) * alpha );
			xset( xbuf, ix+4, xget( xbuf, ix+4 ) * alpha );
			ix += M;
		}
		return x;
	}
	for ( i = 0; i < N; i++ ) {
		xset( xbuf, ix, xget( xbuf, ix ) * alpha );
		ix += stride;
	}
	return x;
}


// EXPORTS //

module.exports = gscal;
