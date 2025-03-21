/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var headercase = require( './../lib' );

var str = 'Hello World!';
var out = headercase( str );
console.log( out );
// => 'Hello-World'

str = 'HELLO WORLD!';
out = headercase( str );
console.log( out );
// => 'Hello-World'

str = 'To be, or not to be: that is the question.';
out = headercase( str );
console.log( out );
// => 'To-Be-Or-Not-To-Be-That-Is-The-Question'
