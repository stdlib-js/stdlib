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

/**
* Tests if a single-precision floating-point number is a probability.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is a probability
*
* @example
* var bool = isProbabilityf( 0.5 );
* // returns true
*
* @example
* var bool = isProbabilityf( 3.14 );
* // returns false
*
* @example
* var bool = isProbabilityf( NaN );
* // returns false
*/
function isProbabilityf( x ) {
	return ( x >= 0.0 && x <= 1.0 );
}


// EXPORTS //

module.exports = isProbabilityf;
