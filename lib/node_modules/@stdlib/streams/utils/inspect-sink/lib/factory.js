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
* Creates a reusable inspect stream factory.
*
* @param {Options} [options] - stream options
* @param {boolean} [options.objectMode=false] - specifies whether the stream should operate in object mode
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the `Buffer` level for when `write()` starts returning `false`
* @param {boolean} [options.decodeStrings=true] - specifies whether to encode strings as `Buffer` objects before writing data to a returned stream
* @param {string} [options.defaultEncoding='utf8'] - default encoding when not explicitly specified when writing data
* @throws {TypeError} options argument must be an object
* @returns {Function} inspect stream factory
*
* @example
* function log( chunk, idx ) {
*     console.log( 'index: %d', idx );
*     console.log( chunk );
* }
*
* var opts = {
*     'objectMode': true,
*     'highWaterMark': 64
* };
*
* var factory = streamFactory( opts );
*
* // Create 10 identically configured streams...
* var streams = [];
* var i;
* for ( i = 0; i < 10; i++ ) {
*     streams.push( factory( log ) );
* }
*/
function streamFactory( options ) {
	var opts;
	if ( arguments.length ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		opts = copy( options );
	} else {
		opts = {};
	}
	return inspectStream;

	/**
	* Creates a writable stream for inspecting streamed data.
	*
	* @private
	* @param {Callback} clbk - callback to invoke upon receiving data
	* @throws {TypeError} must provide valid options
	* @throws {TypeError} must provide a callback function
	* @returns {InspectStream} inspect stream
	*/
	function inspectStream( clbk ) {
		return new Stream( opts, clbk );
	}
}


// EXPORTS //

module.exports = streamFactory;
