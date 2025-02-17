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
* Evaluates the standard deviation for a Planck distribution with shape parameter `λ`.
*
* @private
* @param {number} lambda - shape parameter
* @returns {Probability} evaluated standard deviation
*
* @example
* var v = stdev( 0.1 );
* // returns ~9.9958
*
* @example
* var v = stdev( 1.5 );
* // returns ~0.6080
*
* @example
* var v = stdev( NaN );
* // returns NaN
*
* @example
* var v = stdev( -1.1 );
* // returns NaN
*/
function stdev( lambda ) {
	return addon( lambda );
}


// EXPORTS //

module.exports = stdev;
