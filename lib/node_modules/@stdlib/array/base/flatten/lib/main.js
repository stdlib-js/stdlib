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

var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var vind2bind = require( '@stdlib/ndarray/base/vind2bind' );
var numel = require( '@stdlib/ndarray/base/numel' );
var grev = require( '@stdlib/blas/ext/base/grev' );


// VARIABLES //

var MODE = 'throw';


// FUNCTIONS //

/**
* Copies a specified number of array elements to a provided array.
*
* @private
* @param {Array} out - output array
* @param {Array} x - input array
* @param {NonNegativeInteger} N - number of elements to copy
* @returns {Array} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = copy( [], x, 3 );
* // returns [ 1, 2, 3 ]
*/
function copy( out, x, N ) {
	var i;
	for ( i = 0; i < N; i++ ) {
		out.push( x[ i ] );
	}
	return out;
}

/**
* Recursively flattens an array in lexicographic order.
*
* @private
* @param {Array} out - output array
* @param {Array} x - array to flatten
* @param {NonNegativeInteger} ndims - number of dimensions in the input array
* @param {NonNegativeIntegerArray} shape - shape of the input array
* @param {NonNegativeInteger} dim - dimension index
* @returns {Array} output array
*/
function recurseLexicographic( out, x, ndims, shape, dim ) {
	var FLG;
	var S;
	var d;
	var i;

	// Check whether we've reached the last dimension:
	d = dim + 1;
	FLG = ( d === ndims );

	S = shape[ dim ];
	for ( i = 0; i < S; i++ ) {
		if ( FLG ) {
			out.push( x[ i ] );
		} else {
			recurseLexicographic( out, x[ i ], ndims, shape, d );
		}
	}
	return out;
}

/**
* Flattens an array in colexicographic order.
*
* @private
* @param {Array} out - output array
* @param {Array} x - array to flatten
* @param {NonNegativeInteger} ndims - number of dimensions in the input array
* @param {NonNegativeIntegerArray} shape - shape of the input array
* @returns {Array} output array
*/
function flattenColexicographic( out, x, ndims, shape ) {
	var len;
	var tmp;
	var ord;
	var sh;
	var sx;
	var j;
	var i;

	// For input arrays having an arbitrary number of dimensions, first flatten in lexicographic order:
	tmp = recurseLexicographic( [], x, ndims, shape, 0 );

	// Determine how many elements will be in the output array:
	len = numel( shape );

	// Define the memory layout:
	ord = 'row-major';

	// Generate a stride array for lexicographic order:
	sx = shape2strides( shape, ord );

	// Reverse the dimensions and strides (i.e., define the shape and strides of the transpose):
	sh = copy( [], shape, ndims );
	grev( ndims, sh, 1 );
	grev( ndims, sx, 1 );

	// Iterate over each element based on the linear **view** index (note: this has negative performance implications due to lack of data locality)...
	for ( i = 0; i < len; i++ ) {
		j = vind2bind( sh, sx, 0, ord, i, MODE );
		out.push( tmp[ j ] );
	}
	return out;
}


// MAIN //

/**
* Flattens an n-dimensional nested array.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
*
* @param {Array} x - input nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {boolean} colexicographic - specifies whether to flatten array values in colexicographic order
* @returns {Array} flattened array
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten( x, [ 2, 2 ], false );
* // returns [ 1, 2, 3, 4 ]
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten( x, [ 2, 2 ], true );
* // returns [ 1, 3, 2, 4 ]
*/
function flatten( x, shape, colexicographic ) {
	var ndims;
	var out;

	ndims = shape.length;
	out = [];
	if ( ndims === 0 ) { // 0-dimensional array
		return out;
	}
	if ( ndims === 1 ) { // 1-dimensional array
		// For 1-dimensional arrays, we can perform a simple copy:
		return copy( out, x, shape[ 0 ] );
	}
	if ( colexicographic ) {
		return flattenColexicographic( out, x, ndims, shape );
	}
	return recurseLexicographic( out, x, ndims, shape, 0 );
}


// EXPORTS //

module.exports = flatten;
