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
* Computes the arcsine (in degrees) of a double-precision floating-point number.
*
* @param {number} x - input value
* @returns {number} arcsine (in degrees)
*
* @example
* var v = asind( 0.0 );
* // returns 0.0
*
* @example
* var v = asind( 0.5  );
* // returns ~30.0
*
* @example
* var v = asind( Math.sqrt( 2.0 ) / 2.0 );
* // returns ~45.0
*
* @example
* var v = asind( Math.sqrt( 3.0 ) / 2.0 );
* // returns ~60.0
*
* @example
* var v = asind( NaN );
* // returns NaN
*/
function asind( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = asind;
