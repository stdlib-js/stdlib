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
* Evaluates the probability mass function (PMF) for a degenerate distribution centered at `mu`.
*
* @private
* @param {number} x - input value
* @param {number} mu - constant value of the distribution
* @returns {number} evaluated probability mass function
*
* @example
* var y = pmf( 2.0, 3.0 );
* // returns 0.0
*
* @example
* var y = pmf( 3.0, 3.0 );
* // returns 1.0
*
* @example
* var y = pmf( NaN, 0.0 );
* // returns NaN
*
* @example
* var y = pmf( 0.0, NaN );
* // returns NaN
*/
function pmf( x, mu ) {
	return addon( x, mu );
}


// EXPORTS //

module.exports = pmf;
