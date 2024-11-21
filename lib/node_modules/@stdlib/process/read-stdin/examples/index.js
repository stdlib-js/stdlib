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

var string2buffer = require( '@stdlib/buffer/from-string' );
var stdinStream = require( '@stdlib/streams/node/stdin' );
var stdin = require( './../lib' );

/**
* Callback invoked upon reading data from `stdin`.
*
* @private
* @param {(Error|null)} error - error object
* @param {Buffer} data - `stdin` data
*/
function onRead( error, data ) {
	if ( error ) {
		console.error( 'Error: %s', error.message );
	} else {
		console.log( data.toString() );
		// => 'beep boop'
	}
}

// Fake not being in a terminal context:
stdinStream.isTTY = false;

// Provide a callback to consume all data from `stdin`:
stdin( onRead );

// Push some data to `stdin`:
stdinStream.push( string2buffer( 'beep' ) );
stdinStream.push( string2buffer( ' ' ) );
stdinStream.push( string2buffer( 'boop' ) );

// End the stream:
stdinStream.push( null );
