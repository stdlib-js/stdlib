/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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


// MAIN //

/**
* Circularly shifts the elements of a strided array by a specified number of positions.
*
* ## Notes
*
* -   This implementation is based on the "trinity rotation" (a.k.a., conjoined triple reversal) algorithm introduced in <https://github.com/scandum/rotate/tree/6d0d2d56d10454def027e35921890200b45fe82c>, by Igor van den Hoven.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {integer} k - number of positions to shift
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Collection} input array
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
*
* gcircshift( x.length, 2, x, 1, 0 );
* // x => [ 5.0, 6.0, 1.0, 2.0, 3.0, 4.0 ]
*/
function gcircshift( N, k, x, strideX, offsetX ) {
	var right;
	var left;
	var tmp;
	var pa;
	var pb;
	var pc;
	var pd;
	var o;
	var n;
	var s;
	var i;

	if ( N <= 0 ) {
		return x;
	}
	// Normalize `k`:
	k %= N;
	if ( k < 0 ) {
		k += N;
	}
	if ( k === 0 ) {
		return x;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		accessors( N, k, o, strideX, offsetX );
		return o.data;
	}
	s = strideX;

	// For a right circular shift by `k`, the left partition has `N-k` elements...
	left = N - k;
	right = k;
	if ( left < right ) {
		pa = offsetX;
		pb = pa + ( left * s );
		pc = pb;
		pd = pb + ( right * s );

		// Four-way swap from both ends and the split point...
		n = floor( left / 2 );
		for ( i = 0; i < n; i++ ) {
			pb -= s;
			pd -= s;
			tmp = x[ pb ];
			x[ pb ] = x[ pa ];
			x[ pa ] = x[ pc ];
			x[ pc ] = x[ pd ];
			x[ pd ] = tmp;
			pa += s;
			pc += s;
		}
		// Three-way rotation for the remaining bridge...
		n = floor( ( ( pd - pc ) / s ) / 2 );
		for ( i = 0; i < n; i++ ) {
			pd -= s;
			tmp = x[ pc ];
			x[ pc ] = x[ pd ];
			x[ pd ] = x[ pa ];
			x[ pa ] = tmp;
			pa += s;
			pc += s;
		}
		// Standard reversal of any remaining elements...
		n = floor( ( ( pd - pa ) / s ) / 2 );
		for ( i = 0; i < n; i++ ) {
			pd -= s;
			tmp = x[ pa ];
			x[ pa ] = x[ pd ];
			x[ pd ] = tmp;
			pa += s;
		}
	} else if ( left > right ) {
		pa = offsetX;
		pb = pa + ( left * s );
		pc = pb;
		pd = pb + ( right * s );

		// Four-way swap from both ends and the split point...
		n = floor( right / 2 );
		for ( i = 0; i < n; i++ ) {
			pb -= s;
			pd -= s;
			tmp = x[ pb ];
			x[ pb ] = x[ pa ];
			x[ pa ] = x[ pc ];
			x[ pc ] = x[ pd ];
			x[ pd ] = tmp;
			pa += s;
			pc += s;
		}
		// Three-way rotation for the remaining bridge...
		n = floor( ( ( pb - pa ) / s ) / 2 );
		for ( i = 0; i < n; i++ ) {
			pb -= s;
			pd -= s;
			tmp = x[ pb ];
			x[ pb ] = x[ pa ];
			x[ pa ] = x[ pd ];
			x[ pd ] = tmp;
			pa += s;
		}
		// Standard reversal of any remaining elements...
		n = floor( ( ( pd - pa ) / s ) / 2 );
		for ( i = 0; i < n; i++ ) {
			pd -= s;
			tmp = x[ pa ];
			x[ pa ] = x[ pd ];
			x[ pd ] = tmp;
			pa += s;
		}
	} else {
		// Simple pairwise swap...
		pa = offsetX;
		pb = pa + ( left * s );
		for ( i = 0; i < left; i++ ) {
			tmp = x[ pa ];
			x[ pa ] = x[ pb ];
			x[ pb ] = tmp;
			pa += s;
			pb += s;
		}
	}
	return x;
}


// EXPORTS //

module.exports = gcircshift;
