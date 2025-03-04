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

var parse = require( './../lib' );

var str = '5 + 4i';
var z = parse( str );
console.log( JSON.stringify( z ) );
// => '{"re":5,"im":4}'

str = 'Infinity + 2.34i';
z = parse( str );
console.log( JSON.stringify( z ) );
// => '{"re":null,"im":2.34}'

str = 'NaN + i4';
z = parse( str );
console.log( z );
// => null

str = '45i55 + 5';
z = parse( str );
console.log( z );
// => null

str = '5 + 6 + 10e4i';
z = parse( str );
console.log( JSON.stringify( z ) );
// => '{"re":11,"im":100000}'

str = {};
z = parse( str );
console.log( z );
// => null
