/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Returns a boolean indicating if a strided array-like object contains a provided value.
*
* @private
* @param {NonNegativeInteger} N - number of elements to search
* @param {ArrayLike} arr - array to search
* @param {integer} stride - index stride
* @param {NonNegativeInteger} offset - index offset
* @param {*} value - search value
* @returns {boolean} boolean indicating if an array-like object contains a provided value
*
* @example
* var arr = [ 1, 2, 3 ];
*
* var bool = contains( arr.length, arr, 1, 0, 2 );
* // returns true
*
* bool = contains( arr.length, arr, 1, 0, 4 );
* // returns false
*/
function contains( N, arr, stride, offset, value ) {
	var idx;
	var i;

	idx = offset;
	for ( i = 0; i < N; i++ ) {
		if ( arr[ idx ] === value ) {
			return true;
		}
		idx += stride;
	}
	return false;
}


// EXPORTS //

module.exports = contains;
