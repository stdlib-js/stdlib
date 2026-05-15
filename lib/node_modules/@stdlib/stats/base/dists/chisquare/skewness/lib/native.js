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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns the skewness of a chi-squared distribution.
*
* @private
* @param {PositiveNumber} k - degrees of freedom
* @returns {PositiveNumber} skewness
*
* @example
* var v = skewness( 9.0 );
* // returns ~0.943
*
* @example
* var v = skewness( 1.0 );
* // returns ~2.828
*
* @example
* var v = skewness( -0.2 );
* // returns NaN
*
* @example
* var v = skewness( NaN );
* // returns NaN
*/
function skewness( k ) {
	return addon( k );
}


// EXPORTS //

module.exports = skewness;
