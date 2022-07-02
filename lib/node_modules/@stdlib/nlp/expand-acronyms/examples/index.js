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

var expandAcronyms = require( './../lib' );

var str = 'LOL, this is fun. I am ROFL.';
var out = expandAcronyms( str );
console.log( out );
// => 'laughing out loud, this is fun. I am rolling on the floor laughing.'

str = 'brb, I need to check my mail. thx!';
out = expandAcronyms( str );
console.log( out );
// => 'be right back, I need to check my mail. thanks!'

str = 'OTOH, there are some drawbacks to this approach imho.';
out = expandAcronyms( str );
console.log( out );
// => 'on the other hand, there are some drawbacks to this approach in my humble opinion.'
