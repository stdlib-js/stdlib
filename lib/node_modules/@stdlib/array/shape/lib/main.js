/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isArray = require( '@stdlib/assert/is-array' );


// FUNCTIONS //

/**
* Recursively (and eagerly) attempts to resolve nested array dimensions.
*
* @private
* @param {Array} shape - output array
* @param {Array} arr - array
* @returns {Array} shape array
*/
function recurse( shape, arr ) {
	var v = arr[ 0 ];
	if ( isArray( v ) ) {
		shape.push( v.length );
		recurse( shape, v );
	}
	return shape;
}

/**
* Recursively verifies that all nested arrays have consistent dimensions.
*
* @private
* @param {PositiveInteger} ndims - number of dimensions
* @param {Array} shape - shape array
* @param {NonNegativeInteger} d - dimension
* @param {Array} arr - array element to verify
* @param {boolean} flg - boolean indicating whether to continue recursing
* @returns {NonNegativeInteger} number of consistent dimensions
*/
function check( ndims, shape, d, arr, flg ) {
	var len;
	var v;
	var i;

	// Get the size of the current dimension:
	len = shape[ d ];

	// Ensure that each array element is an array of the same size:
	for ( i = 0; i < arr.length; i++ ) {
		v = arr[ i ];

		// If the array element is not an array or is not the same size, we have found an inconsistent dimension:
		if ( !isArray( v ) || v.length !== len ) {
			// `d` is one more than the index of the last consistent dimension and thus equal to the number of consistent dimensions:
			return d;
		}
		// Recursively examine nested elements:
		if ( flg ) {
			v = check( ndims, shape, d+1, v, d+1 < ndims-1 );
			if ( v < ndims ) {
				// Propagate the number of consistent dimensions up the recursion chain...
				return v;
			}
		}
	}
	return ndims;
}


// MAIN //

/**
* Determines (nested) array dimensions.
*
* @param {Array} arr - array
* @throws {TypeError} must provide an array
* @returns {Array} array shape
*
* @example
* var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
*
* var shape = arrayShape( arr );
* // returns [ 3, 3 ]
*
* @example
* var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ];
*
* var shape = arrayShape( arr );
* // returns [ 3 ]
*
* @example
* var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], null ];
*
* var shape = arrayShape( arr );
* // returns [ 3 ]
*/
function arrayShape( arr ) {
	var shape;
	var ndims;

	if ( !isArray( arr ) ) {
		throw new TypeError( 'invalid argument. Must provide an array. Value: `' + arr + '`.' );
	}
	// Initialize the shape/dimensions array:
	shape = [ arr.length ];

	// Eagerly determine array dimensions:
	recurse( shape, arr );
	ndims = shape.length;

	// Check that all array element dimensions are consistent:
	if ( ndims > 1 ) {
		// If `check()` returns a value less than `ndims`, trim off the inconsistent dimensions:
		shape.length = check( ndims, shape, 1, arr, ndims > 2 );
	}
	return shape;
}


// EXPORTS //

module.exports = arrayShape;
