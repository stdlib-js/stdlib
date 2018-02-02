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

var recurse = require( './recurse.js' );


// MAIN //

/**
* Converts an ndarray buffer to a generic array (which may include nested arrays).
*
* @param {(ArrayLikeObject|TypedArray|Buffer)} buffer - data buffer
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - array strides
* @param {NonNegativeInteger} offset - index offset
* @param {string} order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns {(EmptyArray|Array|Array<Array>)} array (which may include nested arrays)
*
* @example
* var buffer = [ 1, 2, 3, 4 ];
* var shape = [ 2, 2 ];
* var order = 'row-major';
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var out = ndarray2array( buffer, shape, strides, offset, order );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/
function ndarray2array( buffer, shape, strides, offset, order ) {
	var i;
	if ( shape.length === 0 ) {
		return [];
	}
	for ( i = 0; i < shape.length; i++ ) {
		if ( shape[ i ] === 0 ) {
			return [];
		}
	}
	return recurse( buffer, shape, strides, offset, order, 0 );
}


// EXPORTS //

module.exports = ndarray2array;
