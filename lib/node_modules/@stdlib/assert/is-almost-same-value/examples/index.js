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
var isAlmostSameValue = require( './../lib' );

console.log( isAlmostSameValue( true, true, 0 ) );
// => true

console.log( isAlmostSameValue( true, false, 1 ) );
// => false

console.log( isAlmostSameValue( 'beep', 'beep', 1 ) );
// => true

console.log( isAlmostSameValue( 1.0, 1.0+EPS, 1 ) );
// => true

console.log( isAlmostSameValue( null, null, 0 ) );
// => true

console.log( isAlmostSameValue( 0.0, -0.0, 0 ) );
// => false

console.log( isAlmostSameValue( NaN, NaN, 1 ) );
// => true

var z1 = new Complex128( 1.0, 3.0+EPS );
var z2 = new Complex128( 1.0+EPS, 3.0 );
console.log( isAlmostSameValue( z1, z2, 1 ) );
// => true

console.log( isAlmostSameValue( {}, {}, 1 ) );
// => false

console.log( isAlmostSameValue( [], [], 1 ) );
// => false

console.log( isAlmostSameValue( isAlmostSameValue, isAlmostSameValue, 0 ) );
// => true
