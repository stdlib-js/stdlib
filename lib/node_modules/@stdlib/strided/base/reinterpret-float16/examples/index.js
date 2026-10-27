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

var Float16Array = require( '@stdlib/array/float16' );
var reinterpret = require( './../lib' );

// Define a half-precision floating-point number array:
var x = new Float16Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
// returns <Float16Array>

// Reinterpret as a `uint16` array:
var view = reinterpret( x, 0 );
// returns <Uint16Array>

// Set view elements:
view[ 0 ] = 16384; // 2.0
view[ 1 ] = 15360; // 1.0

// Get the first element of the half-precision floating-point number array:
var v = x[ 0 ];
// returns 2.0

// Get the second element of the half-precision floating-point number array:
v = x[ 1 ];
// returns 1.0

console.log( v );
