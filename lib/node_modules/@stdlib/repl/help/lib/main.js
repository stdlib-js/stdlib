/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var ALIAS_TO_HELP = require( './../data/data.json' );


// MAIN //

/**
* Returns help text associated with a specified alias.
*
* @param {string} alias - alias
* @throws {TypeError} must provide a string
* @returns {(string|null)} help text
*
* @example
* var txt = help( 'base.sin' );
* // returns <string>
*/
function help( alias ) {
	if ( !isString( alias ) ) {
		throw new TypeError( 'invalid argument. Must provide a string. Value: `' + alias + '`.' );
	}
	if ( hasOwnProp( ALIAS_TO_HELP, alias ) ) {
		return ALIAS_TO_HELP[ alias ];
	}
	return null;
}


// EXPORTS //

module.exports = help;
