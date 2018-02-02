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
var zip = require( './../lib' );

var zipped;
var len;
var y1;
var y2;
var y3;
var x;
var i;

// Simulate some data...
x = new Array( 100 );
len = x.length;
y1 = new Array( len );
y2 = new Array( len );
y3 = new Array( len );

for ( i = 0; i < len; i++ ) {
	x[ i ] = Date.now();
	y1[ i ] = randu() * 100;
	y2[ i ] = randu() * 100;
	y3[ i ] = randu();
}

zipped = zip( x, y1, y2, y3 );

console.log( zipped.join( '\n' ) );
