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
* Returns the arithmetic mean of `x` and `y`.
*
* @private
* @param {number} x - first number
* @param {number} y - second number
* @returns {number} arithmetic mean
*
* @example
* var z = mean( 3.5, 7.5 );
* // returns 5.5
*/
function mean( x, y ) {
	return x + ((y-x)/2.0);
}


// EXPORTS //

module.exports = mean;
