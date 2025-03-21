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

var lastGraphemeCluster = require( './../lib' );

console.log( lastGraphemeCluster( 'Hello World!', 1 ) );
// => '!'

console.log( lastGraphemeCluster( 'JavaScript', 6 ) );
// => 'Script'

console.log( lastGraphemeCluster( 'stdlib', 10 ) );
// => 'stdlib'

console.log( lastGraphemeCluster( '🐶🐮🐷🐰🐸', 2 ) );
// => '🐰🐸'

console.log( lastGraphemeCluster( '六书/六書', 2 ) );
// => '六書'
