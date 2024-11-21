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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var beta = require( '@stdlib/math/base/special/beta' );


// MAIN //

/**
* Returns the expected value of a Kumaraswamy's double bounded distribution.
*
* @param {PositiveNumber} a - first shape parameter
* @param {PositiveNumber} b - second shape parameter
* @returns {PositiveNumber} expected value
*
* @example
* var v = mean( 1.5, 1.5 );
* // returns ~0.512
*
* @example
* var v = mean( 4.0, 12.0 );
* // returns ~0.481
*
* @example
* var v = mean( 12.0, 2.0 );
* // returns ~0.886
*
* @example
* var v = mean( 1.5, -0.1 );
* // returns NaN
*
* @example
* var v = mean( -0.1, 1.5 );
* // returns NaN
*
* @example
* var v = mean( 2.0, NaN );
* // returns NaN
*
* @example
* var v = mean( NaN, 2.0 );
* // returns NaN
*/
function mean( a, b ) {
	if (
		isnan( a ) ||
		a <= 0.0 ||
		isnan( b ) ||
		b <= 0.0
	) {
		return NaN;
	}
	return b * beta( 1.0 + ( 1.0/a ), b );
}


// EXPORTS //

module.exports = mean;
