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
* Evaluates the moment-generating function (MGF) of a discrete uniform distribution with minimum support `a` and maximum support `b` at a value `t`.
*
* @private
* @param {number} t - input value
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( 2.0, 0, 4 );
* // returns ~689.475
*
* @example
* var y = mgf( -0.2, 0, 4 );
* // returns ~0.697
*
* @example
* var y = mgf( 2.0, 0, 1 );
* // returns ~4.195
*
* @example
* var y = mgf( 0.5, 3, 3 );
* // returns ~4.482
*
* @example
* var y = mgf( 0.5, 3, 2 );
* // returns NaN
*
* @example
* var y = mgf( NaN, 0, 1 );
* // returns NaN
*/
function mgf( t, a, b ) {
	return addon( t, a, b );
}


// EXPORTS //

module.exports = mgf;
