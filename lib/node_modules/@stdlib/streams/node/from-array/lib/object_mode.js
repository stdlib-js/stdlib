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
var ArrayStream = require( './main.js' );


// MAIN //

/**
* Returns an "objectMode" readable stream from an array-like object.
*
* @param {Collection} src - source array-like object
* @param {Options} [options] - stream options
* @param {(string|null)} [options.encoding=null] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the maximum number of objects to store in an internal buffer before pausing streaming
* @param {integer} [options.dir=1] - iteration direction
* @throws {TypeError} first argument must be an array-like object
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ArrayStream} Stream instance
*
* @example
* var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
* var Float64Array = require( '@stdlib/array/float64' );
* var randu = require( '@stdlib/random/base/randu' );
*
* function log( v ) {
*    console.log( v );
* }
*
* var arr = new Float64Array( 10 );
* var i;
* for ( i = 0; i < arr.length; i++ ) {
*     arr[ i ] = randu();
* }
*
* var stream = objectMode( arr );
*
* stream.pipe( inspectStream.objectMode( log ) );
*/
function objectMode( src, options ) {
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
	return new ArrayStream( src, opts );
}


// EXPORTS //

module.exports = objectMode;
