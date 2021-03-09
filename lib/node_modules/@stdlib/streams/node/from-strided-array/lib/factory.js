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

var copy = require( '@stdlib/utils/copy' );
var StridedArrayStream = require( './main.js' );


// MAIN //

/**
* Returns a function for creating readable streams from strided array-like values.
*
* @param {Options} [options] - stream options
* @param {boolean} [options.objectMode=false] - specifies whether a stream should operate in object mode
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the maximum number of bytes to store in an internal buffer before pausing streaming
* @param {string} [options.sep='\n'] - separator used to join streamed data
* @param {Function} [options.serialize] - custom serialization function
* @returns {Function} stream factory
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var randu = require( '@stdlib/random/base/randu' );
*
* var arr = new Float64Array( 10 );
* var i;
* for ( i = 0; i < arr.length; i++ ) {
*     arr[ i ] = randu();
* }
*
* var opts = {
*     'sep': ',',
*     'objectMode': false,
*     'encoding': 'utf8',
*     'highWaterMark': 64
* };
*
* var createStream = factory( opts );
*
* // Create 10 identically configured streams...
* var streams = [];
* for ( i = 0; i < 10; i++ ) {
*     streams.push( createStream( arr.length, arr, 1, 0 ) );
* }
*/
function factory( options ) {
	var opts;
	if ( arguments.length ) {
		opts = copy( options, 1 );
	} else {
		opts = {};
	}
	return createStream;

	/**
	* Returns a readable stream from an array-like object.
	*
	* @private
	* @param {NonNegativeInteger} N - number of values to stream
	* @param {Collection} buffer - source array-like object
	* @param {integer} stride - stride length
	* @param {NonNegativeInteger} offset - starting index
	* @throws {TypeError} must provide an array-like object
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {StridedArrayStream} Stream instance
	*/
	function createStream( N, buffer, stride, offset ) {
		return new StridedArrayStream( N, buffer, stride, offset, opts );
	}
}


// EXPORTS //

module.exports = factory;
