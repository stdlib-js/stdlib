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
var isArrayLike = require( '@stdlib/assert/is-array-like-object' );
var isRegExp = require( '@stdlib/assert/is-regexp' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var propertyDescriptor = require( '@stdlib/utils/property-descriptor' );
var defineProperty = require( '@stdlib/utils/define-property' );
var contains = require( './../contains.js' );
var log = require( './../log.js' );


// VARIABLES //

var debug = logger( 'repl:command:clear_workspace' );


// FUNCTIONS //

/**
* Filters a variable list based on include and exclude filters.
*
* @private
* @param {Array} list - variable list to filter
* @param {(RegExp|ArrayLikeObject|void)} include - name inclusion filter
* @param {boolean} isArrInc - boolean indicating whether the inclusion filter is an array
* @param {(RegExp|ArrayLikeObject|void)} exclude - name exclusion filter
* @param {boolean} isArrExc - boolean indicating whether the exclusion filter is an array
* @returns {Array} input list
*/
function filter( list, include, isArrInc, exclude, isArrExc ) {
	var FLG;
	var v;
	var i;
	var j;

	// Perform list "compression" without using temporary data structures...
	j = 0;
	for ( i = 0; i < list.length; i += 2 ) {
		// Note: we can only delete "configurable" variables...
		if ( list[ i+1 ].configurable === false ) {
			// Variable is non-configurable and, hence, cannot be deleted...
			continue;
		}
		v = list[ i ];
		FLG = false;

		// Note: exclude/include order matters!!!
		if ( exclude ) {
			if ( isArrExc ) {
				if ( contains( exclude, v ) ) {
					// The variable is in the explicit exclude list:
					FLG = true;
				}
			} else if ( exclude.test( v ) ) {
				// The variable passes the exclusion test:
				FLG = true;
			}
		}
		// Only apply inclusion filters if the variable has not been already excluded from deletion...
		if ( FLG === false && include ) {
			if ( isArrInc ) {
				if ( !contains( include, v ) ) {
					// The variable is *not* in the include list:
					FLG = true;
				}
			} else if ( !include.test( v ) ) {
				// The variable does *not* pass the include test:
				FLG = true;
			}
		}
		if ( FLG ) {
			list[ j ] = list[ i ];
			list[ j+1 ] = list[ i+1 ];
			j += 2;
		}
	}
	list.length = j;
	return list;
}


// MAIN //

/**
* Returns a callback to be invoked upon calling the `clearWorkspace` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Deletes user-defined variables in a specified workspace.
	*
	* @private
	* @param {string} [name] - workspace name
	* @param {Options} [options] - function options
	* @param {(RegExp|ArrayLikeObject)} [options.include] - name inclusion filter
	* @param {(RegExp|ArrayLikeObject)} [options.exclude] - name exclusion filter
	* @returns {void}
	*/
	function onCommand( name, options ) {
		var isArrInc;
		var isArrExc;
		var opts;
		var list;
		var desc;
		var err;
		var tmp;
		var n;
		var d;
		var i;

		if ( arguments.length === 0 ) {
			n = repl._currentWorkspace;
			opts = {};
		} else if ( arguments.length === 1 ) {
			if ( isString( name ) ) {
				n = name;
				opts = {};
			} else if ( isPlainObject( name ) ) {
				n = repl._currentWorkspace;
				opts = name;
			} else {
				err = new TypeError( 'invalid argument. Must provide either an options object or a workspace name. Value: `' + name + '`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
		} else {
			if ( !isString( name ) ) {
				err = new TypeError( 'invalid argument. First argument must be a string. Value: `' + name + '`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
			n = name;
			if ( !isPlainObject( options ) ) {
				err = new TypeError( 'invalid argument. `options` argument must be an object. Value: `' + name + '`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
			opts = options;
		}
		if ( hasOwnProp( opts, 'include' ) ) {
			isArrInc = isArrayLike( opts.include );
			if ( isArrInc === false && !isRegExp( opts.include ) ) {
				err = new TypeError( 'invalid option. `include` option must be a regular expression or an array-like object. Option: `' + opts.include + '`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
		}
		if ( hasOwnProp( opts, 'exclude' ) ) {
			isArrExc = isArrayLike( opts.exclude );
			if ( isArrExc === false && !isRegExp( opts.exclude ) ) {
				err = new TypeError( 'invalid option. `exclude` option must be a regular expression or an array-like object. Option: `' + opts.include + '`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
		}
		if ( n === repl._currentWorkspace ) {
			// Get the current variable list:
			tmp = repl._context.varsWorkspace( n, {} );
			if ( tmp.length === 0 ) {
				// No user-defined variables to delete...
				log( repl, 'No user-defined variables to delete.' );
				debug( 'No user-defined variables to delete.' );
				return;
			}
			// Cache the variable names and their respective property descriptors:
			list = [];
			for ( i = 0; i < tmp.length; i++ ) {
				list.push( tmp[ i ], propertyDescriptor( repl._context, tmp[i] ) ); // eslint-disable-line max-len
			}
			d = list.length / 2;

			// Filter the list of variables:
			list = filter( list, opts.include, isArrInc, opts.exclude, isArrExc ); // eslint-disable-line max-len

			// Reset the REPL evaluation context (Why? Because we cannot simply delete variables as seen within the REPL environment. E.g., variables declared with `var` in the global scope are non-configurable, and, thus, cannot be deleted (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete). While we can delete a property/variable from the REPL context object here, this deletion does not get propagated to within the REPL environment; i.e., a user can still access the deleted property as a variable within the REPL environment. Hence, we need to adopt a cache, reset, and reassign approach, as done here.):
			repl.resetContext(); // Note: in sandboxed environments, we assume a fresh context object is created!

			// Reassign the variables which were not deleted:
			for ( i = 0; i < list.length; i += 2 ) {
				desc = list[ i+1 ];
				if ( desc.configurable || repl._sandbox ) {
					// If configurable, in non-sandboxed environments, we simply overwrite the existing descriptor; in sandboxed environments, we always need to redefine the variable with the appropriate property descriptor; if non-configurable, in non-sandboxed environments, we do not need to reassign/redefine, as the variable could not be deleted from the context object and thus already exists and cannot be reconfigured:
					defineProperty( repl._context, list[ i ], desc );
				}
			}
			d -= list.length / 2;
			log( repl, 'Deleted '+d+' variable(s).' );
			debug( 'Deleted %d variable(s).', d );
			return;
		}
		if ( !hasOwnProp( repl._workspaces, n ) ) {
			err = new Error( 'invalid argument. Unrecognized workspace name. Value: `' + n + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		list = repl._workspaces[ n ];

		// Case: clear all user-defined variables...
		if ( opts.include === void 0 && opts.exclude === void 0 ) {
			list.length = 0;
			log( repl, 'Deleted '+d+' variable(s).' );
			debug( 'Deleted %d variable(s).', d );
			return;
		}
		// Case: include/exclude filters:
		list = filter( list, opts.include, isArrInc, opts.exclude, isArrExc );
		d -= list.length / 2;
		log( repl, 'Deleted '+d+' variable(s).' );
		debug( 'Deleted %d variable(s).', d );
	}
}


// EXPORTS //

module.exports = command;
