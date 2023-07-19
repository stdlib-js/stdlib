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
var parse = require( 'acorn-loose' ).parse;
var startsWith = require( '@stdlib/string/starts-with' );
var objectKeys = require( '@stdlib/utils/keys' );
var tutorialAliasArgs = require( './tutorial_alias_args.js' );
var TUTORIALS = require( './repl_docs.js' ).tutorial;


// VARIABLES //

var debug = logger( 'repl:completer:tutorial' );
var TUTS = objectKeys( TUTORIALS );
var AOPTS = {
	'ecmaVersion': 'latest'
};


// MAIN //

/**
* Completes a tutorial API expression.
*
* @private
* @param {Array} out - output array for storing completions
* @param {REPL} repl - REPL instance
* @param {string} expression - expression to complete
* @param {string} alias - tutorial API alias
* @param {string} value - value to complete
* @returns {string} value filter
*/
function complete( out, repl, expression, alias, value ) {
	var args;
	var ast;
	var arg;
	var t;
	var i;

	// Get the list of argument types for the desired API:
	debug( 'Tutorial API: %s', alias );
	args = tutorialAliasArgs( alias );

	// Parse the expression into an AST:
	debug( 'Expression: %s', expression );
	ast = parse( expression, AOPTS );

	// Check whether the argument which triggered TAB completion has a corresponding argument type which is completable:
	debug( 'Checking if argument is completable...' );
	arg = args[ ast.body[ 0 ].expression.arguments.length-1 ];
	if ( !arg ) {
		debug( 'Argument which triggered TAB completion is not completable.' );
		return '';
	}
	debug( 'Argument is completable.' );

	debug( 'Searching for completion candidates...' );
	for ( i = 0; i < TUTS.length; i++ ) {
		t = TUTS[ i ];
		if ( startsWith( t, value ) ) {
			debug( 'Found a completion: %s', t );
			out.push( t );
		} else {
			debug( '%s does not match filter %s. Skipping...', t, value );
		}
	}
	return value;
}


// EXPORTS //

module.exports = complete;
