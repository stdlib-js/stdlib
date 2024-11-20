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
var Uint16Array = require( '@stdlib/array/uint16' );
var MAX_UINT16 = require( '@stdlib/constants/uint16/max' );
var toBinaryString = require( './../lib' );

var x;
var y;
var b;
var i;

// Generate random unsigned 16-bit integers...
x = new Uint16Array( 100 );
for ( i = 0; i < x.length; i++ ) {
	x[ i ] = round( randu()*MAX_UINT16 );
}

// Convert unsigned 16-bit integers to literal bit representations...
for ( i = 0; i < x.length; i++ ) {
	b = toBinaryString( x[i] );
	y = parseInt( b, 2 );
	console.log( 'x: %d, b: %s, y: %d', x[i], b, y );
}
