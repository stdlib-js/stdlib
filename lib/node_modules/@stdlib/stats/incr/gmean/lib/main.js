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

var ln = require( '@stdlib/math/base/special/ln' );
var exp = require( '@stdlib/math/base/special/exp' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a geometric mean.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrgmean();
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns 2.0
*
* v = accumulator( 5.0 );
* // returns ~3.16
*
* v = accumulator();
* // returns ~3.16
*/
function incrgmean() {
	var sum;
	var N;
	var v;

	sum = 0.0;
	N = 0;
	v = 1;

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated geometric mean. If not provided a value, the accumulator function returns the current geometric mean.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} geometric mean or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return v;
		}
		N += 1;
		sum += ln( x );
		v = exp( sum/N );
		return v;
	}
}


// EXPORTS //

module.exports = incrgmean;
