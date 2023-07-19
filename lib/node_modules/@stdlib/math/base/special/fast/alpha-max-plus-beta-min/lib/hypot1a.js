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

/**
* Computes the hypotenuse using the alpha max plus beta min algorithm, where `alpha = 1` and `beta = 1/2`.
*
* @private
* @param {uinteger32} x - integer
* @param {uinteger32} y - integer
* @returns {number} hypotenuse
*
* @example
* var h = hypot( 5.0, 12.0 );
* // returns <number>
*/
function hypot( x, y ) {
	if ( x > y ) {
		return x + (y>>>1);
	}
	return (x>>>1) + y;
}


// EXPORTS //

module.exports = hypot;
