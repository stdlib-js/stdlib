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

/* eslint-disable no-restricted-syntax, no-underscore-dangle, no-invalid-this, max-lines */

'use strict';

// MODULES //

var readline = require( 'readline' );
var logger = require( 'debug' );
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var lowercase = require( '@stdlib/string/lowercase' );
var maxInArray = require( '@stdlib/stats/base/max' );
var max = require( '@stdlib/math/base/special/max' );
var min = require( '@stdlib/math/base/special/min' );
var floor = require( '@stdlib/math/base/special/floor' );
var ceil = require( '@stdlib/math/base/special/ceil' );
var repeat = require( '@stdlib/string/repeat' );
var replace = require( '@stdlib/string/replace' );
var removeLast = require( '@stdlib/string/remove-last' );
var contains = require( '@stdlib/array/base/assert/contains' );
var startsWith = require( '@stdlib/string/starts-with' );
var isEmptyString = require( '@stdlib/assert/is-empty-string' ).isPrimitive;
var commonPrefix = require( './longest_common_prefix.js' );


// VARIABLES //

var debug = logger( 'repl:completer:engine' );
var RE_ANSI = /[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d/#&.:=?%@~_]*)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))/g; // eslint-disable-line no-control-regex
var RESERVED_COMPLETER_ROWS = 1; // bottom margin


// FUNCTIONS //

/**
* Removes ANSI escape codes from a string.
*
* @private
* @param {string} str - input string
* @returns {string} string with ANSI escape codes removed
*/
function stripANSI( str ) {
	return replace( str, RE_ANSI, '' );
}


// MAIN //

/**
* Constructor for creating a completer engine.
*
* @private
* @constructor
* @param {REPL} repl - REPL instance
* @param {Function} completer - function for generating possible completions
* @param {WritableStream} ostream - writable stream
* @param {Function} ttyWrite - function to trigger the default behavior of the keypress
* @returns {CompleterEngine} completer engine instance
*/
function CompleterEngine( repl, completer, ostream, ttyWrite ) {
	if ( !( this instanceof CompleterEngine ) ) {
		return new CompleterEngine( repl, completer, ostream, ttyWrite );
	}
	debug( 'Creating a completer engine...' );

	// Cache a reference to the provided REPL instance:
	this._repl = repl;

	// Cache a reference to the readline interface:
	this._rli = repl._rli;

	// Cache a reference to the output writable stream:
	this._ostream = ostream;

	// Cache a reference to the provided completer;
	this._completer = completer;

	// Cache a reference to the private readline interface `ttyWrite` to allow calling the method when wanting default behavior:
	this._ttyWrite = ttyWrite;

	// Cache a reference to the REPL's multi-line handler:
	this._multiline = repl._multilineHandler;

	// Initialize a flag indicating whether a user is navigating TAB completions:
	this._isNavigating = false;

	// Create a callback for processing completions:
	this._onCompletions = this._completionCallback();

	// Initialize a buffer containing the input line being processed:
	this._inputLine = '';

	// Initialize a buffer containing the remaining line after cursor:
	this._remainingLine = '';

	// Initialize a buffer containing the completion prefix:
	this._completionPrefix = '';

	// Initialize a buffer containing the list of generated completions:
	this._completionsList = [];

	// Initialize a buffer containing the list of highlighted completions:
	this._highlightedCompletions = [];

	// Initialize a buffer array storing the lengths of all completions:
	this._completionsLength = [];

	// Initialize a buffer storing the width of a column:
	this._widthOfColumn = -1;

	// Initialize a buffer to store the index of the current completion:
	this._idx = -1;

	return this;
}

/**
* Returns a callback for processing completions.
*
* @private
* @name _completionCallback
* @memberof CompleterEngine.prototype
* @type {Function}
* @returns {Function} completion callback
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, '_completionCallback', function completionCallback() {
	var self = this;
	return clbk;

	/**
	* Callback invoked upon resolving potential completions.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Array} completions - completion results
	* @returns {void}
	*/
	function clbk( error, completions ) {
		var autoCompletion;
		var i;

		// Check whether we encountered an error when generating completions...
		if ( error ) {
			debug( 'Encountered an error when generating completions.' );
			self._ostream.write( 'Error: couldn\'t generate tab completions' );

			// Resume the input stream:
			self._rli.resume();
			return;
		}
		// Remove empty completions:
		self._completionsList = [];
		for ( i = 0; i < completions[ 0 ].length; i++ ) {
			if ( !isEmptyString( completions[ 0 ][ i ] ) ) {
				self._completionsList.push( completions[ 0 ][ i ] );
			}
		}
		if ( self._completionsList.length === 0 ) {
			debug( 'No completions to display.' );

			// Resume the input stream:
			self._rli.resume();
			return;
		}
		self._completionPrefix = completions[ 1 ];

		// If we were already navigating, don't try to auto-complete as it's not a TAB trigger...
		if ( !self._isNavigating ) {
			// Resolve a common prefix from the completion results:
			autoCompletion = commonPrefix( self._completionsList ); // e.g., [ 'back', 'background', 'backward' ] => 'back'

			// If the completion candidates have a possible auto-completion (i.e., a common prefix longer than the input), auto-complete it...
			if ( autoCompletion !== '' && autoCompletion.length > self._completionPrefix.length ) {
				debug( 'Found an auto-completion candidate: %s', autoCompletion );

				// Clear the completion prefix:
				self._ostream.write( repeat( '\x08', self._completionPrefix.length ) );
				self._rli.line = self._rli.line.slice( 0, self._rli.cursor - self._completionPrefix.length ) + self._rli.line.slice( self._rli.cursor ); // eslint-disable-line max-len

				// Move the cursor to the start of completion prefix:
				self._rli.cursor -= self._completionPrefix.length;

				// Write the auto-completion string:
				self._rli.write( autoCompletion );

				// Resume the input stream:
				self._rli.resume();
				return;
			}
		}
		debug( 'No auto-completion candidate, displaying all possible completions.' );

		// Check if completions can be displayed...
		if ( !self._isDisplayable() ) {
			debug( 'TTY height too short. Unable to display completions. Exiting completion mode...' );
			self._rli.resume();
			return;
		}

		// Display completions:
		self._displayCompletions();
		self._isNavigating = true;

		// Resume the input stream:
		self._rli.resume();
	}
});

