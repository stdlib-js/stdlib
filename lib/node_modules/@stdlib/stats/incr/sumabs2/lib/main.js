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
* Returns an accumulator function which incrementally computes a sum of squared absolute values.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrsumabs2();
*
* var sum = accumulator();
* // returns null
*
* sum = accumulator( 2.0 );
* // returns 4.0
*
* sum = accumulator( -5.0 );
* // returns 29.0
*
* sum = accumulator();
* // returns 29.0
*/
function incrsumabs2() {
	var sum = 0.0;
	var FLG;
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated sum. If not provided a value, the accumulator function returns the current sum.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} sum or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return ( FLG ) ? sum : null;
		}
		FLG = true;
		sum += x * x;
		return sum;
	}
}


// EXPORTS //

module.exports = incrsumabs2;
