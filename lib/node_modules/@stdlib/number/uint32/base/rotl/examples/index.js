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

var toBinaryStringUint32 = require( '@stdlib/number/uint32/base/to-binary-string' );
var MAX_INT = require( '@stdlib/constants/uint32/max' );
var rotl32 = require( './../lib' );

var HALF;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
	x = i;
	y = rotl32( x, 10 );
	console.log( '%d => %s => %s => %d', x, toBinaryStringUint32( x ), toBinaryStringUint32( y ), y );
}

HALF = (MAX_INT+1) / 2;
for ( i = 0; i < 100; i++ ) {
	x = HALF + i;
	y = rotl32( x, 10 );
	console.log( '%d => %s => %s => %d', x, toBinaryStringUint32( x ), toBinaryStringUint32( y ), y );
}
