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
* Calculates the dot product of two vectors.
*
* @private
* @param {NumericArray} x - first vector
* @param {NumericArray} y - second vector
* @returns {number} dot product
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var y = [ 1.0, 2.0, 2.0 ];
*
* var ret = dot( x, y );
* // returns 11.0
*/
function dot( x, y ) {
	var len = x.length;
	var ret = 0;
	var i;

	for ( i = 0; i < len; i++ ) {
		ret += x[ i ] * y[ i ];
	}
	return ret;
}


// EXPORTS //

module.exports = dot;
