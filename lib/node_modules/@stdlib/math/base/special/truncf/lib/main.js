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

var floorf = require( '@stdlib/math/base/special/floorf' );
var ceilf = require( '@stdlib/math/base/special/ceilf' );


// MAIN //

/**
* Rounds a single-precision floating-point number toward zero.
*
* @param {number} x - input value
* @returns {number} rounded value
*
* @example
* var v = truncf( -4.2 );
* // returns -4.0
*
* @example
* var v = truncf( 9.99999 );
* // returns 9.0
*
* @example
* var v = truncf( 0.0 );
* // returns 0.0
*
* @example
* var v = truncf( -0.0 );
* // returns -0.0
*
* @example
* var v = truncf( NaN );
* // returns NaN
*
* @example
* var v = truncf( Infinity );
* // returns Infinity
*
* @example
* var v = truncf( -Infinity );
* // returns -Infinity
*/
function truncf( x ) {
	if ( x < 0.0 ) {
		return ceilf( x );
	}
	return floorf( x );
}


// EXPORTS //

module.exports = truncf;
