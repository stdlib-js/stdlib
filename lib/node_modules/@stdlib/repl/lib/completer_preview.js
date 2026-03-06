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

/* eslint-disable no-restricted-syntax, no-underscore-dangle, no-invalid-this */

'use strict';

// MODULES //

var readline = require( 'readline' );
var logger = require( 'debug' );
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var repeat = require( '@stdlib/string/repeat' );
var commonPrefix = require( './longest_common_prefix.js' );


// VARIABLES //

var debug = logger( 'repl:completer:preview' );


// MAIN //

/**
* Constructor for creating a preview completer.
*
* @private
* @constructor
* @param {Object} rli - readline instance
* @param {Function} completer - function for generating possible completions
* @param {WritableStream} ostream - writable stream
* @param {boolean} enabled - boolean indicating whether the completer should be initially enabled
* @returns {PreviewCompleter} completer instance
*/
function PreviewCompleter( rli, completer, ostream, enabled ) {
	if ( !(this instanceof PreviewCompleter) ) {
		return new PreviewCompleter( rli, completer, ostream, enabled );
	}
	debug( 'Creating a preview completer...' );

	// Initialize a flag indicating whether the preview completer is enabled:
	this._enabled = enabled;

	// Cache a reference to the provided readline interface:
	this._rli = rli;

	// Cache a reference to the output writable stream:
	this._ostream = ostream;

	// Cache a reference to the provided completer:
	this._completer = completer;

	// Create a callback for processing potential completion previews:
	this._onCompletions = this._completionCallback();

	// Initialize a buffer containing the currently displayed completion preview:
	this._preview = '';

	return this;
}

/**
* Returns a callback for processing potential completion previews.
*
* @private
* @name _completionCallback
* @memberof PreviewCompleter.prototype
* @type {Function}
* @returns {Function} completion callback
*/
setNonEnumerableReadOnly( PreviewCompleter.prototype, '_completionCallback', function completionCallback() {
	var self = this;
	return clbk;

	/**
	* Callback invoked upon resolving potential completion previews.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Array} completions - completion results
	* @returns {void}
	*/
	function clbk( error, completions ) {
		var prefix;
		var list;
		var N;

		// Check whether we encountered an error when generating completions...
		if ( error ) {
			debug( 'Encountered an error when generating completions. Unable to display a completion preview.' );
			return;
		}
		list = completions[ 0 ];
		if ( list.length === 0 ) {
			debug( 'Unable to display a completion preview. No completion preview candidates.' );
			self.clear();
			return;
		}
		// Resolve a common prefix from the completion results:
		prefix = commonPrefix( list ); // e.g., [ 'back', 'background', 'backward' ] => 'back'

		// If the completion candidates do not have a common prefix, no completion preview to display, as we do not have a criteria for choosing one candidate over another...
		if ( prefix === '' ) {
			debug( 'Unable to display a completion preview. Completion candidates have no common prefix.' );
			return;
		}
		// Extract the completion preview substring (e.g., if the current line is 'ba', preview should be 'ck'):
		self._preview = prefix.substring( commonPrefix( prefix, completions[ 1 ] ).length ); // eslint-disable-line max-len

		// If the substring is empty, nothing to display...
		if ( self._preview === '' ) {
			debug( 'Unable to display a completion preview. Exact match.' );
			return;
		}
		debug( 'Completion preview: %s', self._preview );

		// Compute the number of characters until the end of the line from the current cursor position:
		N = self._rli.line.length - self._rli.cursor;

		// Move the cursor to the end of the line:
		readline.moveCursor( self._ostream, N );

		// Append the completion preview to the current line (using ASCII color escape codes for displaying grey text):
		self._ostream.write( '\u001b[90m' + self._preview + '\u001b[0m' );

		// Move the cursor back to previous position:
		readline.moveCursor( self._ostream, -self._preview.length-N );
	}
});

