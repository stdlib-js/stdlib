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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isArrayLike = require( '@stdlib/assert/is-array-like-object' );
var isRegExp = require( '@stdlib/assert/is-regexp' );
var isReadableProperty = require( '@stdlib/assert/is-readable-property' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var properties = require( '@stdlib/utils/properties' );
var typeOf = require( '@stdlib/utils/type-of' );
var setdiff = require( './../setdiff.js' );
var propertyComparator = require( './../property_comparator.js' );


// VARIABLES //

var debug = logger( 'repl:command:vars_workspace' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `varsWorkspace` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Returns a list of variable names in a specified workspace.
	*
	* @private
	* @param {string} [name] - workspace name
	* @param {Options} [options] - function options
	* @param {RegExp} [options.include] - name inclusion filter
	* @param {RegExp} [options.exclude] - name exclusion filter
	* @param {ArrayLikeObject} [options.types] - type inclusion filter(s)
	* @param {boolean} [options.details] - boolean indicating whether to include additional variable details, such as variable type, contents, etc
	* @returns {(Array|void)} workspace variable names
	*/
	function onCommand( name, options ) {
		var opts;
		var list;
		var type;
		var err;
		var tmp;
		var out;
		var FLG;
		var v;
		var n;
		var i;
		var j;

		if ( arguments.length === 0 ) {
			return setdiff( repl._workspace, properties( repl._context ).sort( propertyComparator ) ); // eslint-disable-line max-len
		}
		if ( arguments.length === 1 ) {
			if ( isString( name ) ) {
				n = name;
				opts = {};
			} else if ( isPlainObject( name ) ) {
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
		if ( hasOwnProp( opts, 'include' ) && !isRegExp( opts.include ) ) {
			err = new TypeError( 'invalid option. `include` option must be a regular expression. Option: `' + opts.include + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( hasOwnProp( opts, 'exclude' ) && !isRegExp( opts.exclude ) ) {
			err = new TypeError( 'invalid option. `exclude` option must be a regular expression. Option: `' + opts.include + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( hasOwnProp( opts, 'types' ) && !isArrayLike( opts.types ) ) {
			err = new TypeError( 'invalid option. `types` option must be an array-like object. Option: `' + opts.types + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( hasOwnProp( opts, 'details' ) && !isBoolean( opts.details ) ) {
			err = new TypeError( 'invalid option. `details` option must be a boolean. Option: `' + opts.details + '`.' );
			debug( 'Error: %s', err.message );
			repl._ostream.write( 'Error: '+err.message+'\n' );
			return;
		}
		if ( n === void 0 || n === repl._currentWorkspace ) {
			tmp = properties( repl._context ).sort( propertyComparator );
			tmp = setdiff( repl._workspace, tmp );
			list = [];
			for ( i = 0; i < tmp.length; i++ ) {
				if ( isReadableProperty( repl._context, tmp[ i ] ) ) {
					list.push( tmp[ i ], repl._context[ tmp[ i ] ] );
				} else {
					// The variable can be set, but not retrieved (i.e., is write-only), so value inspection is not possible without triggering an error...
					list.push( tmp[ i ], void 0 );
				}
			}
		} else {
			if ( !hasOwnProp( repl._workspaces, n ) ) {
				err = new Error( 'invalid argument. Unrecognized workspace name. Value: `' + n + '`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
			list = repl._workspaces[ n ].slice();
			for ( i = 1; i < list.length; i += 2 ) {
				if ( typeof list[ i ].get === 'function' ) {
					// WARNING: the `this` context is not defined, as the variable is not actually bound to a global instance!
					list[ i ] = list[ i ].get.call( null );
				} else if ( typeof list[ i ].set === 'function' ) {
					// The variable can be set, but not retrieved (i.e., is write-only), so value inspection is not possible without triggering an error...
					list[ i ] = void 0;
				} else {
					list[ i ] = list[ i ].value;
				}
			}
		}
		out = [];
		for ( i = 0; i < list.length; i += 2 ) {
			v = list[ i ];
			FLG = false;
			type = '';
			if ( opts.include && !opts.include.test( v ) ) {
				continue;
			}
			if ( opts.exclude && opts.exclude.test( v ) ) {
				continue;
			}
			if ( opts.types ) {
				type = typeOf( list[ i+1 ] );
				for ( j = 0; j < opts.types.length; j++ ) {
					if ( type === opts.types[ j ] ) {
						FLG = true;
						break;
					}
				}
				if ( FLG === false ) {
					continue;
				}
			}
			// If we've made it this far, the variable should have passed all filters...
			out.push( v );
			if ( opts.details ) {
				j = out.length - 1;
				out[ j ] = {
					'name': out[ j ],
					'type': type || typeOf( list[ i+1 ] ),
					'data': String( list[ i+1 ] ) // WARNING: for large datasets, this could be expensive!!! TODO: may want to consider alternative strategies for serialization based on a value's type.
				};
				v = out[ j ].data;
				if ( v.length > 20 ) {
					out[ j ].data = v.slice( 0, 9 ) + '...' + v.slice( v.length-8 );
				}
			}
		}
		return out;
	}
}


// EXPORTS //

module.exports = command;
