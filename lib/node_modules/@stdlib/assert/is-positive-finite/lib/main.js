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

var isPrimitiveFinite = require( './primitive.js' );
var isObjectFinite = require( './object.js' );


// MAIN //

/**
* Tests if a value is a non-infinite positive number.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a non-infinite positive number
*
* @example
* var bool = isPositiveFinite( 5.0 );
* // returns true
*
* @example
* var bool = isPositiveFinite( new Number( 5.0 ) );
* // returns true
*
* @example
* var bool = isPositiveFinite( -5.0 );
* // returns false
*
* @example
* var bool = isPositiveFinite( new Number( 5.0 )/0.0 );
* // returns false
*
* @example
* var bool = isPositiveFinite( null );
* // returns false
*/
function isPositiveFinite( value ) {
	return ( isPrimitiveFinite( value ) || isObjectFinite( value ) );
}


// EXPORTS //

module.exports = isPositiveFinite;
