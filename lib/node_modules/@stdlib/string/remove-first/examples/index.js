/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var removeFirst = require( './../lib' );

console.log( removeFirst( 'last man standing' ) );
// => 'ast man standing'

console.log( removeFirst( 'presidential election' ) );
// => 'residential election'

console.log( removeFirst( 'JavaScript' ) );
// => 'avaScript'

console.log( removeFirst( 'Hidden Treasures' ) );
// => 'idden Treasures'

console.log( removeFirst( 'The Last of the Mohicans', 4 ) );
// => 'Last of the Mohicans'

console.log( removeFirst( '🐶🐮🐷🐰🐸', 2 ) );
// => '🐷🐰🐸'

console.log( removeFirst( '🐶🐮🐷🐰🐸', 10 ) );
// => ''
