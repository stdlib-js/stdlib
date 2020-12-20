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
var copy = require( '@stdlib/utils/copy' );
var inherit = require( '@stdlib/utils/inherit' );
var setNonEnumerable = require( '@stdlib/utils/define-nonenumerable-property' );
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var Buffer = require( '@stdlib/buffer/ctor' );
var nextTick = require( '@stdlib/utils/next-tick' );
var DEFAULTS = require( './defaults.json' );
var validate = require( './validate.js' );
var debug = require( './debug.js' );
var decode = require( './decode.js' );


// VARIABLES //

var RE = /\r?\n/;


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
	var splits;
	var split;
	var len;
	var i;

	this._idx += 1;
	debug( 'Received a new chunk. Chunk: %s. Encoding: %s. Index: %d.', chunk.toString(), encoding, this._idx );
	if ( encoding === 'buffer' ) {
		// Default Buffer decoding is 'utf8':
		chunk = chunk.toString();
	}
	else if ( encoding !== 'utf8' ) {
		// Decode the chunk as a 'utf8' string...
		chunk = new Buffer( chunk, encoding ); // eslint-disable-line no-buffer-constructor
		chunk = chunk.toString( 'utf8' );
	}
	// Split the chunk:
	splits = chunk.split( this._sep );
	debug( 'Splits: %s. Index: %d.', JSON.stringify( splits ), this._idx );

	// How many splits do we have? We do not count the last "split", as it may be incomplete...
	len = splits.length - 1;
	debug( '%s splits. Index: %d.', len, this._idx );

	// If we do not have any splits, add the chunk to the buffer and wait for more data...
	if ( len === 0 ) {
		debug( 'No splits. Index: %d.', this._idx );
		this._buffer += splits[ len ];
	}
	// If we have split data, concat any previous partial split, re-decode (if need be) each split according to its original encoding, push each split to the destination, and set anything leftover as the new split buffer...
	else {
		debug( 'Processing splits. Index: %d.', this._index );
		split = this._buffer + splits[ 0 ];
		split = decode( split, encoding );

		debug( 'Split %d: %s. Index: %d.', 0, split.toString(), this._idx );
		this.push( split, encoding );
		for ( i = 1; i < len; i++ ) {
			split = decode( splits[ i ], encoding );
			debug( 'Split %d: %s. Index: %d.', i, split.toString(), this._idx );
			this.push( split, encoding );
		}
		debug( 'Remaining split: %s.', splits[len].toString() );
		this._buffer = splits[ len ];
	}
	clbk();

	/* eslint-enable no-invalid-this */
}

/**
* Implements the `_flush` method.
*
* @private
* @param {Callback} clbk - callback to invoke after any final processing
*/
function flush( clbk ) {
	/* eslint-disable no-invalid-this */
	var split = this._buffer;
	if ( split ) {
		debug( 'Processing final split...' );
		split = decode( split, this._encoding );
		this.push( split, this._encoding );
	}
	debug( 'Flushing the stream...' );
	clbk();

	/* eslint-enable no-invalid-this */
}

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @private
* @param {Object} [error] - optional error message
* @returns {SplitStream} Stream instance
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
* Split stream constructor.
*
* @constructor
* @param {Options} [options] - stream options
* @param {(string|RegExp)} [options.sep=/\r?\n/] - separator used to split streamed data
* @param {boolean} [options.objectMode=false] - specifies whether a stream should operate in object mode
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the `Buffer` level for when `write()` starts returning `false`
* @param {boolean} [options.allowHalfOpen=false] - specifies whether the stream should remain open even if one side ends
* @param {boolean} [options.writableObjectMode=false] - specifies whether the writable side should be in object mode
* @returns {SplitStream} split stream
*
* @example
* var stream = new SplitStream();
*
* stream.write( '1\n2\n3' );
* stream.end();
*/
function SplitStream( options ) {
	var opts;
	var err;
	if ( !( this instanceof SplitStream ) ) {
		if ( arguments.length ) {
			return new SplitStream( options );
		}
		return new SplitStream();
	}
	opts = copy( DEFAULTS );
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	// The stream's readable state should always be in object mode to prevent split data from being buffered (concatenated) and no longer being separated...
	opts.readableObjectMode = true;

	// The stream converts each chunk into a string so no need to encode strings written to the split stream as Buffer objects:
	opts.decodeStrings = false;

	// Make the stream a Transform stream:
	debug( 'Creating a transform stream configured with the following options: %s.', JSON.stringify( opts ) );
	Transform.call( this, opts );

	// Cache the separator:
	setNonEnumerableReadOnly( this, '_sep', ( opts.sep === null ) ? RE : opts.sep );

	// The destruction state:
	setNonEnumerable( this, '_destroyed', false );

	// Cache the encoding:
	setNonEnumerableReadOnly( this, '_encoding', opts.encoding );

	// Buffer for storing partial splits:
	setNonEnumerable( this, '_buffer', '' );

	// Chunk counter:
	setNonEnumerable( this, '_idx', -1 );

	return this;
}

/*
* Inherit from the `Transform` prototype.
*/
inherit( SplitStream, Transform );

/**
* Implements the `_transform` method.
*
* @private
* @name _transform
* @memberof SplitStream.prototype
* @type {Function}
* @param {(Buffer|string)} chunk - streamed chunk
* @param {string} encoding - Buffer encoding
* @param {Callback} clbk - callback to invoke after transforming the streamed chunk
*/
setNonEnumerableReadOnly( SplitStream.prototype, '_transform', transform );

/**
* Implements the `_flush` method.
*
* @private
* @name _flush
* @memberof SplitStream.prototype
* @type {Function}
* @param {Callback} clbk - callback to invoke after any final processing
*/
setNonEnumerableReadOnly( SplitStream.prototype, '_flush', flush );

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @name destroy
* @memberof SplitStream.prototype
* @type {Function}
* @param {Object} [error] - optional error message
* @returns {SplitStream} Stream instance
*/
setNonEnumerableReadOnly( SplitStream.prototype, 'destroy', destroy );


// EXPORTS //

module.exports = SplitStream;
