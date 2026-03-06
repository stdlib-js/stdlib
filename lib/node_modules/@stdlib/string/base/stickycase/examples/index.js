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

var stickycase = require( './../lib' );

var str = 'Hello World!';
var out = stickycase( str );
console.log( out );
// => <string>

str = 'I am a tiny little teapot';
out = stickycase( str );
console.log( out );
// => <string>

str = 'with big problems';
out = stickycase( str, 0.1 );
console.log( out );
// => <string>

str = 'To be, or not to be: that is the question.';
out = stickycase( str, 0.9 );
console.log( out );
// => <string>

str = 'isMobile';
out = stickycase( str, 0.5 );
console.log( out );
// => <string>
