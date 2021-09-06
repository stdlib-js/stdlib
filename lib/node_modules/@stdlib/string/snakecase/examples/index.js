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

var snakecase = require( './../lib' );

var str = 'foo bar baz';
var out = snakecase( str );
console.log( out );
// => 'foo_bar_baz'

str = 'foo_baz';
out = snakecase( str );
console.log( out );
// => 'foo_baz'

str = 'foo_bar_baz!';
out = snakecase( str );
console.log( out );
// => 'foo_bar_baz'

str = 'beep    boop!';
out = snakecase( str );
console.log( out );
// => 'beep_boop'

str = 'foo_baz';
out = snakecase( str );
console.log( out );
// => 'foo_baz'

str = 'Welcome! 😀';
out = snakecase( str );
console.log( out );
// => 'welcome_😀'
