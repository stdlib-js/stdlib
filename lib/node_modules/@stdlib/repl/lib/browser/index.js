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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var deepGet = require( '@stdlib/utils/deep-get' );
var setReadOnly = require( '@stdlib/utils/define-read-only-property' );
var namespace = require( '@stdlib/namespace' );
var alias2help = require( '@stdlib/repl/help' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var NO_HELP_TEXT = 'No help information available.';
var NAMESPACE = namespace();


// FUNCTIONS //

/**
* Prints help information.
*
* @private
* @param {*} alias - variable alias or value
*/
function help( alias ) {
	var txt;
	var i;

	txt = alias2help( alias );
	if ( txt === null ) {
		// Search through namespace values to see if provided a known value reference...
		for ( i = 0; i < NAMESPACE.length; i++ ) {
			if ( alias === NAMESPACE[ i ].value ) {
				txt = alias2help( NAMESPACE[ i ].alias );
				if ( txt ) {
					break;
				}
			}
		}
		// If still unable to resolve help info, inform the user that no info is available...
		if ( txt === null ) {
			txt = NO_HELP_TEXT;
		}
	}
	console.log( txt ); // eslint-disable-line no-console
}


// MAIN //

/**
* Extends a browser context.
*
* @private
* @param {Object} ctx - context
*
* @example
* main( window );
*/
function main( ctx ) {
	var paths;
	var parts;
	var keys;
	var tmp;
	var key;
	var err;
	var o;
	var i;
	var j;
	var k;

	// Create an object tree from value aliases...
	tmp = {
		'help': help,
		'_help': help // Firefox devtools already aliases `help` (and `?`) to a read-only value :(
	};
	paths = [];
	for ( i = 0; i < NAMESPACE.length; i++ ) {
		o = tmp;

		// Get the alias of the value to be added to the provided context:
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
			err = new Error( format( 'invalid operation. Alias already exists in the provided context. Alias: `%s`. Value: `%s`.', key, deepGet( tmp, key ) ) );
			console.error( 'Error: %s', err.message ); // eslint-disable-line no-console
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
	// Extend the provided context...
	keys = objectKeys( tmp );
	for ( i = 0; i < keys.length; i++ ) {
		key = keys[ i ];
		setReadOnly( ctx, key, tmp[ key ] );
	}
	// Include any additional third party libraries...

	// setReadOnly( ctx, 'foo', foo );
}


// EXPORTS //

module.exports = main;
