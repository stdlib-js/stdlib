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

var sqrt = require( '@stdlib/math/base/special/sqrt' );
var incrmean = require( '@stdlib/stats/incr/mean' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes the root mean squared error.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrrmse();
*
* var r = accumulator();
* // returns null
*
* r = accumulator( 2.0, 3.0 );
* // returns 1.0
*
* r = accumulator( -5.0, 2.0 );
* // returns 5.0
*
* r = accumulator();
* // returns 5.0
*/
function incrrmse() {
	var mean = incrmean();
	return accumulator;

	/**
	* If provided input values, the accumulator function returns an updated root mean squared error. If not provided input values, the accumulator function returns the current root mean squared error.
	*
	* @private
	* @param {number} [x] - input value
	* @param {number} [y] - input value
	* @returns {(number|null)} root mean squared error or null
	*/
	function accumulator( x, y ) {
		var r;
		if ( arguments.length === 0 ) {
			r = mean();
			if ( r === null ) {
				return r;
			}
			return sqrt( r );
		}
		r = y - x;
		return sqrt( mean( r*r ) );
	}
}


// EXPORTS //

module.exports = incrrmse;
