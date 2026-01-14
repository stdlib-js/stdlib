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
* Evaluates the moment-generating function (MGF) for a geometric distribution with success probability `p` at a value `t`.
*
* @private
* @param {number} t - input value
* @param {Probability} p - success probability
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( 0.2, 0.5 );
* // returns ~1.569
*
* @example
* var y = mgf( 0.4, 0.5 );
* // returns ~2.936
*
* @example
* // Case: t >= -ln(1-p)
* var y = mgf( 0.8, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( NaN, 0.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = mgf( -2.0, -1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.2, 2.0 );
* // returns NaN
*/
function mgf( t, p ) {
	return addon( t, p );
}


// EXPORTS //

module.exports = mgf;
