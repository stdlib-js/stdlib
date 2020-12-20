/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var Writable = require( 'readable-stream' ).Writable;
var isFunction = require( '@stdlib/assert/is-function' );
var copy = require( '@stdlib/utils/copy' );
var inherit = require( '@stdlib/utils/inherit' );
var setNonEnumerable = require( '@stdlib/utils/define-nonenumerable-property' );
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var nextTick = require( '@stdlib/utils/next-tick' );
var DEFAULTS = require( './defaults.json' );
var validate = require( './validate.js' );
var debug = require( './debug.js' );


// FUNCTIONS //

/**
* Implements the `_write` method.
*
* @private
* @param {(Uint8Array|Buffer|string)} chunk - streamed chunk
* @param {string} encoding - Buffer encoding
* @param {Callback} clbk - callback to invoke after processing the streamed chunk
* @returns {void}
*/
function write( chunk, encoding, clbk ) {
	/* eslint-disable no-invalid-this */
	this._idx += 1;
	debug( 'Received a new chunk. Chunk: %s. Encoding: %s. Index: %d.', chunk.toString(), encoding, this._idx );
	this._inspect.call( null, chunk, this._idx );

	// Once destroyed, ensure we do not block the event-loop when an upstream stream pipeline is behaving synchronously (otherwise, by continuing to process stream data synchronously, we'll continue receiving data and the stream will never be destroyed)...
	if ( this._destroyed ) {
		return nextTick( clbk );
	}
	clbk();

	/* eslint-enable no-invalid-this */
}

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @private
* @param {Object} [error] - optional error message
* @returns {InspectSinkStream} stream instance
*/
function destroy( error ) {
	/* eslint-disable no-invalid-this */
	var self;
	if ( this._destroyed ) {
		debug( 'Attempted to destroy an already destroyed stream.' );
		return this;
	}
	self = this;
	this._destroyed = true;

	nextTick( close );

	return this;

	/**
	* Closes a stream.
	*
	* @private
	*/
	function close() {
		if ( error ) {
			debug( 'Stream was destroyed due to an error. Error: %s.', JSON.stringify( error ) );
			self.emit( 'error', error );
		}
		debug( 'Closing the stream...' );
		self.emit( 'close' );
	}

	/* eslint-enable no-invalid-this */
}


// MAIN //

/**
* Inspect stream constructor.
*
* @constructor
* @param {Options} [options] - stream options
* @param {boolean} [options.objectMode=false] - specifies whether the stream should operate in object mode
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the `Buffer` level for when `write()` starts returning `false`
* @param {boolean} [options.decodeStrings=true] - specifies whether to encode strings as `Buffer` objects before writing data to a returned stream
* @param {string} [options.defaultEncoding='utf8'] - default encoding when not explicitly specified when writing data
* @param {Callback} clbk - callback to invoke upon receiving data
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} must provide a callback function
* @returns {InspectSinkStream} inspect stream
*
* @example
* function log( chunk, idx ) {
*     console.log( 'index: %d', idx );
*     console.log( chunk );
* }
*
* var stream = new InspectSinkStream( log );
*
* stream.write( 'a' );
* stream.write( 'b' );
* stream.write( 'c' );
*
* stream.end();
*
* // prints: index: 0
* // prints: a
* // prints: index: 1
* // prints: b
* // prints: index: 2
* // prints: c
*/
function InspectSinkStream( options, clbk ) {
	var inspect;
	var opts;
	var err;
	if ( !(this instanceof InspectSinkStream) ) {
		if ( arguments.length > 1 ) {
			return new InspectSinkStream( options, clbk );
		}
		return new InspectSinkStream( options );
	}
	opts = copy( DEFAULTS );
	if ( arguments.length > 1 ) {
		inspect = clbk;
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	} else {
		inspect = options;
	}
	if ( !isFunction( inspect ) ) {
		throw new TypeError( 'invalid argument. Callback argument must be a function. Value: `' + inspect + '`.' );
	}
	// Make the stream a Writable stream:
	debug( 'Creating a writable stream configured with the following options: %s.', JSON.stringify( opts ) );
	Writable.call( this, opts );

	// The destruction state:
	setNonEnumerable( this, '_destroyed', false );

	// Initialize a chunk counter:
	setNonEnumerable( this, '_idx', -1 );

	// Cache a reference to the inspect callback:
	setNonEnumerableReadOnly( this, '_inspect', inspect );

	return this;
}

/*
* Inherit from the `Writable` prototype.
*/
inherit( InspectSinkStream, Writable );

/**
* Implements the `_write` method.
*
* @private
* @name _write
* @memberof InspectSinkStream.prototype
* @type {Function}
* @param {(Buffer|string)} chunk - streamed chunk
* @param {string} encoding - Buffer encoding
* @param {Callback} clbk - callback to invoke after processing the streamed chunk
*/
setNonEnumerableReadOnly( InspectSinkStream.prototype, '_write', write );

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @name destroy
* @memberof InspectSinkStream.prototype
* @type {Function}
* @param {Object} [error] - optional error message
* @returns {InspectSinkStream} stream instance
*/
setNonEnumerableReadOnly( InspectSinkStream.prototype, 'destroy', destroy );


// EXPORTS //

module.exports = InspectSinkStream;
