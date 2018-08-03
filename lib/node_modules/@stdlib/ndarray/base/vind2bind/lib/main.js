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

// MAIN //

/**
* Converts a linear index in an array view to a linear index in an underlying data buffer.
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - stride array
* @param {NonNegativeInteger} offset - location of the first indexed value **based** on the stride array
* @param {string} order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param {integer} idx - linear index in an array view
* @param {string} mode - specifies how to handle a linear index which exceeds array dimensions
* @throws {RangeError} linear index must not exceed array dimensions
* @returns {NonNegativeInteger} linear index in an underlying data buffer
*
* @example
* var shape = [ 3, 3 ];
* var strides = [ -3, 1 ];
* var offset = 6;
* var order = 'row-major';
* var mode = 'throw';
*
* var ind = vind2bind( shape, strides, offset, order, 1, mode );
* // returns 7
*/
function vind2bind( shape, strides, offset, order, idx, mode ) {
	var ndims;
	var len;
	var ind;
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
	// The approach which follows is to resolve a view index to its subscripts and then plug the subscripts into the standard formula for computing the linear index in the underlying data buffer...
	ind = offset;
	if ( order === 'column-major' ) {
		for ( i = 0; i < ndims; i++ ) {
			s = idx % shape[ i ];
			idx -= s;
			idx /= shape[ i ];
			ind += s * strides[ i ];
		}
		return ind;
	}
	// Case: row-major
	for ( i = ndims-1; i >= 0; i-- ) {
		s = idx % shape[ i ];
		idx -= s;
		idx /= shape[ i ];
		ind += s * strides[ i ];
	}
	return ind;
}


// EXPORTS //

module.exports = vind2bind;
