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

/* eslint-disable no-underscore-dangle, no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var readline = require( 'readline' );
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var ltrimN = require( '@stdlib/string/left-trim-n' );
var uppercase = require( '@stdlib/string/base/uppercase' );
var lowercase = require( '@stdlib/string/base/lowercase' );
var capitalize = require( '@stdlib/string/base/capitalize' );
var matchKeybindings = require( './match_keybinding.js' );
var parseKey = require( './parse_key.js' );


// VARIABLES //

var RE_NON_WHITESPACE = /\S+/;
var EDITOR_ACTIONS = [
	'moveRight',
	'moveLeft',
	'moveWordRight',
	'moveWordLeft',
	'moveBeginning',
	'moveEnd',
	'tab',
	'indentLineRight',
	'indentLineLeft',
	'deleteLeft',
	'deleteRight',
	'deleteWordLeft',
	'deleteWordRight',
	'deleteLineLeft',
	'deleteLineRight',
	'yankKilled',
	'yankPop',
	'undo',
	'redo',
	'transposeAboutCursor',
	'uppercaseNextWord',
	'capitalizeNextWord',
	'lowercaseNextWord',
	'clearScreen'
];


// MAIN //

/**
* Constructor for creating an editor actions prototype.
*
* @private
* @constructor
* @param {REPL} repl - REPL instance
* @param {Function} ttyWrite - function to trigger default behavior of a keypress
* @returns {EditorActions} editor actions instance
*/
function EditorActions( repl, ttyWrite ) {
	if ( !( this instanceof EditorActions ) ) {
		return new EditorActions( repl, ttyWrite );
	}

	// Cache a reference to the readline interface:
	this._rli = repl._rli;

	// Cache a reference to the output writable stream:
	this._ostream = repl._ostream;

	// Cache a reference to the private readline interface `ttyWrite` to allow calling the method when wanting default behavior:
	this._ttyWrite = ttyWrite;

	// Cache a reference to the REPL keybindings:
	this._keybindings = repl._keybindings;

	return this;
}

