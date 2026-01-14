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

// FUNCTIONS //

/**
* Recursively applies a unary callback.
*
* @private
* @param {ArrayLikeObject} x - input array
* @param {ArrayLikeObject} y - output array
* @param {NonNegativeInteger} ndims - number of dimensions
* @param {NonNegativeIntegerArray} shape - array shape
* @param {NonNegativeInteger} dim - dimension index
* @param {Callback} fcn - unary callback
* @returns {void}
*/
function recurse( x, y, ndims, shape, dim, fcn ) {
	var S;
	var d;
	var i;

	S = shape[ dim ];

	// Check whether we've reached the innermost dimension:
	d = dim + 1;

	if ( d === ndims ) {
		// Apply the provided callback...
		for ( i = 0; i < S; i++ ) {
			y[ i ] = fcn( x[ i ] );
		}
		return;
	}
	// Continue recursing into the nested arrays...
	for ( i = 0; i < S; i++ ) {
		recurse( x[ i ], y[ i ], ndims, shape, d, fcn );
	}
}


// MAIN //

/**
* Applies a unary callback to elements in an n-dimensional nested input array and assigns results to elements in an n-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param {ArrayLikeObject} arrays - array-like object containing one input nested array and one output nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Callback} fcn - unary callback
* @returns {void}
*
* @example
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 2, 2 ];
*
* var x = onesnd( shape );
* var y = zerosnd( shape );
*
* unarynd( [ x, y ], shape, scale );
*
* console.log( y );
* // => [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ]
*/
function unarynd( arrays, shape, fcn ) {
	return recurse( arrays[ 0 ], arrays[ 1 ], shape.length, shape, 0, fcn );
}


// EXPORTS //

module.exports = unarynd;
