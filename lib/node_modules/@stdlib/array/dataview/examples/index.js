/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var toBinaryString = require( '@stdlib/number/uint8/base/to-binary-string' );
var hasDataViewSupport = require( '@stdlib/assert/has-dataview-support' );
var randu = require( '@stdlib/random/base/randu' );
var Uint8Array = require( '@stdlib/array/uint8' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( './../lib' );

if ( !hasDataViewSupport() ) {
	// TODO: remove once DataView polyfill is written
	console.error( 'Environment does not provide DataView support.' );
	proc.exit( 0 );
}
// Create a new ArrayBuffer:
var buf = new ArrayBuffer( 64 );

// Create a new DataView:
var dv = new DataView( buf );

// Set values in the view:
var i;
for ( i = 0; i < dv.byteLength/8; i++ ) {
	dv.setFloat64( i*8, randu()*100.0, IS_LITTLE_ENDIAN );
}

// Create a "bytes" view of the underlying array buffer:
var bytes = new Uint8Array( dv.buffer );

// Print the bytes:
for ( i = 0; i < bytes.length; i++ ) {
	console.log( 'byte %d: %s', i, toBinaryString( bytes[ i ] ) );
}
