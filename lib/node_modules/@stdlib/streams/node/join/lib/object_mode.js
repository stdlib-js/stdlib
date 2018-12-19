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

var isObject = require( '@stdlib/assert/is-plain-object' );
var copy = require( '@stdlib/utils/copy' );
var Stream = require( './main.js' );


// MAIN //

/**
* Returns a join stream with `objectMode` set to `true`.
*
* @param {Options} [options] - stream options
* @param {string} [options.sep='\n'] - separator used to join streamed data
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
*     console.log( chunk.toString() );
* }
*
* var stream = objectMode({
*     'sep': ','
* });
*
* stream.pipe( inspectStream( log ) );
*
* stream.write( 'a' );
* stream.write( 'b' );
* stream.write( 'c' );
*
* stream.end();
*
* // prints: 'a,b,c'
*/
function objectMode( options ) {
	var opts;
	if ( arguments.length ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		opts = copy( options );
	} else {
		opts = {};
	}
	opts.objectMode = true;
	return new Stream( opts );
}


// EXPORTS //

module.exports = objectMode;
