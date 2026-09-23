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

var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Fills a strided array with logarithmically spaced values over a specified interval.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} base - base of the logarithmic scale
* @param {number} start - exponent of the starting value
* @param {number} stop - exponent of the final value
* @param {boolean} endpoint - boolean indicating whether to include the `base^stop` value when writing values to the input array
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Object} input array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* glogspace( x.length, 10.0, 0.0, 5.0, true, arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // x => [ 1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0 ]
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* glogspace( x.length, 10.0, 0.0, 5.0, false, arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // x => [ 1.0, 10.0, 100.0, 1000.0, 10000.0 ]
*/
function glogspace( N, base, start, stop, endpoint, x, strideX, offsetX ) {
	var xbuf;
	var set;
	var ix;
	var d;
	var i;

	// Cache a reference to array data:
	xbuf = x.data;

	// Cache a reference to the element accessor:
	set = x.accessors[ 1 ];

	// Set the first value:
	ix = offsetX;
	if ( N === 1 ) {
		if ( endpoint ) {
			set( xbuf, ix, pow( base, stop ) );
		} else {
			set( xbuf, ix, pow( base, start ) );
		}
		return x;
	}
	set( xbuf, ix, pow( base, start ) );
	ix += strideX;

	// Calculate the increment:
	if ( endpoint ) {
		N -= 1;
	}
	d = ( stop-start ) / N;

	// Generate logarithmically spaced values:
	for ( i = 1; i < N; i++ ) {
		set( xbuf, ix, pow( base, start + (d*i) ) );
		ix += strideX;
	}
	// Check whether to include the `base^stop` value:
	if ( endpoint ) {
		set( xbuf, ix, pow( base, stop ) );
	}
	return x;
}


// EXPORTS //

module.exports = glogspace;
