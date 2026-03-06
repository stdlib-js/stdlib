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

var invcase = require( './../lib' );

var str = 'HeLlO wOrLd!';
var out = invcase( str );
console.log( out );
// => 'hElLo WoRlD!'

str = 'I Am A Tiny Little Teapot';
out = invcase( str );
console.log( out );
// => 'i aM a tINY lITTLE tEAPOT'

str = 'with big problems';
out = invcase( str );
console.log( out );
// => 'WITH BIG PROBLEMS'

str = 'TO BE, OR NOT TO BE: that is the question.';
out = invcase( str );
console.log( out );
// => 'to be, or not to be: THAT IS THE QUESTION.'

str = 'isMobile';
out = invcase( str );
console.log( out );
// => 'ISmOBILE'
