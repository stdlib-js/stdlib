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

var isPositiveInteger = require( '@stdlib/math/base/assert/is-positive-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Returns the variance of an Erlang distribution.
*
* @param {PositiveInteger} k - shape parameter
* @param {PositiveNumber} lambda - rate parameter
* @returns {NonNegativeNumber} variance
*
* @example
* var v = variance( 1, 1.0 );
* // returns 1.0
*
* @example
* var v = variance( 4, 12.0 );
* // returns ~0.028
*
* @example
* var v = variance( 8, 2.0 );
* // returns 2.0
*
* @example
* var v = variance( 1.5, 2.0 );
* // returns NaN
*
* @example
* var v = variance( 1, -0.1 );
* // returns NaN
*
* @example
* var v = variance( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = variance( 2, NaN );
* // returns NaN
*
* @example
* var v = variance( NaN, 2.0 );
* // returns NaN
*/
function variance( k, lambda ) {
	if (
		!isPositiveInteger( k ) ||
		isnan( lambda ) ||
		lambda <= 0.0
	) {
		return NaN;
	}
	return k / ( lambda*lambda );
}


// EXPORTS //

module.exports = variance;
