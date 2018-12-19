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

/**
* Writable stream for debugging stream pipelines.
*
* @module @stdlib/streams/node/debug-sink
*
* @example
* var debugSinkStream = require( '@stdlib/streams/node/debug-sink' );
*
* var stream = debugSinkStream({
*     'name': 'my-stream'
* });
*
* stream.write( 'a' );
* stream.write( 'b' );
* stream.write( 'c' );
* stream.end();
*
* @example
* var debugSinkStream = require( '@stdlib/streams/node/debug-sink' );
*
* var stream = debugSinkStream.objectMode({
*     'name': 'my-stream'
* });
*
* stream.write( {'value': 'a'} );
* stream.write( {'value': 'b'} );
* stream.write( {'value': 'c'} );
* stream.end();
*
* @example
* var debugSinkStream = require( '@stdlib/streams/node/debug-sink' );
*
* var opts = {
*     'objectMode': true,
*     'highWaterMark': 64
* };
*
* var factory = debugSinkStream.factory( opts );
*
* // Assign each stream to a separate 'debug' namespace...
* var streams = [];
* var i;
* for ( i = 0; i < 10; i++ ) {
*     streams.push( factory( 'stream '+i ) );
* }
*/


// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var stream = require( './main.js' );
var objectMode = require( './object_mode.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( stream, 'objectMode', objectMode );
setReadOnly( stream, 'factory', factory );


// EXPORTS //

module.exports = stream;
