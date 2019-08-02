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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isArrayLike = require( '@stdlib/assert/is-array-like-object' );
var isRegExp = require( '@stdlib/assert/is-regexp' );
var defineProperty = require( '@stdlib/utils/define-property' );
var contains = require( './../contains.js' );
var log = require( './../log.js' );


// VARIABLES //

var debug = logger( 'repl:command:load_workspace' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `loadWorkspace` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Loads variables from a specified workspace into the current workspace.
	*
	* @private
	* @param {string} name - workspace name
	* @param {Options} [options] - function options
	* @param {(RegExp|ArrayLikeObject)} [options.include] - name inclusion filter
	* @param {(RegExp|ArrayLikeObject)} [options.exclude] - name exclusion filter
	* @param {boolean} [options.override=true] - boolean indicating whether to override existing workspace variables
	* @returns {void}
	*/
	function onCommand( name, options ) {
		var isArrInc;
		var isArrExc;
		var opts;
		var err;
		var cnt;
		var ws;
		var v;
		var i;
		if ( !isString( name ) ) {
			err = new TypeError( 'invalid argument. First argument must be a string. Value: `' + name + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		opts = {
			'override': true
		};
		if ( arguments.length > 1 ) {
			if ( !isPlainObject( options ) ) {
				err = new TypeError( 'invalid argument. `options` argument must be an object. Value: `' + name + '`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
			if ( hasOwnProp( options, 'include' ) ) {
				isArrInc = isArrayLike( options.include );
				if ( isArrInc === false && !isRegExp( options.include ) ) {
					err = new TypeError( 'invalid option. `include` option must be a regular expression or an array-like object. Option: `' + options.include + '`.' );
					debug( 'Error: %s', err.message );
					repl._ostream.write( 'Error: '+err.message+'\n' );
					return;
				}
				opts.include = options.include;
			}
			if ( hasOwnProp( options, 'exclude' ) ) {
				isArrExc = isArrayLike( options.exclude );
				if ( isArrExc === false && !isRegExp( options.exclude ) ) {
					err = new TypeError( 'invalid option. `exclude` option must be a regular expression or an array-like object. Option: `' + options.exclude + '`.' );
					debug( 'Error: %s', err.message );
					repl._ostream.write( 'Error: '+err.message+'\n' );
					return;
				}
				opts.exclude = options.exclude;
			}
			if ( hasOwnProp( options, 'override' ) ) {
				if ( !isBoolean( options.override ) ) {
					err = new TypeError( 'invalid option. `override` option must be a boolean. Option: `' + options.override + '`.' );
					debug( 'Error: %s', err.message );
					repl._ostream.write( 'Error: '+err.message+'\n' );
					return;
				}
				opts.override = options.override;
			}
		}
		if ( name === repl._currentWorkspace ) {
			log( repl, 'Already in \''+name+'\' workspace.' );
			debug( 'Already in \'%s\' workspace.', name );
			return;
		}
		if ( !hasOwnProp( repl._workspaces, name ) ) {
			err = new Error( 'invalid argument. Unrecognized workspace name. Value: `' + name + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		ws = repl._workspaces[ name ];

		// Note: the internal branches are not the most performant implementation, but the implementation is straightforward and presumably "good enough"...
		cnt = 0;
		for ( i = 0; i < ws.length; i += 2 ) {
			v = ws[ i ];
			if ( opts.include ) {
				if ( isArrInc && !contains( opts.include, v ) ) {
					continue;
				}
				if ( !opts.include.test( v ) ) {
					continue;
				}
			}
			if ( opts.exclude ) {
				if ( isArrExc && contains( opts.exclude, v ) ) {
					continue;
				}
				if ( opts.exclude.test( v ) ) {
					continue;
				}
			}
			if ( hasOwnProp( repl._context, v ) && opts.override === false ) {
				continue;
			}
			// If we've made it this far, the variable should have passed all filters...
			cnt += 1;
			defineProperty( repl._context, v, ws[ i+1] );
		}
		log( repl, cnt.toString()+' variable(s) loaded from \''+name+'\' workspace.' );
		debug( '%d variable(s) loaded from \'%s\' workspace.', cnt, name );
	}
}


// EXPORTS //

module.exports = command;
