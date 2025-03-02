/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var cdf = require( './../lib' );

var x = uniform( 10, 0.0, 1.0 );
var c = uniform( 10, 0.1, 10.0 );

var y;
var i;
for ( i = 0; i < x.length; i++ ) {
	y = cdf( x[ i ], c[ i ] );
	console.log( 'x: %d, c: %d, F(x;c): %d', x[ i ].toFixed( 4 ), c[ i ].toFixed( 4 ), y.toFixed( 4 ) );
}
