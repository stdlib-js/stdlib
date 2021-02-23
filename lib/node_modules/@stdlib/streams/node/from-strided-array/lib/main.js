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
var isCollection = require( '@stdlib/assert/is-collection' );
var isError = require( '@stdlib/assert/is-error' );
var isBuffer = require( '@stdlib/assert/is-buffer' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var copy = require( '@stdlib/utils/copy' );
var inherit = require( '@stdlib/utils/inherit' );
var setNonEnumerable = require( '@stdlib/utils/define-nonenumerable-property' );
var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var Buffer = require( '@stdlib/buffer/ctor' ); // TODO: replace Buffer.concat usage with stdlib pkg
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
	var err;
	var v;

	if ( this._destroyed ) {
		return;
	}
	FLG = true;
	while ( FLG ) {
		err = null;

		this._i += 1;
		if ( this._i > this._N ) {
			debug( 'Finished iteration.' );
			return this.push( null );
		}
		v = this._buffer[ this._idx ];
		debug( 'Value: %s. Idx: %d. Iter: %d.', JSON.stringify( v ), this._idx, this._i );

		this._idx += this._stride;
		if ( this._objectMode === false ) {
			v = this._serialize( v );
			if ( typeof v === 'string' ) {
				if ( this._i === 1 ) {
					v = string2buffer( v );
				} else {
					v = string2buffer( this._sep+v );
				}
			} else if ( isBuffer( v ) ) {
				if ( this._i > 1 ) {
					v = Buffer.concat( [ string2buffer( this._sep ), v ] );
				}
			} else {
				err = new Error( 'invalid operation. Serialization function must return a string or Buffer. Value: `' + v + '`.' );
			}
		}
		if ( err ) {
			this.emit( 'error', err );
		} else {
			FLG = this.push( v );
		}
	}

	/* eslint-enable no-invalid-this */
}

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @private
* @param {(string|Object|Error)} [error] - error
* @returns {StridedArrayStream} Stream instance
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
* Stream constructor for generating a readable stream from an array-like object.
*
* @constructor
* @param {NonNegativeInteger} N - number of values to stream
* @param {Collection} buffer - source value
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @param {Options} [options] - stream options
* @param {boolean} [options.objectMode=false] - specifies whether the stream should operate in object mode
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to strings
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the maximum number of bytes to store in an internal buffer before pausing streaming
* @param {string} [options.sep='\n'] - separator used to join streamed data
* @param {Function} [options.serialize] - custom serialization function
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be an array-like object
* @throws {TypeError} third argument must be an integer
* @throws {TypeError} fourth argument must be a nonnegative integer
* @throws {RangeError} linear index cannot exceed array bounds
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {StridedArrayStream} Stream instance
*
* @example
* var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
* var Float64Array = require( '@stdlib/array/float64' );
* var randu = require( '@stdlib/random/base/randu' );
*
* function log( chunk ) {
*    console.log( chunk.toString() );
* }
*
* var arr = new Float64Array( 10 );
* var i;
* for ( i = 0; i < arr.length; i++ ) {
*     arr[ i ] = randu();
* }
*
* var stream = new StridedArrayStream( arr.length, arr, 1, 0 );
*
* stream.pipe( inspectStream( log )  );
*/
function StridedArrayStream( N, buffer, stride, offset, options ) {
	var opts;
	var err;
	var i;
	if ( !( this instanceof StridedArrayStream ) ) {
		if ( arguments.length > 4 ) {
			return new StridedArrayStream( N, buffer, stride, offset, options );
		}
		return new StridedArrayStream( N, buffer, stride, offset );
	}
	if ( !isNonNegativeInteger( N ) ) {
		throw new TypeError( 'invalid argument. First argument must be a nonnegative integer. Value: `' + N + '`.' );
	}
	if ( !isCollection( buffer ) ) {
		throw new TypeError( 'invalid argument. Second argument must be an array-like object. Value: `' + buffer + '`.' );
	}
	if ( !isInteger( stride ) ) {
		throw new TypeError( 'invalid argument. Third argument must be an integer. Value: `' + stride + '`.' );
	}
	if ( !isNonNegativeInteger( offset ) ) {
		throw new TypeError( 'invalid argument. Fourth argument must be a nonnegative integer. Value: `' + offset + '`.' );
	}
	if ( N > 0 ) {
		i = offset + ((N-1)*stride);
		if ( offset >= buffer.length || i < 0 || i >= buffer.length ) {
			throw new RangeError( 'invalid arguments. Strided array parameters are incompatible with the provided array-like object. Linear index exceeds array bounds.' );
		}
	}
	opts = copy( DEFAULTS );
	if ( arguments.length > 4 ) {
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

	// Cache whether the stream is operating in object mode:
	setNonEnumerableReadOnly( this, '_objectMode', opts.objectMode );

	// Cache the separator:
	setNonEnumerableReadOnly( this, '_sep', opts.sep );

	// Define the serialization function:
	setNonEnumerableReadOnly( this, '_serialize', opts.serialize || JSON.stringify );

	// Cache the data source:
	setNonEnumerableReadOnly( this, '_buffer', buffer );

	// Cache the strided array parameters:
	setNonEnumerableReadOnly( this, '_N', N );
	setNonEnumerableReadOnly( this, '_stride', stride );
	setNonEnumerableReadOnly( this, '_offset', offset );
	setNonEnumerable( this, '_idx', offset );

	// Initialize an iteration counter:
	setNonEnumerable( this, '_i', 0 );

	return this;
}

/*
* Inherit from the `Readable` prototype.
*/
inherit( StridedArrayStream, Readable );

/**
* Implements the `_read` method.
*
* @private
* @name _read
* @memberof StridedArrayStream.prototype
* @type {Function}
* @param {number} size - number (of bytes) to read
* @returns {void}
*/
setNonEnumerableReadOnly( StridedArrayStream.prototype, '_read', read );

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @name destroy
* @memberof StridedArrayStream.prototype
* @type {Function}
* @param {(string|Object|Error)} [error] - error
* @returns {StridedArrayStream} Stream instance
*/
setNonEnumerableReadOnly( StridedArrayStream.prototype, 'destroy', destroy );


// EXPORTS //

module.exports = StridedArrayStream;
