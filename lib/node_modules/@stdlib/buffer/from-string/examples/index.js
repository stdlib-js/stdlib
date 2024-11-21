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
var randint = require( '@stdlib/random/base/discrete-uniform' );
var string2buffer = require( './../lib' );

// Create a buffer from a string:
var buf = string2buffer( 'beep boop bop' );
console.log( buf.toString() );

// Generate random strings...
var i;
var j;
for ( i = 0; i < 100; i++ ) {
	j = randint( 0, buf.length );
	if ( randu() < 2/buf.length ) {
		buf[ j ] = 32; // space
	} else {
		buf[ j ] = randint( 97, 122 );
	}
	console.log( buf.toString() );
}
