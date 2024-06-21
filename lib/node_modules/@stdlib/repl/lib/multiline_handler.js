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
var logger = require( 'debug' );
var Parser = require( 'acorn' ).Parser;
var parseLoose = require( 'acorn-loose' ).parse;
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var copy = require( '@stdlib/array/base/copy' );
var min = require( '@stdlib/math/base/special/min' );
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

	// Cache the length of the input prompt:
	this._promptLength = repl._inputPrompt.length;

	// Initialize an internal status object for multi-line mode:
	this._multiline = {};
	this._multiline.active = false;
	this._multiline.trigger = false;

	// Initialize a buffer for caching input lines:
	this._lines = [];

	// Initialize a variable storing current line index:
	this._lineIndex = 0;

	// Initialize a buffer for storing code after cursor when manually entering multi-line mode:
	this._remainingLine = '';

	return this;
}

/**
* Returns cursor offset for the current line index based on the prompt.
*
* @private
* @name _xOffset
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {number} `x` offset
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_xOffset', function xOffset() {
	// If on first line, include length of input prompt as offset...
	if ( this._lineIndex === 0 ) {
		return this._promptLength - 1;
	}
	return 0;
});

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

	// Clear existing renders:
	readline.clearScreenDown( this._ostream );

	// Write remaining lines below the current line:
	lines = this._lines.slice( this._lineIndex + 1 );
	this._ostream.write( '\n' + lines.join( '\n' ) );

	// Reset cursor position:
	readline.moveCursor( this._ostream, 0, min( -1 * lines.length, -1 ) );
	readline.cursorTo( this._ostream, this._xOffset() + this._rli.cursor );
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
	readline.cursorTo( this._ostream, this._xOffset() + x );
	this._rli.cursor = x;
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

	// If already at the first line, ignore...
	if ( this._lineIndex <= 0 ) {
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

	// If already at the last line, ignore...
	if ( this._lineIndex >= this._lines.length - 1 ) {
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
* Checks if the command is incomplete and a multi-line input.
*
* @private
* @name _isMultilineInput
* @memberof MultilineHandler.prototype
* @type {Function}
* @param {string} cmd - command
* @returns {boolean} boolean indicating whether the command is a multi-line input
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, '_isMultilineInput', function isMultilineInput( cmd ) {
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
* Resets input and command buffers.
*
* @private
* @name resetInput
* @memberof MultilineHandler.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( MultilineHandler.prototype, 'resetInput', function resetInput() {
	this._cmd.length = 0;
	this._lineIndex = 0;
	this._lines.length = 0;
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
	// Check whether to trigger multi-line mode or execute the command when `return` key is encountered...
	if ( key.name === 'return' ) {
		cmd = copy( this._cmd );
		cmd[ this._lineIndex ] = this._rli.line;

		// If command is incomplete, trigger multi-line mode...
		if ( !this._isMultilineInput( cmd.join( '\n' ) ) ) {
			this._ttyWrite.call( this._rli, data, key );
			return;
		}
		this._triggerMultiline();

		// Trigger `line` event:
		this._ttyWrite.call( this._rli, data, key );
		return;
	}
	if ( !this._multiline.active ) {
		this._ttyWrite.call( this._rli, data, key );
		return;
	}
	// If multi-line mode is active, enable navigation...
	switch ( key.name ) {
	case 'up':
		this._moveUp();
		this._renderLines();
		break;
	case 'down':
		this._moveDown();
		this._renderLines();
		break;
	case 'left':
		// If at the beginning of the line, move up to the previous line; otherwise, trigger default behavior...
		if ( this._rli.cursor === 0 ) {
			this._moveLeft();
			this._renderLines();
			return;
		}
		this._ttyWrite.call( this._rli, data, key );
		break;
	case 'right':
		// If at the end of the line, move up to the next line; otherwise, trigger default behavior...
		if ( this._rli.cursor === this._rli.line.length ) {
			this._moveRight();
			this._renderLines();
			return;
		}
		this._ttyWrite.call( this._rli, data, key );
		break;
	case 'backspace':
		// If at the beginning of the line, remove and move up to the previous line; otherwise, trigger default behavior...
		if ( this._rli.cursor === 0 ) {
			this._backspace();
			this._renderLines();
			return;
		}
		this._ttyWrite.call( this._rli, data, key );
		break;
	default:
		this._ttyWrite.call( this._rli, data, key );
		break;
	}
});


// EXPORTS //

module.exports = MultilineHandler;
