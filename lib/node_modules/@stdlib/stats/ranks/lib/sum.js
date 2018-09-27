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
* Computes the sum of elements of an numeric array.
*
* @private
* @param {NumericArray} arr - input array
* @returns {number} sum
*
* @example
* var arr = [ 2.0, 6.0, 10.0 ];
* var out = sum( arr );
* // returns 18.0
*/
function sum( arr ) {
	var len;
	var out;
	var i;

	len = arr.length;
	out = 0.0;
	for ( i = 0; i < len; i++ ) {
		out += arr[ i ];
	}
	return out;
}


// EXPORTS //

module.exports = sum;
