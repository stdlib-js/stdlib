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

var constantFunction = require( '@stdlib/utils/constant-function' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns a function for evaluating the moment-generating function (MGF) for a triangular distribution with lower limit `a`, upper limit `b`, and mode `c`.
*
* @param {number} a - lower limit
* @param {number} b - upper limit
* @param {number} c - mode
* @returns {Function} MGF
*
* @example
* var mgf = factory( 0.0, 2.0, 1.0 );
* var y = mgf( -1.0 );
* // returns ~0.3996
*
* y = mgf( 2.0 );
* // returns ~10.205
*/
function factory( a, b, c ) {
	var bmc;
	var bma;
	var cma;

	if (
		isnan( a ) ||
		isnan( b ) ||
		isnan( c ) ||
		a > c ||
		c > b
	) {
		return constantFunction( NaN );
	}
	bmc = b - c;
	bma = b - a;
	cma = c - a;
	return mgf;

	/**
	* Evaluates the moment-generating function (MGF) for a triangular distribution.
	*
	* @private
	* @param {number} t - input value
	* @returns {number} evaluated MGF
	*
	* @example
	* var y = mgf( 0.5 );
	* // returns <number>
	*/
	function mgf( t ) {
		var ret;

		if ( isnan( t ) ) {
			return NaN;
		}
		if ( t === 0.0 ) {
			return 1.0;
		}
		ret = ( bmc * exp( a*t ) ) - ( bma * exp( c*t ) );
		ret += cma * exp( b*t );
		ret *= 2.0;
		ret /= bma * cma * bmc * pow( t, 2.0 );
		return ret;
	}
}


// EXPORTS //

module.exports = factory;
