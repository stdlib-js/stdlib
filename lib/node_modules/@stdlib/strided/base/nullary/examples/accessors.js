/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarray = require( '@stdlib/array/filled' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var nullary = require( './../lib' );

function fill() {
	var re = discreteUniform( -10, 10 );
	var im = discreteUniform( -100, 100 );
	return new Complex64( re, im );
}

var N = 10;

var xbuf = filledarray( 0.0, N*2, 'float32' );
var x = new Complex64Array( xbuf.buffer );
console.log( xbuf );

var shape = [ N ];
var strides = [ 1 ];
var offsets = [ 0 ];

nullary.ndarray( [ x ], shape, strides, offsets, fill );
console.log( xbuf );
