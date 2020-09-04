/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Tests if a double-precision floating-point numeric value is finite.
*
* @private
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is finite
*
* @example
* var bool = isfinite( 5.0 );
* // returns true
*
* @example
* var bool = isfinite( -2.0e64 );
* // returns true
*
* @example
* var bool = isfinite( Infinity );
* // returns false
*
* @example
* var bool = isfinite( -Infinity );
* // returns false
*/
function isfinite( x ) {
	return Boolean( addon( x ) ); // TODO: import stdlib package @stdlib/boolean/ctor
}


// EXPORTS //

module.exports = isfinite;
