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

// FUNCTIONS //

/**
* Appends a list of elements to a provided array.
*
* @private
* @param {Array} arr - array to which to append
* @param {Array} list - list of items to append
* @returns {Array} input array
*/
function append( arr, list ) {
	var i;
	for ( i = 0; i < list.length; i++ ) {
		arr.push( list[ i ] );
	}
	return arr;
}


// EXPORTS //

module.exports = append;
