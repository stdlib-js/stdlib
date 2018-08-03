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
* Converts subscripts to a linear index.
*
* ## Notes
*
* -   The function accepts the following "modes":
*
*     -   `throw`: throws an error when a subscript exceeds array dimensions.
*     -   `wrap`: wrap around subscripts exceeding array dimensions using modulo arithmetic.
*     -   `clamp`: set subscripts exceeding array dimensions to either `0` (minimum index) or the maximum index along a particular dimension.
*
* -   When provided fewer modes than dimensions, the function recycles modes using modulo arithmetic.
*
* -   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function treats subscripts as mapping to a linear index in an underlying data buffer for the array, thus returning a linear index from the perspective of that buffer. If an `offset` is equal to `0`, the function treats subscripts as mapping to a linear index in an array view, thus returning a linear index from the perspective of that view.
*
*     ```text
*     Dims: 2x2
*     Buffer: [ 1, 2, 3, 4 ]
*
*     View = [ a00, a01,
*              a10, a11 ]
*
*     Strides: 2,1
*     Offset: 0
*
*     View = [ 1, 2,
*              3, 4 ]
*
*     Strides: 2,-1
*     Offset: 1
*
*     View = [ 2, 1,
*              4, 3 ]
*
*     Strides: -2,1
*     Offset: 2
*
*     View = [ 3, 4,
*              1, 2 ]
*
*     Strides: -2,-1
*     Offset: 3
*
*     View = [ 4, 3,
*              2, 1 ]
*     ```
*
*     ```javascript
*     var shape = [ 2, 2 ];
*     var strides = [ -2, 1 ];
*     var offset = 2;
*     var mode = [ 'throw' ];
*
*     // From the perspective of a view...
*     var idx = sub2ind( shape, strides, 0, 0, 0, mode );
*     // returns 0
*
*     idx = sub2ind( shape, strides, 0, 0, 1, mode );
*     // returns 1
*
*     idx = sub2ind( shape, strides, 0, 1, 0, mode );
*     // returns 2
*
*     idx = sub2ind( shape, strides, 0, 1, 1, mode );
*     // returns 3
*
*     // From the perspective of an underlying buffer...
*     idx = sub2ind( shape, strides, offset, 0, 0, mode );
*     // returns 2
*
*     idx = sub2ind( shape, strides, offset, 0, 1, mode );
*     // returns 3
*
*     idx = sub2ind( shape, strides, offset, 1, 0, mode );
*     // returns 0
*
*     idx = sub2ind( shape, strides, offset, 1, 1, mode );
*     // returns 1
*     ```
*
*     In short, from the perspective of a view, view data is always ordered.
*
*
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - stride array
* @param {NonNegativeInteger} offset - location of the first indexed value **based** on the stride array
* @param {...integer} i - subscripts
* @param {StringArray} mode - specifies how to handle subscripts which exceed array dimensions
* @throws {RangeError} must provide subscripts which do not exceed array dimensions
* @returns {NonNegativeInteger} linear index
*
* @example
* var shape = [ 3, 3, 3 ];
* var strides = [ 9, 3, 1 ];
* var offset = 0;
* var mode = [ 'throw' ]
*
* var idx = sub2ind( shape, strides, offset, 1, 2, 2, mode );
* // returns 17
*/
function sub2ind() {
	var strides;
	var offset;
	var nmodes;
	var shape;
	var ndims;
	var modes;
	var mode;
	var idx;
	var m;
	var s;
	var j;
	var i;

	shape = arguments[ 0 ];
	strides = arguments[ 1 ];
	offset = arguments[ 2 ];
	ndims = shape.length;
	modes = arguments[ 3+ndims ]; // last argument
	nmodes = modes.length;
	idx = offset;
	for ( i = 0; i < ndims; i++ ) {
		m = shape[ i ];
		j = arguments[ i+3 ];
		mode = modes[ i%nmodes ];
		if ( mode === 'clamp' ) {
			if ( j < 0 ) {
				j = 0;
			} else if ( j >= m ) {
				j = m - 1;
			}
		} else if ( mode === 'wrap' ) {
			if ( j < 0 ) {
				j += m; // slight optimization to avoid modulo arithmetic when |j| <= m
				if ( j < 0 ) {
					j %= m;
					if ( j !== 0 ) {
						j += m;
					}
				}
			} else if ( j >= m ) {
				j -= m; // slight optimization to avoid modulo arithmetic when m < j <= 2m
				if ( j >= m ) {
					j %= m;
				}
			}
		} else if ( j < 0 || j >= m ) { // mode === 'throw'
			throw new RangeError( 'invalid argument. Subscripts must not exceed array dimensions. Subscript: ' + i + '. Value: `' + j + '`.' );
		}
		s = strides[ i ];

		// Check if array view...
		if ( s < 0 && offset === 0 ) {
			idx -= j * s; // increments idx
		} else {
			idx += j * s; // may increment or decrement idx
		}
	}
	return idx;
}


// EXPORTS //

module.exports = sub2ind;
