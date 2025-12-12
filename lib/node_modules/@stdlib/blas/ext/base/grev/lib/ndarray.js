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

var floor = require( '@stdlib/math/base/special/floor' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// VARIABLES //

var M = 3;


// MAIN //

/**
* Reverses a strided array in-place.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {NumericArray} input array
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];
*
* grev( 3, x, 1, x.length-3 );
* // x => [ 1.0, -2.0, 3.0, -6.0, 5.0, -4.0 ]
*/
function grev( N, x, strideX, offsetX ) {
	var tmp;
	var ix;
	var iy;
	var o;
	var m;
	var n;
	var i;

	if ( N <= 0 ) {
		return x;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		accessors( N, o, strideX, offsetX );
		return o.data;
	}
	n = floor( N/2 );
	ix = offsetX;

	// Use loop unrolling if the stride is equal to `1`...
	if ( strideX === 1 ) {
		m = n % M;
		iy = ix + N - 1;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				tmp = x[ ix ];
				x[ ix ] = x[ iy ];
				x[ iy ] = tmp;
				ix += strideX;
				iy -= strideX;
			}
		}
		if ( n < M ) {
			return x;
		}
		for ( i = m; i < n; i += M ) {
			tmp = x[ ix ];
			x[ ix ] = x[ iy ];
			x[ iy ] = tmp;

			tmp = x[ ix+1 ];
			x[ ix+1 ] = x[ iy-1 ];
			x[ iy-1 ] = tmp;

			tmp = x[ ix+2 ];
			x[ ix+2 ] = x[ iy-2 ];
			x[ iy-2 ] = tmp;

			ix += M;
			iy -= M;
		}
		return x;
	}
	iy = ix + ( ( N - 1 ) * strideX );
	for ( i = 0; i < n; i++ ) {
		tmp = x[ ix ];
		x[ ix ] = x[ iy ];
		x[ iy ] = tmp;
		ix += strideX;
		iy -= strideX;
	}
	return x;
}


// EXPORTS //

module.exports = grev;
