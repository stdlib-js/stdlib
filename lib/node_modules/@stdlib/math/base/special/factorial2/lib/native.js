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
* Evaluates the double factorial of `n`.
*
* @private
* @param {number} n - input value
* @returns {(NonNegativeInteger|number)} double factorial
*
* @example
* var v = factorial2( 3 );
* // returns 3
*
* @example
* var v = factorial2( 4 );
* // returns 8
*
* @example
* var v = factorial2( 5 );
* // returns 15
*
* @example
* var v = factorial2( 301 );
* // returns Infinity
*/
function factorial2( n ) {
	return addon( n );
}


// EXPORTS //

module.exports = factorial2;
