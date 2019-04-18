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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isRegExp = require( '@stdlib/assert/is-regexp' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var objectKeys = require( '@stdlib/utils/keys' );


// VARIABLES //

var debug = logger( 'repl:command:workspaces' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `workspaces` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Returns a list of workspaces.
	*
	* @private
	* @param {Options} [options] - function options
	* @param {RegExp} [options.include] - name inclusion filter
	* @param {RegExp} [options.exclude] - name exclusion filter
	* @param {boolean} [options.details] - boolean indicating whether to include additional workspace details, such as variable names, types, contents, etc
	* @returns {Array} workspace names
	*/
	function onCommand( options ) {
		var err;
		var tmp;
		var out;
		var w;
		var i;
		if ( arguments.length === 0 ) {
			return objectKeys( repl._workspaces );
		}
		if ( !isPlainObject( options ) ) {
			err = new TypeError( 'invalid argument. `options` argument must be an object. Value: `' + name + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( hasOwnProp( options, 'include' ) && !isRegExp( options.include ) ) {
			err = new TypeError( 'invalid option. `include` option must be a regular expression. Option: `' + options.include + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( hasOwnProp( options, 'exclude' ) && !isRegExp( options.exclude ) ) {
			err = new TypeError( 'invalid option. `exclude` option must be a regular expression. Option: `' + options.include + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( hasOwnProp( options, 'details' ) && !isBoolean( options.details ) ) {
			err = new TypeError( 'invalid option. `details` option must be a boolean. Option: `' + options.details + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		tmp = objectKeys( repl._workspaces );
		out = [];
		for ( i = 0; i < tmp.length; i++ ) {
			w = tmp[ i ];
			if ( options.include && !options.include.test( w ) ) {
				continue;
			}
			if ( options.exclude && options.exclude.test( w ) ) {
				continue;
			}
			// If we've made it this far, the variable should have passed all filters...
			out.push( w );
			if ( options.details ) {
				out[ out.length-1 ] = {
					'name': w,
					'variables': repl._context.varsWorkspace( w, {
						'details': true
					})
				};
			}
		}
		return out;
	}
}


// EXPORTS //

module.exports = command;
