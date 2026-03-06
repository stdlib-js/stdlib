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
* Returns a boolean indicating if an array is row-major based on a provided stride array.
*
* @param {IntegerArray} strides - stride array
* @returns {boolean} boolean indicating if an array is row-major
*
* @example
* var bool = isRowMajor( [ 2, 1 ] );
* // returns true
*
* bool = isRowMajor( [ 1, 2 ] );
* // returns false
*/
function isRowMajor( strides ) {
	var ndims;
	var s1;
	var s2;
	var i;

	ndims = strides.length;
	if ( ndims === 0 ) {
		return false;
	}
	s1 = abs( strides[ 0 ] );
	for ( i = 1; i < ndims; i++ ) {
		s2 = abs( strides[ i ] );
		if ( s2 > s1 ) {
			return false;
		}
		s1 = s2;
	}
	return true;
}


// EXPORTS //

module.exports = isRowMajor;
