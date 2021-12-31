/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var uniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var sub = require( './../lib' );

var dt;
var x;
var y;
var z;
var i;

dt = [ 'float64', 'float32', 'int32', 'uint8', 'generic' ];

for ( i = 0; i < dt.length; i++ ) {
	x = filledarrayBy( 10, dt[ i ], uniform( 0.0, 10.0 ) );
	console.log( x );

	y = filledarrayBy( x.length, dt[ i ], uniform( 0.0, 10.0 ) );
	console.log( y );

	z = filledarray( 0.0, x.length, 'generic' );
	console.log( z );

	sub.ndarray( x.length, dt[ i ], x, 1, 0, dt[ i ], y, 1, 0, 'generic', z, -1, z.length-1 );
	console.log( z );
	console.log( '' );
}
