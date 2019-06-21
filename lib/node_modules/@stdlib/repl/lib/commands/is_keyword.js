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

/* eslint-disable no-underscore-dangle */

'use strict';

// MODULES //

var logger = require( 'debug' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var propertyDescriptor = require( '@stdlib/utils/property-descriptor' );


// VARIABLES //

var debug = logger( 'repl:command:is_keyword' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `isKeyword` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Returns a boolean indicating whether a string is a reserved keyword in the REPL environment.
	*
	* ## Notes
	*
	* -   This function supports nested keyword paths (e.g., `base.sin`).
	*
	* @private
	* @param {string} keyword - string to test
	* @returns {(boolean|void)} boolean indicating whether a string is a reserved keyword
	*/
	function onCommand( keyword ) {
		var desc;
		var err;
		var o;
		var i;
		var k;
		if ( !isString( keyword ) ) {
			err = new TypeError( 'invalid argument. Must provide a string. Value: `'+keyword+'`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		// Our proxy for determining whether a value is a keyword is whether the value is read-only property on the `context` object, as any properties we have added to the `context` object are read-only (note, however, that, in a non-sandboxed environment, the `global` object may have read-only properties we have *not* introduced; meaning, some values which may be flagged as "keywords" were not introduced by us):
		keyword = keyword.split( '.' );
		o = repl._context;
		for ( i = 0; i < keyword.length-1; i++ ) {
			k = keyword[ i ];
			if ( !hasOwnProp( o, k ) ) {
				return false;
			}
			o = o[ k ];
		}
		k = keyword[ i ];
		desc = propertyDescriptor( o, k );
		return (
			desc !== null &&
			(
				// Data descriptor:
				desc.writable === false ||

				// Accessor descriptor:
				(
					typeof desc.get === 'function' &&
					desc.set === void 0
				)
			)
		);
	}
}


// EXPORTS //

module.exports = command;
