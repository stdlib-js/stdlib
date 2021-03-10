/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var range = require( './range.js' );
var sort2ins = require( './sort2ins.js' );
var copy = require( './copy_array.js' );
var permute = require( './permute.js' );
var defaults = require( './defaults.js' );


// MAIN //

/**
* Initialize block data (shape, strides, block size).
*
* ## Notes
*
* -   The returned object has the following properties:
*
*     -   **sh**: dimensions sorted in loop order.
*     -   **sx**: input ndarray strides sorted in loop order.
*     -   **sy**: output ndarray strides sorted in loop order.
*     -   **bsize**: block size (in units of elements).
*
* @private
* @param {Object} x - object containing input ndarray meta data
* @param {string} x.dtype - data type
* @param {Collection} x.data - data buffer
* @param {NonNegativeIntegerArray} x.shape - dimensions
* @param {IntegerArray} x.strides - stride lengths
* @param {NonNegativeInteger} x.offset - index offset
* @param {string} x.order - specifies whether `x` is row-major (C-style) or column-major (Fortran-style)
* @param {Object} y - object containing output ndarray meta data
* @param {string} y.dtype - data type
* @param {Collection} y.data - data buffer
* @param {NonNegativeIntegerArray} y.shape - dimensions
* @param {IntegerArray} y.strides - stride lengths
* @param {NonNegativeInteger} y.offset - index offset
* @param {string} y.order - specifies whether `y` is row-major (C-style) or column-major (Fortran-style)
* @returns {Object} block data
*/
function init( x, y ) {
	var bsize;
	var idx;
	var nbx;
	var nby;
	var sh;
	var sx;
	var sy;

	// Initialize a loop interchange index array for generating a loop order permutation:
	sh = x.shape;
	idx = range( sh.length );

	// Sort the input array strides in increasing order (of magnitude):
	sx = copy( x.strides );
	sort2ins( sx, idx );

	// Permute the shape and output array strides based on the sorted input array strides:
	sh = permute( sh, idx );
	sy = permute( y.strides, idx );

	// Determine the block size...
	nbx = bytesPerElement( x.dtype );
	nby = bytesPerElement( y.dtype );
	if ( nbx === null || nby === null ) {
		bsize = defaults.BLOCK_SIZE_IN_ELEMENTS;
	} else if ( nbx > nby ) {
		bsize = ( defaults.BLOCK_SIZE_IN_BYTES/nbx )|0;
	} else {
		bsize = ( defaults.BLOCK_SIZE_IN_BYTES/nby )|0;
	}
	return {
		'sh': sh,
		'sx': sx,
		'sy': sy,
		'bsize': bsize
	};
}


// EXPORTS //

module.exports = init;
