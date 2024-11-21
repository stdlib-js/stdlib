/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var ns = require( './../lib' );

// Generate a Pascal case string...
var str = ns.pascalcase( 'beep boop' );
console.log( str );
// => 'BeepBoop'

// Tokenize a string into an array of string parts and format identifier objects...
str = 'The %d %s foxes jumped over the %d %s dogs.';
var tokens = ns.formatTokenize( str );
console.log( tokens );
// => [ 'The ', {...}, ' ', {...}, ' foxes jumped over the ', {...}, ' ', {...}, ' dogs.' ]

// Generate a string from a token array by interpolating values...
str = ns.formatInterpolate( tokens, 3, 'quick', 4, 'lazy' );
console.log( str );
// => 'The 3 quick foxes jumped over the 4 lazy dogs.'

// Test whether a string starts with the characters of another string...
str = 'Lorem ipsum dolor sit amet';
var bool = ns.startsWith( str, 'Lorem' );
console.log( bool );
// => true

// Test whether a string ends with the characters of another string...
bool = ns.endsWith( str, 'amet' );
console.log( bool );
// => true

// Trim whitespace characters from the beginning and end of a string...
str = '   \t\n Lorem ipsum dolor sit amet   \n\t  ';
str = ns.trim( str );
console.log( str );
// => 'Lorem ipsum dolor sit amet'
