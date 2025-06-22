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

var uniform = require( '@stdlib/random/base/uniform' );
var logpdf = require( './../lib' );

var a;
var b;
var c;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
	x = uniform( 0.0, 30.0 );
	a = uniform( 0.0, 10.0 );
	b = uniform( a, a + 40.0 );
	c = uniform( a, b );
	y = logpdf( x, a, b, c );
	console.log( 'x: %d, a: %d, b: %d, c: %d, ln(f(x;a,b,c)): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), y.toFixed( 4 ) );
}
