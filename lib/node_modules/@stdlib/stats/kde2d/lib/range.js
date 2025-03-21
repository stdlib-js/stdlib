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
* Returns the arithmetic range.
*
* @private
* @param {ndarrayLike} arr - input array
* @param {number} j - column index for which to get the range
* @param {number} len - number of rows in arr
* @returns {NumericArray} arithmetic range
*/
function range( arr, j, len ) {
	var min;
	var max;
	var x;
	var i;

	min = arr.get( 0, j );
	max = min;
	for ( i = 1; i < len; i++ ) {
		x = arr.get( i, j );
		if ( x < min ) {
			min = x;
		} else if ( x > max ) {
			max = x;
		}
	}
	return [ min, max ];
}


// EXPORTS //

module.exports = range;
