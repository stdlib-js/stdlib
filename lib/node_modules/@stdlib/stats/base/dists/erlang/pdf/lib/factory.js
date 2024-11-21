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
var constantFunction = require( '@stdlib/utils/constant-function' );
var factoryGamma = require( '@stdlib/stats/base/dists/gamma/pdf' ).factory;


// MAIN //

/**
* Returns a function for evaluating the probability density function (PDF) for an Erlang distribution with shape parameter `k` and rate parameter `lambda`.
*
* @param {NonNegativeInteger} k - shape parameter
* @param {PositiveNumber} lambda - rate parameter
* @returns {Function} PDF
*
* @example
* var myPDF = factory( 6.0, 7.0 );
* var y = myPDF( 7.0 );
* // returns ~8.639e-15
*/
function factory( k, lambda ) {
	if ( !isNonNegativeInteger( k ) ) {
		return constantFunction( NaN );
	}
	return factoryGamma( k, lambda );
}


// EXPORTS //

module.exports = factory;
