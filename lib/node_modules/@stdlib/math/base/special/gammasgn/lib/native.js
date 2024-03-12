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
* Computes the sign of the gamma function.
*
* @private
* @param {number} x - input value
* @returns {number} sign of the gamma function
*
* @example
* var v = gammasgn( 1.0 );
* // returns 1.0
*
* v = gammasgn( -2.5 );
* // returns -1.0
*
* v = gammasgn( 0.0 );
* // returns 0.0
*
* v = gammasgn( NaN );
* // returns NaN
*/
function gammasgn( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = gammasgn;
