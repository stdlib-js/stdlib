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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Tests if an array contains distinct elements.
*
* @private
* @param {Array} arr - input array
* @returns {boolean} boolean indicating if an array contains distinct elements
*/
function hasDistinctElements( arr ) {
	var obj;
	var i;

	obj = {};
	for ( i = 0; i < arr.length; i++ ) {
		if ( hasOwnProp( obj, arr[ i ] ) ) {
			return false;
		}
		obj[ arr[i] ] = true;
	}
	return true;
}


// EXPORTS //

module.exports = hasDistinctElements;
