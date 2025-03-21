/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var isRegExp = require( '@stdlib/assert/is-regexp' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var SLASH = '/'.charCodeAt( 0 );


// MAIN //

/**
* Returns a JSON representation of a regular expression.
*
* @param {RegExp} re - regular expression to serialize
* @throws {TypeError} must provide a regular expression
* @returns {Object} JSON representation
*
* @example
* var json = regexp2json( /ab+c/ );
* // returns {...}
*/
function regexp2json( re ) {
	var i;
	if ( !isRegExp( re ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a regular expression. Value: `%s`.', re ) );
	}
	re = re.toString();
	for ( i = re.length-1; i >= 0; i-- ) {
		if ( re.charCodeAt( i ) === SLASH ) {
			break;
		}
	}
	return {
		'type': 'RegExp',
		'pattern': re.substring( 1, i ),
		'flags': re.substring( i+1 )
	};
}


// EXPORTS //

module.exports = regexp2json;
