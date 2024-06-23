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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex128Array = require( '@stdlib/array/complex128' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var binary = require( './../lib' );

function add( z1, z2 ) {
	return new Complex128( real( z1 )+real( z2 ), imag( z1 )+imag( z2 ) );
}

var N = 10;

var xbuf = filledarrayBy( N*2, 'float64', discreteUniform( -100, 100 ) );
var x = new Complex128Array( xbuf.buffer );
console.log( xbuf );

var ybuf = filledarrayBy( N*2, 'float64', discreteUniform( -100, 100 ) );
var y = new Complex128Array( ybuf.buffer );
console.log( ybuf );

var zbuf = filledarray( 0.0, N*2, 'float64' );
var z = new Complex128Array( zbuf.buffer );
console.log( zbuf );

var shape = [ N ];
var strides = [ 1, -1, 1 ];
var offsets = [ 0, N-1, 0 ];

binary.ndarray( [ x, y, z ], shape, strides, offsets, add );
console.log( zbuf );
