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

var replaceAfterLast = require( './../lib' );

var str = 'beep boop';
var out = replaceAfterLast( str, 'p', 'see', str.length );
console.log( out );
// => 'beep boopsee'

str = 'Hello World!';
out = replaceAfterLast( str, 'xyz', 'foo', str.length );
console.log( out );
// => 'Hello World!'

str = 'Hello World!';
out = replaceAfterLast( str, '', 'foo', str.length );
console.log( out );
// => 'Hello World!'

str = '';
out = replaceAfterLast( str, 'xyz', 'foo', str.length );
console.log( out );
// => ''

str = 'beep boop baz';
out = replaceAfterLast( str, 'p b', 'foo', str.length );
console.log( out );
// => 'beep boop bfoo'

str = 'beep boop baz';
out = replaceAfterLast( str, 'p b', 'foo', 6 );
console.log( out );
// => 'beep bfoo'
