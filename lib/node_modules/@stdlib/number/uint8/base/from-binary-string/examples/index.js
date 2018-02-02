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

var toBinaryStringUint8 = require( '@stdlib/number/uint8/base/to-binary-string' );
var fromBinaryStringUint8 = require( './../lib' );

var b;
var y;
var i;

// Convert integers to literal bit representations and then convert them back...
for ( i = 0; i < 256; i++ ) {
	b = toBinaryStringUint8( i );
	y = fromBinaryStringUint8( b );
	console.log( '%d => %s => %d', i, b, y );
}
