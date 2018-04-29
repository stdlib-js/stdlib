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

// VARIABLES //

/**
* Detects a JSON string.
*
* Regular expression: `/^\{[\s\S]*\}$|^\[[\s\S]*\]$/`
*
* -   `^\{`
*
*     -   match a `{` literal which is the first character
*
* -   `[\s\S]*`
*
*     -   match any whitespace and non-whitespace characters which occur `0` or more times
*
* -   `\}$`
*
*     -   match a `}` literal which is the last character
*
* -   `|`
*
*     -   alternatively
*
* -   `^\[`
*
*     -   match a `[` literal which is the first character
*
* -   `[\s\S]*`
*
*     -   match any whitespace and non-whitespace characters which occur `0` or more times
*
* -   `\]$`
*
*     -   match a `]` literal which is the last character
*
*
* Example matching strings:
*
* -   `'{}'`
* -   `'[]'`
* -   `'{adjlkfaj3743.,><\n\t\rdf}'`
* -   `'[adjlkfaj3743.,><\n\t\rdf]'`
* -   `'{"a":5}'`
*
* @constant
* @type {RegExp}
* @default /^\{[\s\S]*\}$|^\[[\s\S]*\]$/
*/
var re = /^\{[\s\S]*\}$|^\[[\s\S]*\]$/;


// MAIN //

/**
* Tests if a value is a parseable JSON string.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a parseable JSON string
*
* @example
* var v = isJSON( '{"a":5}' );
* // returns true
*
* @example
* var v = isJSON( '{a":5}' );
* // returns false
*/
function isJSON( value ) {
	if ( typeof value !== 'string' ) {
		return false;
	}
	if ( !re.test( value ) ) {
		return false;
	}
	try {
		JSON.parse( value );
	} catch ( err ) { // eslint-disable-line no-unused-vars
		return false;
	}
	return true;
}


// EXPORTS //

module.exports = isJSON;