/**
* Clears a completion preview.
*
* @name clear
* @memberof PreviewCompleter.prototype
* @type {Function}
* @returns {void}
*/
setNonEnumerableReadOnly( PreviewCompleter.prototype, 'clear', function clear() {
	var preview;
	var N;

	if ( !this._enabled ) {
		return;
	}
	preview = this._preview;

	// If no preview currently displayed, nothing to clear...
	if ( preview === '' ) {
		return;
	}
	debug( 'Clearing completion preview...' );

	// Compute the number of character until the end of the line from the current cursor position:
	N = this._rli.line.length - this._rli.cursor;

	// Move the cursor to the end of the line:
	readline.moveCursor( this._ostream, N );

	// Replace the current display text with whitespace:
	this._ostream.write( repeat( ' ', preview.length ) );

	// Reset the cursor:
	readline.moveCursor( this._ostream, -preview.length-N );

	// Reset the completion preview buffer:
	this._preview = '';
});

/**
* Disables the preview completer.
*
* @name disable
* @memberof PreviewCompleter.prototype
* @type {Function}
* @returns {PreviewCompleter} completer instance
*/
setNonEnumerableReadOnly( PreviewCompleter.prototype, 'disable', function disable() {
	this.clear();

	debug( 'Disabling the preview completer...' );
	this._enabled = false;

	return this;
});

/**
* Enables the preview completer.
*
* @name enable
* @memberof PreviewCompleter.prototype
* @type {Function}
* @returns {PreviewCompleter} completer instance
*/
setNonEnumerableReadOnly( PreviewCompleter.prototype, 'enable', function enable() {
	debug( 'Enabling the preview completer...' );
	this._enabled = true;
	return this;
});

/**
* Callback for handling a "keypress" event.
*
* @name onKeypress
* @memberof PreviewCompleter.prototype
* @type {Function}
* @param {string} data - input data
* @param {(Object|void)} key - key object
* @returns {void}
*/
setNonEnumerableReadOnly( PreviewCompleter.prototype, 'onKeypress', function onKeypress() {
	if ( !this._enabled ) {
		return;
	}
	// Check for existing content beyond the cursor which could "collide" with a preview completion...
	if ( /[^a-zA-Z0-9_$]/.test( this._rli.line.substring( this._rli.cursor ) ) ) { // FIXME: this is not robust (see https://mathiasbynens.be/notes/javascript-identifiers)
		return;
	}
	try {
		this._completer( this._rli.line, this._onCompletions );
	} catch ( err ) {
		debug( 'Error: %s', err.message );
	}
});

/**
* Callback which should be invoked **before** a "keypress" event is processed by a readline interface.
*
* @name beforeKeypress
* @memberof PreviewCompleter.prototype
* @type {Function}
* @param {string} data - input data
* @param {(Object|void)} key - key object
* @returns {boolean} boolean indicating whether the preview was auto-completed
*/
setNonEnumerableReadOnly( PreviewCompleter.prototype, 'beforeKeypress', function beforeKeypress( data, key ) {
	if ( !this._enabled ) {
		return false;
	}
	if ( !key || this._preview === '' ) {
		return false;
	}
	// Avoid clashing with existing TAB completion behavior...
	if ( key.name === 'tab' ) {
		this.clear();
		return false;
	}
	// Handle the case where the user is not at the end of the line...
	if ( this._rli.cursor !== this._rli.line.length ) {
		// If a user is in the middle of a line and presses ENTER, clear the preview string, as the preview was not accepted prior to executing the expression...
		if ( key.name === 'return' || key.name === 'enter' ) {
			debug( 'Received an ENTER keypress event while in the middle of the line.' );
			this.clear();
		}
		return false;
	}
	// When the user is at the end of the line, auto-complete the line with the completion preview when a user presses RETURN or the RIGHT arrow key (note: pressing ENTER will result in both completion AND execution)...
	if ( key.name === 'return' || key.name === 'enter' || key.name === 'right' ) {
		debug( 'Completion preview accepted. Performing auto-completion...' );
		this._rli.write( this._preview );
		this._preview = '';
		return true;
	}
	return false;
});


// EXPORTS //

module.exports = PreviewCompleter;
