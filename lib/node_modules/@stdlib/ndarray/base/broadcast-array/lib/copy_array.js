/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// MAIN /

/**
* Copies an array-like object to an array.
*
* @private
* @param {ArrayLikeObject} arr - input array
* @returns {Array} output array
*
* @example
* var arr = [ 1, 2, 3 ];
*
* var out = copyArray( arr );
* // returns [ 1, 2, 3 ]
*
* var bool = ( out === arr );
* // returns false
*/
function copyArray( arr ) {
	var out;
	var i;

	out = [];
	for ( i = 0; i < arr.length; i++ ) {
		out.push( arr[ i ] );
	}
	return out;
}


// EXPORTS //

module.exports = copyArray;
