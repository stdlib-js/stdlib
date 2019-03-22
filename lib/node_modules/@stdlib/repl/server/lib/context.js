/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var objectKeys = require( '@stdlib/utils/keys' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var deepGet = require( '@stdlib/utils/deep-get' );
var help = require( './functions/help.js' );
var example = require( './functions/example.js' );
var namespace = require( './functions/namespace.js' );
var NAMESPACE = require( './namespace.js' );


// MAIN //

/**
* Extends a REPL context.
*
* @private
* @param {REPLServer} repl - REPL server
* @throws {Error} must provide unique aliases
*/
function extend( repl ) {
	var paths;
	var parts;
	var keys;
	var tmp;
	var key;
	var o;
	var i;
	var j;
	var k;

	// Create an object tree from value aliases...
	tmp = {
		'help': help,
		'example': example( repl ),
		'namespace': namespace
	};
	paths = [];
	for ( i = 0; i < NAMESPACE.length; i++ ) {
		o = tmp;

		// Get the alias of the value to be added to the REPL context:
		key = NAMESPACE[ i ].alias;

		// Cache the alias path:
		paths.push( key );

		// An alias may be nested (e.g., `a.b.c`); if so, we need to recursively generate parent sub-trees...
		parts = key.split( '.' );
		for ( j = 0; j < parts.length-1; j++ ) {
			k = parts[ j ];
			if ( !hasOwnProp( o, k ) ) {
				o[ k ] = {};
			}
			o = o[ k ];
		}
		k = parts[ j ];

		// Attempt to add the value to the tree (checking for collisions):
		if ( hasOwnProp( o, k ) ) {
			throw new Error( 'invalid operation. Alias already exists in REPL context. Alias: `'+key+'`. Value: `'+deepGet( tmp, key )+'`.' );
		} else {
			o[ k ] = NAMESPACE[ i ].value;
		}
	}
	// Walk the context tree and set each nested path to read-only...
	for ( i = 0; i < paths.length; i++ ) {
		parts = paths[ i ].split( '.' );
		if ( parts.length > 1 ) {
			o = tmp;
			for ( j = 0; j < parts.length; j++ ) {
				k = parts[ j ];
				setReadOnly( o, k, o[ k ] );
				o = o[ k ];
			}
		}
	}
	// Extend the REPL context...
	keys = objectKeys( tmp );
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];
		setReadOnly( repl.context, key, tmp[ key ] );
	}
}


// EXPORTS //

module.exports = extend;
