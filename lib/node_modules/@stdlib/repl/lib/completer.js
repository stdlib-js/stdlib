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
var objectKeys = require( '@stdlib/utils/keys' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var fsRegExp = require( './regexp_fs_aliases.js' );
var requireRegExp = require( './regexp_require.js' );
var workspaceRegExp = require( './regexp_workspace.js' );
var tutorialRegExp = require( './regexp_tutorial.js' );
var settingsRegExp = require( './regexp_settings.js' );
var reservedCharsRegExp = require( './regexp_reserved_syntax_characters.js' );
var completeRequire = require( './complete_require.js' );
var completeFS = require( './complete_fs.js' );
var completeWorkspace = require( './complete_workspace.js' );
var completeTutorial = require( './complete_tutorial.js' );
var completeSettings = require( './complete_settings.js' );
var completeExpression = require( './complete_expression.js' );


// VARIABLES //

var debug = logger( 'repl:completer:callback' );


// FUNCTIONS //

/**
* Normalizes a completion list.
*
* @private
* @param {Array} list - completion list
* @returns {Array} normalized completion list
*/
function normalize( list ) {
	var hash;
	var i;

	// Get unique values...
	hash = {};
	for ( i = 0; i < list.length; i++ ) {
		if ( !hasOwnProp( hash, list[ i ] ) ) {
			hash[ list[ i ] ] = true;
		}
	}
	list = objectKeys( hash );

	// TODO: sort such that printed columns are in lexicographic order, not rows, similar to bash behavior!

	// Sort the values in lexicographic order:
	list = list.sort();

	return list;
}


// MAIN //

/**
* Returns a callback for supporting TAB completion in a REPL environment.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} TAB completion callback
*/
function completer( repl ) {
	return complete;

	/**
	* Callback invoked upon a user entering the TAB character at the command prompt.
	*
	* @private
	* @param {string} line - current line
	* @param {Function} clbk - completion callback
	* @returns {void}
	*/
	function complete( line, clbk ) {
		var match;
		var exts;
		var res;

		debug( 'Line: %s', line );

		// Initialize an array for storing completion results:
		res = [];

		// Test if the line has an incomplete `require` expression:
		match = line.match( requireRegExp() );
		if ( match ) {
			debug( 'Detected incomplete `require` expression.' );

			exts = objectKeys( repl._context.require.extensions );
			debug( 'Supported `require` filename extensions: %s', exts.join( ', ' ) );

			line = completeRequire( res, match[ 1 ], repl._context.module.paths, exts ); // eslint-disable-line max-len
			res = normalize( res );

			debug( 'Completion filter: %s', line );
			debug( 'Results: %s', res.join( ', ' ) );
			return clbk( null, [ res, line ] );
		}
		// Test if the line has an incomplete file system expression:
		match = line.match( fsRegExp() );
		if ( match ) {
			debug( 'Detected incomplete file system expression.' );

			debug( 'Expression: %s', match[ 0 ] );
			debug( 'File system API: %s', match[ 1 ] );
			debug( 'Path to complete: %s', match[ 3 ] );
			line = completeFS( res, match[ 0 ], match[ 1 ], match[ 3 ] );
			res = normalize( res );

			debug( 'Completion filter: %s', line );
			debug( 'Results: %s', res.join( ', ' ) );
			return clbk( null, [ res, line ] );
		}
		// Test if the line has an incomplete workspace expression:
		match = line.match( workspaceRegExp() );
		if ( match ) {
			debug( 'Detected incomplete workspace expression.' );

			debug( 'Expression: %s', match[ 0 ] );
			debug( 'Workspace API: %s', match[ 1 ] );
			debug( 'Value to complete: %s', match[ 3 ] );
			line = completeWorkspace( res, repl, match[ 0 ], match[ 1 ], match[ 3 ] ); // eslint-disable-line max-len
			res = normalize( res );

			debug( 'Completion filter: %s', line );
			debug( 'Results: %s', res.join( ', ' ) );
			return clbk( null, [ res, line ] );
		}
		// Test if the line has an incomplete tutorial expression:
		match = line.match( tutorialRegExp() );
		if ( match ) {
			debug( 'Detected incomplete tutorial expression.' );

			debug( 'Expression: %s', match[ 0 ] );
			debug( 'Tutorial API: %s', match[ 1 ] );
			debug( 'Value to complete: %s', match[ 3 ] );
			line = completeTutorial( res, repl, match[ 0 ], match[ 1 ], match[ 3 ] ); // eslint-disable-line max-len
			res = normalize( res );

			debug( 'Completion filter: %s', line );
			debug( 'Results: %s', res.join( ', ' ) );
			return clbk( null, [ res, line ] );
		}
		// Test if the line has an incomplete settings expression:
		match = line.match( settingsRegExp() );
		if ( match ) {
			debug( 'Detected incomplete settings expression.' );

			debug( 'Expression: %s', match[ 0 ] );
			debug( 'Settings API: %s', match[ 1 ] );
			debug( 'Value to complete: %s', match[ 3 ] );
			line = completeSettings( res, repl, match[ 0 ], match[ 1 ], match[ 3 ] ); // eslint-disable-line max-len
			res = normalize( res );

			debug( 'Completion filter: %s', line );
			debug( 'Results: %s', res.join( ', ' ) );
			return clbk( null, [ res, line ] );
		}
		// Sanity check that we are attempting to complete something which is completable:
		if ( reservedCharsRegExp().test( line[ repl._rli.cursor-1 ] ) ) {
			debug( 'Detected attempt to trigger completion after a special character.' );
			debug( 'Results: %s', res.join( ', ' ) );
			return clbk( null, [ res, line ] );
		}
		debug( 'Attempting to complete an incomplete expression.' );
		line = completeExpression( res, repl._context, line );
		res = normalize( res );
		debug( 'Results: %s', res.join( ', ' ) );
		return clbk( null, [ res, line ] );
	}
}


// EXPORTS //

module.exports = completer;
