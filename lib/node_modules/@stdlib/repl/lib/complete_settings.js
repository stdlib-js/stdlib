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

'use strict';

// MODULES //

var logger = require( 'debug' );
var parse = require( 'acorn-loose' ).parse;
var startsWith = require( '@stdlib/string/starts-with' );
var settingsAliasArgs = require( './settings_alias_args.js' );
var SETTINGS_NAMES = require( './settings_names.js' );


// VARIABLES //

var debug = logger( 'repl:completer:settings' );
var AOPTS = {
	'ecmaVersion': 'latest'
};


// MAIN //

/**
* Completes a settings API expression.
*
* @private
* @param {Array} out - output array for storing completions
* @param {REPL} repl - REPL instance
* @param {string} expression - expression to complete
* @param {string} alias - settings API alias
* @param {string} value - value to complete
* @returns {string} value filter
*/
function complete( out, repl, expression, alias, value ) {
	var args;
	var ast;
	var arg;
	var v;
	var i;

	// Get the list of argument types for the desired API:
	debug( 'Settings API: %s', alias );
	args = settingsAliasArgs( alias );

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
	for ( i = 0; i < SETTINGS_NAMES.length; i++ ) {
		v = SETTINGS_NAMES[ i ];
		if ( startsWith( v, value ) ) {
			debug( 'Found a completion: %s', v );
			out.push( v );
		} else {
			debug( '%s does not match filter %s. Skipping...', v, value );
		}
	}
	return value;
}


// EXPORTS //

module.exports = complete;
