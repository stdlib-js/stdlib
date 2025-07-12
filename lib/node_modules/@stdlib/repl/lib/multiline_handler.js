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

/* eslint-disable no-underscore-dangle, no-restricted-syntax, no-invalid-this, max-lines */

'use strict';

// MODULES //

var readline = require( 'readline' );
var logger = require( 'debug' );
var Parser = require( 'acorn' ).Parser;
var parseLoose = require( 'acorn-loose' ).parse;
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var startsWith = require( '@stdlib/string/starts-with' );
var copy = require( '@stdlib/array/base/copy' );
var min = require( '@stdlib/math/base/special/min' );
var max = require( '@stdlib/math/base/special/max' );
var displayPrompt = require( './display_prompt.js' );
var drain = require( './drain.js' );
var multilinePlugin = require( './acorn_detect_multiline_input.js' );
var processCommand = require( './process_command.js' );
var compileCommand = require( './compile_command.js' );


// VARIABLES //

var debug = logger( 'repl:line' );
var hasMultilineError = Parser.extend( multilinePlugin ).hasMultilineError;
var RE_WHITESPACE = /^\s*$/;
var RE_SINGLE_LINE_COMMENT = /^\s*\/\//;
var RE_MULTI_LINE_COMMENT = /^\s*\/\*.*\*\/$/;
var AOPTS = {
	'ecmaVersion': 'latest'
};


// MAIN //

/**
* Constructor for creating a multi-line handler.
*
* @private
* @constructor
* @param {REPL} repl - REPL instance
* @param {Function} ttyWrite - function to trigger default behavior of a keypress
* @returns {MultilineHandler} multi-line handler instance
*/
function MultilineHandler( repl, ttyWrite ) {
	if ( !( this instanceof MultilineHandler ) ) {
		return new MultilineHandler( repl, ttyWrite );
	}

	// Cache a reference to the provided REPL instance:
	this._repl = repl;

	// Cache a reference to the readline interface:
	this._rli = repl._rli;

	// Cache a reference to the output writable stream:
	this._ostream = repl._ostream;

	// Cache a reference to the private readline interface `ttyWrite` to allow calling the method when wanting default behavior:
	this._ttyWrite = ttyWrite;

	// Cache a reference to the command array:
	this._cmd = repl._cmd;

	// Cache a reference to the command queue:
	this._queue = repl._queue;

	// Initialize an internal object for command history:
	this._history = {};
	this._history.list = repl._history;
	this._history.index = 0; // index points to the next "previous" command in history
	this._history.prefix = '';

	// Initialize an internal status object for multi-line mode:
	this._multiline = {};
	this._multiline.active = false;
	this._multiline.trigger = false;
	this._multiline.pasteMode = false;

	// Initialize a buffer for caching input lines:
	this._lines = [];

	// Initialize a variable storing current line index:
	this._lineIndex = 0;

	// Initialize a buffer for storing code after cursor when manually entering multi-line mode:
	this._remainingLine = '';

	return this;
}

