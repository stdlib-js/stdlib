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

var BigInt = require( '@stdlib/bigint/ctor' );


// MAIN //

/**
* Converts a boolean to a BigInt.
*
* @private
* @param {boolean} value - input value
* @returns {number} result
*/
function boolean2bigint( value ) {
	return BigInt( ( value ) ? 1 : 0 );
}


// EXPORTS //

module.exports = boolean2bigint;
