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
* Returns the mode of a Rayleigh distribution.
*
* @private
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {NonNegativeNumber} mode
*
* @example
* var v = mode( 9.0 );
* // returns ~9.0
*
* @example
* var v = mode( 2.0 );
* // returns ~2.0
*
* @example
* var v = mode( -0.2 );
* // returns NaN
*
* @example
* var v = mode( NaN );
* // returns NaN
*/
function mode( sigma ) {
	return addon( sigma );
}


// EXPORTS //

module.exports = mode;
