/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var ceil = require( '@stdlib/math/base/special/ceil' );
var randu = require( '@stdlib/random/base/randu' );
var pdf = require( './../lib' );

var n;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
	x = randu() * 30.0;
	n = ceil( randu() * 30.0 );
	y = pdf( x, n );
	console.log( 'x: %d, n: %d, f(x;n): %d', x.toFixed( 4 ), n.toFixed( 4 ), y.toFixed( 4 ) );
}
