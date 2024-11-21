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

var toBinaryStringUint8 = require( '@stdlib/number/uint8/base/to-binary-string' );
var float64ToInt64Bytes = require( './../lib' );

var bytes;
var str;
var sgn;
var x;
var i;
var j;

str = [ '', '', '', '', '', '', '', '', '' ];
x = 1;

for ( i = 0; i < 54; i++ ) {
	sgn = ( i&1 ) ? -1 : 1;
	bytes = float64ToInt64Bytes( x*sgn );
	for ( j = 0; j < bytes.length; j++ ) {
		str[ j ] = toBinaryStringUint8( bytes[ j ] );
	}
	console.log( '%s2**%d => %s', ( sgn < 0 ) ? '-' : '+', i, str.join( ' ' ) );
	x *= 2;
}
