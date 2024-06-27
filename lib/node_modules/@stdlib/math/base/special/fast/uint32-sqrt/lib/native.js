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
* Returns an integer square root.
*
* @private
* @param {uinteger32} x - input value
* @returns {uinteger32} integer square root
*
* @example
* var v = sqrt( 9 >>> 0 );
* // returns 3
*
* @example
* var v = sqrt( 2 >>> 0 );
* // returns 1
*
* @example
* var v = sqrt( 3 >>> 0 );
* // returns 1
*
* @example
* var v = sqrt( 0 >>> 0 );
* // returns 0
*/
function sqrtUint32( x ) {
	return addon( x );
}


// EXPORTS //

module.exports = sqrtUint32;
