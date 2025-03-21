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
* Evaluates the binary logarithm.
*
* @private
* @param {number} x - input value
* @returns {number} binary logarithm
*
* @example
* var v = log2( 4.0 );
* // returns 2.0
*
* v = log2( 8.0 );
* // returns 3.0
*
* v = log2( 0.0 );
* // returns -Infinity
*
* v = log2( Infinity );
* // returns Infinity
*
* v = log2( NaN );
* // returns NaN
*/
function log2( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = log2;
