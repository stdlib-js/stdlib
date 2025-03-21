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

// FUNCTIONS //

/**
* Generates a stride array from an array shape (row-major).
*
* @private
* @param {NonNegativeIntegerArray} shape - array shape
* @param {(Array|TypedArray|Object)} out - output object
* @returns {(Array|TypedArray|Object)} array strides
*/
function rowmajor( shape, out ) {
	var ndims;
	var s;
	var i;

	ndims = shape.length;
	s = 1;
	for ( i = ndims-1; i >= 0; i-- ) {
		out[ i ] = s;
		s *= shape[ i ];
	}
	return out;
}

/**
* Generates a stride array from an array shape (column-major).
*
* @private
* @param {NonNegativeIntegerArray} shape - array shape
* @param {(Array|TypedArray|Object)} out - output object
* @returns {(Array|TypedArray|Object)} array strides
*/
function columnmajor( shape, out ) {
	var s;
	var i;

	s = 1;
	for ( i = 0; i < shape.length; i++ ) {
		out[ i ] = s;
		s *= shape[ i ];
	}
	return out;
}


// MAIN //

/**
* Generates a stride array from an array shape.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {string} order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param {(Array|TypedArray|Object)} out - output object
* @returns {(Array|TypedArray|Object)} array strides
*
* @example
* var strides = [ 0, 0 ];
*
* var out = shape2strides( [ 3, 2 ], 'row-major', strides );
* // returns [ 2, 1 ]
*
* var bool = ( out === strides );
* // returns true
*
* out = shape2strides( [ 3, 2 ], 'column-major', strides );
* // returns [ 1, 3 ]
*/
function shape2strides( shape, order, out ) {
	if ( order === 'column-major' ) {
		return columnmajor( shape, out );
	}
	return rowmajor( shape, out );
}


// EXPORTS //

module.exports = shape2strides;
