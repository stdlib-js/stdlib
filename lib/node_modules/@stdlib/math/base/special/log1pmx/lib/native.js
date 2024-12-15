/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Evaluates \\( \operatorname{log1pmx}(x) = \ln(1+x) - x \\).
*
* @private
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = log1pmx( 1.1 );
* // returns ~-0.358
*
* @example
* var v = log1pmx( 0.99 );
* // returns ~-0.302
*
* @example
* var v = log1pmx( -0.99 );
* // returns ~-3.615
*
* @example
* var v = log1pmx( -1.1 );
* // returns NaN
*
* @example
* var v = log1pmx( NaN );
* // returns NaN
*/
function log1pmx(x) {
	return addon( x );
}


// EXPORTS //

module.exports = log1pmx;
