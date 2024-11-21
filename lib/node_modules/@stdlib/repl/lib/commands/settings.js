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

/* eslint-disable no-underscore-dangle */

'use strict';

// MODULES //

var logger = require( 'debug' );
var format = require( '@stdlib/string/format' );
var log = require( './../log.js' );
var SETTINGS = require( './../settings.js' );
var SETTINGS_NAMES = require( './../settings_names.js' );


// VARIABLES //

var debug = logger( 'repl:command:settings' );


// FUNCTIONS //

/**
* Returns settings help text.
*
* @private
* @param {Object} settings - REPL settings
* @returns {string} settings help text
*/
function help( settings ) {
	var HELP_TEXT;
	var name;
	var o;
	var i;

	HELP_TEXT = '\n';
	for ( i = 0; i < SETTINGS_NAMES.length; i++ ) {
		name = SETTINGS_NAMES[ i ];
		o = SETTINGS[ name ];
		HELP_TEXT += name + '\n';
		HELP_TEXT += '    ';
		HELP_TEXT += o.desc; // TODO: auto-wrap description
		HELP_TEXT += format( ' Value: %s.', settings[ name ] );
		HELP_TEXT += '\n\n';
	}
	return HELP_TEXT;
}


// MAIN //

/**
* Returns a callback to be invoked upon calling the `settings` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Gets (and sets) REPL settings.
	*
	* @private
	* @param {string} [name] - setting name
	* @param {*} [value] - new setting value
	* @returns {(void|*)} setting value or undefined
	*/
	function onCommand() {
		var nargs;
		var v;

		nargs = arguments.length;
		if ( nargs === 0 ) {
			repl._ostream.write( help( repl._settings ) );
			return;
		}
		if ( nargs === 1 ) {
			try {
				v = repl.settings( arguments[ 0 ] );
			} catch ( err ) {
				debug( 'Error: %s', err.message );
				repl._ostream.write( format( 'Error: %s\n', err.message ) );
				return;
			}
			return v;
		}
		try {
			repl.settings( arguments[ 0 ], arguments[ 1 ] );
		} catch ( err ) {
			debug( 'Error: %s', err.message );
			repl._ostream.write( format( 'Error: %s\n', err.message ) );
			return;
		}
		log( repl, '\nSuccessfully updated setting.' );
	}
}


// EXPORTS //

module.exports = command;
