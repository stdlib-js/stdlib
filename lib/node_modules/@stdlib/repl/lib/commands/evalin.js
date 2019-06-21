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

var vm = require( 'vm' );
var logger = require( 'debug' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var updateRegExpCache = require( './../update_regexp_cache.js' );
var restoreRegExpMatches = require( './../restore_regexp_matches.js' );


// VARIABLES //

var debug = logger( 'repl:command:evalin' );
var RE_WHITESPACE = /^\s*$/;


// MAIN //

/**
* Returns a callback to be invoked upon calling the `evalin` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Evaluates an expression in a specified workspace.
	*
	* @private
	* @param {string} workspace - workspace name
	* @param {string} expression - expression to evaluate
	* @returns {void}
	*/
	function onCommand( workspace, expression ) {
		var script;
		var opts;
		var err;
		var FLG;
		var ws;
		if ( !isString( workspace ) ) {
			err = new TypeError( 'invalid argument. First argument must be a string. Value: `' + workspace + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( !isString( expression ) ) {
			err = new TypeError( 'invalid argument. Second argument must be a string. Value: `' + workspace + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( !hasOwnProp( repl._workspaces, workspace ) ) {
			err = new Error( 'invalid argument. Unrecognized workspace name. Value: `' + workspace + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( RE_WHITESPACE.test( expression ) ) {
			debug( 'Expression only consists of whitespace. Nothing to evaluate.' );
			return;
		}
		// Cache the name of the current workspace:
		ws = repl._currentWorkspace;

		// Temporarily silence logging:
		FLG = repl._quiet;
		repl._quiet = true;

		// Switch to the target workspace:
		repl._context.workspace( workspace );

		// Try evaluating the expression...
		opts = {
			'filename': '<repl>',
			'lineOffset': 0
		};
		try {
			// FIXME: this needs to follow the same logic as `process_line`, such as code wrapping, asynchronous execution, and handling top-level `await`!!!
			script = new vm.Script( expression, opts );
		} catch ( error ) {
			debug( 'Error: %s', error.message );
			repl._ostream.write( 'Error: '+error.message+'\n' );
			repl._context.workspace( ws );
			repl._quiet = FLG;
			return;
		}
		// Set the (non-standard) properties on the `RegExp` expression object to the cached matches:
		restoreRegExpMatches( repl._regexp );

		opts = {
			'timeout': repl._timeout,
			'displayErrors': false,
			'breakOnSigint': true // Note: only applies for Node.js versions >=6.3.0
		};

		// FIXME: we need to follow similar logic as `drain.js`, such as SIGINT handling!!!
		try {
			script.runInContext( repl._context, opts );
			repl._ostream.write( 'Successfully evaluated expression.\n' );
		} catch ( error ) {
			debug( 'Error: %s', error.message );
			repl._ostream.write( 'Error: '+error.message+'\n' );
		}
		updateRegExpCache( repl._regexp );

		// Return to the previous workspace:
		repl._context.workspace( ws );

		// Re-enable logging (if enabled):
		repl._quiet = FLG;
	}
}


// EXPORTS //

module.exports = command;
