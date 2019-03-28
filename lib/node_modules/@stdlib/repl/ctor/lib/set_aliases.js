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
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var setMemoizedReadOnly = require( '@stdlib/utils/define-memoized-read-only-property' );
var contains = require( './contains.js' );
var createAccessor = require( './create_accessor.js' );
var ALIASES = require( './aliases.js' );


// VARIABLES //

var debug = logger( 'repl:set_aliases' );


// MAIN //

/**
* Sets aliases on a sandboxed `context` object.
*
* @private
* @param {Array} out - strided output array for storing resolved module exports
* @param {Object} context - context object
* @param {Array} skip - list of aliases to skip
* @returns {Object} context object
*/
function setAliases( out, context, skip ) {
	var alias;
	var key;
	var N;
	var o;
	var i;
	var j;
	var k;

	N = skip.length;

	// Extend the context object, keeping in mind that an alias may be nested (e.g., `a.b.c`), and, if so, we need to recursively generate nested objects...
	for ( i = 0; i < ALIASES.length; i++ ) {
		alias = ALIASES[ i ];
		if ( contains( N, skip, 1, 0, alias ) ) {
			continue;
		}
		o = context;
		key = alias.split( '.' );
		for ( j = 0; j < key.length-1; j++ ) {
			k = key[ j ];
			if ( !hasOwnProp( o, k ) ) {
				setReadOnly( o, k, {} );
			}
			o = o[ k ];
		}
		k = key[ j ];
		if ( hasOwnProp( o, k ) ) {
			debug( 'Skipping alias as global context property `'+alias+'` is already assigned.' );
		} else {
			setMemoizedReadOnly( o, k, createAccessor( out, context.require, alias ) ); // eslint-disable-line max-len
		}
	}
	return context;
}


// EXPORTS //

module.exports = setAliases;
