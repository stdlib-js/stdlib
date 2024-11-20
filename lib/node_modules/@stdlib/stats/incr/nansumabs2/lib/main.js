/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var incrsumabs2 = require( '@stdlib/stats/incr/sumabs2' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a sum of squared absolute values, ignoring `NaN` values.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrnansumabs2();
*
* var sum = accumulator();
* // returns null
*
* sum = accumulator( 2.0 );
* // returns 4.0
*
* sum = accumulator( NaN );
* // returns 4.0
*
* sum = accumulator( -5.0 );
* // returns 29.0
*
* sum = accumulator();
* // returns 29.0
*/
function incrnansumabs2() {
	var sum = incrsumabs2();
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated sum. If not provided a value, the accumulator function returns the current sum.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} sum or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 || isnan( x ) ) {
			return sum();
		}
		return sum( x );
	}
}


// EXPORTS //

module.exports = incrnansumabs2;
