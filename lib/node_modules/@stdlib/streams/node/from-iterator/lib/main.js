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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var isError = require( '@stdlib/assert/is-error' );
var isBuffer = require( '@stdlib/assert/is-buffer' );
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
		v = this._iterator.next();
		this._i += 1;
		if ( v.done ) {
			if ( hasOwnProp( v, 'value' ) ) {
				v = v.value;
				debug( 'Value: %s. Iter: %d.', JSON.stringify( v ), this._i );
				if ( this._objectMode === false ) {
					v = this._serialize( v );
					if ( typeof v === 'string' ) {
						if ( this._i === 1 ) { // eslint-disable-line max-depth
							v = string2buffer( v );
						} else {
							v = string2buffer( this._sep+v );
						}
						this.push( v );
					} else if ( isBuffer( v ) ) {
						if ( this._i > 1 ) { // eslint-disable-line max-depth
							v = Buffer.concat( [ string2buffer( this._sep ), v ] ); // eslint-disable-line max-len
						}
						this.push( v );
					} else {
						err = new Error( 'invalid operation. Serialization function must return a string or Buffer. Value: `' + v + '`.' );
						this.emit( 'error', err );
					}
				}
			}
			debug( 'Finished iteration.' );
			return this.push( null );
		}
		v = v.value;
		debug( 'Value: %s. Iter: %d.', JSON.stringify( v ), this._i );

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
				this.emit( 'error', err );
				continue;
			}
		}
		FLG = this.push( v );
	}

	/* eslint-enable no-invalid-this */
}

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @private
* @param {(string|Object|Error)} [error] - error
* @returns {IteratorStream} Stream instance
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
* Stream constructor for generating a readable stream from an iterator.
*
* @constructor
* @param {Iterator} iterator - source iterator
* @param {Options} [options] - stream options
* @param {boolean} [options.objectMode=false] - specifies whether the stream should operate in object mode
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to strings
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the maximum number of bytes to store in an internal buffer before pausing iteration
* @param {string} [options.sep='\n'] - separator used to join streamed data
* @param {Function} [options.serialize] - custom serialization function
* @throws {TypeError} first argument must be an iterator
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {IteratorStream} Stream instance
*
* @example
* var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
* var randu = require( '@stdlib/random/iter/randu' );
*
* function log( chunk ) {
*    console.log( chunk.toString() );
* }
*
* var opts = {
*     'iter': 10
* };
*
* var stream = new IteratorStream( randu( opts ) );
*
* stream.pipe( inspectStream( log )  );
*/
function IteratorStream( iterator, options ) {
	var opts;
	var err;
	if ( !( this instanceof IteratorStream ) ) {
		if ( arguments.length > 1 ) {
			return new IteratorStream( iterator, options );
		}
		return new IteratorStream( iterator );
	}
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( 'invalid argument. First argument must be an iterator. Value: `' + iterator + '`.' );
	}
	opts = copy( DEFAULTS );
	if ( arguments.length > 1 ) {
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

	// Cache the iterator:
	setNonEnumerableReadOnly( this, '_iterator', iterator );

	// Initialize an iteration counter:
	setNonEnumerable( this, '_i', 0 );

	return this;
}

/*
* Inherit from the `Readable` prototype.
*/
inherit( IteratorStream, Readable );

/**
* Implements the `_read` method.
*
* @private
* @name _read
* @memberof IteratorStream.prototype
* @type {Function}
* @param {number} size - number (of bytes) to read
* @returns {void}
*/
setNonEnumerableReadOnly( IteratorStream.prototype, '_read', read );

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @name destroy
* @memberof IteratorStream.prototype
* @type {Function}
* @param {(string|Object|Error)} [error] - error
* @returns {IteratorStream} Stream instance
*/
setNonEnumerableReadOnly( IteratorStream.prototype, 'destroy', destroy );


// EXPORTS //

module.exports = IteratorStream;
