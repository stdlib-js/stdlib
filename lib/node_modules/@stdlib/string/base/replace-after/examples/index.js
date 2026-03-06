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

var replaceAfter = require( './../lib' );

var out = replaceAfter( 'beep boop', 'p', 'see', 0 );
console.log( out );
// => 'beepsee'

out = replaceAfter( 'beep boop', 'p', 'see', 5 );
console.log( out );
// => 'beep boopsee'

out = replaceAfter( 'Hello World!', 'xyz', 'foo', 0 );
console.log( out );
// => 'Hello World!'

out = replaceAfter( 'Hello World!', '', 'foo', 0 );
console.log( out );
// => 'Hello World!'

out = replaceAfter( '', 'xyz', 'foo', 0 );
console.log( out );
// => ''

out = replaceAfter( 'beep boop', ' ', 'foo', 5 );
console.log( out );
// => 'beep boop'

out = replaceAfter( 'beep boop beep baz', 'beep', 'foo', 5 );
console.log( out );
// => 'beep boop beepfoo'
