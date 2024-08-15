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
* Computes the Bessel function of the second kind of order zero.
*
* @private
* @param {number} x - input value
* @returns {number} evaluated Bessel function
*
* @example
* var v = y0( 0.0 );
* // returns -Infinity
*
* v = y0( 1.0 );
* // returns ~0.088
*
* v = y0( -1.0 );
* // returns NaN
*
* v = y0( Infinity );
* // returns 0.0
*
* v = y0( -Infinity );
* // returns NaN
*
* v = y0( NaN );
* // returns NaN
*/
function y0( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = y0;