/**
* Displays the completions to the output stream.
*
* @private
* @name _displayCompletions
* @memberof CompleterEngine.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, '_displayCompletions', function displayCompletions() {
	var columns;
	var rows;
	var dy;
	var i;

	// Determine number of columns of completions that should be displayed to the output stream...
	this._completionsLength = [];
	for ( i = 0; i < this._completionsList.length; i++ ) {
		this._completionsLength.push( this._completionsList[ i ].length );
	}
	this._widthOfColumn = maxInArray( this._completionsLength.length, this._completionsLength, 1 ) + 4; // eslint-disable-line max-len

	// Highlight completions if operating in "terminal" mode...
	if ( this._repl._isTTY ) {
		this._highlightedCompletions = this._highlightCompletions();
	} else {
		this._highlightedCompletions = this._completionsList;
	}

	// Determine dimensions of the output grid:
	columns = this._completionColumns();
	rows = this._completionRows( columns );

	// Move cursor to the output row:
	dy = this._multiline.inputHeight() - this._multiline.lineIndex() - 1;
	readline.moveCursor( this._ostream, 0, dy );

	// Write completions to the output stream:
	this._ostream.write( this._drawOutput( rows, columns ) );

	// Bring the cursor back to the current line:
	readline.moveCursor( this._ostream, 0, -1 * ( rows + this._multiline.inputHeight() - this._multiline.lineIndex() ) ); // eslint-disable-line max-len
	readline.cursorTo( this._ostream, this._rli.cursor + this._repl.promptLength() ); // eslint-disable-line max-len
});

/**
* Re-displays the navigated completions to the output stream.
*
* @name _updateCompletions
* @memberof CompleterEngine.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, '_updateCompletions', function updateCompletions() {
	var columns;
	var rows;
	var dy;

	// Determine dimensions of the output grid:
	columns = this._completionColumns();
	rows = this._completionRows( columns );

	// Move cursor to the output row:
	dy = this._multiline.inputHeight() - this._multiline.lineIndex() - 1;
	readline.moveCursor( this._ostream, 0, dy );

	// Write completions to the output stream:
	this._ostream.write( this._drawOutput( rows, columns ) );

	// Bring the cursor back to the current line:
	readline.moveCursor( this._ostream, 0, -1 * ( rows + this._multiline.inputHeight() - this._multiline.lineIndex() ) ); // eslint-disable-line max-len
	readline.cursorTo( this._ostream, this._repl.promptLength() );
	this._rli.cursor = 0;

	// Insert the navigated suggestion to the current line:
	readline.clearLine( this._ostream, 1 );
	this._rli.line = '';
	this._rli.write( removeLast( this._inputLine, this._completionPrefix.length ) + ( this._completionsList[ this._idx ] || this._completionPrefix ) + this._remainingLine ); // eslint-disable-line max-len
	readline.moveCursor( this._ostream, -1 * this._remainingLine.length );
	this._rli.cursor -= this._remainingLine.length;
});

/**
* Draws the completions output grid.
*
* @private
* @name _drawOutput
* @memberof CompleterEngine.prototype
* @type {Function}
* @param {number} rows - number of rows in output grid
* @param {number} columns - number of columns in output grid
* @returns {string} output string
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, '_drawOutput', function drawOutput( rows, columns ) {
	var whitespaces;
	var completion;
	var lineIndex;
	var output;
	var i;

	// Draw the output grid:
	output = '\n';
	lineIndex = 0;
	whitespaces = 0;
	for ( i = 0; i < this._highlightedCompletions.length; i++ ) {
		completion = this._highlightedCompletions[ i ];

		// If completions start overflowing the maximum allowed rows, stop writing to output...
		if ( i >= rows * columns ) {
			break;
		}
		if ( lineIndex >= columns ) {
			// Reached end of column, enter next line:
			output += '\n';
			lineIndex = 0;
			whitespaces = 0;
		} else {
			// Fill the space to move to the next column:
			output += repeat( ' ', whitespaces );
		}
		if ( i === this._idx && this._repl._isTTY ) {
			// Highlight the current navigated index:
			completion = stripANSI( completion );
			completion = '\u001b[7m' + completion + '\u001b[27m';
		}
		// Add completion string to the column in output:
		output += completion;
		whitespaces = this._widthOfColumn - this._completionsLength[ i ];
		lineIndex += 1;
	}
	output += '\n';
	return output;
});

/**
* Highlights the matching parts of the completions based on the current line.
*
* @private
* @name _highlightCompletions
* @memberof CompleterEngine.prototype
* @type {Function}
* @returns {Array<string>} array of highlighted completions
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, '_highlightCompletions', function highlightCompletions() {
	var highlightedCompletions;
	var lastMatchedIndex;
	var completionIndex;
	var highlighted;
	var boldIndexes;
	var completion;
	var lineIndex;
	var i;
	var j;

	highlightedCompletions = [];
	for ( i = 0; i < this._completionsList.length; i++ ) {
		completion = this._completionsList[ i ];
		lastMatchedIndex = -1;
		completionIndex = 0;
		highlighted = '';
		boldIndexes = []; // Buffer to store indexes of characters in completion string that needs to be highlighted
		lineIndex = 0;

		// If input is an exact prefix of completion, directly highlight the substring...
		if ( startsWith( completion, this._completionPrefix ) ) {
			highlighted = '\u001b[1m' + completion.slice( 0, this._completionPrefix.length ) + '\u001b[0m' + completion.slice( this._completionPrefix.length );
		} else {
			// Store indexes of each matching character in the completion string in the buffer...
			while ( lineIndex < this._completionPrefix.length && completionIndex < completion.length ) { // eslint-disable-line max-len
				if ( lowercase( completion[ completionIndex ] ) === lowercase( this._completionPrefix[ lineIndex ] ) ) { // eslint-disable-line max-len
					boldIndexes.push( completionIndex );
					lastMatchedIndex = completionIndex;
					lineIndex += 1;
				} else if ( completionIndex + 1 === completion.length ) {
					lineIndex += 1;
					completionIndex = lastMatchedIndex + 1;
				}
				completionIndex += 1;
			}
			// Highlight stored indexes in the completion string:
			for ( j = 0; j < completion.length; j++ ) {
				if ( contains( boldIndexes, j ) ) {
					highlighted += '\u001b[1m' + completion[ j ] + '\u001b[0m';
				} else {
					highlighted += completion[ j ];
				}
			}
		}
		highlightedCompletions.push( highlighted );
	}
	return highlightedCompletions;
});

/**
* Returns the number of columns in the completions output grid.
*
* @name _completionColumns
* @memberof CompleterEngine.prototype
* @type {Function}
* @returns {number} number of columns
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, '_completionColumns', function completionColumns() {
	return floor( this._repl.viewportWidth() / this._widthOfColumn ) || 1;
});

/**
* Returns the number of rows in the completions output grid.
*
* @name _completionRows
* @memberof CompleterEngine.prototype
* @type {Function}
* @param {number} columns - number of columns in the completions output grid
* @returns {number} number of rows
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, '_completionRows', function completionRows( columns ) {
	var maxRows = max( this._repl.viewportHeight() - ( this._multiline.inputHeight() + RESERVED_COMPLETER_ROWS ), 0 ); // eslint-disable-line max-len
	var rows = ceil( this._completionsList.length / columns );

	// Truncate number of completion rows to fit the viewport:
	return min( rows, maxRows );
});

/**
* Checks whether completions are able to fit within the current viewport.
*
* @private
* @name _isDisplayable
* @memberof CompleterEngine.prototype
* @type {Function}
* @returns {boolean} boolean indicating whether the completions are "displayable"
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, '_isDisplayable', function isDisplayable() {
	var vh = this._repl.viewportHeight();
	var ih = this._multiline.inputHeight();
	return vh > ih + RESERVED_COMPLETER_ROWS;
});

/**
* Navigates up the completions grid.
*
* @private
* @name _navigateUp
* @memberof CompleterEngine.prototype
* @type {Function}
* @param {string} data - input data
* @param {Object} key - key object
* @returns {void}
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, '_navigateUp', function navigateUp( data, key ) {
	var columns = this._completionColumns();

	// If already on the line, close the completer...
	if ( this._idx === -1 ) {
		this.closeCompleter();
		this._ttyWrite.call( this._rli, data, key );
		return;
	}
	// Move to the previous row:
	if ( this._idx - columns >= 0 ) {
		this._idx -= columns;
	} else {
		this._idx = -1;
	}
	this._updateCompletions();
});

/**
* Navigates down the completions grid.
*
* @private
* @name _navigateDown
* @memberof CompleterEngine.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, '_navigateDown', function navigateDown() {
	var columns = this._completionColumns();
	var rows = this._completionRows( columns );

	// Move to the next row...
	if ( this._idx === -1 ) {
		this._idx = 0;
		this._updateCompletions();
	} else if ( this._idx + columns < rows * columns ) {
		this._idx += columns;
		this._updateCompletions();
	}
});

/**
* Navigates to the left in the completions grid.
*
* @private
* @name _navigateLeft
* @memberof CompleterEngine.prototype
* @type {Function}
* @param {string} data - input data
* @param {Object} key - key object
* @returns {void}
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, '_navigateLeft', function navigateLeft( data, key ) {
	// If on current line, trigger default behavior and stop navigating...
	if ( this._idx === -1 ) {
		this._ttyWrite.call( this._rli, data, key );
		return;
	}
	// If navigating, move back an index...
	if ( this._idx > 0 ) {
		this._idx -= 1;
		this._updateCompletions();
	}
});

/**
* Navigates to the right in the completions grid.
*
* @private
* @name _navigateRight
* @memberof CompleterEngine.prototype
* @type {Function}
* @param {string} data - input data
* @param {Object} key - key object
* @returns {void}
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, '_navigateRight', function navigateRight( data, key ) {
	var columns = this._completionColumns();
	var rows = this._completionRows( columns );

	// If on current line, trigger default behavior and stop navigating...
	if ( this._idx === -1 ) {
		this._ttyWrite.call( this._rli, data, key );
		return;
	}
	// If navigating, move ahead an index...
	if ( this._idx + 1 < min( rows * columns, this._completionsList.length ) ) {
		this._idx += 1;
		this._updateCompletions();
	}
});

/**
* Checks whether the user is currently navigating completions.
*
* @name isNavigating
* @memberof CompleterEngine.prototype
* @type {Function}
* @returns {boolean} boolean indicating whether user is currently navigating completions
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, 'isNavigating', function isNavigating() {
	return this._isNavigating;
});

/**
* Closes the completer engine.
*
* @private
* @name closeCompleter
* @memberof CompleterEngine.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, 'closeCompleter', function closeCompleter() {
	// Check if completer is already closed...
	if ( !this._isNavigating ) {
		return;
	}
	// Reset completer parameters:
	this._isNavigating = false;
	this._idx = -1;

	// Clear completions output:
	readline.clearScreenDown( this._ostream );

	// NOTE: `clearScreenDown` seems to behave abnormally in this case by also clearing the `ostream` to the right of the cursor. Hence writing it again below:
	this._ostream.write( this._remainingLine );
	readline.moveCursor( this._ostream, -1 * this._remainingLine.length );

	// Reset the internal completer buffers:
	this._inputLine = '';
	this._remainingLine = '';
	this._completionPrefix = '';
	this._completionsList = [];
	this._highlightedCompletions = [];
	this._completionsLength = [];
	this._widthOfColumn = -1;
});

/**
* Callback which should be invoked **before** a "keypress" event is processed by a readline interface.
*
* @name beforeKeypress
* @memberof CompleterEngine.prototype
* @type {Function}
* @param {string} data - input data
* @param {Object} key - key object
* @returns {void}
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, 'beforeKeypress', function beforeKeypress( data, key ) {
	var cursor;
	var line;

	if ( !key ) {
		this._ttyWrite.call( this._rli, data, key );
		return;
	}
	// If user is already viewing completions, allow navigating it...
	if ( this._isNavigating ) {
		switch ( key.name ) {
		// If user presses TAB while navigating, close the completer:
		case 'tab':
			debug( 'Received a TAB keypress event. Closing the completer engine...' );
			this.closeCompleter();
			break;

		// If paste sequences detected, close the completer:
		case 'paste-start':
			this.closeCompleter();
			this._ttyWrite.call( this._rli, data, key );
			break;

		// If arrow keys detected, allow navigating the completions...
		case 'down':
			debug( 'Received a DOWN keypress event...' );
			this._navigateDown();
			break;
		case 'up':
			debug( 'Received an UP keypress event...' );
			this._navigateUp( data, key );
			break;
		case 'left':
			debug( 'Received a LEFT keypress event...' );
			this._navigateLeft( data, key );
			break;
		case 'right':
			debug( 'Received a RIGHT keypress event...' );
			this._navigateRight( data, key );
			break;
		default:
			this._ttyWrite.call( this._rli, data, key );
		}
		return;
	}
	// If we are in the middle of receiving pasted input, use TAB for indentation and don't trigger completions...
	if ( this._multiline.isPasting() ) {
		this._ttyWrite.call( this._rli, data, key );
		return;
	}
	// Trigger TAB completions:
	cursor = this._rli.cursor;
	line = this._rli.line;

	// Get the line before the cursor:
	this._inputLine = line.slice( 0, cursor );

	// Get the line after the cursor:
	this._remainingLine = line.slice( cursor );

	// Pause the input stream before generating completions as the completer may be asynchronous:
	this._rli.pause();
	this._completer( this._inputLine, this._onCompletions );
});

/**
* Callback for handling a "keypress" event.
*
* @name onKeypress
* @memberof CompleterEngine.prototype
* @type {Function}
* @param {string} data - input data
* @param {(Object|void)} key - key object
* @returns {void}
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, 'onKeypress', function onKeypress( data, key ) {
	var cursor;
	var line;
	var il;
	var rl;

	// If user is not navigating completions, don't sustain completions...
	if ( !this._isNavigating ) {
		return;
	}
	// If user is trying to navigate, don't update completions based on the updated line...
	if ( this._idx !== -1 && contains( [ 'left', 'right', 'up', 'down' ], key.name ) ) {
		return;
	}
	// Re-trigger completions based on updated line:
	cursor = this._rli.cursor;
	line = this._rli.line;

	// Get line before and after the cursor:
	il = line.slice( 0, cursor );
	rl = line.slice( cursor );

	// If line is unchanged, no need to re-render completions panel...
	if ( il === this._inputLine && rl === this._remainingLine ) {
		return;
	}
	// Clear invalid cache:
	this.closeCompleter();

	// Update line buffers:
	this._inputLine = il;
	this._remainingLine = rl;

	// Ensure that the displayed completions remain visible:
	this._isNavigating = true;

	// Pause the input stream before generating completions as the completer may be asynchronous...
	this._rli.pause();
	this._completer( this._inputLine, this._onCompletions );
});

/**
* Callback which should be invoked upon a "resize" event.
*
* @name onResize
* @memberof CompleterEngine.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( CompleterEngine.prototype, 'onResize', function onResize() {
	if ( !this._isNavigating ) {
		return;
	}
	if ( !this._isDisplayable() ) {
		this.closeCompleter();
		return;
	}
	this._updateCompletions();
});


// EXPORTS //

module.exports = CompleterEngine;
