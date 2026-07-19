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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns the excess kurtosis of a chi distribution.
*
* @private
* @param {number} k - degrees of freedom
* @returns {number} excess kurtosis
*
* @example
* var y = kurtosis( 2.0 );
* // returns ~0.245
*
* @example
* var v = kurtosis( 9.0 );
* // returns ~0.011
*
* @example
* var v = kurtosis( 1.0 );
* // returns ~0.869
*
* @example
* var y = kurtosis( NaN );
* // returns NaN
*/
function kurtosis( k ) {
	return addon( k );
}


// EXPORTS //

module.exports = kurtosis;
