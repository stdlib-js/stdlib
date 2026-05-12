/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var pick = require( '@stdlib/utils/pick' );
var containsFactory = require( '@stdlib/array/base/assert/contains' ).factory;
var isUndefined = require( '@stdlib/assert/is-undefined' );


// VARIABLES //

// Control sequence prefix in ALT combinations:
var ALT_CSI = '\u001B';

// Properties in parsed keybinding:
var KEYBINDING_PROPS = [ 'name', 'ctrl', 'shift', 'meta' ];

/**
* Asserts if a sequence is an unrecognized symbol.
*
* ## Notes
*
* -   `SHIFT+<symbol>` will result in a keybinding with the name of the resulting symbol and not the original symbol with shift enabled.
*
* @private
* @name isUnrecognizedSymbol
* @type {Function}
*/
var isUnrecognizedSymbol = containsFactory([
	'`',
	'~',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'-',
	'_',
	'=',
	'+',
	'{',
	'}',
	'[',
	']',
	'|',
	'\\',
	':',
	';',
	'"',
	'\'',
	'<',
	',',
	'>',
	'.',
	'?',
	'/'
]);

/**
* Table mapping unrecognized control sequences to their possible key objects.
*
* ## Notes
*
* -   The following map is recorded as observed in gnome.
*
* @private
* @name CTRL_SEQUENCES_KEYMAP
* @type {Object}
*/
var CTRL_SEQUENCES_KEYMAP = {
	'\u001F': [
		{
			'name': '/',
			'ctrl': true,
			'shift': false,
			'meta': false
		},
		{
			'name': '-',
			'ctrl': true,
			'shift': false,
			'meta': true
		},
		{
			'name': '7',
			'ctrl': true,
			'shift': false,
			'meta': true
		}
	],
	'\u001C': [
		{
			'name': '\\',
			'ctrl': true,
			'shift': false,
			'meta': false
		},
		{
			'name': '\\',
			'ctrl': true,
			'shift': true,
			'meta': false
		},
		{
			'name': '|',
			'ctrl': true,
			'shift': false,
			'meta': false
		},
		{
			'name': '4',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'\u001D': [
		{
			'name': ']',
			'ctrl': true,
			'shift': false,
			'meta': false
		},
		{
			'name': ']',
			'ctrl': true,
			'shift': true,
			'meta': false
		},
		{
			'name': '}',
			'ctrl': true,
			'shift': false,
			'meta': false
		},
		{
			'name': '5',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	],
	'\u001E': [
		{
			'name': '6',
			'ctrl': true,
			'shift': false,
			'meta': false
		},
		{
			'name': '6',
			'ctrl': true,
			'shift': true,
			'meta': false
		},
		{
			'name': '^',
			'ctrl': true,
			'shift': false,
			'meta': false
		}
	]
};


// FUNCTIONS //

/**
* Parses unrecognized control sequences emitted by `ALT+<symbol>` combinations.
*
* @private
* @param {string} seq - control sequence
* @returns {(Object|null)} parsed key object or null if not a meta symbol sequence
*/
function parseMetaSymbolSequence( seq ) {
	if (
		!seq ||
		seq.length !== 2 ||
		seq[ 0 ] !== ALT_CSI ||
		isUnrecognizedSymbol( seq[ 1 ] )
	) {
		return null;
	}
	return {
		'name': seq[ 1 ],
		'ctrl': false,
		'shift': false,
		'meta': true
	};
}


// MAIN //

/**
* Parses a readline keypress object.
*
* @param {Object} key - readline keypress object
* @returns {Array<Object>} list of possible key objects
*/
function parseKey( key ) {
	var out;
	var seq;

	// If key is already defined, no need to parse it...
	if ( !isUndefined( key.name ) ) {
		return [ pick( key, KEYBINDING_PROPS ) ];
	}
	seq = key.sequence;

	// Check if it's an unrecognized symbol:
	if ( isUnrecognizedSymbol( seq ) ) {
		return [
			{
				'name': seq,
				'ctrl': false,
				'shift': false,
				'meta': false
			}
		];
	}
	// Check if it's a `CTRL+<symbol>` combination:
	if ( hasOwnProp( CTRL_SEQUENCES_KEYMAP, seq ) ) {
		return CTRL_SEQUENCES_KEYMAP[ seq ];
	}
	// Check if it's a `META+<symbol>` combination:
	out = parseMetaSymbolSequence( seq );
	if ( out ) {
		return [ out ];
	}
	return [ pick( key, KEYBINDING_PROPS ) ]; // couldn't parse, return original key
}


// EXPORTS //

module.exports = parseKey;
