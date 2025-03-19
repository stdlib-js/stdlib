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

/* eslint-disable max-depth */

'use strict';

// MAIN //

/**
* Tests whether every element is truthy.
*
* @private
* @param {Object} x - object containing ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Array<Function>} x.accessors - data buffer accessors
* @returns {boolean} result
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var accessors = require( '@stdlib/array/base/accessors' );
*
* // Create a data buffer:
* var xbuf = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
*
* // Define the shape of the input array:
* var shape = [ 1, 1, 1, 2, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 4, 2, 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create the input ndarray-like object:
* var x = {
*     'dtype': 'generic',
*     'data': xbuf,
*     'shape': shape,
*     'strides': sx,
*     'offset': ox,
*     'order': 'row-major',
*     'accessors': accessors( xbuf ).accessors
* };
*
* // Test elements:
* var out = every5d( x );
* // returns true
*/
function every5d( x ) {
	var xbuf;
	var get;
	var dx0;
	var dx1;
	var dx2;
	var dx3;
	var dx4;
	var sh;
	var S0;
	var S1;
	var S2;
	var S3;
	var S4;
	var sx;
	var ix;
	var i0;
	var i1;
	var i2;
	var i3;
	var i4;

	// Note on variable naming convention: S#, dx#, dy#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Extract loop variables for purposes of loop interchange: dimensions and loop offset (pointer) increments...
	sh = x.shape;
	sx = x.strides;
	if ( x.order === 'row-major' ) {
		// For row-major ndarrays, the last dimensions have the fastest changing indices...
		S0 = sh[ 4 ];
		S1 = sh[ 3 ];
		S2 = sh[ 2 ];
		S3 = sh[ 1 ];
		S4 = sh[ 0 ];
		dx0 = sx[ 4 ];                // offset increment for innermost loop
		dx1 = sx[ 3 ] - ( S0*sx[4] );
		dx2 = sx[ 2 ] - ( S1*sx[3] );
		dx3 = sx[ 1 ] - ( S2*sx[2] );
		dx4 = sx[ 0 ] - ( S3*sx[1] ); // offset increment for outermost loop
	} else { // order === 'column-major'
		// For column-major ndarrays, the first dimensions have the fastest changing indices...
		S0 = sh[ 0 ];
		S1 = sh[ 1 ];
		S2 = sh[ 2 ];
		S3 = sh[ 3 ];
		S4 = sh[ 4 ];
		dx0 = sx[ 0 ];                // offset increment for innermost loop
		dx1 = sx[ 1 ] - ( S0*sx[0] );
		dx2 = sx[ 2 ] - ( S1*sx[1] );
		dx3 = sx[ 3 ] - ( S2*sx[2] );
		dx4 = sx[ 4 ] - ( S3*sx[3] ); // offset increment for outermost loop
	}
	// Set a pointer to the first indexed element:
	ix = x.offset;

	// Cache a reference to the input ndarray buffer:
	xbuf = x.data;

	// Cache accessor:
	get = x.accessors[ 0 ];

	// Iterate over the ndarray dimensions...
	for ( i4 = 0; i4 < S4; i4++ ) {
		for ( i3 = 0; i3 < S3; i3++ ) {
			for ( i2 = 0; i2 < S2; i2++ ) {
				for ( i1 = 0; i1 < S1; i1++ ) {
					for ( i0 = 0; i0 < S0; i0++ ) {
						if ( !get( xbuf, ix ) ) {
							return false;
						}
						ix += dx0;
					}
					ix += dx1;
				}
				ix += dx2;
			}
			ix += dx3;
		}
		ix += dx4;
	}
	return true;
}


// EXPORTS //

module.exports = every5d;
