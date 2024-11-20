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
var kernelBetainc = require( './../lib' );

var out;
var i;
var x;
var a;
var b;

out = [ 0.0, 0.0 ];
for ( i = 0; i < 100; i++ ) {
	x = randu();
	a = randu() * 10.0;
	b = randu() * 10.0;
	kernelBetainc.assign( x, a, b, true, false, out, 1, 0 );
	console.log( 'x: %d, \t a: %d, \t b: %d, \t f(x,a,b): %d, \t f^1(x,a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), out[ 0 ].toFixed( 4 ), out[ 1 ].toFixed( 4 ) );
}
