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

var Boolean = require( '@stdlib/boolean/ctor' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Tests if two double-precision floating-point numbers are the same value.
*
* @private
* @param {number} a - first input value
* @param {number} b - second input value
* @returns {boolean} boolean indicating whether two double-precision floating-point numbers are the same value
*
* @example
* var bool = isSameValue( 3.14, 3.14 );
* // returns true
*
* @example
* var bool = isSameValue( -0.0, -0.0 );
* // returns true
*
* @example
* var bool = isSameValue( -0.0, 0.0 );
* // returns false
*
* @example
* var bool = isSameValue( NaN, NaN );
* // returns true
*/
function isSameValue( a, b ) {
	return Boolean( addon( a, b ) );
}


// EXPORTS //

module.exports = isSameValue;
