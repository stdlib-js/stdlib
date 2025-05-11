/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var expm1 = require( '@stdlib/math/base/special/expm1' );


// MAIN //

/**
* Returns a function for evaluating the moment-generating function (MGF) of a Planck distribution with shape parameter `lambda`.
*
* @param {PositiveNumber} lambda - shape parameter
* @returns {Function} MGF
*
* @example
* var mgf = factory( 0.8 );
* var y = mgf( -0.2 );
* // returns ~0.8711
*/
function factory( lambda ) {
	if ( isnan( lambda ) || lambda <= 0.0 ) {
		return constantFunction( NaN );
	}
	return mgf;

	/**
	* Evaluates the moment-generating function (MGF) for a Planck distribution.
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
		if ( isnan( t ) ) {
			return NaN;
		}
		return expm1( -lambda ) / expm1( t - lambda );
	}
}


// EXPORTS //

module.exports = factory;
