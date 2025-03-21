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
* Returns a function to compute the hypotenuse using the alpha max plus beta min algorithm.
*
* @private
* @param {number} alpha - alpha
* @param {number} beta - beta
* @returns {Function} function to compute the hypotenuse
*
* @example
* var fcn = wrap( 1.0, 0.5 );
* // returns <Function>
*/
function wrap( alpha, beta ) {
	return hypot;

	/**
	* Computes the hypotenuse using the alpha max plus beta min algorithm.
	*
	* @private
	* @param {NonNegativeNumber} x - number
	* @param {NonNegativeNumber} y - number
	* @returns {number} hypotenuse
	*
	* @example
	* var h = hypot( 5.0, 12.0 );
	* // returns <number>
	*/
	function hypot( x, y ) {
		if ( x > y ) {
			return (alpha*x) + (beta*y);
		}
		return (beta*x) + (alpha*y);
	}
}


// EXPORTS //

module.exports = wrap;
