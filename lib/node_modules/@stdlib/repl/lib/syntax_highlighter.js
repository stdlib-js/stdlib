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
var format = require( '@stdlib/string/format' );
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isEmptyArray = require( '@stdlib/assert/is-empty-array' );
var objectKeys = require( '@stdlib/utils/keys' );
var omit = require( '@stdlib/utils/omit' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var tokenizer = require( './tokenizer.js' );
var THEMES = require( './themes.js' );
var ANSI = require( './ansi_colors.js' );


// VARIABLES //

var debug = logger( 'repl:syntax-highlighter' );
var DEFAULT_THEME = 'stdlib-ansi-basic';


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

/**
* Removes duplicate tokens from a sorted tokens array.
*
* @private
* @param {Array<Object>} tokens - sorted tokens array
* @returns {Array<Object>} array with unique tokens
*/
function removeDuplicateTokens( tokens ) {
	var out = [];
	var i;

	out.push( tokens[ 0 ] );
	for ( i = 1; i < tokens.length; i++ ) {
		if ( tokens[ i - 1 ].start !== tokens[ i ].start ) {
			out.push( tokens[ i ] );
		}
	}
	return out;
}


// MAIN //

/**
* Constructor for creating a syntax-highlighter.
*
* @private
* @constructor
* @param {REPL} repl - REPL instance
* @param {WritableStream} ostream - writable stream
* @param {boolean} enabled - boolean indicating whether the syntax-highlighter should be initially enabled
* @returns {SyntaxHighlighter} syntax-highlighter instance
*/
function SyntaxHighlighter( repl, ostream, enabled ) {
	if ( !( this instanceof SyntaxHighlighter ) ) {
		return new SyntaxHighlighter( repl, ostream, enabled );
	}
	debug( 'Creating a new syntax-highlighter' );

	// Initialize a flag indicating whether the syntax highlighter is enabled:
	this._enabled = enabled;

	// Cache a reference to the provided REPL instance:
	this._repl = repl;

	// Cache a reference to the provided readline interface:
	this._rli = repl._rli;

	// Cache a reference to the output writable stream:
	this._ostream = ostream;

	// Cache a reference to the REPL's multi-line handler:
	this._multilineHandler = repl._multilineHandler;

	// Initialize a buffer containing the current line to validate line changes:
	this._line = '';

	// Initialize a buffer to cache the highlighted line:
	this._highlightedLine = '';

	// Initialize an object storing all available themes:
	this._themes = THEMES;

	// Initialize a variable storing the current theme:
	this._theme = DEFAULT_THEME;

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
	var offset = 0;
	var color;
	var theme = this._themes[ this._theme ];
	var token;
	var i;
	var j;

	// Traverse the tokens...
	for ( i = 0; i < tokens.length; i++ ) {
		token = tokens[ i ];
		color = theme[ token.type ];
		if ( !color ) {
			continue; // no color defined for the token type
		}
		color = color.split( ' ' ); // allow combination of styles. eg: `bold magenta`
		highlightedLine += line.slice( offset, token.start ); // add text before token
		for ( j = 0; j < color.length; j++ ) {
			// Highlight token if it's color is supported...
			colorCode = ANSI[ color[ j ] ];
			if ( colorCode ) {
				highlightedLine += colorCode; // insert colorCode
			}
		}
		highlightedLine += line.slice( token.start, token.end ); // add token
		highlightedLine += resetCode; // reset color
		offset = token.end;
	}
	highlightedLine += line.slice( offset ); // add remaining text
	return highlightedLine;
});

/**
* Returns a list of available theme names.
*
* @name getThemes
* @memberof SyntaxHighlighter.prototype
* @type {Function}
* @returns {Array<string>} array of all theme names
*/
setNonEnumerableReadOnly( SyntaxHighlighter.prototype, 'getThemes', function getThemes() {
	return objectKeys( this._themes );
});

/**
* Sets the current color theme.
*
* @name setTheme
* @memberof SyntaxHighlighter.prototype
* @type {Function}
* @param {string} theme - theme name
* @throws {Error} argument must be an existing theme
*/
setNonEnumerableReadOnly( SyntaxHighlighter.prototype, 'setTheme', function setTheme( theme ) {
	if ( !hasOwnProp( this._themes, theme ) ) {
		throw new Error( format( 'invalid argument. First argument must be an existing theme name. Value: `%s`.', theme ) );
	}
	this._highlightedLine = '';
	this._theme = theme;
});

/**
* Returns a theme's color palette.
*
* @name getThemeConfig
* @memberof SyntaxHighlighter.prototype
* @type {Function}
* @param {string} theme - theme name
* @throws {Error} must provide an existing theme name
* @returns {Object} theme object
*/
setNonEnumerableReadOnly( SyntaxHighlighter.prototype, 'getThemeConfig', function getThemeConfig( theme ) {
	if ( !hasOwnProp( this._themes, theme ) ) {
		throw new Error( format( 'invalid argument. First argument must be an existing theme name. Value: `%s`.', theme ) );
	}
	return this._themes[ theme ];
});

