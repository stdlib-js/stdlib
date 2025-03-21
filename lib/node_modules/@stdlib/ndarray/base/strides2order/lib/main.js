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

var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Determines the order of a multidimensional array based on a provided stride array.
*
* @param {IntegerArray} strides - stride array
* @returns {integer} order
*
* @example
* var strides2order = require( '@stdlib/ndarray/base/strides2order' );
*
* var order = strides2order( [ 2, 1 ] );
* // returns 1
*
* order = strides2order( [ 1, 2 ] );
* // returns 2
*
* order = strides2order( [ 1, 1, 1 ] );
* // returns 3
*
* order = strides2order( [ 2, 3, 1 ] );
* // returns 0
*/
function strides2order( strides ) {
	var column;
	var ndims;
	var row;
	var s1;
	var s2;
	var i;

	ndims = strides.length;
	if ( ndims === 0 ) {
		return 0|0; // 'none'
	}
	column = true;
	row = true;

	s1 = abs( strides[ 0 ] );
	for ( i = 1; i < ndims; i++ ) {
		s2 = abs( strides[ i ] );
		if ( column && s2 < s1 ) {
			column = false;
		} else if ( row && s2 > s1 ) {
			row = false;
		}
		if ( row || column ) {
			s1 = s2;
		} else {
			return 0|0; // 'none'
		}
	}
	if ( row && column ) {
		return 3|0; // 'both'
	}
	if ( row ) {
		return 1|0; // 'row-major'
	}
	return 2|0; // 'column-major'
}


// EXPORTS //

module.exports = strides2order;
