/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var Complex64Array = require( '@stdlib/array/complex64' );
var COMPLEX64_ZERO = require( './../lib' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
// returns <Complex64Array>

var v = x.get( 0 );
// returns <Complex64>

var re = realf( v );
console.log( re );
// => 1.0

var im = imagf( v );
console.log( im );
// => 2.0

x.fill( COMPLEX64_ZERO );

v = x.get( 0 );
// returns <Complex64>

re = realf( v );
console.log( re );
// => 0.0

im = imagf( v );
console.log( im );
// => 0.0
