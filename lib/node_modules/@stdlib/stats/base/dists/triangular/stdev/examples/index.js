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
var stdev = require( './../lib' );

var a;
var b;
var c;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
	a = ( randu()*10.0 );
	b = ( randu()*10.0 ) + a;
	c = ( randu()*( b-a ) ) + a;
	v = stdev( a, b, c );
	console.log( 'a: %d, b: %d, c: %d, SD(X;a,b,c): %d', a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), v.toFixed( 4 ) );
}
