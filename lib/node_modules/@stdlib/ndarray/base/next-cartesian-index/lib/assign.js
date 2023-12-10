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

// VARIABLES //

var ROW_MAJOR = 'row-major';


// FUNCTIONS //

/**
* Returns the next Cartesian index (row-major).
*
* @private
* @param {NonNegativeInteger} ndims - number of dimensions
* @param {NonNegativeIntegerArray} shape - array shape
* @param {NonNegativeIntegerArray} idx - current dimension indices
* @param {NonNegativeInteger} dim - index of the dimension from which to start incrementing (inclusive)
* @param {(Array|TypedArray|Object)} out - output array
* @returns {(Array|TypedArray|Object)} output array
*/
function rowmajor( ndims, shape, idx, dim, out ) {
	var i;
	var j;

	// Set dimension indices which are skipped...
	for ( i = ndims-1; i > dim; i-- ) {
		out[ i ] = idx[ i ];
	}
	// Search for the first dimension in which we don't have to "carry the one"...
	for ( i = dim; i >= 0; i-- ) {
		j = ( idx[ i ] + 1 ) % shape[ i ];
		out[ i ] = j;

		// If the current index value is greater than zero, we can continue iterating within the current sub-array...
		if ( j > 0 ) {
			break;
		}
	}
	// Set dimension indices which did not get updated...
	for ( i -= 1; i >= 0; i-- ) {
		out[ i ] = idx[ i ];
	}
	return out;
}

/**
* Returns the next Cartesian index (column-major).
*
* @private
* @param {NonNegativeInteger} ndims - number of dimensions
* @param {NonNegativeIntegerArray} shape - array shape
* @param {NonNegativeIntegerArray} idx - current dimension indices
* @param {NonNegativeInteger} dim - index of the dimension from which to start incrementing (inclusive)
* @param {(Array|TypedArray|Object)} out - output array
* @returns {(Array|TypedArray|Object)} output array
*/
function columnmajor( ndims, shape, idx, dim, out ) {
	var i;
	var j;

	// Set dimension indices which are skipped...
	for ( i = 0; i < dim; i++ ) {
		out[ i ] = idx[ i ];
	}
	// Search for the first dimension in which we don't have to "carry the one"...
	for ( i = dim; i < ndims; i++ ) {
		j = ( idx[ i ] + 1 ) % shape[ i ];
		out[ i ] = j;

		// If the current index value is greater than zero, we can continue iterating within the current sub-array...
		if ( j > 0 ) {
			break;
		}
	}
	// Set dimension indices which did not get updated...
	for ( i += 1; i < ndims; i++ ) {
		out[ i ] = idx[ i ];
	}
	return out;
}


// MAIN //

/**
* Returns the next Cartesian index (i.e., set of subscripts/dimension indices) and assigns results to a provided output array.
*
* ## Notes
*
* -   The function does not check whether the current index is the "last" index. Instead, if the function is provided dimension indices corresponding to the last element, the function will cycle back to the "first" index.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {string} order - index iteration order
* @param {NonNegativeIntegerArray} idx - current dimension indices
* @param {integer} dim - index of the dimension from which to start incrementing (inclusive)
* @param {(Array|TypedArray|Object)} out - output array
* @returns {(Array|TypedArray|Object|null)} output array (or null)
*
* @example
* var shape = [ 12 ];
* var idx = nextCartesianIndex( shape, 'row-major', [ 2 ], 0, [ 0 ] );
* // returns [ 3 ]
*
* @example
* var shape = [ 2, 2, 2 ];
*
* var out = [ 0, 0, 0 ];
* var idx = nextCartesianIndex( shape, 'row-major', [ 0, 0, 1 ], -1, out );
* // returns [ 0, 1, 0 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1, out );
* // returns [ 0, 1, 1 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1, out );
* // returns [ 1, 0, 0 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1, out );
* // returns [ 1, 0, 1 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1, out );
* // returns [ 1, 1, 0 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1, out );
* // returns [ 1, 1, 1 ]
*
* @example
* var shape = [];
* var idx = nextCartesianIndex( shape, 'row-major', [], 0, [] );
* // returns null
*
* @example
* var shape = [ 12 ];
* var idx = nextCartesianIndex( shape, 'row-major', [ 2 ], -10, [ 0 ] );
* // returns null
*
* @example
* var shape = [ 12 ];
* var idx = nextCartesianIndex( shape, 'column-major', [ 2 ], 10, [ 0 ] );
* // returns null
*/
function nextCartesianIndex( shape, order, idx, dim, out ) {
	var ndims = shape.length;
	if ( ndims === 0 ) {
		return null;
	}
	if ( dim < 0 ) {
		dim += ndims;
		if ( dim < 0 ) {
			// Out-of-bounds:
			return null;
		}
	} else if ( dim >= ndims ) {
		// Out-of-bounds:
		return null;
	}
	if ( order === ROW_MAJOR ) {
		return rowmajor( ndims, shape, idx, dim, out );
	}
	// order === 'column-major'
	return columnmajor( ndims, shape, idx, dim, out );
}


// EXPORTS //

module.exports = nextCartesianIndex;
