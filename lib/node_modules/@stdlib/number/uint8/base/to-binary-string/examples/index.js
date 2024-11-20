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

var Uint8Array = require( '@stdlib/array/uint8' );
var MAX_UINT8 = require( '@stdlib/constants/uint8/max' );
var toBinaryString = require( './../lib' );

var x;
var y;
var b;
var i;

x = new Uint8Array( MAX_UINT8+1 );
for ( i = 0; i < x.length; i++ ) {
	x[ i ] = i;
}

// Convert unsigned 8-bit integers to literal bit representations...
for ( i = 0; i < x.length; i++ ) {
	b = toBinaryString( x[i] );
	y = parseInt( b, 2 );
	console.log( 'x: %d, b: %s, y: %d', x[i], b, y );
}
