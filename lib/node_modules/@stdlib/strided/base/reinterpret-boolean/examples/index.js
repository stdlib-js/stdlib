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

var BooleanArray = require( '@stdlib/array/bool' );
var reinterpret = require( './../lib' );

// Define a boolean array:
var x = new BooleanArray( [ true, false, false, true, true, false ] );
// returns <BooleanArray>

// Reinterpret as a `uint8` array:
var view = reinterpret( x, 0 );
// returns <Uint8Array>

// Set view elements:
view[ 0 ] = 0;
view[ 1 ] = 1;

// Get the first element of the boolean array:
var v = x.get( 0 );
// returns false

// Get the second element of the boolean array:
v = x.get( 1 );
// returns true

console.log( v );
