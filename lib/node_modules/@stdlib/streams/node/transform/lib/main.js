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

var logger = require( 'debug' );
var Transform = require( 'readable-stream' ).Transform;
var inherit = require( '@stdlib/utils/inherit' );
var copy = require( '@stdlib/utils/copy' );
var DEFAULTS = require( './defaults.json' );
var validate = require( './validate.js' );
var destroy = require( './destroy.js' );
var _transform = require( './_transform.js' ); // eslint-disable-line no-underscore-dangle


// VARIABLES //

var debug = logger( 'transform-stream:main' );


// MAIN //

/**
* Transform stream constructor.
*
* @constructor
* @param {Options} [options] - stream options
* @param {Function} [options.transform] - callback to invoke upon receiving a new chunk
* @param {Function} [options.flush] - callback to invoke after receiving all chunks and prior to the stream closing
* @param {boolean} [options.objectMode=false] - specifies whether stream should operate in object mode
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the `Buffer` level for when `write()` starts returning `false`
* @param {boolean} [options.allowHalfOpen=false] - specifies whether the stream should remain open even if one side ends
* @param {boolean} [options.decodeStrings=true] - specifies whether to decode `strings` into `Buffer` objects when writing
* @throws {TypeError} must provide valid options
* @returns {TransformStream} transform stream
*
* @example
* var stdout = require( '@stdlib/streams/node/stdout' );
*
* function transform( chunk, enc, clbk ) {
*     clbk( null, chunk.toString()+'\n' );
* }
*
* var opts = {
*     'transform': transform
* };
* var stream = new TransformStream( opts );
*
* stream.pipe( stdout );
*
* stream.write( '1' );
* stream.write( '2' );
* stream.write( '3' );
*
* stream.end();
*
* // prints: '1\n2\n3\n'
*/
function TransformStream( options ) {
	var opts;
	var err;
	if ( !( this instanceof TransformStream ) ) {
		if ( arguments.length ) {
			return new TransformStream( options );
		}
		return new TransformStream();
	}
	opts = copy( DEFAULTS );
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	debug( 'Creating a transform stream configured with the following options: %s.', JSON.stringify( opts ) );
	Transform.call( this, opts );
	this._destroyed = false;
	if ( opts.transform ) {
		this._transform = opts.transform;
	} else {
		this._transform = _transform;
	}
	if ( opts.flush ) {
		this._flush = opts.flush;
	}
	return this;
}

/*
* Inherit from the `Transform` prototype.
*/
inherit( TransformStream, Transform );

/**
* Gracefully destroys a stream, providing backward compatibility.
*
* @name destroy
* @memberof TransformStream.prototype
* @type {Function}
* @param {Object} [error] - optional error message
* @returns {TransformStream} stream instance
*/
TransformStream.prototype.destroy = destroy;


// EXPORTS //

module.exports = TransformStream;
