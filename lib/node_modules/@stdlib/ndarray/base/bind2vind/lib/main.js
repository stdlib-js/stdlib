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
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Converts a linear index in an underlying data buffer to a linear index in an array view.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - stride array
* @param {NonNegativeInteger} offset - location of the first indexed value **based** on the stride array
* @param {string} order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param {integer} idx - linear index in an underlying data buffer
* @param {string} mode - specifies how to handle a linear index which exceeds array dimensions
* @throws {RangeError} linear index must not exceed array dimensions
* @returns {NonNegativeInteger} linear index in an array view
*
* @example
* var shape = [ 3, 3 ];
* var strides = [ -3, 1 ];
* var offset = 6;
* var order = 'row-major';
* var mode = 'throw';
*
* var ind = bind2vind( shape, strides, offset, order, 7, mode );
* // returns 1
*/
function bind2vind( shape, strides, offset, order, idx, mode ) {
	var ndims;
	var len;
	var ind;
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
	// Trivial case where the offset into the underlying data buffer is 0...
	if ( offset === 0 ) {
		return idx;
	}
	// The approach which follows is to resolve a buffer index to its subscripts and then plug the subscripts into the standard formula for computing the linear index in the array view (i.e., where all strides are positive and offset is 0)...
	ind = 0;
	if ( order === 'column-major' ) {
		for ( i = ndims-1; i >= 0; i-- ) {
			s = strides[ i ];
			if ( s < 0 ) {
				k = trunc( idx/s );
				idx -= k * s;
				k += shape[ i ] - 1;
			} else {
				k = trunc( idx/s );
				idx -= k * s;
			}
			ind += k * abs( s );
		}
		return ind;
	}
	// Case: row-major
	for ( i = 0; i < ndims; i++ ) {
		s = strides[ i ];
		if ( s < 0 ) {
			k = trunc( idx/s );
			idx -= k * s;
			k += shape[ i ] - 1;
		} else {
			k = trunc( idx/s );
			idx -= k * s;
		}
		ind += k * abs( s );
	}
	return ind;
}


// EXPORTS //

module.exports = bind2vind;
