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

var reWhitespace = require( './../lib' );

var RE_WHITESPACE = reWhitespace();
var str;

console.log( RE_WHITESPACE.test( 'beep boop' ) );
// => true

console.log( RE_WHITESPACE.test( '\n' ) );
// => true

console.log( RE_WHITESPACE.test( '\r' ) );
// => true

console.log( RE_WHITESPACE.test( '\t' ) );
// => true

console.log( RE_WHITESPACE.test( 'beep' ) );
// => false

str = 'This is\na newline\r\ndelimited string.';
console.log( str.split( RE_WHITESPACE ) );
