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
* Recursive fills an array.
*
* @private
* @param {NonNegativeInteger} ndims - number of dimensions
* @param {NonNegativeIntegerArray} shape - array shape
* @param {NonNegativeInteger} dim - dimension index
* @param {NonNegativeIntegerArray} indices - outer array element indices
* @param {Array} out - output array
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback execution context
* @returns {Array} output array
*/
function recurse( ndims, shape, dim, indices, out, clbk, thisArg ) {
	var idx;
	var FLG;
	var S;
	var d;
	var i;

	// Check whether we're filling the last dimension:
	d = dim + 1;
	FLG = ( d === ndims );

	S = shape[ dim ];
	for ( i = 0; i < S; i++ ) {
		idx = indices.slice(); // we explicitly copy in order to avoid potential mutation when calling `clbk`
		idx.push( i );
		if ( FLG ) {
			out.push( clbk.call( thisArg, idx ) );
		} else {
			out.push( recurse( ndims, shape, d, idx, [], clbk, thisArg ) );
		}
	}
	return out;
}


// MAIN //

/**
* Returns a filled two-dimensional nested array according to a provided callback function.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback execution context
* @returns {Array} filled array
*
* @example
* var constantFunction = require( '@stdlib/utils/constant-function' );
*
* var out = filledndBy( [ 3, 1 ], constantFunction( 'beep' ) );
* // returns [ [ 'beep' ], [ 'beep' ], [ 'beep' ] ]
*/
function filledndBy( shape, clbk, thisArg ) {
	return recurse( shape.length, shape, 0, [], [], clbk, thisArg );
}


// EXPORTS //

module.exports = filledndBy;
