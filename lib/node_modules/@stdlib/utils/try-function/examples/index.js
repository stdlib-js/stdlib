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

var proc = require( 'process' );
var wrap = require( './../lib' );

function beep( str ) {
	if ( typeof str !== 'string' ) {
		throw new TypeError( 'invalid argument. Must provide a string primitive. Value: `' + str + '`.' );
	}
	return 'beep ' + str;
}

function boop( str, clbk ) {
	if ( typeof str !== 'string' ) {
		throw new TypeError( 'invalid argument. Must provide a string primitive. Value: `' + str + '`.' );
	}
	setTimeout( done, 1000 );

	function done() {
		if ( str !== 'beep' ) {
			throw new Error( 'invalid argument. String must equal `beep`. Value: `' + str + '`.' );
		}
		clbk( str + ' boop' );
	}
}

function done( str ) {
	if ( str !== 'beep boop' ) {
		throw new Error( 'huh?' );
	}
}

var out;
var f;

// Synchronous...
f = wrap( beep );

out = f( 'boop' );
console.log( out );
// => 'beep boop'

out = f( null );
console.log( out.message );
// => <string>

// Asynchronous...
f = wrap( boop );

out = f( 'beep', done );
console.log( out );
// => undefined

out = f( 'foo', done );
console.log( out );
// => undefined

// TODO: handle browser environment, using `window.onerror`
proc.on( 'uncaughtException', onException );

function onException( err ) {
	// We should only throw once...
	proc.removeListener( 'uncaughtException', onException );
	console.log( err.message );
}
