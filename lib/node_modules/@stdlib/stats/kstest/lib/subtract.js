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
* Computes an element-wise subtraction.
*
* @private
* @param {number} x - scalar minuend (implicitly broadcasted to full length array)
* @param {NumericArray} arr - array of subtrahends
* @returns {NumericArray} output array
*
* @example
* var x = 3;
* var arr = [ 1, 2, 2, 3 ];
*
* var y = subtract( x, arr );
* // returns [ 2, 1, 1, 0 ]
*/
function subtract( x, arr ) {
	var len;
	var res;
	var i;

	len = arr.length;
	res = new Array( len );
	for ( i = 0; i < len; i++ ) {
		res[ i ] = x - arr[ i ];
	}

	return res;
}


// EXPORTS //

module.exports = subtract;
