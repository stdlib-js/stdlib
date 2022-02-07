/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Generates a linearly spaced numeric array whose elements increment by 1.
*
* @param {number} x1 - first array value
* @param {number} x2 - array element bound
* @returns {Array} linearly spaced numeric array
*
* @example
* var arr = unitspace( 0, 6 );
* // returns [ 0, 1, 2, 3, 4, 5 ]
*/
function unitspace( x1, x2 ) {
	var arr;
	var len;
	var i;

	len = x2 - x1;
	if ( len <= 1 ) {
		return [ x1 ];
	}
	arr = [ x1 ];
	for ( i = 1; i < len; i++ ) {
		arr.push( x1 + i );
	}
	return arr;
}


// EXPORTS //

module.exports = unitspace;
