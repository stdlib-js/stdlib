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

// MAIN //

/**
* Fills a strided array with linearly spaced values over a specified interval.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} start - start of interval
* @param {number} stop - end of interval
* @param {boolean} endpoint - boolean indicating whether to include the `stop` value when writing values to the input array
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
* glinspace( x.length, 0.0, 100.0, true, arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // x => [ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* glinspace( x.length, 0.0, 100.0, false, arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // x => [ 0.0, 20.0, 40.0, 60.0, 80.0 ]
*/
function glinspace( N, start, stop, endpoint, x, strideX, offsetX ) {
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
			set( xbuf, ix, stop );
		} else {
			set( xbuf, ix, start );
		}
		return x;
	}
	set( xbuf, ix, start );
	ix += strideX;

	// Calculate the increment:
	if ( endpoint ) {
		N -= 1;
	}
	d = ( stop-start ) / N;

	// Generate linearly spaced values:
	for ( i = 1; i < N; i++ ) {
		set( xbuf, ix, start + (d*i) );
		ix += strideX;
	}
	// Check whether to include the `stop` value:
	if ( endpoint ) {
		set( xbuf, ix, stop );
	}
	return x;
}


// EXPORTS //

module.exports = glinspace;
