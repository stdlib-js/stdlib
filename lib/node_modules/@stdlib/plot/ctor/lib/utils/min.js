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

/**
* Computes a minimum value.
*
* @private
* @param {NumericArray} arr - input array
* @returns {(number|null)} minimum value or null
*/
function getMin( arr ) {
	var min;
	var i;
	if ( arr.length === 0 ) {
		return null;
	}
	min = arr[ 0 ];
	for ( i = 1; i < arr.length; i++ ) {
		if ( arr[ i ] < min ) {
			min = arr[ i ];
		}
	}
	return min;
}


// EXPORTS //

module.exports = getMin;
