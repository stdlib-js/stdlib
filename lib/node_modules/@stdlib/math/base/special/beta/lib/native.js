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
* Evaluates the beta function.
*
* @private
* @param {NonNegativeNumber} a - input value
* @param {NonNegativeNumber} b - input value
* @returns {number} evaluated beta function
*
* @example
* var v = beta( 0.0, 0.5 );
* // returns Infinity
*
* @example
* var v = beta( 1.0, 1.0 );
* // returns 1.0
*
* @example
* var v = beta( -1.0, 2.0 );
* // returns NaN
*
* @example
* var v = beta( 5.0, 0.2 );
* // returns ~3.382
*
* @example
* var v = beta( 4.0, 1.0 );
* // returns 0.25
*
* @example
* var v = beta( NaN, 2.0 );
* // returns NaN
*/
function beta( a, b ) {
	return addon( a, b );
}


// EXPORTS //

module.exports = beta;
