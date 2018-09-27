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
* Returns the maximum value.
*
* @private
* @param {ndarrayLike} arr - input array
* @param {number} j - column index for which to get the maximum
* @param {number} len - number of rows in arr
* @returns {number} maximum value
*/
function max( arr, j, len ) {
	var max;
	var x;
	var i;

	max = arr.get( 0, j );
	for ( i = 1; i < len; i++ ) {
		x = arr.get( i, j );
		if ( x > max ) {
			max = x;
		}
	}
	return max;
}


// EXPORTS //

module.exports = max;
