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
* Returns the expected value of a Kumaraswamy's double bounded distribution.
*
* @private
* @param {PositiveNumber} a - first shape parameter
* @param {PositiveNumber} b - second shape parameter
* @returns {PositiveNumber} expected value
*
* @example
* var v = mean( 1.5, 1.5 );
* // returns ~0.512
*
* @example
* var v = mean( 4.0, 12.0 );
* // returns ~0.481
*
* @example
* var v = mean( 12.0, 2.0 );
* // returns ~0.886
*
* @example
* var v = mean( 1.5, -0.1 );
* // returns NaN
*
* @example
* var v = mean( -0.1, 1.5 );
* // returns NaN
*
* @example
* var v = mean( 2.0, NaN );
* // returns NaN
*
* @example
* var v = mean( NaN, 2.0 );
* // returns NaN
*/
function mean( a, b ) {
	return addon( a, b );
}


// EXPORTS //

module.exports = mean;
