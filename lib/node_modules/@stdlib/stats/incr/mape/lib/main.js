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

var incrmean = require( '@stdlib/stats/incr/mean' );
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes the mean absolute percentage error.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmape();
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0, 3.0 );
* // returns ~33.33
*
* m = accumulator( 5.0, 2.0 );
* // returns ~91.67
*
* m = accumulator();
* // returns ~91.67
*/
function incrmape() {
	var mean = incrmean();
	return accumulator;

	/**
	* If provided input values, the accumulator function returns an updated mean absolute percentage error. If not provided input values, the accumulator function returns the current mean absolute percentage error.
	*
	* @private
	* @param {number} [f] - input value
	* @param {number} [a] - input value
	* @returns {(number|null)} mean absolute percentage error or null
	*/
	function accumulator( f, a ) {
		if ( arguments.length === 0 ) {
			return mean();
		}
		return mean( 100.0 * abs( (a-f)/a ) );
	}
}


// EXPORTS //

module.exports = incrmape;
