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


// VARIABLES //

var debug = logger( 'repl:command:userdoc' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `userDoc` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Adds user-defined documentation.
	*
	* ## Notes
	*
	* -   If user-defined documentation already exists for a provided alias, the current documentation is overwritten.
	*
	* @private
	* @param {string} alias - alias
	* @param {*} [ref] - object reference
	* @param {string} doc - documentation
	* @returns {void}
	*/
	function onCommand( alias, ref, doc ) {
		var buf;
		var err;
		var d;
		var r;
		var i;
		if ( !isString( alias ) ) {
			err = new TypeError( 'invalid argument. First argument must be a string. Value: `'+alias+'`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( arguments.length < 3 ) {
			d = ref;
		} else {
			r = ref;
			d = doc;
		}
		if ( !isString( d ) ) {
			err = new TypeError( 'invalid argument. Documentation argument must be a string. Value: `'+d+'`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		buf = repl._userdocs;

		// TODO: extract `info`, examples, etc

		// Search for existing documentation to overwrite...
		for ( i = 0; i < buf.length; i += 3 ) {
			if ( buf[ i ] === alias ) {
				buf[ i+1 ] = r;
				buf[ i+2 ] = {
					'text': d
				};
				return;
			}
		}
		// Append new documentation:
		buf.push( alias, r, {
			'text': d
		});
	}
}


// EXPORTS //

module.exports = command;
