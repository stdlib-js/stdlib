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
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isArrayLike = require( '@stdlib/assert/is-array-like-object' );
var isRegExp = require( '@stdlib/assert/is-regexp' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var contains = require( './../contains.js' );
var log = require( './../log.js' );


// VARIABLES //

var debug = logger( 'repl:command:clear_userdocs' );
var FILTERS = [
	'alias',
	'value',
	'*'
];


// FUNCTIONS //

/**
* Filters user-defined documentation based on include and exclude filters.
*
* @private
* @param {Array} list - documentation to filter
* @param {string} type - filter type
* @param {(RegExp|ArrayLikeObject|void)} include - name inclusion filter
* @param {boolean} isArrInc - boolean indicating whether the inclusion filter is an array
* @param {(RegExp|ArrayLikeObject|void)} exclude - name exclusion filter
* @param {boolean} isArrExc - boolean indicating whether the exclusion filter is an array
* @returns {Array} reference to input array
*/
function filter( list, type, include, isArrInc, exclude, isArrExc ) {
	var ALIAS_FLG;
	var VALUE_FLG;
	var FLG;
	var v;
	var i;
	var j;

	if ( type === '*' ) {
		ALIAS_FLG = true;
		VALUE_FLG = true;
	} else if ( type === 'alias' ) {
		ALIAS_FLG = true;
	} else {
		VALUE_FLG = true;
	}
	// Perform list "compression" without using temporary data structures...
	j = 0;
	for ( i = 0; i < list.length; i += 3 ) {
		v = list[ i ];
		FLG = false;

		// Note: exclude/include order matters!!!
		if ( exclude ) {
			if ( isArrExc ) {
				if ( ALIAS_FLG && contains( exclude, v ) ) {
					// The alias is in the explicit exclude list:
					FLG = true;
				} else if ( VALUE_FLG && contains( exclude, list[ i+1 ] ) ) {
					// The value is in the explicit exclude list:
					FLG = true;
				}
			} else if ( exclude.test( v ) ) {
				// The alias passes the exclusion test:
				FLG = true;
			}
		}
		// Only apply inclusion filters if the alias has not been already excluded from deletion...
		if ( FLG === false && include ) {
			if ( isArrInc ) {
				if ( ALIAS_FLG && !contains( include, v ) ) {
					// The alias is *not* in the include list:
					FLG = true;
				} else if ( VALUE_FLG && !contains( include, list[ i+1 ] ) ) {
					// The value is *not* in the include list:
					FLG = true;
				}
			} else if ( !include.test( v ) ) {
				// The alias does *not* pass the include test:
				FLG = true;
			}
		}
		if ( FLG ) {
			list[ j ] = list[ i ];
			list[ j+1 ] = list[ i+1 ];
			list[ j+2 ] = list[ i+2 ];
			j += 3;
		}
	}
	list.length = j;
	return list;
}


// MAIN //

/**
* Returns a callback to be invoked upon calling the `clearUserDocs` command.
*
* @private
* @param {REPL} repl - REPL instance
* @returns {Function} callback
*/
function command( repl ) {
	return onCommand;

	/**
	* Deletes user-defined documentation.
	*
	* @private
	* @param {Options} [options] - function options
	* @param {(RegExp|ArrayLikeObject)} [options.include] - name inclusion filter
	* @param {(RegExp|ArrayLikeObject)} [options.exclude] - name exclusion filter
	* @param {boolean} [options.filter='*'] - filter type (only applicable for array-like inclusion/exclusion filters)
	* @returns {void}
	*/
	function onCommand( options ) {
		var isArrInc;
		var isArrExc;
		var opts;
		var err;
		var len;

		if ( arguments.length ) {
			if ( !isPlainObject( options ) ) {
				err = new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
			opts = options;
		} else {
			opts = {};
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
		if ( hasOwnProp( opts, 'filter' ) ) {
			if ( !contains( FILTERS, opts.filter ) ) {
				err = new TypeError( 'invalid option. `filter` option must be one of `'+ FILTERS.join( ', ' ) +'`. Option: `' + opts.filter + '`.' );
				debug( 'Error: %s', err.message );
				repl._ostream.write( 'Error: '+err.message+'\n' );
				return;
			}
		} else {
			opts.filter = '*';
		}
		// Case: clear all user-defined documentation...
		if ( opts.include === void 0 && opts.exclude === void 0 ) {
			repl._userdocs.length = 0;
			log( repl, 'Cleared all user-defined documentation.' );
			debug( 'Cleared all user-defined documentation.' );
			return;
		}
		// Case: include/exclude filters:
		len = repl._userdocs.length / 3;
		filter( repl._userdocs, opts.filter, opts.include, isArrInc, opts.exclude, isArrExc ); // eslint-disable-line max-len
		len -= repl._userdocs.length / 3;
		log( repl, 'Cleared documentation for '+len+' alias(es).' );
		debug( 'Cleared documentation for %d alias(es).', len );
	}
}


// EXPORTS //

module.exports = command;
