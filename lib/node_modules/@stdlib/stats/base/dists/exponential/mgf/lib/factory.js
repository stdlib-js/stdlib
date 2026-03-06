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
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns a function for evaluating the moment-generating function (MGF) of an exponential distribution with rate parameter `lambda`.
*
* @param {PositiveNumber} lambda - rate parameter
* @returns {Function} MGF
*
* @example
* var mgf = factory( 4.0 );
* var y = mgf( 3.0 );
* // returns 4.0
*
* y = mgf( 0.5 );
* // returns ~1.143
*/
function factory( lambda ) {
	if (
		isnan( lambda ) ||
		lambda <= 0.0 ||
		lambda === PINF
	) {
		return constantFunction( NaN );
	}
	return mgf;

	/**
	* Evaluates the moment-generating function (MGF) for an exponential distribution.
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
		return lambda / ( lambda - t );
	}
}


// EXPORTS //

module.exports = factory;
