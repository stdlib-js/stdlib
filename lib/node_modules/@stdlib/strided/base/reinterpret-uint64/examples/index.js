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

var Uint64Array = require( '@stdlib/array/uint64' );
var reinterpret = require( './../lib' );

// Define a 64-bit unsigned integer array:
var x = new Uint64Array( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
// returns <Uint64Array>

// Reinterpret as a `uint32` array:
var view = reinterpret( x, 0 );
// returns <Uint32Array>

// Set view elements:
view[ 0 ] = 0;
view[ 1 ] = 0;

// Get the first element of the 64-bit unsigned integer array:
var u = x.get( 0 );
// returns <Uint64>[ 0n ]

console.log( u.toString() );
