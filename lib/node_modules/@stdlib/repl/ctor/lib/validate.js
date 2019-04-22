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
* @throws {Error} must provide valid options
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
	if ( !isPlainObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'input' ) ) {
		opts.input = options.input;
		if ( !isReadableStreamLike( options.input ) ) {
			return new TypeError( 'invalid option. `input` option must be a readable stream. Option: `' + options.input + '`.' );
		}
	}
	if ( hasOwnProp( options, 'output' ) ) {
		opts.output = options.output;
		if ( !isWritableStreamLike( options.output ) ) {
			return new TypeError( 'invalid option. `output` option must be a writable stream. Option: `' + options.output + '`.' );
		}
	}
	if ( hasOwnProp( options, 'inputPrompt' ) ) {
		opts.inputPrompt = options.inputPrompt;
		if ( !isString( options.inputPrompt ) ) {
			return new TypeError( 'invalid option. `inputPrompt` option must be a string. Option: `' + options.inputPrompt + '`.' );
		}
	}
	if ( hasOwnProp( options, 'outputPrompt' ) ) {
		opts.outputPrompt = options.outputPrompt;
		if ( !isString( options.outputPrompt ) ) {
			return new TypeError( 'invalid option. `outputPrompt` option must be a string. Option: `' + options.outputPrompt + '`.' );
		}
	}
	if ( hasOwnProp( options, 'padding' ) ) {
		opts.padding = options.padding;
		if ( !isNonNegativeInteger( options.padding ) ) {
			return new TypeError( 'invalid option. `padding` option must be a nonnegative integer. Option: `' + options.padding + '`.' );
		}
	}
	if ( hasOwnProp( options, 'welcome' ) ) {
		opts.welcome = options.welcome;
		if ( !isString( options.welcome ) ) {
			return new TypeError( 'invalid option. `welcome` option must be a string. Option: `' + options.welcome + '`.' );
		}
	}
	if ( hasOwnProp( options, 'save' ) ) {
		opts.save = options.save;
		if ( !isString( options.save ) ) {
			return new TypeError( 'invalid option. `save` option must be a string. Option: `' + options.save + '`.' );
		}
	}
	if ( hasOwnProp( options, 'load' ) ) {
		opts.load = options.load;
		if ( !isString( options.load ) ) {
			return new TypeError( 'invalid option. `load` option must be a string. Option: `' + options.load + '`.' );
		}
	}
	if ( hasOwnProp( options, 'log' ) ) {
		opts.log = options.log;
		if ( !isString( options.log ) ) {
			return new TypeError( 'invalid option. `log` option must be a string. Option: `' + options.log + '`.' );
		}
	}
	if ( hasOwnProp( options, 'timeout' ) ) {
		opts.timeout = options.timeout;
		if ( !isPositiveInteger( options.timeout ) ) {
			return new TypeError( 'invalid option. `timeout` option must be a positive integer. Option: `' + options.timeout + '`.' );
		}
	}
	if ( hasOwnProp( options, 'isTTY' ) ) {
		opts.isTTY = options.isTTY;
		if ( !isBoolean( options.isTTY ) ) {
			return new TypeError( 'invalid option. `isTTY` option must be a boolean. Option: `' + options.isTTY + '`.' );
		}
	}
	if ( hasOwnProp( options, 'sandbox' ) ) {
		opts.sandbox = options.sandbox;
		if ( !isBoolean( options.sandbox ) ) {
			return new TypeError( 'invalid option. `sandbox` option must be a boolean. Option: `' + options.sandbox + '`.' );
		}
	}
	if ( hasOwnProp( options, 'quiet' ) ) {
		opts.quiet = options.quiet;
		if ( !isBoolean( options.quiet ) ) {
			return new TypeError( 'invalid option. `quiet` option must be a boolean. Option: `' + options.quiet + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
