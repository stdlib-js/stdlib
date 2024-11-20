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
* Copies the contents of array-like value to a new array.
*
* @private
* @param {ArrayLike} arr - input array
* @param {NonNegativeInteger} len - array length
* @returns {Array} output array
*
* @example
* var arr = [ 1.0, 2.0, 3.0 ];
*
* var out = copy( arr, arr.length );
* // returns [ 1.0, 2.0, 3.0 ]
*
* var bool = ( arr === out );
* // returns false
*/
function copy( arr, len ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < len; i++ ) {
		out.push( arr[ i ] );
	}
	return out;
}


// EXPORTS //

module.exports = copy;
