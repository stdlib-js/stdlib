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
var Complex64Array = require( '@stdlib/array/complex64' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var cmap = require( './../lib' );

function scale( x ) {
	var re = real( x );
	var im = imag( x );
	return new Complex64( re*10.0, im*10.0 );
}

var xbuf = filledarrayBy( 10*2, 'float32', discreteUniform( -100.0, 100.0 ) );
var x = new Complex64Array( xbuf.buffer );
console.log( x );

var y = new Complex64Array( x.length );
console.log( y );

cmap.ndarray( x.length, x, 1, 0, y, -1, y.length-1, scale );
console.log( y );
