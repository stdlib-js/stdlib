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

/* eslint-disable no-restricted-syntax, no-invalid-this, no-underscore-dangle */

'use strict';

// MODULES //

var readline = require( 'readline' );
var logger = require( 'debug' );
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var tokenizer = require( './tokenizer.js' );
var THEMES = require( './themes.js' );
var ANSI = require( './ansi_colors.js' );


// VARIABLES //

var debug = logger( 'repl:syntax-highlighter' );


// FUNCTIONS //

/**
* Compare function for sorting tokens in ascending order of their indices.
*
* @private
* @param {Object} a - first token
* @param {Object} b - second token
* @returns {boolean} boolean indicating if the first token is greater
*/
function tokenComparator( a, b ) {
	return a.start - b.start;
}


// MAIN //

/**
* Constructor for creating a syntax-highlighter.
*
* @private
* @constructor
* @param {REPL} repl - REPL instance
* @param {WritableStream} ostream - writable stream
* @returns {SyntaxHighlighter} syntax-highlighter instance
*/
function SyntaxHighlighter( repl, ostream ) {
	if ( !( this instanceof SyntaxHighlighter ) ) {
		return new SyntaxHighlighter( repl, ostream );
	}
	debug( 'Creating a new syntax-highlighter' );

	// Cache a reference to the provided REPL instance:
	this._repl = repl;

	// Cache a reference to the provided readline interface:
	this._rli = repl._rli;

	// Cache a reference to the output writable stream:
	this._ostream = ostream;

	// Initialize a buffer containing the current line to validate line changes:
	this._line = '';

	return this;
}

/**
* Highlights the input line.
*
* @private
* @name _highlightLine
* @memberof SyntaxHighlighter.prototype
* @type {Function}
* @param {str} line - input line
* @param {Array} tokens - array of tokens in the line
* @returns {str} highlighted line
*/
setNonEnumerableReadOnly( SyntaxHighlighter.prototype, '_highlightLine', function highlightLine( line, tokens ) {
	var highlightedLine = '';
	var resetCode = ANSI[ 'reset' ];
	var colorCode;
	var colors = THEMES[ 'default' ];
	var offset = 0;
	var token;
	var i;

	// Sort and traverse the tokens...
	tokens.sort( tokenComparator );
	for ( i = 0; i < tokens.length; i++ ) {
		token = tokens[ i ];
		colorCode = ANSI[ colors[ token.type ] ];

		// Highlight token if it's color exists in the theme...
		if ( colorCode ) {
			highlightedLine += line.slice( offset, token.start ); // add text before token
			highlightedLine += colorCode; // insert colorCode
			highlightedLine += line.slice( token.start, token.end ); // add token
			highlightedLine += resetCode; // reset color
			offset = token.end;
		}
	}
	highlightedLine += line.slice( offset ); // add remaining text

	return highlightedLine;
});

/**
* Callback for handling a "keypress" event.
*
* @name onKeypress
* @memberof SyntaxHighlighter.prototype
* @type {Function}
* @param {string} data - input data
* @param {(Object|void)} key - key object
* @returns {void}
*/
setNonEnumerableReadOnly( SyntaxHighlighter.prototype, 'onKeypress', function onKeypress() {
	var highlightedLine;
	var tokens;

	if ( !this._rli.line || this._line === this._rli.line ) {
		debug( 'Empty line or no change detected. Skipping highlighting...' );
		return;
	}
	this._line = this._rli.line;

	// Tokenize:
	debug( 'Tokenizing line: %s', this._line );
	tokens = tokenizer( this._line, this._repl._context );
	if ( !tokens ) {
		debug( 'No tokens found. Skipping highlighting...' );
		return;
	}

	// Highlight:
	debug( '%d tokens found. Highlighting...', tokens.length );
	highlightedLine = this._highlightLine( this._line, tokens );

	// Replace:
	debug( 'Replacing current line with the highlighted line...' );
	readline.moveCursor( this._ostream, -1 * this._rli.cursor, 0 );
	readline.clearLine( this._ostream, 1 );
	this._ostream.write( highlightedLine );
	readline.moveCursor( this._ostream, this._rli.cursor - this._line.length, 0 ); // eslint-disable-line max-len
});


// EXPORTS //

module.exports = SyntaxHighlighter;
