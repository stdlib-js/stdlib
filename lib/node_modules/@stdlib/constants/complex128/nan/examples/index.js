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

var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var Complex128Array = require( '@stdlib/array/complex128' );
var COMPLEX128_NAN = require( './../lib' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
// returns <Complex128Array>

var v = x.get( 0 );
// returns <Complex128>

var re = real( v );
console.log( re );
// => 1.0

var im = imag( v );
console.log( im );
// => 2.0

x.fill( COMPLEX128_NAN );

v = x.get( 0 );
// returns <Complex128>

re = real( v );
console.log( re );
// => NaN

im = imag( v );
console.log( im );
// => NaN
