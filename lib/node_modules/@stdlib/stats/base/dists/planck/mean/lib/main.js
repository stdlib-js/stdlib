/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var expm1 = require( '@stdlib/math/base/special/expm1' );


// MAIN //

/**
* Returns the expected value of a Planck distribution.
*
* @param {PositiveNumber} lambda - shape parameter
* @returns {NonNegativeNumber} expected value
*
* @example
* var v = mean( 0.1 );
* // returns ~9.5083
*
* @example
* var v = mean( 0.5 );
* // returns ~1.5415
*
* @example
* var v = mean( 1.1 );
* // returns ~0.49896
*
* @example
* var v = mean( -2.5 );
* // returns NaN
*
* @example
* var v = mean( NaN );
* // returns NaN
*/
function mean( lambda ) {
	if ( isnan( lambda ) || lambda <= 0.0 ) {
		return NaN;
	}
	return 1.0 / expm1( lambda );
}


// EXPORTS //

module.exports = mean;
