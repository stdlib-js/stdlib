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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var logger = require( 'debug' );
var parse = require( 'acorn-loose' ).parse;
var findNodeAround = require( 'acorn-walk' ).findNodeAround;
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var reservedCharsRegExp = require( './regexp_reserved_syntax_characters.js' );
var walk = require( './auto_close_pairs_walk.js' );
var OPEN_SYMBOLS = require( './auto_close_pairs_open_symbols.js' );
var CLOSE_SYMBOLS = require( './auto_close_pairs_close_symbols.js' );


// VARIABLES //

var debug = logger( 'repl:auto_close_pairs' );
var AOPTS = {
	'ecmaVersion': 'latest'
};


// FUNCTIONS //

/**
* Tests whether a character is a quote character.
*
* @private
* @param {string} ch - input character
* @returns {boolean} boolean indicating whether a character is a quote character
*/
function isQuote( ch ) {
	return ( ch === '\'' || ch === '"' );
}


// MAIN //

/**
* Constructor for creating an auto-closer.
*
* @private
* @constructor
* @param {Object} rli - readline instance
* @param {boolean} autoClose - boolean indicating whether auto-closing should be initially enabled
* @param {boolean} autoDelete - boolean indicating whether auto-deleting should be initially enabled
* @returns {AutoCloser} auto-closer instance
*/
function AutoCloser( rli, autoClose, autoDelete ) {
	if ( !(this instanceof AutoCloser) ) {
		return new AutoCloser( rli, autoClose, autoDelete );
	}
	debug( 'Creating an auto-closer...' );
	this._rli = rli;
	this._ignoreBackspace = false;
	this._autoClose = autoClose;
	this._autoDelete = autoDelete;
	return this;
}

/**
* Processes an opening symbol when performing auto-close.
*
* @private
* @name _autocloseOpenSymbol
* @memberof AutoCloser.prototype
* @param {string} line - current line content
* @param {NonNegativeInteger} cursor - cursor position
* @param {string} data - input data
* @returns {boolean} boolean indicating whether line content was updated
*/
setNonEnumerableReadOnly( AutoCloser.prototype, '_autocloseOpenSymbol', function _autocloseOpenSymbol( line, cursor, data ) {
	var ast;
	var out;
	var ch;

	debug( 'Checking for an opening symbol...' );
	ch = OPEN_SYMBOLS[ data ];
	if ( !isString( ch ) ) {
		debug( 'Failed to detect an opening symbol.' );
		return false;
	}
	debug( 'Detected an opening symbol.' );

	// Avoid auto-closing when the input data is already present, and further account for `foo`` being valid syntax (i.e., using untagged template literals as tags); hence, we need to guard against unnecessarily inserting a closing symbol when a user types `foo<|>` and then instinctively types ` in order to close a template literal...
	if ( data === line[ cursor ] ) {
		debug( 'Failed to detect an auto-close candidate. Closing symbol is already present.' );
		return false;
	}
	// Generate an AST for the current line:
	debug( 'Generating an AST...' );
	ast = parse( line, AOPTS );

	// Attempt to walk the AST to determine whether to auto-close...
	try {
		debug( 'Determining whether to auto-close...' );
		out = walk( ast, cursor );
	} catch ( err ) {
		// If parsing failed, stay conservative and don't auto-close:
		debug( 'Error: %s', err.message );
		return false;
	}
	// If we failed to conclusively determine whether to auto-close, stay conservative and don't auto-close...
	if ( !out ) {
		debug( 'Failed to detect an auto-close candidate. AST parsing did not conclusively support auto-closing.' );
		return false;
	}
	// If the auto-close candidate is a quote character, avoid auto-closing when the opening character is inserted immediately before characters which could reasonably be considered string characters...
	if ( isQuote( ch ) && line[ cursor+1 ] && !reservedCharsRegExp().test( line[ cursor+1 ] ) ) { // eslint-disable-line max-len
		debug( 'Failed to detect an auto-close candidate. Detected a quote character immediately preceding potential character belonging to a string literal.' );
		return false;
	}
	debug( 'Successfully detected an auto-close candidate. Inserting closing symbol...' );
	this._rli.write( ch );

	// Move back one character:
	this._rli.write( null, {
		'ctrl': true,
		'name': 'b'
	});
	debug( 'Resulting expression: %s', this._rli.line );
	return true;
});

