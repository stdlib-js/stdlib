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
* Evaluates the moment-generating function (MGF) for a chi-squared distribution with degrees of freedom `k` at a value `t`.
*
* @private
* @param {number} t - input value
* @param {NonNegativeNumber} k - degrees of freedom
* @returns {number} evaluated MGF
*
* @example
* var v = mgf( 0.4, 2.0 );
* // returns ~5.0
*
* @example
* var v = mgf( -1.0, 5.0 );
* // returns ~0.0642
*
* @example
* var v = mgf( 0.0, 10.0 );
* // returns 1.0
*
* @example
* var v = mgf( NaN, 5.0 );
* // returns NaN
*/
function mgf( t, k ) {
	return addon( t, k );
}


// EXPORTS //

module.exports = mgf;
