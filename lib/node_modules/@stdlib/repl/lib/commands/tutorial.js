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
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var objectKeys = require( '@stdlib/utils/keys' );
var TUTORIALS = require( './../repl_docs.js' ).tutorial;


// VARIABLES //

var debug = logger( 'repl:command:tutorial' );
var HELP_TEXT;


// FUNCTIONS //

/**
* Returns tutorial help text.
*
* @private
* @returns {string} tutorial help text
*/
function help() {
	var names;
	var o;
	var i;

	if ( HELP_TEXT ) {
		return HELP_TEXT;
	}
	names = objectKeys( TUTORIALS );
	HELP_TEXT = '\n';
	for ( i = 0; i < names.length; i++ ) {
		o = TUTORIALS[ names[ i ] ];
		HELP_TEXT += names[ i ] + '\n';
		HELP_TEXT += '    ';
		if ( o.desc ) {
			HELP_TEXT += TUTORIALS[ names[ i ] ].desc;
		} else {
			HELP_TEXT += '(no description available)';
		}
		HELP_TEXT += '\n\n';
	}
	return HELP_TEXT;
}


// MAIN //

/**
* Returns a callback to be invoked upon calling the `tutorial` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Starts a tutorial if provided a recognized tutorial name; otherwise, returns the list of available tutorials.
	*
	* @private
	* @param {string} [name] - tutorial name
	* @param {Options} [options] - tutorial options
	* @param {string} [options.borderTop='*'] - top border character sequence
	* @param {string} [options.borderBottom='*'] - bottom border character sequence
	* @param {string} [options.borderLeft='* '] - left border character sequence
	* @param {string} [options.borderRight=' *'] - right border character sequence
	* @param {(boolean|string)} [options.counter='progress'] - slide counter
	* @param {string} [options.workspace] - REPL workspace name
	* @param {boolean} [options.autoClear=true] - boolean indicating whether to automatically clear the screen before writing a rendered slide to the REPL
	* @returns {(NonNegativeInteger|void)} tutorial presentation identifier
	*/
	function onCommand( name, options ) {
		var opts;
		var err;
		if ( arguments.length === 0 ) {
			repl._ostream.write( help() );
			return;
		}
		if ( !isString( name ) ) {
			err = new TypeError( 'invalid argument. First argument must be a string. Value: `'+name+'`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( !hasOwnProp( TUTORIALS, name ) ) {
			err = new Error( 'invalid argument. Unrecognized tutorial name. Value: `'+name+'`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		debug( 'Tutorial: %s', name );

		// Define default options:
		opts = {
			'borderTop': '*',
			'borderBottom': '*',
			'borderLeft': '* ',
			'borderRight': ' *',
			'autoClear': true,
			'counter': 'progress',
			'workspace': 'tutorial-'+name+'-'+(repl._internal.presentation.counter+1 )
		};

		// Handle user-provided options...
		if ( arguments.length > 1 ) {
			if ( !isPlainObject( options ) ) {
				err = new TypeError( 'invalid argument. Options argument must be an object. Value: `'+options+'`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
			// Punt option validation to the presentation API...
			if ( hasOwnProp( options, 'borderTop' ) ) {
				opts.borderTop = options.borderTop;
			}
			if ( hasOwnProp( options, 'borderBottom' ) ) {
				opts.borderBottom = options.borderBottom;
			}
			if ( hasOwnProp( options, 'borderLeft' ) ) {
				opts.borderLeft = options.borderLeft;
			}
			if ( hasOwnProp( options, 'borderRight' ) ) {
				opts.borderRight = options.borderRight;
			}
			if ( hasOwnProp( options, 'counter' ) ) {
				opts.counter = options.counter;
			}
			if ( hasOwnProp( options, 'autoClear' ) ) {
				opts.autoClear = options.autoClear;
			}
			if ( hasOwnProp( options, 'workspace' ) ) {
				opts.workspace = options.workspace;
			}
		}
		debug( 'Options: %s', JSON.stringify( opts ) );

		debug( 'Starting tutorial...' );
		return repl._context.presentationStart( TUTORIALS[ name ].text, opts );
	}
}


// EXPORTS //

module.exports = command;
