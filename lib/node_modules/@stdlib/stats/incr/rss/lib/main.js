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

var incrsum = require( '@stdlib/stats/incr/sum' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes the residual sum of squares.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrrss();
*
* var r = accumulator();
* // returns null
*
* r = accumulator( 2.0, 3.0 );
* // returns 1.0
*
* r = accumulator( -5.0, 2.0 );
* // returns 50.0
*
* r = accumulator();
* // returns 50.0
*/
function incrrss() {
	var sum = incrsum();
	return accumulator;

	/**
	* If provided input values, the accumulator function returns an updated residual sum of squares. If not provided input values, the accumulator function returns the current residual sum of squares.
	*
	* @private
	* @param {number} [x] - input value
	* @param {number} [y] - input value
	* @returns {(number|null)} residual sum of squares or null
	*/
	function accumulator( x, y ) {
		var r;
		if ( arguments.length === 0 ) {
			return sum();
		}
		r = y - x;
		return sum( r*r );
	}
}


// EXPORTS //

module.exports = incrrss;
