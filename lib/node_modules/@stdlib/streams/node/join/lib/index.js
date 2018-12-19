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
* Transform stream which joins streamed data.
*
* @module @stdlib/streams/node/join
*
* @example
* var stdout = require( '@stdlib/streams/node/stdout' );
* var joinStream = require( '@stdlib/streams/node/join' );
*
* var stream = joinStream();
*
* stream.pipe( stdout );
*
* stream.write( '1' );
* stream.write( '2' );
* stream.write( '3' );
*
* stream.end();
*
* // prints: '1\n2\n3'
*
* @example
* var joinStream = require( '@stdlib/streams/node/join' );
*
* var opts = {
*     'sep': '\t',
*     'objectMode': true,
*     'encoding': 'utf8',
*     'highWaterMark': 64
* };
*
* var factory = joinStream.factory( opts );
*
* // Create 10 identically configured streams...
* var streams = [];
* var i;
* for ( i = 0; i < 10; i++ ) {
*     streams.push( factory() );
* }
*
* @example
* var stdout = require( '@stdlib/streams/node/stdout' );
* var joinStream = require( '@stdlib/streams/node/join' );
*
* var stream = joinStream.objectMode({
*     'sep': ','
* });
*
* stream.pipe( stdout );
*
* stream.write( 'a' );
* stream.write( 'b' );
* stream.write( 'c' );
*
* stream.end();
*
* // prints: 'a,b,c'
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
