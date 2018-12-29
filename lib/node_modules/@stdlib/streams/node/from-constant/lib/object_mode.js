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
var ConstantStream = require( './main.js' );


// MAIN //

/**
* Returns an "objectMode" readable stream which always streams the same value.
*
* @param {*} value - value to stream
* @param {Options} [options] - stream options
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the maximum number of objects to store in an internal buffer before pausing streaming
* @param {NonNegativeInteger} [options.iter] - number of iterations
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ConstantStream} Stream instance
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
* var stream = objectMode( 3.14, opts );
*
* stream.pipe( inspectStream.objectMode( log ) );
*/
function objectMode( value, options ) {
	var opts;
	if ( arguments.length > 1 ) {
		opts = options;
		if ( !isObject( opts ) ) {
			throw new TypeError( 'invalid argument. Options must be an object. Value: `' + opts + '`.' );
		}
		opts = copy( options, 1 );
	} else {
		opts = {};
	}
	opts.objectMode = true;
	return new ConstantStream( value, opts );
}


// EXPORTS //

module.exports = objectMode;
