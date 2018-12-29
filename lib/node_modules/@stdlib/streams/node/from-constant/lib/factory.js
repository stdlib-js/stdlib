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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var copy = require( '@stdlib/utils/copy' );
var ConstantStream = require( './main.js' );


// MAIN //

/**
* Returns a function for creating readable streams which always stream the same value.
*
* @param {(string|Buffer|Uint8Array|*)} [value] - value to stream
* @param {Options} [options] - stream options
* @param {boolean} [options.objectMode=false] - specifies whether a stream should operate in object mode
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the maximum number of bytes to store in an internal buffer before pausing streaming
* @param {string} [options.sep='\n'] - separator used to join streamed data
* @param {NonNegativeInteger} [options.iter] - number of iterations
* @returns {Function} stream factory
*
* @example
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
* var i;
* for ( i = 0; i < 10; i++ ) {
*     streams.push( createStream( i.toString() ) );
* }
*/
function factory( value, options ) {
	var nargs;
	var opts;
	var fcn;
	var FLG;

	nargs = arguments.length;
	if ( nargs === 0 ) {
		opts = {};
		FLG = true;
	} else if ( nargs === 1 ) {
		// Check (imperfectly!) whether we were provided an "options" object...
		if (
			value !== null &&
			typeof value === 'object' &&
			(
				hasOwnProp( value, 'sep' ) ||
				hasOwnProp( value, 'iter' ) ||
				hasOwnProp( value, 'objectMode' ) ||
				hasOwnProp( value, 'encoding' ) ||
				hasOwnProp( value, 'highWaterMark' )
			)
		) {
			opts = copy( value, 1 );
			FLG = true;
		} else {
			opts = {};
		}
	} else { // nargs > 1
		opts = copy( options, 1 );
	}
	if ( FLG ) {
		fcn = createStream1;
	} else {
		fcn = createStream2;
	}
	return fcn;

	/**
	* Returns a readable stream which always streams the same value.
	*
	* @private
	* @param {(string|Buffer|Uint8Array|*)} value - value to stream
	* @throws {TypeError} in binary mode, value to stream must be a string, Buffer, or Uint8Array
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {ConstantStream} Stream instance
	*/
	function createStream1( value ) {
		return new ConstantStream( value, opts );
	}

	/**
	* Returns a readable stream which always streams the same value.
	*
	* @private
	* @throws {TypeError} in binary mode, value to stream must be a string, Buffer, or Uint8Array
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {ConstantStream} Stream instance
	*/
	function createStream2() {
		return new ConstantStream( value, opts );
	}
}


// EXPORTS //

module.exports = factory;
