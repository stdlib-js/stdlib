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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isBuffer = require( '@stdlib/assert/is-buffer' );
var isUint8Array = require( '@stdlib/assert/is-uint8array' );
var arraybuffer2buffer = require( '@stdlib/buffer/from-arraybuffer' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var Buffer = require( '@stdlib/buffer/ctor' ); // TODO: replace Buffer.concat usage with stdlib pkg
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
	var FLG;
	if ( this._destroyed ) {
		return;
	}
	FLG = true;
	while ( FLG ) {
		this._i += 1;
		if ( this._i > this._iter ) {
			debug( 'Finished iteration.' );
			return this.push( null );
		}
		debug( 'Value: %s. Iter: %d.', this._value, this._i );
		if ( this._objectMode === false && this._i > 1 ) {
			FLG = this.push( Buffer.concat( [ this._sep, this._value ] ) );
		} else {
			FLG = this.push( this._value );
		}
	}

	/* eslint-enable no-invalid-this */
}

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @private
* @param {(string|Object|Error)} [error] - error
* @returns {ConstantStream} Stream instance
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
* Stream constructor for generating a stream which always streams the same value.
*
* @constructor
* @param {(string|Buffer|Uint8Array)} value - value to stream
* @param {Options} [options] - stream options
* @param {boolean} [options.objectMode=false] - specifies whether the stream should operate in object mode
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to strings
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the maximum number of bytes to store in an internal buffer before pausing streaming
* @param {string} [options.sep='\n'] - separator used to join streamed data
* @param {NonNegativeInteger} [options.iter] - number of iterations
* @throws {TypeError} in binary mode, value to stream must be a string, `Buffer`, or `Uint8Array`
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ConstantStream} Stream instance
*
* @example
* var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
*
* function log( chunk ) {
*    console.log( chunk.toString() );
* }
*
* var opts = {
*     'iter': 10
* };
*
* var stream = new ConstantStream( 'beep', opts );
*
* stream.pipe( inspectStream( log )  );
*/
function ConstantStream( value, options ) {
	var opts;
	var err;
	if ( !( this instanceof ConstantStream ) ) {
		if ( arguments.length > 1 ) {
			return new ConstantStream( value, options );
		}
		return new ConstantStream( value );
	}
	opts = copy( DEFAULTS );
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.objectMode === false ) {
		if ( isString( value ) ) {
			value = string2buffer( value );
		} else if ( isBuffer( value ) ) { // NOTE: order matters here. We want the `isBuffer` check BEFORE the `isUint8Array` check!!
			// Nothing to do, as value is already a buffer...
		} else if ( isUint8Array( value ) ) {
			// Convert to a `Buffer` object to provide backward compatibility with older Node.js versions...
			value = arraybuffer2buffer( value.buffer, value.byteOffset, value.length ); // eslint-disable-line max-len
		} else {
			throw new TypeError( 'invalid argument. In binary mode, a provided value must be a string, Buffer, or Uint8Array. Value: `' + value + '`.' );
		}
	}
	// Make the stream a readable stream:
	debug( 'Creating a readable stream configured with the following options: %s.', JSON.stringify( opts ) );
	Readable.call( this, opts );

	// Destruction state:
	setNonEnumerable( this, '_destroyed', false );

	// Cache whether the stream is operating in object mode:
	setNonEnumerableReadOnly( this, '_objectMode', opts.objectMode );

	// Cache the separator:
	setNonEnumerableReadOnly( this, '_sep', string2buffer( opts.sep ) );

	// Cache the total number of iterations:
	setNonEnumerableReadOnly( this, '_iter', opts.iter );

	// Cache the value to stream:
	setNonEnumerableReadOnly( this, '_value', value );

	// Initialize an iteration counter:
	setNonEnumerable( this, '_i', 0 );

	return this;
}

/*
* Inherit from the `Readable` prototype.
*/
inherit( ConstantStream, Readable );

/**
* Implements the `_read` method.
*
* @private
* @name _read
* @memberof ConstantStream.prototype
* @type {Function}
* @param {number} size - number (of bytes) to read
* @returns {void}
*/
setNonEnumerableReadOnly( ConstantStream.prototype, '_read', read );

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @name destroy
* @memberof ConstantStream.prototype
* @type {Function}
* @param {(string|Object|Error)} [error] - error
* @returns {ConstantStream} Stream instance
*/
setNonEnumerableReadOnly( ConstantStream.prototype, 'destroy', destroy );


// EXPORTS //

module.exports = ConstantStream;
