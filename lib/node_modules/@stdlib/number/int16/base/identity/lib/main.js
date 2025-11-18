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
* Evaluates the identity function for a signed 16-bit integer `x`.
*
* @param {integer} x - input value
* @returns {integer} input value
*
* @example
* var v = identity( 1 );
* // returns 1
*
* @example
* var v = identity( 2 );
* // returns 2
*
* @example
* var v = identity( 0 );
* // returns 0
*
* @example
* var v = identity( 32767 );
* // returns 32767
*/
function identity( x ) {
	return x;
}


// EXPORTS //

module.exports = identity;
