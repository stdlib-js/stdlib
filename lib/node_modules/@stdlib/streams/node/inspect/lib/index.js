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
* Transform stream which inspects streamed data.
*
* @module @stdlib/streams/node/inspect
*
* @example
* var inspectStream = require( '@stdlib/streams/node/inspect' );
*
* function log( chunk, idx ) {
*     console.log( 'index: %d', idx );
*     console.log( chunk );
*     // => index: 0\na\nindex: 1\nb\nindex: 2\nc\n
* }
*
* var stream = inspectStream( log );
*
* stream.write( 'a' );
* stream.write( 'b' );
* stream.write( 'c' );
*
* stream.end();
*
*
* @example
* var inspectStream = require( '@stdlib/streams/node/inspect' );
*
* function log( chunk, idx ) {
*     console.log( 'index: %d', idx );
*     console.log( chunk );
*     // => index: 0\n{'value': 'a'}\nindex: 1\n{'value': 'b'}\nindex: 2\n{'value': 'c'}\n
* }
*
* var stream = inspectStream.objectMode( log );
*
* stream.write( {'value': 'a'} );
* stream.write( {'value': 'b'} );
* stream.write( {'value': 'c'} );
*
* stream.end();
*
*
* @example
* var inspectStream = require( '@stdlib/streams/node/inspect' );
*
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
* var factory = inspectStream.factory( opts );
*
* // Create 10 identically configured streams...
* var streams = [];
* var i;
* for ( i = 0; i < 10; i++ ) {
*     streams.push( factory( log ) );
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
