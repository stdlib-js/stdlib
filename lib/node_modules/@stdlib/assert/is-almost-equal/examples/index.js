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

var EPS = require( '@stdlib/constants/float64/eps' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isAlmostEqual = require( './../lib' );

console.log( isAlmostEqual( true, true, 0 ) );
// => true

console.log( isAlmostEqual( true, false, 1 ) );
// => false

console.log( isAlmostEqual( 'beep', 'beep', 1 ) );
// => true

console.log( isAlmostEqual( 1.0, 1.0+EPS, 1 ) );
// => true

console.log( isAlmostEqual( null, null, 0 ) );
// => true

console.log( isAlmostEqual( 0.0, -0.0, 0 ) );
// => true

console.log( isAlmostEqual( NaN, NaN, 1 ) );
// => false

var z1 = new Complex128( 1.0, 3.0+EPS );
var z2 = new Complex128( 1.0+EPS, 3.0 );
console.log( isAlmostEqual( z1, z2, 1 ) );
// => true

console.log( isAlmostEqual( {}, {}, 1 ) );
// => false

console.log( isAlmostEqual( [], [], 1 ) );
// => false

console.log( isAlmostEqual( isAlmostEqual, isAlmostEqual, 0 ) );
// => true