/**
* Processes a closing symbol when performing auto-close.
*
* @private
* @name _autocloseCloseSymbol
* @memberof AutoCloser.prototype
* @param {string} line - current line content
* @param {NonNegativeInteger} cursor - cursor position
* @param {string} data - input data
* @returns {boolean} boolean indicating whether line content was updated
*/
setNonEnumerableReadOnly( AutoCloser.prototype, '_autocloseCloseSymbol', function _autocloseCloseSymbol( line, cursor, data ) {
	var ch;

	debug( 'Checking for a closing symbol...' );
	ch = CLOSE_SYMBOLS[ data ];
	if ( !isString( ch ) ) {
		debug( 'Failed to detect a closing symbol.' );
		return false;
	}
	debug( 'Detected a closing symbol.' );

	// Support users who may instinctively add a closing symbol by skipping over the closing symbol character, and thus avoid inserting an unwanted duplicate character...
	debug( 'Determining whether a closing symbol already exists...' );
	if ( data !== line[ cursor ] ) {
		// Did not detect a closing symbol to skip over...
		debug( 'Did not find an existing closing symbol.' );
		return false;
	}
	// Set an internal flag to avoid having auto-deletion logic consider this backspace to be user input:
	this._ignoreBackspace = true;

	debug( 'Closing symbol already exists. Removing duplicate symbol...' );
	this._rli.write( null, {
		'name': 'backspace'
	});

	// Move to the right one character:
	this._rli.write( null, {
		'name': 'right'
	});
	debug( 'Resulting expression: %s', this._rli.line );
	return true;
});

/**
* Processes an opening symbol when performing auto-delete.
*
* @private
* @name _autocloseOpenSymbol
* @memberof AutoCloser.prototype
* @param {string} line - current line content
* @param {NonNegativeInteger} cursor - cursor position
* @param {string} data - character to delete
* @returns {boolean} boolean indicating whether line content was updated
*/
setNonEnumerableReadOnly( AutoCloser.prototype, '_autodeleteOpenSymbol', function _autodeleteOpenSymbol( line, cursor, data ) {
	var node;
	var ast;
	var ch;

	debug( 'Checking for an opening symbol...' );
	ch = OPEN_SYMBOLS[ data ];
	if ( !isString( ch ) ) {
		debug( 'Failed to detect an opening symbol.' );
		return false;
	}
	debug( 'Detected an opening symbol.' );

	debug( 'Checking if immediately followed by a corresponding closing symbol...' );
	if ( ch !== line[ cursor ] ) {
		debug( 'Failed to detect an auto-delete candidate. Opening symbol is not followed by a corresponding closing symbol.' );
		return false;
	}
	debug( 'Detected a closing symbol.' );

	debug( 'Generating an AST...' );
	ast = parse( line, AOPTS );

	debug( 'Checking whether characters are within a string literal...' );
	node = findNodeAround( ast, cursor-1, 'Literal' );
	if ( node && node.node.start < cursor-1 ) {
		debug( 'Failed to detect an auto-delete candidate. Characters are within a string literal.' );
		return false;
	}
	debug( 'Characters are not within a string literal.' );
	debug( 'Successfully detected an auto-delete candidate. Deleting symbols...' );
	this._rli.write( null, {
		'name': 'right'
	});

	// Set an internal flag to avoid having auto-deletion logic consider this backspace to be user input:
	this._ignoreBackspace = true;
	this._rli.write( null, {
		'name': 'backspace'
	});
	debug( 'Resulting expression: %s', this._rli.line );
	return true;
});

