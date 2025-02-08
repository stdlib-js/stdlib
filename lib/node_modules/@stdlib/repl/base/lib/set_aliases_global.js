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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var setConfigurableReadOnly = require( '@stdlib/utils/define-configurable-read-only-property' );
var setMemoizedConfigurableReadOnly = require( '@stdlib/utils/define-memoized-configurable-read-only-property' ); // eslint-disable-line id-length
var contains = require( './contains.js' );
var createAccessor = require( './create_accessor.js' );
var ALIASES = require( './aliases.js' );


// VARIABLES //

var debug = logger( 'repl:set_aliases_global' );


// FUNCTIONS //

/**
* Tests whether an alias is already accounted for in a global variable name list.
*
* @private
* @param {Array} list - list of global variable names
* @param {Array} path - alias "path"
* @returns {boolean} boolean indicating whether an alias is already accounted for
*/
function hasAliasPath( list, path ) {
	var tmp;
	var N;
	var v;
	var i;
	var j;

	N = path.length;
	tmp = [ path[ 0 ] ];
	for ( i = 1; i < N; i++ ) {
		tmp.push( tmp[ i-1 ]+'.'+tmp[ i ] );
	}
	for ( i = 0; i < list.length; i++ ) {
		v = list[ i ];
		for ( j = 0; j < N; j++ ) {
			if ( v === tmp[ j ] ) {
				return true;
			}
		}
	}
	return false;
}


// MAIN //

/**
* Sets aliases on a non-sandboxed `context` object.
*
* ## Notes
*
* -   This function avoids overwriting properties in a non-sandboxed environment in order to avoid unintended side-effects.
*
* @private
* @param {Array} out1 - output array for storing a list of global variables added to the global namespace
* @param {Array} out2 - strided output array for storing resolved module exports
* @param {Object} context - context object
* @param {Array} skip - list of aliases to skip
* @returns {Object} context object
*/
function setAliasesGlobal( out1, out2, context, skip ) {
	var alias;
	var key;
	var FLG;
	var N;
	var o;
	var p;
	var i;
	var j;
	var k;

	N = skip.length;

	// Extend the context object, keeping in mind that an alias may be nested (e.g., `a.b.c`), and, if so, we need to generate nested objects...
	for ( i = 0; i < ALIASES.length; i++ ) {
		alias = ALIASES[ i ];
		if ( contains( N, skip, 1, 0, alias ) ) {
			continue;
		}
		o = context;
		FLG = false;
		key = alias.split( '.' );
		for ( j = 0; j < key.length-1; j++ ) {
			k = key[ j ];
			if ( !hasOwnProp( o, k ) ) {
				// Upon first encountering a new property, we need to remember the current key path, so that we can later remove the properties upon closing the REPL...
				p = key.slice( 0, j+1 );
				if ( FLG === false && !hasAliasPath( out1, p ) ) {
					FLG = true;
					out1.push( p.join( '.' ) );
				}
				setConfigurableReadOnly( o, k, {} );
			}
			o = o[ k ];
		}
		k = key[ j ];

		// Avoid overwriting properties in a non-sandboxed environment in order to avoid unintended side-effects (e.g., don't break an already running application which has already defined a particular global variable)...
		if ( hasOwnProp( o, k ) ) {
			debug( 'Skipping alias as global context property `'+alias+'` is already assigned.' );
		} else {
			if ( FLG === false && !hasAliasPath( out1, key ) ) {
				out1.push( alias );
			}
			setMemoizedConfigurableReadOnly( o, k, createAccessor( out2, context.require, alias ) ); // eslint-disable-line max-len
		}
	}
	return context;
}


// EXPORTS //

module.exports = setAliasesGlobal;