/**
* Adds a new color theme.
*
* @name addTheme
* @memberof SyntaxHighlighter.prototype
* @type {Function}
* @param {Object} theme - theme object
*/
setNonEnumerableReadOnly( SyntaxHighlighter.prototype, 'addTheme', function addTheme( name, theme ) {
	this._themes[ name ] = theme;
});

/**
* Renames a color theme.
*
* @name renameTheme
* @memberof SyntaxHighlighter.prototype
* @type {Function}
* @param {string} oldName - old theme name
* @param {string} newName - new theme name
* @throws {Error} first argument must be an existing theme name
*/
setNonEnumerableReadOnly( SyntaxHighlighter.prototype, 'renameTheme', function renameTheme( oldName, newName ) {
	if ( oldName === DEFAULT_THEME ) {
		throw new Error( format( 'invalid argument. First argument must not be the default theme name. Value: `%s`.', oldName ) );
	}
	if ( !hasOwnProp( this._themes, oldName ) ) {
		throw new Error( format( 'invalid argument. First argument must be an existing theme name. Value: `%s`.', oldName ) );
	}
	this._themes[ newName ] = this._themes[ oldName ];
	if ( oldName === this._theme ) {
		this._repl.settings( 'theme', newName );
	}
	this._themes = omit( this._themes, oldName );
});

/**
* Deletes a color theme.
*
* @name deleteTheme
* @memberof SyntaxHighlighter.prototype
* @type {Function}
* @param {Object} theme - theme name
* @throws {Error} must provide an existing theme name
* @throws {Error} must provide a theme other than the default theme
*/
setNonEnumerableReadOnly( SyntaxHighlighter.prototype, 'deleteTheme', function deleteTheme( theme ) {
	if ( !hasOwnProp( this._themes, theme ) ) {
		throw new Error( format( 'invalid argument. First argument must be an existing theme name. Value: `%s`.', theme ) );
	}
	if ( theme === DEFAULT_THEME ) {
		throw new Error( format( 'invalid argument. First argument must not be the default theme name. Value: `%s`.', theme ) );
	}
	if ( theme === this._theme ) {
		this._highlightedLine = '';
		this._repl.settings( 'theme', DEFAULT_THEME );
	}
	this._themes = omit( this._themes, theme );
});

/**
* Disables the syntax-highlighter.
*
* @name disable
* @memberof SyntaxHighlighter.prototype
* @type {Function}
* @returns {SyntaxHighlighter} syntax-highlighter instance
*/
setNonEnumerableReadOnly( SyntaxHighlighter.prototype, 'disable', function disable() {
	this._enabled = false;
	return this;
});

/**
* Enables the syntax-highlighter.
*
* @name enable
* @memberof SyntaxHighlighter.prototype
* @type {Function}
* @returns {SyntaxHighlighter} syntax-highlighter instance
*/
setNonEnumerableReadOnly( SyntaxHighlighter.prototype, 'enable', function enable() {
	this._enabled = true;
	return this;
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
	var tokens;

	if ( !this._enabled ) {
		// Save raw output if syntax highlighting is disabled:
		this._multilineHandler.updateLine( this._rli.line ); // save displayed line
		return;
	}
	if ( !this._rli.line ) {
		debug( 'Empty line detected. Skipping highlighting...' );
		this._multilineHandler.updateLine( this._rli.line ); // save displayed line
		return;
	}
	if ( this._line !== this._rli.line ) {
		// Tokenize:
		debug( 'Line change detected. Tokenizing line: %s', this._rli.line );
		this._line = this._rli.line; // update line buffer
		tokens = tokenizer( this._line, this._repl._context );
		if ( isEmptyArray( tokens ) ) {
			debug( 'No tokens found. Skipping highlighting...' );
			this._highlightedLine = this._line;
		} else {
			// Process tokens:
			tokens.sort( tokenComparator );
			tokens = removeDuplicateTokens( tokens );

			// Highlight:
			debug( '%d tokens found. Highlighting...', tokens.length );
			this._highlightedLine = this._highlightLine( this._line, tokens );
		}
	}
	// Replace:
	debug( 'Replacing current line with the highlighted line...' );
	readline.moveCursor( this._ostream, -1 * this._rli.cursor, 0 );
	readline.clearLine( this._ostream, 1 );
	this._ostream.write( this._highlightedLine );
	readline.moveCursor( this._ostream, this._rli.cursor - this._line.length, 0 ); // eslint-disable-line max-len
	this._multilineHandler.updateLine( this._highlightedLine ); // save displayed line
});


// EXPORTS //

module.exports = SyntaxHighlighter;
