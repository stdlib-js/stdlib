/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var normalizeIndex = require( '@stdlib/ndarray/base/normalize-index' );
var indexFunction = require( '@stdlib/ndarray/base/ind' ).factory;
var format = require( '@stdlib/string/format' );


// VARIABLES //

var NDIMS = 2;


// MAIN //

/**
* Takes elements from a two-dimensional nested array.
*
* ## Notes
*
* -   The function does **not** deep copy nested array elements.
*
* @param {ArrayLikeObject<Collection>} x - input array
* @param {NonNegativeIntegerArray} indices - list of indices
* @param {integer} dimension - dimension along which to take elements
* @param {string} mode - index mode specifying how to handle an index which is out-of-bounds
* @throws {RangeError} third argument exceeds the number of dimensions
* @throws {TypeError} fourth argument must be a recognized index mode
* @returns {(Array<Array>|Array<Collection>)} output array
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
* var indices = [ 1, 1, 0, 0, -1, -1 ];
*
* var y = take2d( x, indices, 1, 'normalize' );
* // returns [ [ 2, 2, 1, 1, 2, 2 ], [ 4, 4, 3, 3, 4, 4 ] ]
*/
function take2d( x, indices, dimension, mode ) {
	var lastIndex;
	var out;
	var dim;
	var ind;
	var idx;
	var i0;
	var i1;
	var x0;
	var y0;

	dim = normalizeIndex( dimension, NDIMS-1 );
	if ( dim === -1 ) {
		throw new RangeError( format( 'invalid argument. Third argument exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.', NDIMS, dimension ) );
	}
	ind = indexFunction( mode );
	out = [];
	if ( dim === 0 ) {
		lastIndex = x.length - 1;
		for ( i1 = 0; i1 < indices.length; i1++ ) {
			idx = ind( indices[ i1 ], lastIndex );
			out.push( x[ idx ] );
		}
		return out;
	}
	// Case: dim === 1
	for ( i1 = 0; i1 < x.length; i1++ ) {
		x0 = x[ i1 ];
		y0 = [];
		lastIndex = x0.length - 1;
		for ( i0 = 0; i0 < indices.length; i0++ ) {
			idx = ind( indices[ i0 ], lastIndex );
			y0.push( x0[ idx ] );
		}
		out.push( y0 );
	}
	return out;
}


// EXPORTS //

module.exports = take2d;
