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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var NAMESPACE = require( './../namespace.js' );
var EXAMPLES = require( './../examples.js' );
var logger = require( './../console.js' );


// VARIABLES //

var NO_EXAMPLE_TEXT = 'No example available.';


// MAIN //

/**
* Returns a function for evaluating examples within a REPL.
*
* @private
* @param {REPLServer} repl - REPL server
* @returns {Function} function to evaluate examples
*/
function wrapper( repl ) {
	return example;

	/**
	* Executes an example.
	*
	* @private
	* @param {*} alias - variable alias or value
	* @returns {void}
	*/
	function example( alias ) {
		var eg;
		var i;

		// First check if provided an alias...
		if ( hasOwnProp( EXAMPLES, alias ) ) {
			eg = EXAMPLES[ alias ];
		} else {
			// Search through namespace values to see if provided a known value reference...
			for ( i = 0; i < NAMESPACE.length; i++ ) {
				if ( alias === NAMESPACE[ i ].value ) {
					if ( hasOwnProp( EXAMPLES, NAMESPACE[ i ].alias ) ) {
						eg = EXAMPLES[ NAMESPACE[ i ].alias ];
					}
					break;
				}
			}
			// If still unable to resolve an example, inform the user that no example is available...
			if ( eg === void 0 ) {
				return logger.log( NO_EXAMPLE_TEXT );
			}
		}
		// Evaluate the example:
		repl.write( '\n' );
		repl.displayPrompt();
		repl.write( eg );
	}
}


// EXPORTS //

module.exports = wrapper;