/**
* Renders remaining lines.
*
* @name _renderLines
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_renderLines', function renderLines() {
	var lines;

	// Write remaining lines below the current line:
	lines = this._lines.slice( this._lineIndex + 1 );
	this._ostream.write( '\n' + lines.join( '\n' ) );

	// Reset cursor position:
	readline.moveCursor( this._ostream, 0, min( -1 * lines.length, -1 ) );
	readline.cursorTo( this._ostream, this._repl.promptLength() + this._rli.cursor ); // eslint-disable-line max-len
});

/**
* Moves cursor to a specified position in the multi-line input.
*
* @private
* @name _moveCursor
* @memberof MultilineHandler.prototype
* @type {Function}
* @param {number} x - cursor position on the line
* @param {number} dy - number of lines to move down
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_moveCursor', function moveCursor( x, dy ) {
	var prompt = '';

	// Clear any existing completion previews before moving lines:
	this._repl._previewCompleter.clear();

	// Change line:
	this._lineIndex += dy;
	readline.moveCursor( this._ostream, 0, dy );
	this._rli.line = this._cmd[ this._lineIndex ];

	// Reset prompt:
	if ( this._lineIndex === 0 ) {
		prompt = this._repl._prompt(); // restore input prompt if on the first prompt
	}
	this._rli.setPrompt( prompt );
	this._rli.prompt();

	// Set x cursor position:
	readline.cursorTo( this._ostream, this._repl.promptLength() + x );
	this._rli.cursor = x;
});

/**
* Inserts a command in the input prompt.
*
* @private
* @name _insertCommand
* @memberof MultilineHandler.prototype
* @type {Function}
* @param {string} cmd - command
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_insertCommand', function insertCommand( cmd ) {
	var i;

	this.clearInput();

	// For each newline, trigger a `return` keypress in paste-mode...
	cmd = cmd.split( '\n' );
	this._multiline.pasteMode = true;
	for ( i = 0; i < cmd.length - 1; i++ ) {
		this._rli.write( cmd[ i ] );
		this._rli.write( null, {
			'name': 'return'
		});
	}
	this._rli.write( cmd[ cmd.length - 1 ] );
	this._multiline.pasteMode = false;
});

/**
* Inserts previous command matching the prefix from history.
*
* @private
* @name _prevCommand
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_prevCommand', function prevCommand() {
	var cmd;

	// If we are starting from zero, save the prefix for this cycle...
	if ( this._history.index === 0 ) {
		this._history.prefix = this._rli.line.slice( 0, this._rli.cursor );
	}
	// Traverse the history until we find the command with a common prefix...
	while ( this._history.index < this._history.list.length / 3 ) {
		cmd = this._history.list[ this._history.list.length - ( 3 * this._history.index ) - 2 ]; // eslint-disable-line max-len
		if ( startsWith( cmd, this._history.prefix ) ) {
			this._insertCommand( cmd );
			this._history.index += 1; // update index to point to the next "previous" command
			break;
		}
		this._history.index += 1;
	}
});

/**
* Inserts next command matching the prefix from history.
*
* @private
* @name _nextCommand
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_nextCommand', function nextCommand() {
	var cmd;

	if ( this._history.index === 0 ) {
		return; // no more history to traverse
	}
	// Traverse the history until we find the command with a common prefix...
	this._history.index -= 1; // updating index to point to the next "previous" command
	while ( this._history.index > 0 ) {
		cmd = this._history.list[ this._history.list.length - ( 3 * ( this._history.index - 1 ) ) - 2 ]; // eslint-disable-line max-len
		if ( startsWith( cmd, this._history.prefix ) ) {
			this._insertCommand( cmd );
			break;
		}
		this._history.index -= 1;
	}
	// If we didn't find a match in history, bring up the original prefix and reset cycle...
	if ( this._history.index === 0 ) {
		this.clearInput();
		this._rli.write( this._history.prefix );
		this._resetHistoryBuffers();
	}
});

/**
* Moves cursor up to the previous line.
*
* @private
* @name _moveUp
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_moveUp', function moveUp() {
	var cursor;

	// If already at the first line, try to insert previous command from history...
	if ( this._lineIndex <= 0 ) {
		this._prevCommand();
		return;
	}
	this._cmd[ this._lineIndex ] = this._rli.line; // update current line in command

	// Make sure the cursor never exceeds the length of the line:
	cursor = min( this._rli.cursor, this._cmd[ this._lineIndex - 1 ].length );
	this._moveCursor( cursor, -1 );
});

/**
* Moves cursor down to the next line.
*
* @private
* @name _moveDown
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_moveDown', function moveDown() {
	var cursor;

	// If already at the last line, try to insert next command from history...
	if ( this._lineIndex >= this._lines.length - 1 ) {
		this._nextCommand();
		return;
	}
	this._cmd[ this._lineIndex ] = this._rli.line; // update current line in command

	// Make sure the cursor never exceeds the length of the line:
	cursor = min( this._rli.cursor, this._cmd[ this._lineIndex + 1 ].length );
	this._moveCursor( cursor, 1 );
});

/**
* Moves cursor left to the end of the previous line.
*
* @private
* @name _moveLeft
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_moveLeft', function moveLeft() {
	// If already at the first line, ignore...
	if ( this._lineIndex <= 0 ) {
		return;
	}
	this._cmd[ this._lineIndex ] = this._rli.line; // update current line in command

	// Move cursor to the end of the previous line:
	this._moveCursor( this._cmd[ this._lineIndex - 1 ].length, -1 );
});

/**
* Moves cursor right to the start of the next line.
*
* @private
* @name _moveRight
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_moveRight', function moveRight() {
	// If already at the last line, ignore...
	if ( this._lineIndex >= this._lines.length - 1 ) {
		return;
	}
	this._cmd[ this._lineIndex ] = this._rli.line; // update current line in command

	// Move cursor to the start of the next line:
	this._moveCursor( 0, 1 );
});

/**
* Simulates a backspace by removing the current line and appending it to the previous line.
*
* @private
* @name _backspace
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_backspace', function backspace() {
	var cursor;

	// If already at the first line, ignore...
	if ( this._lineIndex <= 0 ) {
		return;
	}
	// Save cursor position:
	cursor = this._cmd[ this._lineIndex - 1 ].length;

	// Append current line to the previous line:
	this._cmd[ this._lineIndex - 1 ] += this._rli.line;
	this._lines[ this._lineIndex - 1 ] += this._lines[ this._lineIndex ];

	// Remove current line:
	this._cmd.splice( this._lineIndex, 1 );
	this._lines.splice( this._lineIndex, 1 );

	// Move cursor to the saved cursor position in the previous line:
	this._moveCursor( cursor, -1 );

	// If we deleted all additional lines, update flag...
	if ( this._lines.length <= 1 ) {
		this._multiline.active = false;
	}
});

/**
* Updates flags and buffers before triggering multi-line mode.
*
* @private
* @name _triggerMultiline
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_triggerMultiline', function triggerMultiline() {
	// Update flag:
	this._multiline.trigger = true;

	// Save expression after cursor in buffer:
	readline.clearLine( this._ostream, 1 ); // clear line after cursor
	this._remainingLine = this._rli.line.substring( this._rli.cursor );
	this._rli.line = this._rli.line.substring( 0, this._rli.cursor );
});

/**
* Resets input buffers.
*
* @private
* @name _resetInputBuffers
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_resetInputBuffers', function resetInputBuffers() {
	this._cmd.length = 0;
	this._lineIndex = 0;
	this._lines.length = 0;
});

/**
* Resets history buffers.
*
* @private
* @name _resetHistoryBuffers
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_resetHistoryBuffers', function resetHistoryBuffers() {
	this._history.index = 0;
	this._history.prefix = '';
});

/**
* Returns current line number in input.
*
* @name lineIndex
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {number} line index
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, 'lineIndex', function lineIndex() {
	return this._lineIndex;
});

/**
* Returns the number of rows occupied by current input.
*
* @name inputHeight
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {number} input height
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, 'inputHeight', function inputHeight() {
	return max( this._lines.length, 1 );
});

/**
* Updates current input line in buffer.
*
* @name updateLine
* @memberof MultilineHandler.prototype
* @type {Function}
* @param {string} line - updated line
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, 'updateLine', function updateLine( line ) {
	this._lines[ this._lineIndex ] = line;
});

/**
* Clears current input.
*
* @name clearInput
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, 'clearInput', function clearInput() {
	if ( this._lineIndex !== 0 ) {
		// Bring the cursor to the first line:
		readline.moveCursor( this._ostream, 0, -1 * this._lineIndex );
	}
	// Clear lines and buffers:
	this._resetInputBuffers();
	readline.cursorTo( this._ostream, this._repl.promptLength() );
	readline.clearLine( this._ostream, 1 );
	readline.clearScreenDown( this._ostream );
	this._rli.line = '';
	this._rli.cursor = 0;
});

/**
* Resets input and command buffers.
*
* @name resetInput
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, 'resetInput', function resetInput() {
	this._resetHistoryBuffers();
	this._resetInputBuffers();
});

/**
* Enables bracketed-paste mode.
*
* @name enableBracketedPaste
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, 'enableBracketedPaste', function enableBracketedPaste() {
	this._ostream.write( '\u001b[?2004h' );
});

/**
* Disables bracketed-paste mode.
*
* @name disableBracketedPaste
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, 'disableBracketedPaste', function disableBracketedPaste() {
	this._ostream.write( '\u001b[?2004l' );
});

/**
* Checks whether the REPL is currently receiving pasted input.
*
* @name isPasting
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {boolean} boolean indicating whether the REPL is currently receiving pasted input
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, 'isPasting', function isPasting() {
	return this._multiline.pasteMode;
});

/**
* Checks if the command is incomplete and a multi-line input.
*
* @name isMultilineInput
* @memberof MultilineHandler.prototype
* @type {Function}
* @param {string} cmd - command
* @returns {boolean} boolean indicating whether the command is a multi-line input
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, 'isMultilineInput', function isMultilineInput( cmd ) {
	var node;
	var tmp;
	var ast;

	debug( 'Attempting to detect multi-line input...' );
	if ( RE_WHITESPACE.test( cmd ) ) {
		debug( 'Multi-line input not detected.' );
		return false;
	}
	if ( RE_SINGLE_LINE_COMMENT.test( cmd ) || RE_MULTI_LINE_COMMENT.test( cmd ) ) { // eslint-disable-line max-len
		debug( 'Multi-line input not detected.' );
		return false;
	}
	// Check if the command has valid syntax...
	tmp = processCommand( cmd );
	if ( !( tmp instanceof Error ) ) {
		debug( 'Multi-line input not detected.' );
		return false;
	}
	if ( hasMultilineError( cmd, AOPTS ) ) {
		debug( 'Detected multi-line input. Triggering multi-line mode...' );
		return true;
	}
	// Still possible that a user is attempting to enter an object literal across multiple lines...
	ast = parseLoose( cmd, AOPTS );

	// Check for a trailing node which is being interpreted as a block statement, as this could be an object literal...
	node = ast.body[ ast.body.length-1 ];
	if ( node.type === 'BlockStatement' && node.end === ast.end ) {
		tmp = cmd.slice( node.start, node.end );
		if ( hasMultilineError( tmp, AOPTS ) ) {
			debug( 'Detected multi-line input. Triggering multi-line mode...' );
			return true;
		}
	}
	debug( 'Multi-line input not detected.' );
	return false;
});

/**
* Processes input line data.
*
* @name processLine
* @memberof MultilineHandler.prototype
* @type {Function}
* @param {string} line - line data
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, 'processLine', function processLine( line ) {
	var code;
	var cmd;
	var tmp;
	var dy;

	// Save line:
	debug( 'Line: %s', line );
	this._cmd[ this._lineIndex ] = line;

	// Check for multi-line triggers...
	if ( this._multiline.trigger ) {
		debug( 'Detected multi-line trigger. Waiting for additional lines...' );

		// Insert a newline:
		this._lineIndex += 1;
		this._cmd.splice( this._lineIndex, 0, this._remainingLine );
		this._lines.splice( this._lineIndex, 0, this._remainingLine );

		// Insert buffer input after cursor from previous line:
		displayPrompt( this._repl, false );
		this._ostream.write( this._remainingLine );
		readline.cursorTo( this._ostream, 0 );
		this._rli.line = this._remainingLine;

		// Update flags and buffers:
		this._remainingLine = '';
		this._multiline.trigger = false;
		this._multiline.active = true;
		return;
	}
	this._multiline.active = false; // false until proven otherwise
	cmd = this._cmd.join( '\n' );
	if ( RE_WHITESPACE.test( cmd ) ) {
		this.resetInput();
		displayPrompt( this._repl, false );
		return;
	}
	if ( RE_SINGLE_LINE_COMMENT.test( cmd ) || RE_MULTI_LINE_COMMENT.test( cmd ) ) { // eslint-disable-line max-len
		debug( 'Detected single-line comment.' );
		tmp = cmd;
	} else {
		// Check if the command has valid syntax...
		debug( 'Processing command...' );
		tmp = processCommand( cmd );
		if ( tmp instanceof Error ) {
			// Move cursor to the output row:
			dy = this._lines.length - this._lineIndex - 1;
			readline.moveCursor( this._ostream, 0, dy );

			// Reset the input buffers:
			this.resetInput();

			// Write error message and display next prompt:
			this._ostream.write( 'Error: '+tmp.message+'\n' );
			this._repl.emit( 'command', cmd, false ); // command failed
			displayPrompt( this._repl, false );
			return;
		}
	}
	debug( 'Successfully processed command.' );

	// Move cursor to the output row:
	dy = this._lines.length - this._lineIndex - 1;
	readline.moveCursor( this._ostream, 0, dy );

	// Reset the input buffers:
	this.resetInput();

	// Attempt to compile the command:
	debug( 'Attempting to compile command...' );
	code = compileCommand( tmp );
	if ( code instanceof Error ) {
		debug( 'Error: %s', code.message );
		this._ostream.write( 'Error: '+code.message+'\n' );
		this._repl.emit( 'command', cmd, false ); // command failed
		displayPrompt( this._repl, false );
		return;
	}
	debug( 'Successfully compiled command.' );
	code.raw = cmd;

	// Add the command to the command queue:
	this._queue.push( code );

	// Request to run the command:
	drain( this._repl );
});

/**
* Callback for handling a "keypress" event.
*
* @name onKeypress
* @memberof MultilineHandler.prototype
* @type {Function}
* @param {string} data - input data
* @param {(Object|void)} key - key object
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, 'onKeypress', function onKeypress( data, key ) {
	if ( !key ) {
		return;
	}
	// Check for paste sequences...
	if ( key.name === 'paste-start' ) {
		this._multiline.pasteMode = true;
		return;
	}
	if ( key.name === 'paste-end' ) {
		this._multiline.pasteMode = false;
		return;
	}
	// Trigger multi-line input when encountering `CTRL+O` keybinding...
	if ( key.name === 'o' && key.ctrl ) {
		this._triggerMultiline();

		// Simulate `line` event:
		this._rli.write( '\n' );
	}
	if ( this._multiline.active ) {
		// Render remaining lines with each keypress when in multi-line mode:
		this._renderLines();
	}
});

/**
* Callback which should be invoked **before** a "keypress" event is processed by a readline interface.
*
* @name beforeKeypress
* @memberof MultilineHandler.prototype
* @type {Function}
* @param {string} data - input data
* @param {(Object|void)} key - key object
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, 'beforeKeypress', function beforeKeypress( data, key ) {
	var cmd;

	if ( !key ) {
		this._ttyWrite.call( this._rli, data, key );
		return;
	}
	switch ( key.name ) {
	// Check whether to trigger multi-line mode or execute the command when `return` key is encountered...
	case 'return':
		cmd = copy( this._cmd );
		cmd[ this._lineIndex ] = this._rli.line;
		this._lines[ this._lineIndex ] = this._rli.line;

		// If we are in paste mode or the command is incomplete, trigger multi-line mode...
		if ( !this._multiline.pasteMode && !this.isMultilineInput( cmd.join( '\n' ) ) ) {
			this._ttyWrite.call( this._rli, data, key );
			return;
		}
		this._triggerMultiline();
		if ( this._history.index !== 0 && !this._multiline.pasteMode ) {
			// Reset current history cycle:
			this._resetHistoryBuffers();
		}
		// Trigger `line` event:
		this._ttyWrite.call( this._rli, data, key );
		break;

	// If multi-line mode is active, enable navigation...
	case 'up':
		this._moveUp();
		if ( this._multiline.active ) {
			this._renderLines();
		}
		break;
	case 'down':
		this._moveDown();
		if ( this._multiline.active ) {
			this._renderLines();
		}
		break;
	case 'left':
		if ( this._history.index !== 0 ) {
			// Reset current history cycle:
			this._resetHistoryBuffers();
		}
		// If at the beginning of the line, move up to the previous line; otherwise, trigger default behavior...
		if ( this._rli.cursor === 0 ) {
			this._moveLeft();
			if ( this._multiline.active ) {
				this._renderLines();
			}
			return;
		}
		this._ttyWrite.call( this._rli, data, key );
		break;
	case 'right':
		if ( this._history.index !== 0 ) {
			// Reset current history cycle:
			this._resetHistoryBuffers();
		}
		// If at the end of the line, move up to the next line; otherwise, trigger default behavior...
		if ( this._rli.cursor === this._rli.line.length ) {
			this._moveRight();
			if ( this._multiline.active ) {
				this._renderLines();
			}
			return;
		}
		this._ttyWrite.call( this._rli, data, key );
		break;
	case 'backspace':
		if ( this._history.index !== 0 ) {
			// Reset current history cycle:
			this._resetHistoryBuffers();
		}
		// If at the beginning of the line, remove and move up to the previous line; otherwise, trigger default behavior...
		if ( this._rli.cursor === 0 ) {
			this._backspace();
			if ( this._multiline.active ) {
				this._renderLines();
			}
			return;
		}
		this._ttyWrite.call( this._rli, data, key );
		break;
	default:
		if ( this._history.index !== 0 ) {
			// Reset current history cycle:
			this._resetHistoryBuffers();
		}
		this._ttyWrite.call( this._rli, data, key );
		break;
	}
});


// EXPORTS //

module.exports = MultilineHandler;
