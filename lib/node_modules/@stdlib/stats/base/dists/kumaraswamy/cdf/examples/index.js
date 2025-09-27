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

var uniform = require( '@stdlib/random/array/uniform' );
var EPS = require( '@stdlib/constants/float64/eps' );
var cdf = require( './../lib' );

var a;
var b;
var x;
var y;
var i;

x = uniform( 10, 0.0, 1.0 );
a = uniform( 10, EPS, 5.0 );
b = uniform( 10, EPS, 5.0 );

for ( i = 0; i < x.length; i++ ) {
	y = cdf( x[ i ], a[ i ], b[ i ] );
	console.log( 'x: %d, a: %d, b: %d, F(x;a,b): %d', x[ i ].toFixed( 4 ), a[ i ].toFixed( 4 ), b[ i ].toFixed( 4 ), y.toFixed( 4 ) );
}
