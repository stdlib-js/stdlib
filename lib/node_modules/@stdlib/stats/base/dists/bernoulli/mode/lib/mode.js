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


// MAIN //

/**
* Returns the mode of a Bernoulli distribution.
*
* ## Notes
*
* -   For `p = 0.5`, the mode is either `0` or `1`. This implementation returns `0` for `p = 0.5`.
*
* @param {Probability} p - success probability
* @returns {NonNegativeInteger} mode
*
* @example
* var v = mode( 0.1 );
* // returns 0
*
* @example
* var v = mode( 0.8 );
* // returns 1
*
* @example
* var v = mode( 0.5 );
* // returns 0
*
* @example
* var v = mode( 1.1 );
* // returns NaN
*
* @example
* var v = mode( NaN );
* // returns NaN
*/
function mode( p ) {
	if (
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	return ( p <= 0.5 ) ? 0 : 1;
}


// EXPORTS //

module.exports = mode;
