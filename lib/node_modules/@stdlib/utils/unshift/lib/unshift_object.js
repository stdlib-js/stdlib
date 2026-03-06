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
* Adds one or more elements to the beginning of an array-like object.
*
* @private
* @param {Object} obj - input array-like object
* @param {Array} items - items to add
* @returns {Object} input object
*
* @example
* var obj = {
*     'length': 2,
*     '0': 1.0,
*     '1': 2.0
* };
*
* obj = unshift( obj, [ 3.0, 4.0 ] );
* // returns { 'length': 4, '0': 3.0, '1': 4.0, '2': 1.0, '3': 2.0 }
*/
function unshift( obj, items ) {
	var len;
	var n;
	var i;

	len = obj.length;
	n = items.length;

	// Shift all existing elements to the right...
	for ( i = len-1; i >= 0; i-- ) {
		obj[ i+n ] = obj[ i ];
	}
	// Add new elements...
	for ( i = 0; i < n; i++ ) {
		obj[ i ] = items[ i ];
	}
	obj.length = len + n;
	return obj;
}


// EXPORTS //

module.exports = unshift;
