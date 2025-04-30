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

var expm1 = require( '@stdlib/math/base/special/expm1' );


// MAIN //

/**
* Helper function for repeated computation in the MGF formula.
*
* @private
* @param {number} x - input value
* @returns {number} evaluated result
*/
function phi2( x ) {
	if ( x === 0.0 ) {
		return 1.0;
	}
	return ( 2.0 * ( expm1( x ) - x ) ) / ( x*x );
}


// EXPORTS //

module.exports = phi2;
