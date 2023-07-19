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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var reWhitespace = require( '@stdlib/regexp/whitespace' );


// VARIABLES //

var RE = new RegExp( '^'+reWhitespace.REGEXP.source+'+$' );


// MAIN //

/**
* Tests whether a string contains only white space characters.
*
* @param {*} x - value to test
* @returns {boolean} boolean indicating if a string contains only white space characters
*
* @example
* var out = isWhitespace( '           ' );
* // returns true
*
* @example
* var out = isWhitespace( 'beep boop' );
* // returns false
*
* @example
* var out = isWhitespace( '' );
* // returns false
*
* @example
* var out = isWhitespace( 123 );
* // returns false
*/
function isWhitespace( x ) {
	if ( !isString( x ) ) {
		return false;
	}
	return RE.test( x );
}


// EXPORTS //

module.exports = isWhitespace;
