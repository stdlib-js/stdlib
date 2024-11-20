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

var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a sum.
*
* ## Method
*
* -   This implementation uses a second-order "iterative Kahan–Babuška algorithm", as proposed by Klein (2005).
*
* ## References
*
* -   Klein, Andreas. 2005. "A Generalized Kahan-Babuška-Summation-Algorithm." _Computing_ 76 (3): 279–93. doi:[10.1007/s00607-005-0139-x](https://doi.org/10.1007/s00607-005-0139-x).
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrsum();
*
* var sum = accumulator();
* // returns null
*
* sum = accumulator( 2.0 );
* // returns 2.0
*
* sum = accumulator( -5.0 );
* // returns -3.0
*
* sum = accumulator();
* // returns -3.0
*/
function incrsum() {
	var sum;
	var ccs;
	var FLG;
	var cs;
	var cc;
	var t;
	var c;

	sum = 0.0;
	ccs = 0.0; // second order correction term for lost low order bits
	cs = 0.0; // first order correction term for lost low order bits
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
			return ( FLG ) ? sum+cs+ccs : null;
		}
		FLG = true;
		t = sum + x;
		if ( abs( sum ) >= abs( x ) ) {
			c = (sum-t) + x;
		} else {
			c = (x-t) + sum;
		}
		sum = t;
		t = cs + c;
		if ( abs( cs ) >= abs( c ) ) {
			cc = (cs-t) + c;
		} else {
			cc = (c-t) + cs;
		}
		cs = t;
		ccs += cc;
		return sum + cs + ccs;
	}
}


// EXPORTS //

module.exports = incrsum;
