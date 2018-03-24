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

var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns a function for evaluating the moment-generating function (MGF) of an Erlang distribution with shape parameter `k` and rate parameter `lambda`.
*
* @param {NonNegativeInteger} k - shape parameter
* @param {PositiveNumber} lambda - rate parameter
* @returns {Function} MGF
*
* @example
* var mgf = factory( 2, 0.5 );
*
* var y = mgf( 0.2 );
* // returns ~2.778
*
* y = mgf( -0.5 );
* // returns 0.25
*/
function factory( k, lambda ) {
	if (
		!isNonNegativeInteger( k ) ||
		isnan( lambda ) ||
		lambda < 0.0
	) {
		return constantFunction( NaN );
	}
	return mgf;

	/**
	* Evaluates the moment-generating function (MGF) for an Erlang distribution.
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
		if ( isnan( t ) || t >= lambda ) {
			return NaN;
		}
		return pow( 1.0 - (t/lambda), -k );
	}
}


// EXPORTS //

module.exports = factory;
