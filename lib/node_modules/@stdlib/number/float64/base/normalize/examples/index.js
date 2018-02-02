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

var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var pow = require( '@stdlib/math/base/special/pow' );
var normalize = require( './../lib' );

var frac;
var exp;
var x;
var v;
var i;

// Generate denormalized numbers and then normalize them...
for ( i = 0; i < 100; i++ ) {
	frac = randu() * 10.0;
	exp = 309 + round( randu()*14.0 );
	x = frac * pow( 10.0, -exp );
	v = normalize( x );
	console.log( '%d = %d * 2^%d = %d', x, v[0], v[1], v[0]*pow(2.0, v[1]) );
}
