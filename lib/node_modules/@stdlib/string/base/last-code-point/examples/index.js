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

var lastCodePoint = require( './../lib' );

console.log( lastCodePoint( 'Hello World', 1 ) );
// => 'd'

console.log( lastCodePoint( 'JavaScript', 6 ) );
// => 'Script'

console.log( lastCodePoint( 'index', 10 ) );
// => 'index'

console.log( lastCodePoint( 'अनुच्छेद', 1 ) );
// => 'द'

console.log( lastCodePoint( '六书/六書', 3 ) );
// => '/六書'
