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
var kernelBetaincinv = require( './../lib' );

var i;
var p;
var a;
var b;

for ( i = 0; i < 100; i++ ) {
	p = randu();
	a = randu() * 10.0;
	b = randu() * 10.0;
	console.log( 'p: %d, \t a: %d, \t b: %d, \t f(p,a,b): %d', p.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), kernelBetaincinv( a, b, p, 1.0-p )[ 0 ] );
}
