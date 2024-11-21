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
* Computes the secant of an angle measured in degrees.
*
* @private
* @param {number} x - input value (in degrees)
* @returns {number} secant
*
* @example
* var v = secd( 30 );
* // returns ~1.15
*
* @example
* var v = secd( 45 );
* // returns ~1.41
*
* @example
* var v = secd( 60 );
* // returns ~2.0
*
* @example
* var v = secd( 90 );
* // returns 16331239353195370.0
*
* @example
* var v = secd( 0 );
* // returns 1.0
*
* @example
* var v = secd( NaN );
* // returns NaN
*/
function secd( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = secd;
