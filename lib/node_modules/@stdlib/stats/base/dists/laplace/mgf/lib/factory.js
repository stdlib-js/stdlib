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
var abs = require( '@stdlib/math/base/special/abs' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns a function for evaluating the moment-generating function (MGF) of a Laplace (double exponential) distribution with location parameter `mu` and scale parameter `b`.
*
* @param {number} mu - mean
* @param {NonNegativeNumber} b - scale parameter
* @returns {Function} MGF
*
* @example
* var mgf = factory( 4.0, 2.0 );
*
* var y = mgf( 0.2 );
* // returns ~2.649
*
* y = mgf( 0.4 );
* // returns ~13.758
*/
function factory( mu, b ) {
	if ( isnan( mu ) || isnan( b ) || b <= 0.0 ) {
		return constantFunction( NaN );
	}
	return mgf;

	/**
	* Evaluates the moment-generating function (MGF) for a Laplace (double exponential) distribution.
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
		var bt;
		if ( abs( t ) >= 1.0/b ) {
			return NaN;
		}
		bt = b * t;
		return exp( mu * t ) / ( 1.0 - pow( bt, 2.0 ) );
	}
}


// EXPORTS //

module.exports = factory;
