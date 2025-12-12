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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var RE_INTEGER = require( './re_integer.js' );


// MAIN //

/**
* Tests if an indexing expression is an integer.
*
* @private
* @param {(string|symbol)} prop - property name
* @returns {boolean} result
*
* @example
* var out = isIntegerString( '1' );
* // returns true
*
* @example
* var out = isIntegerString( ':' );
* // returns false
*/
function isIntegerString( prop ) {
	return ( isString( prop ) && RE_INTEGER.test( prop ) );
}


// EXPORTS //

module.exports = isIntegerString;
