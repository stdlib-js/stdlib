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

var abs = require( '@stdlib/math/base/special/abs' );


// VARIABLES //

var M = 6;


// MAIN //

/**
* Computes the sum of absolute values.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} stride - index increment
* @param {NonNegativeInteger} offset - starting index
* @returns {number} sum
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
*
* var s = gasum( x.length, arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // returns 15.0
*/
function gasum( N, x, stride, offset ) {
	var buf;
	var get;
	var sum;
	var ix;
	var m;
	var i;

	buf = x.data;
	get = x.accessors[ 0 ];

	sum = 0.0;
	ix = offset;
	if ( stride === 0 ) {
		sum = abs( get( buf, ix ) * N );
		return sum;
	}

	// Use unrolled loops if the stride is equal to `1`...
	if ( stride === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				sum += abs( get( buf, ix ) );
				ix += stride;
			}
		}
		if ( N < M ) {
			return sum;
		}
		for ( i = m; i < N; i += M ) {
			sum += abs( get( buf, ix ) ) + abs( get( buf, ix+1 ) ) + abs( get( buf, ix+2 ) ) + abs( get( buf, ix+3 ) ) + abs( get( buf, ix+4 ) ) + abs( get( buf, ix+5 ) ); // eslint-disable-line max-len
			ix += M;
		}
		return sum;
	}
	for ( i = 0; i < N; i++ ) {
		sum += abs( get( buf, ix ) );
		ix += stride;
	}
	return sum;
}


// EXPORTS //

module.exports = gasum;
