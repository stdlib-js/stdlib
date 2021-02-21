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
* @returns {Array} array strides
*/
function rowmajor( shape ) {
	var ndims;
	var out;
	var s;
	var i;

	ndims = shape.length;
	out = [];
	for ( i = 0; i < ndims; i++ ) {
		out.push( 0 );
	}
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
* @returns {Array} array strides
*/
function columnmajor( shape ) {
	var out;
	var s;
	var i;

	out = [];
	s = 1;
	for ( i = 0; i < shape.length; i++ ) {
		out.push( s );
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
* @returns {Array} array strides
*
* @example
* var s = shape2strides( [ 3, 2 ], 'row-major' );
* // returns [ 2, 1 ]
*
* s = shape2strides( [ 3, 2 ], 'column-major' );
* // returns [ 1, 3 ]
*/
function shape2strides( shape, order ) {
	if ( order === 'column-major' ) {
		return columnmajor( shape );
	}
	return rowmajor( shape );
}


// EXPORTS //

module.exports = shape2strides;
