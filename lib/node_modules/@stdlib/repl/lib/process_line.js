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
var Parser = require( 'acorn' ).Parser;
var parseLoose = require( 'acorn-loose' ).parse;
var displayPrompt = require( './display_prompt.js' );
var drain = require( './drain.js' );
var multilinePlugin = require( './acorn_detect_multiline_input.js' );
var processCommand = require( './process_command.js' );
var compileCommand = require( './compile_command.js' );


// VARIABLES //

var debug = logger( 'repl:line' );
var hasMultilineError = Parser.extend( multilinePlugin ).hasMultilineError;
var RE_WHITESPACE = /^\s*$/;
var RE_SINGLE_LINE_COMMENT = /^\s*\/\//;
var RE_MULTI_LINE_COMMENT = /^\s*\/\*.*\*\/$/;
var AOPTS = {
	'ecmaVersion': 'latest'
};


// MAIN //

/**
* Processes input line data.
*
* @private
* @param {REPL} repl - REPL instance
* @param {string} line - line data
* @returns {void}
*/
function processLine( repl, line ) {
	var code;
	var node;
	var ast;
	var cmd;
	var tmp;

	debug( 'Line: %s', line );
	repl._multiline.active = false; // false until proven otherwise

	cmd = repl._cmd.join( '\n' ) + line;
	if ( RE_WHITESPACE.test( cmd ) ) {
		displayPrompt( repl, false );
		return;
	}
	if ( RE_SINGLE_LINE_COMMENT.test( cmd ) || RE_MULTI_LINE_COMMENT.test( cmd ) ) { // eslint-disable-line max-len
		debug( 'Detected single-line comment.' );
		tmp = cmd;
	} else {
		// Check if the command has valid syntax...
		debug( 'Processing command...' );
		tmp = processCommand( cmd );
		if ( tmp instanceof Error ) {
			debug( 'Unable to process command.' );
			debug( 'Error: %s', tmp.message );
			debug( 'Attempting to detect multi-line input...' );
			if ( hasMultilineError( cmd, AOPTS ) ) {
				debug( 'Detected multi-line input. Waiting for additional lines...' );
				repl._cmd.push( line );
				repl._multiline.active = true;
				displayPrompt( repl, false );
				return;
			}
			// Still possible that a user is attempting to enter an object literal across multiple lines...
			ast = parseLoose( cmd, AOPTS );

			// Check for a trailing node which is being interpreted as a block statement, as this could be an object literal...
			node = ast.body[ ast.body.length-1 ];
			if ( node.type === 'BlockStatement' && node.end === ast.end ) {
				tmp = cmd.slice( node.start, node.end );
				if ( hasMultilineError( tmp, AOPTS ) ) {
					debug( 'Detected multi-line input. Waiting for additional lines...' );
					repl._cmd.push( line );
					repl._multiline.active = true;
					displayPrompt( repl, false );
					return;
				}
			}
			debug( 'Multi-line input not detected.' );
			repl._ostream.write( 'Error: '+tmp.message+'\n' );
			repl._cmd.length = 0;
			repl.emit( 'command', cmd, false ); // command failed
			displayPrompt( repl, false );
			return;
		}
	}
	debug( 'Successfully processed command.' );

	// Reset the command buffer:
	repl._cmd.length = 0;

	// Attempt to compile the command:
	debug( 'Attempting to compile command...' );
	code = compileCommand( tmp );
	if ( code instanceof Error ) {
		debug( 'Error: %s', code.message );
		repl._ostream.write( 'Error: '+code.message+'\n' );
		repl.emit( 'command', cmd, false ); // command failed
		displayPrompt( repl, false );
		return;
	}
	debug( 'Successfully compiled command.' );
	code.raw = cmd;

	// Add the command to the command queue:
	repl._queue.push( code );

	// Request to run the command:
	drain( repl );
}


// EXPORTS //

module.exports = processLine;
