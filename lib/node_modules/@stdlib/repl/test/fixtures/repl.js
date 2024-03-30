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

'use strict';

// MODULES //

var isFunction = require( '@stdlib/assert/is-function' );
var inspectSinkStream = require( '@stdlib/streams/node/inspect-sink' );
var assign = require( '@stdlib/object/assign' );
var format = require( '@stdlib/string/format' );
var REPL = require( './../../lib' );


// FUNCTIONS //

/**
* Returns default options.
*
* @private
* @returns {Object} default options
*
* @example
* var o = defaults();
* // returns {...}
*/
function defaults() {
	return {
		'isTTY': true,
		'sandbox': true,
		'timeout': 10000,
		'welcome': '',
		'quiet': true
	};
}


// MAIN //

/**
* Returns a REPL instance connected to debugging IO streams.
*
* @private
* @param {Options} options - REPL options
* @param {WritableStream} options.input - input stream
* @param {Callback} clbk - callback to invoke upon closing a REPL
* @throws {Error} must provide an input stream
* @throws {TypeError} second argument must be a function
* @returns {REPL} REPL instance
*
* @example
* var DebugStream = require( '@stdlib/streams/node/debug' );
*
* // Define a callback for receiving REPL input on close:
* function onClose( error, data ) {
*     if ( error ) {
*         return console.error( error.message );
*     }
*     console.log( data.join( '\n' ) );
* }
*
* // Create a stream for writing REPL input:
* var istream = new DebugStream({
*     'name': 'repl-input-stream'
* });
*
* // Create a test REPL instance:
* var opts = {
*     'input': istream
* };
* var repl = mock( opts, onClose );
*
* // Simulate a user entering a command in the REPL:
* istream.write( '2+2\n' );
*
* // Close the REPL:
* repl.close();
*/
function mock( options, clbk ) {
	var opts;
	var data;
	var repl;

	if ( !isFunction( clbk ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', clbk ) );
	}
	opts = assign( defaults(), options );
	if ( !opts.input ) {
		throw new Error( 'invalid argument. Options argument must specify an input stream.' );
	}
	// If we were not provided an output stream, create a default output stream...
	if ( !opts.output ) {
		opts.output = inspectSinkStream( onWrite );
	}
	// Initialize an array for storing streamed data:
	data = [];

	// Create a new REPL instance:
	repl = new REPL( opts );

	// Add a listener for when the REPL exits:
	repl.on( 'exit', onExit );

	// Return the REPL instance:
	return repl;

	/**
	* Callback invoked upon receiving streamed data.
	*
	* @private
	* @param {(Buffer|string)} chunk - data
	* @returns {void}
	*/
	function onWrite( chunk ) {
		data.push( chunk.toString() );
	}

	/**
	* Callback invoked when a REPL exits.
	*
	* @private
	*/
	function onExit() {
		if ( isFunction( opts.output.end ) ) {
			opts.output.end();
		}
		clbk( null, data );
	}
}


// EXPORTS //

module.exports = mock;
