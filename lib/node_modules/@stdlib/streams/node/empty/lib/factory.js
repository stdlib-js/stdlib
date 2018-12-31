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
var EmptyStream = require( './main.js' );


// MAIN //

/**
* Returns a function for creating "empty" readable streams.
*
* @param {Options} [options] - stream options
* @param {boolean} [options.objectMode=false] - specifies whether a stream should operate in object mode
* @returns {Function} stream factory
*
* @example
* var opts = {
*     'objectMode': false
* };
*
* var createStream = factory( opts );
*
* // Create 10 identically configured streams...
* var streams = [];
* var i;
* for ( i = 0; i < 10; i++ ) {
*     streams.push( createStream() );
* }
*/
function factory( options ) {
	var opts;
	if ( arguments.length > 0 ) {
		opts = copy( options, 1 );
	} else {
		opts = {};
	}
	return createStream;

	/**
	* Returns an "empty" readable stream.
	*
	* @private
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {EmptyStream} Stream instance
	*/
	function createStream() {
		return new EmptyStream( opts );
	}
}


// EXPORTS //

module.exports = factory;
