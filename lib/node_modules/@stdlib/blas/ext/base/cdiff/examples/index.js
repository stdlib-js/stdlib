/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex64Array = require( '@stdlib/array/complex64' );
var cdiff = require( './../lib' );

var xbuf = discreteUniform( 20, -100, 100, {
	'dtype': 'float32'
});
var x = new Complex64Array( xbuf.buffer );
console.log( 'Input array: ', x );

var pbuf = discreteUniform( 4, -100, 100, {
	'dtype': 'float32'
});
var p = new Complex64Array( pbuf.buffer );
console.log( 'Prepend array: ', p );

var abuf = discreteUniform( 4, -100, 100, {
	'dtype': 'float32'
});
var a = new Complex64Array( abuf.buffer );
console.log( 'Append array: ', a );

var out = new Complex64Array( 10 );
var w = new Complex64Array( 13 );

cdiff( x.length, 4, x, 1, 2, p, 1, 2, a, 1, out, 1, w, 1 );
console.log( 'Output: ', out );
