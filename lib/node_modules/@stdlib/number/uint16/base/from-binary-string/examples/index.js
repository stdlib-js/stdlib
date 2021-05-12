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

var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var MAX_UINT = require( '@stdlib/constants/uint16/max' );
var toBinaryStringUint16 = require( '@stdlib/number/uint16/base/to-binary-string' );
var fromBinaryStringUint16 = require( './../lib' );

var b;
var x;
var y;
var i;

// Convert random integers to literal bit representations and then convert them back...
for ( i = 0; i < 100; i++ ) {
	x = round( randu()*MAX_UINT );
	b = toBinaryStringUint16( x );
	y = fromBinaryStringUint16( b );
	console.log( '%d => %s => %d', x, b, y );
}
