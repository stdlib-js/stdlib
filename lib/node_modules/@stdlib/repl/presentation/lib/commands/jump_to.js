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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;


// VARIABLES //

var debug = logger( 'repl:presentation:command:jump_to' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `jumpTo` command.
*
* @private
* @param {Presentation} pres - presentation instance
* @returns {Function} callback
*/
function command( pres ) {
	return onCommand;

	/**
	* Jumps to a specified slide.
	*
	* @private
	* @param {PositiveInteger} n - nominal slide number (one-based)
	*/
	function onCommand( n ) {
		var err;
		if ( !isPositiveInteger( n ) ) {
			err = new TypeError( 'invalid argument. Must provide a positive integer. Value: `' + n + '`.' );
			debug( 'Error: %s', err.message );
			pres._repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		pres._repl.once( 'drain', onDrain );

		/**
		* Callback invoked upon a `drain` event.
		*
		* @private
		*/
		function onDrain() {
			pres.jumpTo( n ).show();
		}
	}
}


// EXPORTS //

module.exports = command;