/**
* Moves cursor to the right by specified offset.
*
* @private
* @name _moveCursorX
* @memberof EditorActions.prototype
* @type {Function}
* @param {number} offset - x offset
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, '_moveCursorX', function moveCursorX( offset ) {
	readline.moveCursor( this._ostream, offset );
	this._rli.cursor += offset;
});

/**
* Replaces current line with the given line.
*
* @private
* @name _replaceLine
* @memberof EditorActions.prototype
* @type {Function}
* @param {string} line - line
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, '_replaceLine', function replaceLine( line ) {
	readline.moveCursor( this._ostream, -1 * this._rli.cursor );
	readline.clearLine( this._ostream, 1 );
	this._ostream.write( line );
	this._rli.line = line;
	this._rli.cursor = line.length;
});

/**
* Modifies the next word in line.
*
* @private
* @name _modifyNextWord
* @memberof EditorActions.prototype
* @type {Function}
* @param {Function} modifier - modifier function
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, '_modifyNextWord', function modifyNextWord( modifier ) {
	var updatedLine;
	var substring;
	var match;
	var start;
	var end;

	// Use regex to find the first non-whitespace character and the end of the word after the cursor:
	match = this._rli.line.slice( this._rli.cursor ).match( RE_NON_WHITESPACE );
	if ( match ) {
		start = this._rli.cursor + match.index;
		end = start + match[ 0 ].length;
	} else {
		start = this._rli.cursor;
		end = this._rli.line.length;
	}
	// Extract the word, apply the modifier, and reconstruct the line:
	substring = this._rli.line.slice( start, end );
	updatedLine = this._rli.line.slice( 0, start ) + modifier( substring ) + this._rli.line.slice( end ); // eslint-disable-line max-len
	this._replaceLine( updatedLine );
	this._moveCursorX( end - this._rli.line.length );
});

/**
* Moves cursor a character right.
*
* @name moveRight
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'moveRight', function moveRight() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'right'
	});
});

/**
* Moves cursor a character left.
*
* @name moveLeft
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'moveLeft', function moveLeft() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'left'
	});
});

/**
* Moves cursor a word to the right.
*
* @name moveWordRight
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'moveWordRight', function moveWordRight() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'f',
		'meta': true
	});
});

/**
* Moves cursor a word to the left.
*
* @name moveWordLeft
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'moveWordLeft', function moveWordLeft() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'b',
		'meta': true
	});
});

/**
* Moves cursor to the beginning of line.
*
* @name moveBeginning
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'moveBeginning', function moveBeginning() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'home'
	});
});

/**
* Moves cursor to the end of line.
*
* @name moveEnd
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'moveEnd', function moveEnd() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'end'
	});
});

/**
* Inserts TAB indentation at cursor.
*
* @name tab
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'tab', function tab() {
	this._rli.write( '\t' );
});

/**
* Indents line to the right.
*
* @name indentLineRight
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'indentLineRight', function indentLineRight() {
	var indentedLine = '\t' + this._rli.line;
	var cursorPos = this._rli.cursor + 1;
	this._replaceLine( indentedLine );
	this._moveCursorX( cursorPos - this._rli.line.length ); // maintain cursor position
});

/**
* Indents line to the left.
*
* @name indentLineLeft
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'indentLineLeft', function indentLineLeft() {
	var indentedLine;
	var cursorPos;
	var offset;

	indentedLine = ltrimN( this._rli.line, 1, [ '\t' ] );
	offset = this._rli.line.length - indentedLine.length;
	cursorPos = this._rli.cursor - offset;

	// NOTE: `readline.moveCursor()` doesn't know tabs, it treats `\t` as 8 whitespace characters instead of a single character. Hence manually move the cursor when indenting to the left...
	if ( offset ) {
		readline.moveCursor( this._ostream, ( -1 * this._rli.tabSize ) + 1 );
	}
	this._replaceLine( indentedLine );
	this._moveCursorX( cursorPos - this._rli.line.length ); // maintain cursor position
});

/**
* Deletes character left to the cursor.
*
* @name deleteLeft
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'deleteLeft', function deleteLeft() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'backspace'
	});
});

/**
* Deletes character right to the cursor.
*
* @name deleteRight
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'deleteRight', function deleteRight() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'delete'
	});
});

/**
* Deletes a word left to the cursor.
*
* @name deleteWordLeft
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'deleteWordLeft', function deleteWordLeft() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'backspace',
		'ctrl': true
	});
});

/**
* Deletes a word right to the cursor.
*
* @name deleteWordRight
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'deleteWordRight', function deleteWordRight() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'delete',
		'ctrl': true
	});
});

/**
* Deletes line to the left of the cursor.
*
* @name deleteLineLeft
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'deleteLineLeft', function deleteLineLeft() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'backspace',
		'ctrl': true,
		'shift': true
	});
});

/**
* Deletes line to the right of the cursor.
*
* @name deleteLineRight
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'deleteLineRight', function deleteLineRight() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'delete',
		'ctrl': true,
		'shift': true
	});
});

/**
* Yank string from the "killed" buffer.
*
* @name yankKilled
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'yankKilled', function yankKilled() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'y',
		'ctrl': true
	});
});

/**
* Yank-pop the next string from the "killed" buffer.
*
* @name yankPop
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'yankPop', function yankPop() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'y',
		'meta': true
	});
});

/**
* Yank-pop the next string from the undo stack.
*
* @name undo
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'undo', function undo() {
	this._ttyWrite.call( this._rli, null, {
		'sequence': '\u001F'
	});
});

/**
* Yank-pop the next string from the redo stack.
*
* @name redo
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'redo', function redo() {
	this._ttyWrite.call( this._rli, null, {
		'sequence': '\u001E'
	});
});

/**
* Transposes the characters about cursor.
*
* @name transposeAboutCursor
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'transposeAboutCursor', function transposeAboutCursor() {
	var c = this._rli.line[ this._rli.cursor - 1 ];
	this.deleteLeft();
	this.moveRight();
	this._rli.write( c );
});

/**
* Changes the next word to uppercase.
*
* @name uppercaseNextWord
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'uppercaseNextWord', function uppercaseNextWord() {
	this._modifyNextWord( uppercase );
});

/**
* Changes the next word to titlecase.
*
* @name capitalizeNextWord
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'capitalizeNextWord', function capitalizeNextWord() {
	this._modifyNextWord( capitalize );
});

/**
* Changes the next word to lowercase.
*
* @name lowercaseNextWord
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'lowercaseNextWord', function lowercaseNextWord() {
	this._modifyNextWord( lowercase );
});

/**
* Clears the entire REPL screen and scrollback history.
*
* @name clearScreen
* @memberof EditorActions.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'clearScreen', function clearScreen() {
	this._ttyWrite.call( this._rli, null, {
		'name': 'l',
		'ctrl': true
	});
});

/**
* Callback which should be invoked **before** a "keypress" event is processed by a readline interface.
*
* @name beforeKeypress
* @memberof EditorActions.prototype
* @type {Function}
* @param {string} data - input data
* @param {(Object|void)} key - key object
* @returns {boolean} boolean indicating whether an editor action was triggered
*/
setNonEnumerableReadOnly( EditorActions.prototype, 'beforeKeypress', function beforeKeypress( data, key ) {
	var actionKeys;
	var inputKeys;
	var i;

	if ( !key ) {
		return false;
	}
	inputKeys = parseKey( key );
	for ( i = 0; i < EDITOR_ACTIONS.length; i++ ) {
		actionKeys = this._keybindings[ EDITOR_ACTIONS[ i ] ];
		if ( !actionKeys ) {
			continue; // no keybindings configured for the action
		}
		if ( matchKeybindings( inputKeys, actionKeys ) ) {
			this[ EDITOR_ACTIONS[ i ] ]();
			return true;
		}
	}
	return false;
});


// EXPORTS //

module.exports = EditorActions;
