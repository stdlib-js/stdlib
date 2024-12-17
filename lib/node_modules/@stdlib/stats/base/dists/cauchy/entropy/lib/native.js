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
* Returns the differential entropy of a Cauchy distribution.
*
* @param {number} x0 - location parameter
* @param {PositiveNumber} gamma - scale parameter
* @returns {PositiveNumber} entropy
*
* @example
* var v = entropy( 10.0, 5.0 );
* // returns ~4.14
*
* @example
* var v = entropy( 7.0, 0.1 );
* // returns ~0.228
*
* @example
* var v = entropy( 10.0, -0.5 );
* // returns NaN
*/
function entropy( x0, gamma ) {
	return addon( x0, gamma );
}


// EXPORTS //

module.exports = entropy;
