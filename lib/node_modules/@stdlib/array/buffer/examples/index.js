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
var hasArrayBufferSupport = require( '@stdlib/assert/has-arraybuffer-support' );
var randu = require( '@stdlib/random/base/randu' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var toBinaryString = require( '@stdlib/number/uint8/base/to-binary-string' );
var ArrayBuffer = require( './../lib' );

var bytes;
var buf;
var arr;
var i;

if ( !hasArrayBufferSupport() ) {
	// TODO: remove once ArrayBuffer polyfill is written
	console.error( 'Environment does not provide ArrayBuffer support.' );
	proc.exit( 0 );
}
// Create a new ArrayBuffer:
buf = new ArrayBuffer( 64 );

// Create a Float64 array buffer view:
arr = new Float64Array( buf.byteLength/8 );
for ( i = 0; i < arr.length; i++ ) {
	arr[ i ] = randu() * 100.0;
}

// Create a "bytes" view of the array buffer:
bytes = new Uint8Array( arr.buffer );

// Print the bytes:
for ( i = 0; i < bytes.length; i++ ) {
	console.log( 'byte %d: %s', i, toBinaryString( bytes[ i ] ) );
}
