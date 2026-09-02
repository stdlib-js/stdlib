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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var quantile = require( './../lib' );

var p = uniform( 10, 0.0, 1.0 );
var a = discreteUniform( 10, 0, 5 );
var b = discreteUniform( 10, 2, 8 );

var v;
var i;
for ( i = 0; i < 10; i++ ) {
	v = quantile( p[ i ], a[ i ], b[ i ] );
	console.log( 'p: %d, a: %d, b: %d, Q(p;a,b): %d', p[ i ].toFixed( 4 ), a[ i ], b[ i ], v );
}
