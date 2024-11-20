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

var lowercase = require( '@stdlib/string/lowercase' );
var uppercase = require( '@stdlib/string/uppercase' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// MAIN //

/**
* Tests if a value is a string having an uppercase first character.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether a value is a string with an uppercase first character
*
* @example
* var bool = isCapitalized( 'Hello' );
* // returns true
*
* @example
* var bool = isCapitalized( 'WORLD' );
* // returns true
*
* @example
* var bool = isCapitalized( '!' );
* // returns false
*
* @example
* var bool = isCapitalized( 'salt and light' );
* // returns false
*/
function isCapitalized( value ) {
	var ch;
	if ( isString( value ) && value !== '' ) {
		ch = value[ 0 ];
		return ( ch === uppercase( ch ) && ch !== lowercase( ch ) );
	}
	return false;
}


// EXPORTS //

module.exports = isCapitalized;
