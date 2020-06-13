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


// VARIABLES //

var M = 3;


// MAIN //

/**
* Reverses a single-precision floating-point strided array in-place.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} stride - index increment
* @returns {Float32Array} input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* srev( x.length, x, 1 );
* // x => <Float32Array>[ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
*/
function srev( N, x, stride ) {
	var tmp;
	var ix;
	var iy;
	var m;
	var n;
	var i;

	if ( N <= 0 ) {
		return x;
	}
	n = floor( N/2 );

	// Use loop unrolling if the stride is equal to `1`...
	if ( stride === 1 ) {
		m = n % M;
		iy = N - 1;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( ix = 0; ix < m; ix++ ) {
				tmp = x[ ix ];
				x[ ix ] = x[ iy ];
				x[ iy ] = tmp;
				iy -= 1;
			}
		}
		if ( n < M ) {
			return x;
		}
		for ( ix = m; ix < n; ix += M ) {
			tmp = x[ ix ];
			x[ ix ] = x[ iy ];
			x[ iy ] = tmp;

			tmp = x[ ix+1 ];
			x[ ix+1 ] = x[ iy-1 ];
			x[ iy-1 ] = tmp;

			tmp = x[ ix+2 ];
			x[ ix+2 ] = x[ iy-2 ];
			x[ iy-2 ] = tmp;

			iy -= M;
		}
		return x;
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	iy = ix + ((N-1)*stride);
	for ( i = 0; i < n; i++ ) {
		tmp = x[ ix ];
		x[ ix ] = x[ iy ];
		x[ iy ] = tmp;
		ix += stride;
		iy -= stride;
	}
	return x;
}


// EXPORTS //

module.exports = srev;
