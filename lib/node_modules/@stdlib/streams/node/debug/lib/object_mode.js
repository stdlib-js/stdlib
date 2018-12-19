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

var isFunction = require( '@stdlib/assert/is-function' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var copy = require( '@stdlib/utils/copy' );
var Stream = require( './main.js' );


// MAIN //

/**
* Returns a debug stream with `objectMode` set to `true`.
*
* @param {Options} [options] - stream options
* @param {string} [options.name] - debug namespace
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the `Buffer` level for when `write()` starts returning `false`
* @param {boolean} [options.allowHalfOpen=false] - specifies whether the stream should remain open even if one side ends
* @param {boolean} [options.readableObjectMode=false] - specifies whether the readable side should be in object mode
* @param {Callback} [clbk] - callback to invoke upon receiving data
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} must provide a valid callback argument
* @returns {DebugStream} debug stream
*
* @example
* var stream = objectMode({
*     'name': 'my-stream'
* });
*
* stream.write( {'value': 'a'} );
* stream.write( {'value': 'b'} );
* stream.write( {'value': 'c'} );
* stream.end();
*/
function objectMode( options, clbk ) {
	var opts;
	var cb;
	if ( arguments.length > 1 ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		opts = copy( options );
		cb = clbk;
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'invalid argument. Callback argument must be a function. Value: `' + clbk + '`.' );
		}
	} else if ( arguments.length ) {
		if ( isFunction( options ) ) {
			opts = {};
			cb = options;
		} else {
			if ( !isObject( options ) ) {
				throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
			}
			opts = copy( options );
		}
	} else {
		opts = {};
	}
	opts.objectMode = true;
	if ( cb === void 0 ) {
		return new Stream( opts );
	}
	return new Stream( opts, cb );
}


// EXPORTS //

module.exports = objectMode;
