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

var Complex128 = require( '@stdlib/complex/float64' );
var ns = require( './../lib' );

// Operations for double-precision floating point numbers:
console.log( ns.add( 1.25, 0.45 ) );
// => 1.7

console.log( ns.sub( 1.25, 0.45 ) );
// => 0.8

// Operations for single-precision floating point numbers:
console.log( ns.mulf( 1.3, 1.2 ) );
// => ~1.56

console.log( ns.divf( 1.2, 0.4 ) );
// => 3.0

// Operations for complex numbers:
var z1 = new Complex128( 5.0, 3.0 );
var z2 = new Complex128( -2.0, 1.0 );
console.log( ns.cmul( z1, z2 ) ); // {'re': -13.0, 'im': -1.0 }
// => <Complex128>

// Operations for signed 32-bit integers:
// 2^30 * -5 = -5368709120 => 32-bit integer overflow
console.log( ns.imul( 1073741824|0, -5|0 ) );
// => -1073741824

// Operations for unsigned 32-bit integers:
// 2^31 * 5 = 10737418240 => 32-bit integer overflow
console.log( ns.umul( 2147483648>>>0, 5>>>0 ) );
// => 2147483648

// Operations for couble word product:
// -(2^31) * 2^30 = -2305843009213694000 => 32-bit integer overflow
console.log( ns.imuldw( 0x80000000|0, 0x40000000|0 ) );
// => [ -536870912, 0 ]
