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
* Recursively applies a binary callback.
*
* @private
* @param {ArrayLikeObject} x - input array
* @param {ArrayLikeObject} y - input array
* @param {ArrayLikeObject} z - output array
* @param {NonNegativeInteger} ndims - number of dimensions
* @param {NonNegativeIntegerArray} shape - array shape
* @param {NonNegativeInteger} dim - dimension index
* @param {Callback} fcn - binary callback
* @returns {void}
*/
function recurse( x, y, z, ndims, shape, dim, fcn ) {
	var S;
	var d;
	var i;

	S = shape[ dim ];

	// Check whether we've reached the innermost dimension:
	d = dim + 1;

	if ( d === ndims ) {
		// Apply the provided callback...
		for ( i = 0; i < S; i++ ) {
			z[ i ] = fcn( x[ i ], y[ i ] );
		}
		return;
	}
	// Continue recursing into the nested arrays...
	for ( i = 0; i < S; i++ ) {
		recurse( x[ i ], y[ i ], z[ i ], ndims, shape, d, fcn );
	}
}


// MAIN //

/**
* Applies a binary callback to elements in two n-dimensional nested input arrays and assigns results to elements in an n-dimensional nested output array.
*
* ## Notes
*
* -   The function assumes that the input and output arrays have the same shape.
*
* @param {ArrayLikeObject} arrays - array-like object containing two input nested arrays and one output nested array
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Callback} fcn - binary callback
* @returns {void}
*
* @example
* var add = require( '@stdlib/number/float64/base/add' );
* var onesnd = require( '@stdlib/array/base/onesnd' );
* var zerosnd = require( '@stdlib/array/base/zerosnd' );
*
* var shape = [ 2, 2 ];
*
* var x = onesnd( shape );
* var y = onesnd( shape );
* var z = zerosnd( shape );
*
* binarynd( [ x, y, z ], shape, add );
*
* console.log( z );
* // => [ [ 2.0, 2.0 ], [ 2.0, 2.0 ] ]
*/
function binarynd( arrays, shape, fcn ) {
	return recurse( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], shape.length, shape, 0, fcn ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = binarynd;
