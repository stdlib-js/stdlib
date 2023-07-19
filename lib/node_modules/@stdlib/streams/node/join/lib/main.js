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

var Transform = require( 'readable-stream' ).Transform;
var string2buffer = require( '@stdlib/buffer/from-string' );
var copy = require( '@stdlib/utils/copy' );
var inherit = require( '@stdlib/utils/inherit' );
var Buffer = require( '@stdlib/buffer/ctor' );
var setNonEnumerable = require( '@stdlib/utils/define-nonenumerable-property' );
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var nextTick = require( '@stdlib/utils/next-tick' );
var DEFAULTS = require( './defaults.json' );
var validate = require( './validate.js' );
var debug = require( './debug.js' );


// FUNCTIONS //

/**
* Implements the `_transform` method.
*
* @private
* @param {(Uint8Array|Buffer|string)} chunk - streamed chunk
* @param {string} encoding - Buffer encoding
* @param {Callback} clbk - callback to invoke after transforming the streamed chunk
*/
function transform( chunk, encoding, clbk ) {
	/* eslint-disable no-invalid-this */
	var len;

	this._idx += 1;
	debug( 'Received a new chunk. Chunk: %s. Encoding: %s. Index: %d.', chunk.toString(), encoding, this._idx );
	if ( this._encoding === 'utf8' ) {
		if ( this._init ) {
			chunk = this._sep + chunk;
		} else {
			this._init = true;
		}
	} else if ( this._init ) {
		chunk = new Buffer( chunk, encoding ); // eslint-disable-line no-buffer-constructor
		len = this._sep.length + chunk.length;
		chunk = Buffer.concat( [ this._sep, chunk ], len ); // TODO: replace with stdlib pkg
		chunk = chunk.toString( this._encoding );
	} else {
		this._init = true;
	}
	this.push( chunk, this._encoding );
	clbk();

	/* eslint-enable no-invalid-this */
}

/**
* Implements the `_flush` method.
*
* @private
* @param {Callback} clbk - callback to invoke after performing flush tasks
*/
function flush( clbk ) {
	debug( 'Flushing the stream...' );
	clbk(); // TODO: consider supporting an option to append a final separator
}

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @private
* @param {Object} [error] - optional error message
* @returns {JoinStream} Stream instance
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
* Join stream constructor.
*
* @constructor
* @param {Options} [options] - stream options
* @param {string} [options.sep='\n'] - separator used to join streamed data
* @param {boolean} [options.objectMode=false] - specifies whether the stream should operate in object mode
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the `Buffer` level for when `write()` starts returning `false`
* @param {boolean} [options.allowHalfOpen=false] - specifies whether the stream should remain open even if one side ends
* @param {boolean} [options.readableObjectMode=false] - specifies whether the readable side should be in object mode
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {JoinStream} join stream
*
* @example
* var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
*
* function log( chunk ) {
*    console.log( chunk );
* }
*
* var stream = new JoinStream();
*
* stream.pipe( inspectStream( log )  );
*
* stream.write( '1' );
* stream.write( '2' );
* stream.write( '3' );
*
* stream.end();
*
* // prints: '1\n2\n3'
*/
function JoinStream( options ) {
	var opts;
	var err;
	if ( !( this instanceof JoinStream ) ) {
		if ( arguments.length ) {
			return new JoinStream( options );
		}
		return new JoinStream();
	}
	opts = copy( DEFAULTS );
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	// The stream's writable state should always be in object mode to prevent incoming data from being buffered (concatenated) and thus lose separation...
	opts.writableObjectMode = true;

	// The stream converts each chunk into a string so no need to encode strings written to the join stream as Buffer objects:
	opts.decodeStrings = false;

	// Make the stream a Transform stream:
	debug( 'Creating a transform stream configured with the following options: %s.', JSON.stringify( opts ) );
	Transform.call( this, opts );

	// Destruction state:
	setNonEnumerable( this, '_destroyed', false );

	// Cache the encoding:
	setNonEnumerableReadOnly( this, '_encoding', ( opts.encoding === null ) ? 'utf8' : opts.encoding );

	// Cache the separator:
	if ( this._encoding !== 'utf8' ) {
		opts.sep = string2buffer( opts.sep, this._encoding );
	}
	setNonEnumerableReadOnly( this, '_sep', opts.sep );

	// Flag indicating if the stream has received streamed data:
	setNonEnumerable( this, '_init', false );

	// Chunk counter:
	setNonEnumerable( this, '_idx', -1 );

	return this;
}

/*
* Inherit from the `Transform` prototype.
*/
inherit( JoinStream, Transform );

/**
* Implements the `_transform` method.
*
* @private
* @name _transform
* @memberof JoinStream.prototype
* @type {Function}
* @param {(Buffer|string)} chunk - streamed chunk
* @param {string} encoding - Buffer encoding
* @param {Callback} clbk - callback to invoke after transforming the streamed chunk
*/
setNonEnumerableReadOnly( JoinStream.prototype, '_transform', transform );

/**
* Implements the `_flush` method.
*
* @private
* @name _flush
* @memberof JoinStream.prototype
* @type {Function}
* @param {Callback} clbk - callback to invoke after performing flush tasks
*/
setNonEnumerableReadOnly( JoinStream.prototype, '_flush', flush );

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @name destroy
* @memberof JoinStream.prototype
* @type {Function}
* @param {Object} [error] - optional error message
* @returns {JoinStream} Stream instance
*/
setNonEnumerableReadOnly( JoinStream.prototype, 'destroy', destroy );


// EXPORTS //

module.exports = JoinStream;
