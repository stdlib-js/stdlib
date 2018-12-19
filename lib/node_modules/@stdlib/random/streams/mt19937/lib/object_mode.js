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
var RandomStream = require( './main.js' );


// MAIN //

/**
* Returns an "objectMode" readable stream for generating pseudorandom numbers via a 32-bit Mersenne Twister pseudorandom number generator.
*
* @param {Options} [options] - stream options
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the maximum number of objects to store in an internal buffer before ceasing to generate additional pseudorandom numbers
* @param {NonNegativeInteger} [options.iter] - number of iterations
* @param {boolean} [options.normalized=false] - boolean indicating whether to return pseudorandom numbers on the interval `[0,1)`
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @param {PositiveInteger} [options.siter] - number of iterations after which to emit the PRNG state
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {RandomStream} Stream instance
*
* @example
* var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
*
* function log( v ) {
*    console.log( v );
* }
*
* var opts = {
*     'iter': 10
* };
*
* var stream = objectMode( opts );
*
* stream.pipe( inspectStream.objectMode( log ) );
*/
function objectMode( options ) {
	var opts;
	if ( arguments.length > 0 ) {
		opts = options;
		if ( !isObject( opts ) ) {
			throw new TypeError( 'invalid argument. Options must be an object. Value: `' + opts + '`.' );
		}
		opts = copy( options, 1 );
	} else {
		opts = {};
	}
	opts.objectMode = true;
	return new RandomStream( opts );
}


// EXPORTS //

module.exports = objectMode;
