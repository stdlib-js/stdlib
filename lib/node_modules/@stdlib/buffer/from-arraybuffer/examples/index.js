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

var ArrayBuffer = require( '@stdlib/array/buffer' );
var Float64Array = require( '@stdlib/array/float64' );
var randu = require( '@stdlib/random/base/randu' );
var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var arraybuffer2buffer = require( './../lib' );

var high;
var view;
var low;
var buf;
var ab;
var i;

// Allocate an ArrayBuffer:
ab = new ArrayBuffer( 64 );

// Create a Float64 view and set random values:
view = new Float64Array( ab );
for ( i = 0; i < view.length; i++ ) {
	view[ i ] = randu();
}

// Create a new buffer from the ArrayBuffer:
buf = arraybuffer2buffer( ab );

// Read the high and low words for each double:
for ( i = 0; i < view.length; i++ ) {
	if ( IS_LITTLE_ENDIAN ) {
		high = buf.readUInt32LE( (8*i)+4 );
		low = buf.readUInt32LE( 8*i );
	} else {
		high = buf.readUInt32BE( 8*i );
		low = buf.readUInt32BE( (8*i)+4 );
	}
	console.log( 'Value: %d. High: %d. Low: %d.', view[ i ], high, low );
}
