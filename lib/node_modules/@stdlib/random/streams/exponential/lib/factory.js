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

var isPositive = require( '@stdlib/assert/is-positive-number' ).isPrimitive;
var copy = require( '@stdlib/utils/copy' );
var RandomStream = require( './main.js' );


// MAIN //

/**
* Returns a function for creating readable streams which generate pseudorandom numbers drawn from an exponential distribution.
*
* @param {PositiveNumber} [lambda] - rate parameter
* @param {Options} [options] - stream options
* @param {boolean} [options.objectMode=false] - specifies whether a stream should operate in object mode
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the maximum number of bytes to store in an internal buffer before ceasing to generate additional pseudorandom numbers
* @param {string} [options.sep='\n'] - separator used to join streamed data
* @param {NonNegativeInteger} [options.iter] - number of iterations
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @param {PositiveInteger} [options.siter] - number of iterations after which to emit the PRNG state
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
*     streams.push( createStream( 3.0 ) );
* }
*/
function factory( lambda, options ) {
	var nargs;
	var opts;
	var fcn;

	nargs = arguments.length;
	if ( nargs > 1 ) {
		fcn = createStream2;
		opts = copy( options, 1 );
	} else if ( nargs === 1 ) {
		if ( isPositive( lambda ) ) {
			fcn = createStream2;
			opts = {};
		} else {
			opts = copy( lambda, 1 );
			fcn = createStream1;
		}
	} else {
		opts = {};
		fcn = createStream1;
	}
	return fcn;

	/**
	* Returns a readable stream for generating pseudorandom numbers drawn from an exponential distribution.
	*
	* @private
	* @param {PositiveNumber} lambda - rate parameter
	* @throws {TypeError} `lambda` must be a positive number
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @throws {Error} must provide a valid state
	* @returns {RandomStream} Stream instance
	*/
	function createStream1( lambda ) {
		return new RandomStream( lambda, opts );
	}

	/**
	* Returns a readable stream for generating pseudorandom numbers drawn from an exponential distribution.
	*
	* @private
	* @throws {TypeError} `lambda` must be a positive number
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @throws {Error} must provide a valid state
	* @returns {RandomStream} Stream instance
	*/
	function createStream2() {
		return new RandomStream( lambda, opts );
	}
}


// EXPORTS //

module.exports = factory;
