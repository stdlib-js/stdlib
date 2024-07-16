/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var logger = require( 'debug' );
var tokTypes = require( 'acorn' ).tokTypes;
var inherit = require( '@stdlib/utils/inherit' );


// VARIABLES //

var debug = logger( 'repl:acorn:detect_multiline_input' );

// Define a regular expression for matching allowed line terminators ( see https://www.ecma-international.org/ecma-262/#sec-line-terminators):
var RE_SEC_LINE_TERMINATORS = /\\(?:\r\n?|\n|\u2028|\u2029)$/;

// Define a regular expression for match a code string whose first non-whitespace character is an opening brace `{`:
var RE_OPENING_BRACE = /^\s*\{/;


// MAIN //

/**
* Acorn plugin which detects whether a user is attempting to enter multi-line input.
*
* ## Notes
*
* -   Detection attempts to determine whether an error originates at the **end** of command input. This can happen under two circumstances:
*
*     1.  Any error raised after encountering an `eof` token.
*
*     2.  Three scenarios where tokens can legally span multiple lines:
*
*         -   templates
*         -   comments
*         -   string literals with a backslash at the end of a line, thus indicating a continuation
*
* -   We specifically look for 'unterminated' errors (and not, e.g., syntax errors in a template `${}` expression).
*
* -   Currently, the only means to detect 'unterminated' errors is by examining acorn's error messages. Should these error messages change, this plugin **needs** to be updated.
*
* @private
* @param {Function} Parser - Parser class
* @returns {Function} extended class constructor
*/
function plugin( Parser ) {
	/**
	* Custom parser constructor.
	*
	* @private
	* @param {...*} args - arguments
	* @returns {CustomParser} custom parser
	*/
	function CustomParser() {
		var args;
		var i;

		args = [];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		Parser.apply( this, args );

		// Initialize a flag for determining whether a parse error originates from attempting to enter a multi-line command:
		this.HAS_MULTILINE_ERROR = false;

		return this;
	}

	/**
	* Inherit from the `Parser` prototype.
	*/
	inherit( CustomParser, Parser );

	/**
	* Reads the next token.
	*
	* @private
	* @name nextToken
	* @memberof CustomParser.prototype
	* @type {Function}
	*/
	CustomParser.prototype.nextToken = function nextToken() { // eslint-disable-line no-restricted-syntax
		Parser.prototype.nextToken.call( this );
		if ( this.type === tokTypes.eof ) {
			debug( 'Detected an error after an `eof` token.' );
			this.HAS_MULTILINE_ERROR = true;
		}
	};

	/**
	* Raises an exception upon encountering a parse error.
	*
	* @private
	* @name raise
	* @memberof CustomParser.prototype
	* @type {Function}
	* @param {number} pos - position
	* @param {string} message - message
	*/
	CustomParser.prototype.raise = function raise( pos, message ) { // eslint-disable-line no-restricted-syntax
		var token;

		switch ( message ) {
		case 'Unterminated template':
			debug( 'Detected an error due to an unterminated template.' );
			this.HAS_MULTILINE_ERROR = true;
			break;
		case 'Unterminated comment':
			debug( 'Detected an error due to an unterminated comment.' );
			this.HAS_MULTILINE_ERROR = true;
			break;
		case 'Unterminated string constant':
			token = this.input.slice( this.lastTokStart, this.pos );
			this.HAS_MULTILINE_ERROR = RE_SEC_LINE_TERMINATORS.test( token );
			if ( this.HAS_MULTILINE_ERROR ) {
				debug( 'Detected an error due to an unterminated string constant.' );
			}
			break;
		default:
			break;
		}
		Parser.prototype.raise.call( this, pos, message );
	};

	/**
	* Asserts whether parsing fails due to incomplete statements/expressions spanning multiple lines.
	*
	* @private
	* @name hasMultilineError
	* @memberof CustomParser.prototype
	* @type {Function}
	* @returns {boolean} boolean indicating whether parsing fails due to incomplete multi-line statements/expressions
	*/
	CustomParser.prototype.hasMultilineError = function hasMultilineError() { // eslint-disable-line no-restricted-syntax
		var code;

		// Reset the error flag BEFORE parsing:
		this.HAS_MULTILINE_ERROR = false;

		// Check for code which we want evaluated as an expression, rather than a block, such as an object literal (e.g., `{'a':1}`)...
		if ( RE_OPENING_BRACE.test( this.input ) ) {
			// Only prepend an open parenthesis as the goal is to test for potentially valid but incomplete expressions:
			code = '(' + this.input;

			// First try parsing as a partially wrapped expression...
			debug( 'Attempting to parse as a wrapped expression...' );
			if ( CustomParser.hasMultilineError( code, this.options ) ) {
				return true;
			}
			// Now try parsing as an unwrapped expression...
		}
		// Try to parse the code...
		try {
			this.parse( this.input );
			debug( 'Successfully parsed code. No multi-line error detected.' );
			return false;
		} catch ( error ) {
			debug( 'Unable to parse code.' );
			debug( 'Error: %s', error.message );
			if ( this.HAS_MULTILINE_ERROR ) {
				debug( 'Detected a multi-line error.' );
			}
			return this.HAS_MULTILINE_ERROR;
		}
	};

	/**
	* Asserts whether an unevaluated code string contains an error due to incomplete statements/expressions spanning multiple lines.
	*
	* @private
	* @name hasMultilineError
	* @memberof CustomParser
	* @type {Function}
	* @param {string} input - code to test
	* @param {Object} [options] - options
	* @returns {boolean} boolean indicating whether a provided code string has incomplete multi-line statements/expressions
	*/
	CustomParser.hasMultilineError = function hasMultilineError( input, options ) { // eslint-disable-line no-restricted-syntax, max-len
		return new CustomParser( options, input ).hasMultilineError();
	};

	return CustomParser;
}


// EXPORTS //

module.exports = plugin;
