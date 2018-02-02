/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var linspace = require( './../lib' );
var out;

// Default behavior:
console.log( '\nDefault:' );
out = linspace( 0, 10 );
console.log( out.join( '\n' ) );

// Specify length:
console.log( '\nLength 10:' );
out = linspace( 0, 10, 10 );
console.log( out.join( '\n' ) );

console.log( '\nLength 11:' );
out = linspace( 0, 10, 11 );
console.log( out.join( '\n' ) );

console.log( '\nLength 21:' );
out = linspace( 0, 1, 21 );
console.log( out.join( '\n' ) );

// Create an array with decremented values:
console.log( '\nDecremented values:' );
out = linspace( 10, 0, 11 );
console.log( out.join( '\n' ) );
