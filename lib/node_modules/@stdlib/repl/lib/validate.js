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

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isReadableStreamLike = require( '@stdlib/assert/is-node-readable-stream-like' );
var isWritableStreamLike = require( '@stdlib/assert/is-node-writable-stream-like' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var format = require( '@stdlib/string/format' );
var validateKeybindings = require( './validate_keybindings.js' );
var validateSettings = require( './validate_settings.js' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.inputPrompt] - input prompt
* @param {string} [options.outputPrompt] - output prompt
* @param {ReadableStream} [options.input=] - input stream
* @param {WritableStream} [options.output] - output stream
* @param {boolean} [options.sandbox] - boolean indicating whether to run a REPL in a sandboxed context
* @param {PositiveInteger} [options.timeout] - number of milliseconds to execute a command before terminating execution
* @param {boolean} [options.isTTY] - boolean indicating whether the input and output streams should be treated like a TTY (terminal) and whether the REPL should use ANSI/VT100 escape codes when writing to the output stream
* @param {string} [options.welcome] - welcome message
* @param {NonNegativeInteger} [options.padding] - number of empty lines between successive commands
* @param {string} [options.load] - file path specifying a JavaScript file to load and evaluate line-by-line (e.g., a previous REPL history file)
* @param {string} [options.save] - file path specifying where to save REPL command history
* @param {string} [options.log] - file path specifying where to save REPL commands and printed output
* @param {string} [options.quiet] - boolean indicating whether log information, confirmation messages, and other possible REPL diagnostics should be silenced
* @param {Object} [options.settings] - REPL settings
* @returns {(Error|null)} error or null
*
* @example
* var options = {
*     'sandbox': true
* };
* var opts = {};
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	var err;
	if ( !isPlainObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'input' ) ) {
		opts.input = options.input;
		if ( !isReadableStreamLike( options.input ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a readable stream. Option: `%s`.', 'input', options.input ) );
		}
	}
	if ( hasOwnProp( options, 'output' ) ) {
		opts.output = options.output;
		if ( !isWritableStreamLike( options.output ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a writable stream. Option: `%s`.', 'output', options.output ) );
		}
	}
	if ( hasOwnProp( options, 'inputPrompt' ) ) {
		opts.inputPrompt = options.inputPrompt;
		if ( !isString( options.inputPrompt ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'inputPrompt', options.inputPrompt ) );
		}
	}
	if ( hasOwnProp( options, 'outputPrompt' ) ) {
		opts.outputPrompt = options.outputPrompt;
		if ( !isString( options.outputPrompt ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'outputPrompt', options.outputPrompt ) );
		}
	}
	if ( hasOwnProp( options, 'padding' ) ) {
		opts.padding = options.padding;
		if ( !isNonNegativeInteger( options.padding ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a nonnegative integer. Option: `%s`.', 'padding', options.padding ) );
		}
	}
	if ( hasOwnProp( options, 'welcome' ) ) {
		opts.welcome = options.welcome;
		if ( !isString( options.welcome ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'welcome', options.welcome ) );
		}
	}
	if ( hasOwnProp( options, 'themes' ) ) {
		opts.themes = options.themes;
		if ( !isPlainObject( options.themes ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be an object. Option: `%s`.', 'themes', options.themes ) );
		}
	}
	if ( hasOwnProp( options, 'save' ) ) {
		opts.save = options.save;
		if ( !isString( options.save ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'save', options.save ) );
		}
	}
	if ( hasOwnProp( options, 'load' ) ) {
		opts.load = options.load;
		if ( !isString( options.load ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'load', options.load ) );
		}
	}
	if ( hasOwnProp( options, 'log' ) ) {
		opts.log = options.log;
		if ( !isString( options.log ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'log', options.log ) );
		}
	}
	if ( hasOwnProp( options, 'timeout' ) ) {
		opts.timeout = options.timeout;
		if ( !isPositiveInteger( options.timeout ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a positive integer. Option: `%s`.', 'timeout', options.timeout ) );
		}
	}
	if ( hasOwnProp( options, 'isTTY' ) ) {
		opts.isTTY = options.isTTY;
		if ( !isBoolean( options.isTTY ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'isTTY', options.isTTY ) );
		}
	}
	if ( hasOwnProp( options, 'sandbox' ) ) {
		opts.sandbox = options.sandbox;
		if ( !isBoolean( options.sandbox ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'sandbox', options.sandbox ) );
		}
	}
	if ( hasOwnProp( options, 'quiet' ) ) {
		opts.quiet = options.quiet;
		if ( !isBoolean( options.quiet ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'quiet', options.quiet ) );
		}
	}
	if ( hasOwnProp( options, 'keybindings' ) ) {
		err = validateKeybindings( opts.keybindings, options.keybindings );
		if ( err ) {
			return err;
		}
	}
	if ( hasOwnProp( options, 'settings' ) ) {
		err = validateSettings( opts.settings, options.settings );
		if ( err ) {
			return err;
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
