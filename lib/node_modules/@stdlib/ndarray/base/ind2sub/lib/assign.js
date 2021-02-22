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

var trunc = require( '@stdlib/math/base/special/trunc' );


// MAIN //

/**
* Converts a linear index to an array of subscripts.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - stride array
* @param {NonNegativeInteger} offset - location of the first indexed value **based** on the stride array
* @param {string} order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param {integer} idx - linear index
* @param {string} mode - specifies how to handle a linear index which exceeds array dimensions
* @param {(Array|TypedArray|Object)} out - destination object
* @throws {RangeError} linear index must not exceed array dimensions
* @returns {(Array|TypedArray|Object)} subscripts
*
* @example
* var shape = [ 3, 3, 3 ];
* var strides = [ 9, 6, 1 ];
* var offset = 0;
* var order = 'row-major';
*
* var s = [ 0, 0, 0 ];
* var out = ind2sub( shape, strides, offset, order, 17, 'throw', s );
* // returns [ 1, 2, 2 ]
*
* var bool = ( out === s );
* // returns true
*/
function ind2sub( shape, strides, offset, order, idx, mode, out ) {
	var ndims;
	var len;
	var k;
	var s;
	var i;

	ndims = shape.length;
	len = 1;
	for ( i = 0; i < ndims; i++ ) {
		len *= shape[ i ];
	}
	if ( mode === 'clamp' ) {
		if ( idx < 0 ) {
			idx = 0;
		} else if ( idx >= len ) {
			idx = len - 1;
		}
	} else if ( mode === 'wrap' ) {
		if ( idx < 0 ) {
			idx += len; // slight optimization to avoid modulo arithmetic when |idx| <= len
			if ( idx < 0 ) {
				idx %= len;
				if ( idx !== 0 ) {
					idx += len;
				}
			}
		} else if ( idx >= len ) {
			idx -= len; // slight optimization to avoid modulo arithmetic when len < idx <= 2*len
			if ( idx >= len ) {
				idx %= len;
			}
		}
	} else if ( idx < 0 || idx >= len ) {
		throw new RangeError( 'invalid argument. Linear index must not exceed array dimensions. Number of array elements: ' + len + '. Value: `' + idx + '`.' );
	}
	if ( offset === 0 ) {
		if ( order === 'column-major' ) {
			for ( i = 0; i < ndims; i++ ) {
				s = idx % shape[ i ];
				idx -= s;
				idx /= shape[ i ];
				out[ i ] = s;
			}
			return out;
		}
		// Case: row-major
		for ( i = ndims-1; i >= 0; i-- ) {
			s = idx % shape[ i ];
			idx -= s;
			idx /= shape[ i ];
			out[ i ] = s;
		}
		return out;
	}
	if ( order === 'column-major' ) {
		for ( i = ndims-1; i >= 0; i-- ) {
			s = strides[ i ];
			if ( s < 0 ) {
				k = trunc( idx/s );
				idx -= k * s;
				out[ i ] = shape[ i ] - 1 + k;
			} else {
				k = trunc( idx/s );
				idx -= k * s;
				out[ i ] = k;
			}
		}
		return out;
	}
	// Case: row-major
	for ( i = 0; i < ndims; i++ ) {
		s = strides[ i ];
		if ( s < 0 ) {
			k = trunc( idx/s );
			idx -= k * s;
			out[ i ] = shape[ i ] - 1 + k;
		} else {
			k = trunc( idx/s );
			idx -= k * s;
			out[ i ] = k;
		}
	}
	return out;
}


// EXPORTS //

module.exports = ind2sub;
