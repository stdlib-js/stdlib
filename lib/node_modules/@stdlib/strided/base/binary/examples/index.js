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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array/filled-by' );
var filledarray = require( '@stdlib/array/filled' );
var binary = require( './../lib' );

function add( x, y ) {
	return x + y;
}

var N = 10;

var x = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( y );

var z = filledarray( 0.0, N, 'generic' );
console.log( z );

var shape = [ N ];
var strides = [ 1, 1, -1 ];
var offsets = [ 0, 0, N-1 ];

binary.ndarray( [ x, y, z ], shape, strides, offsets, add );
console.log( z );
