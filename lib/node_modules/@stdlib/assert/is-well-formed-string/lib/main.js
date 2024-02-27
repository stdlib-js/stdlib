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

var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

/**
* Tests if a string is well-formed.
*
* @param {string} str - input string
* @returns {boolean} boolean indicating whether a string is well-formed
*
* @example
* var bool = isWellFormedString( '' );
* // returns true
*
* @example
* var bool = isWellFormedString( new String( '' ) );
* // returns true
*
* @example
* var bool = isWellFormedString( '\uDBFF' );
* // returns false
*
* @example
* var bool = isWellFormedString( '\uDBFFFF\uDBFF' );
* // returns false
*
* @example
* var bool = isWellFormedString( [] );
* // returns false
*
* @example
* var bool = isWellFormedString( '-5' );
* // returns true
*
* @example
* var bool = isWellFormedString( null );
* // returns false
*/
function isWellFormedString( str ) {
	return ( isPrimitive( str ) || isObject( str ) );
}


// EXPORTS //

module.exports = isWellFormedString;
