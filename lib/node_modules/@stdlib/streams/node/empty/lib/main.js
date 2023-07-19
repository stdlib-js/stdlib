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

var Readable = require( 'readable-stream' ).Readable;
var isError = require( '@stdlib/assert/is-error' );
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
* Implements the `_read` method.
*
* @private
* @param {number} size - number (of bytes) to read
* @returns {void}
*/
function read() {
	/* eslint-disable no-invalid-this */
	this.push( null );

	/* eslint-enable no-invalid-this */
}

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @private
* @param {(string|Object|Error)} [error] - error
* @returns {EmptyStream} Stream instance
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
			debug( 'Stream was destroyed due to an error. Error: %s.', ( isError( error ) ) ? error.message : JSON.stringify( error ) );
			self.emit( 'error', error );
		}
		debug( 'Closing the stream...' );
		self.emit( 'close' );
	}

	/* eslint-enable no-invalid-this */
}


// MAIN //

/**
* Stream constructor for creating an "empty" stream.
*
* @constructor
* @param {Options} [options] - stream options
* @param {boolean} [options.objectMode=false] - specifies whether the stream should operate in object mode
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {EmptyStream} Stream instance
*
* @example
* var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
*
* function log( chunk ) {
*    console.log( chunk.toString() );
* }
*
* var stream = new EmptyStream();
*
* stream.pipe( inspectStream( log )  );
*/
function EmptyStream( options ) {
	var opts;
	var err;
	if ( !( this instanceof EmptyStream ) ) {
		if ( arguments.length > 0 ) {
			return new EmptyStream( options );
		}
		return new EmptyStream();
	}
	opts = copy( DEFAULTS );
	if ( arguments.length > 0 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	// Make the stream a readable stream:
	debug( 'Creating a readable stream configured with the following options: %s.', JSON.stringify( opts ) );
	Readable.call( this, opts );

	// Destruction state:
	setNonEnumerable( this, '_destroyed', false );

	return this;
}

/*
* Inherit from the `Readable` prototype.
*/
inherit( EmptyStream, Readable );

/**
* Implements the `_read` method.
*
* @private
* @name _read
* @memberof EmptyStream.prototype
* @type {Function}
* @param {number} size - number (of bytes) to read
* @returns {void}
*/
setNonEnumerableReadOnly( EmptyStream.prototype, '_read', read );

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @name destroy
* @memberof EmptyStream.prototype
* @type {Function}
* @param {(string|Object|Error)} [error] - error
* @returns {EmptyStream} Stream instance
*/
setNonEnumerableReadOnly( EmptyStream.prototype, 'destroy', destroy );


// EXPORTS //

module.exports = EmptyStream;