/**
* Disables auto-closing pairs.
*
* @name disableAutoClose
* @memberof AutoCloser.prototype
* @type {Function}
* @returns {AutoCloser} auto-close instance
*/
setNonEnumerableReadOnly( AutoCloser.prototype, 'disableAutoClose', function disableAutoClose() {
	debug( 'Disabling auto-closing pairs...' );
	this._autoClose = false;
	return this;
});

/**
* Enables auto-closing pairs.
*
* @name enableAutoClose
* @memberof AutoCloser.prototype
* @type {Function}
* @returns {AutoCloser} auto-close instance
*/
setNonEnumerableReadOnly( AutoCloser.prototype, 'enableAutoClose', function enableAutoClose() {
	debug( 'Enabling auto-closing pairs...' );
	this._autoClose = true;
	return this;
});

/**
* Disables auto-deleting pairs.
*
* @name disableAutoDelete
* @memberof AutoCloser.prototype
* @type {Function}
* @returns {AutoCloser} auto-close instance
*/
setNonEnumerableReadOnly( AutoCloser.prototype, 'disableAutoDelete', function disableAutoDelete() {
	debug( 'Disabling auto-deleting pairs...' );
	this._autoDelete = false;
	return this;
});

/**
* Enables auto-deleting pairs.
*
* @name enableAutoDelete
* @memberof AutoCloser.prototype
* @type {Function}
* @returns {AutoCloser} auto-close instance
*/
setNonEnumerableReadOnly( AutoCloser.prototype, 'enableAutoDelete', function enableAutoDelete() {
	debug( 'Enabling auto-deleting pairs...' );
	this._autoDelete = true;
	return this;
});

/**
* Callback which should be invoked **before** a "keypress" event is processed by a readline interface.
*
* @name beforeKeypress
* @memberof AutoCloser.prototype
* @param {string} data - input data
* @param {(Object|void)} key - key object
* @returns {boolean} boolean indicating whether line content was updated
*/
setNonEnumerableReadOnly( AutoCloser.prototype, 'beforeKeypress', function beforeKeypress( data, key ) {
	var status;
	var cursor;
	var line;

	if ( !this._autoDelete ) {
		return false;
	}
	if ( !key || key.name !== 'backspace' ) {
		return false;
	}
	if ( this._ignoreBackspace ) {
		// Reset the backspace flag to re-enable auto-deletion behavior:
		this._ignoreBackspace = false;
		return false;
	}
	cursor = this._rli.cursor;
	line = this._rli.line;

	debug( 'Expression: %s', line );
	debug( 'Cursor position: %d', cursor );

	data = line[ cursor-1 ];
	debug( 'Character to delete: %s', data );

	debug( 'Performing auto-delete...' );
	status = this._autodeleteOpenSymbol( line, cursor, data );
	if ( status ) {
		debug( 'Finished performing auto-delete.' );
		return true;
	}
	debug( 'Finished performing auto-delete.' );
	return false;
});

/**
* Callback for handling a "keypress" event.
*
* @name onKeypress
* @memberof AutoCloser.prototype
* @param {string} data - input data
* @param {(Object|void)} key - key object
* @returns {boolean} boolean indicating whether line content was updated
*/
setNonEnumerableReadOnly( AutoCloser.prototype, 'onKeypress', function onKeypress( data ) {
	var status;
	var cursor;
	var line;

	if ( !this._autoClose ) {
		return false;
	}
	cursor = this._rli.cursor;
	line = this._rli.line;

	debug( 'Expression: %s', line );
	debug( 'Cursor position: %d', cursor );
	debug( 'Character to insert: %s', data );

	debug( 'Performing auto-close...' );
	status = this._autocloseOpenSymbol( line, cursor, data );
	if ( status ) {
		debug( 'Finished performing auto-close.' );
		return true;
	}
	status = this._autocloseCloseSymbol( line, cursor, data );
	if ( status ) {
		debug( 'Finished performing auto-close.' );
		return true;
	}
	debug( 'Finished performing auto-close.' );
	return false;
});


// EXPORTS //

module.exports = AutoCloser;
