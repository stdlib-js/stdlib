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

var logger = require( 'debug' );
var parse = require( 'acorn' ).parse;
var parseLoose = require( 'acorn-loose' ).parse;
var contains = require( '@stdlib/assert/contains' );
var isSilentCommand = require( './is_silent_command.js' );
var processAwait = require( './process_top_level_await.js' );


// VARIABLES //

var debug = logger( 'repl:command' );
var AOPTS = {
	'ecmaVersion': 'latest'
};


// MAIN //

/**
* Processes a "raw" input command.
*
* ## Notes
*
* -   The function wraps trailing object literals as expressions when the literal can be misinterpreted as a block (e.g., `'{"a":1}'`, `'{"a":1};'` `'1+1;{"a":1}'`, `'1+1;{"a":1};'`, etc).
*
* @private
* @param {string} code - unevaluated command
* @returns {(string|Error)} processed command or an error
*/
function processCommand( code ) {
	var wrapped;
	var node;
	var ast;
	var tmp;
	var err;
	var i;

	// If an unevaluated command contains a top-level `await` expression, we need to transform into valid syntax...
	debug( 'Checking for `await` keyword...' );
	if ( contains( code, 'await' ) ) {
		debug( 'Attempting to process top-level `await` expression...' );
		tmp = processAwait( code );
		if ( typeof tmp === 'string' ) {
			debug( 'Successfully processed top-level `await` expression.' );
			code = tmp;
		} else {
			debug( 'Unable to process command as a top-level `await` expression.' );
			debug( 'Error: %s', tmp.message );
		}
	} else {
		debug( 'Unable to detect a top-level `await` expression.' );
	}
	// Attempt to strictly parse the provided code string:
	debug( 'Attempting to generate an AST...' );
	try {
		ast = parse( code, AOPTS );
		debug( 'Successfully generated an AST.' );
	} catch ( error ) {
		debug( 'Unable to generate an AST.' );
		debug( 'Error: %s', error.message );
		err = error; // cache the error message
	}
	if ( err === void 0 ) {
		// If the body is empty, assume that we have been given a multi-line comment...
		if ( ast.body.length === 0 ) {
			debug( 'Detected multi-line comment.' );
			return code;
		}
		// Check whether the code ends in an empty block statement, and, if so, interpret as an empty object literal...
		for ( i = ast.body.length-1; i >= 0; i-- ) {
			node = ast.body[ i ];
			if ( node.type !== 'EmptyStatement' ) {
				break;
			}
		}
		if ( node.type === 'BlockStatement' && node.body.length === 0 ) {
			debug( 'Detected a trailing empty object literal. Wrapping as an expression...' );
			code = code.slice( 0, node.start ) + '(' + code.slice( node.start, node.end ) + ')' + code.slice( node.end );
		}
		// Check whether the command is "silenced" (i.e., terminates in a semicolon):
		node = ast.body[ ast.body.length-1 ];
		if ( isSilentCommand( code ) ) {
			// To ensure that "silenced" variable/function declarations produce a return value which can be assigned to `ans`, check the last node for declarations...
			if ( node.type === 'VariableDeclaration' ) {
				debug( 'Found a trailing variable declaration which is silenced. Appending statement...' );
				tmp = node.declarations[ node.declarations.length-1 ];
				code += tmp.id.name + ';'; // assign value of the last declared variable
			} else if ( node.type === 'FunctionDeclaration' ) {
				debug( 'Found a trailing function declaration which is silenced. Appending statement...' );
				code += node.id.name + ';';
			}
		}
		// To ensure that "un-silenced" variable/function declarations produce a return value, check the last node for declarations...
		else if ( node.type === 'VariableDeclaration' ) {
			debug( 'Found a trailing variable declaration which is not silenced. Appending expression...' );
			tmp = node.declarations[ node.declarations.length-1 ];
			code += ';' + tmp.id.name; // return the assigned value of last declared variable
		} else if ( node.type === 'FunctionDeclaration' ) {
			debug( 'Found a trailing function declaration which is not silenced. Appending expression...' );
			code += ';' + node.id.name;
		}
		return code;
	}
	debug( 'Checking for a trailing object literal...' );

	// Make a best-effort attempt to parse the code string into an AST:
	ast = parseLoose( code, AOPTS );

	// If the body is empty, assume that we have been given an unterminated comment...
	if ( ast.body.length === 0 ) {
		debug( 'Detected unterminated comment.' );
		return err; // original error message
	}
	// Get the last (non-empty) node:
	for ( i = ast.body.length-1; i >= 0; i-- ) {
		node = ast.body[ i ];
		if ( node.type !== 'EmptyStatement' ) {
			break;
		}
	}
	// Check for a trailing node which is interpreted as a block statement, as this node could be an object literal...
	if ( node.type === 'BlockStatement' ) {
		debug( 'Last (non-empty) statement interpreted as a block statement. Checking if object literal...' );
		tmp = code.slice( node.start, node.end );
		try {
			// Check whether the trailing node can be interpreted as an expression:
			parse( 'return ' + tmp + ';', {
				'allowReturnOutsideFunction': true,
				'ecmaVersion': AOPTS.ecmaVersion
			});

			// Since no syntax error occurred, check whether we can parse if we parenthesize:
			wrapped = '(' + tmp + ')\n';
			parse( wrapped, AOPTS );
		} catch ( error ) {
			debug( 'Failed to detect an object literal.' );
			debug( 'Error: %s', error.message );
			debug( 'Unable to generate AST.' );
			return err; // original error message
		}
		debug( 'Detected an object literal. Wrapping as an expression...' );
		code = code.slice( 0, node.start ) + wrapped + code.slice( node.end ); // Note: this should include trailing empty statements (if any)
		debug( 'Attempting to generate an AST...' );
		try {
			ast = parse( code, AOPTS );
		} catch ( error ) {
			debug( 'Unable to generate an AST.' );
			debug( 'Error: %s', error.message );
			return err; // original error message
		}
		debug( 'Successfully generated an AST.' );
		return code;
	}
	// As the last statement is *not* a block statement, our inability to parse is not due to a trailing object literal, so assume that the user has made some other syntax error...
	debug( 'Unable to generate an AST.' );
	return err; // original error message
}


// EXPORTS //

module.exports = processCommand;
