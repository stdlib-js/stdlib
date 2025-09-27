/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Evaluates the identity function for a single-precision floating-point number `x`.
*
* @private
* @param {number} x - input value
* @returns {number} input value
*
* @example
* var v = identityf( -1.0 );
* // returns -1.0
*
* @example
* var v = identityf( 2.0 );
* // returns 2.0
*
* @example
* var v = identityf( 0.0 );
* // returns 0.0
*
* @example
* var v = identityf( -0.0 );
* // returns -0.0
*
* @example
* var v = identityf( NaN );
* // returns NaN
*/
function identityf( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = identityf;
