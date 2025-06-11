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
* Computes the binomial coefficient of two integers as a single-precision floating-point number.
*
* @private
* @param {integer} n - input value
* @param {integer} k - second input value
* @returns {number} function value
*
* @example
* var v = binomcoeff( 8, 2 );
* // returns 28.0
*
* @example
* var v = binomcoeff( 0, 0 );
* // returns 1.0
*
* @example
* var v = binomcoeff( -4, 2 );
* // returns 10.0
*/
function binomcoeff( n, k ) {
	return addon( n, k );
}


// EXPORTS //

module.exports = binomcoeff;
