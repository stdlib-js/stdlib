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

var removeLast = require( './../lib' );

console.log( removeLast( 'last man standing' ) );
// => 'last man standin'

console.log( removeLast( 'presidential election' ) );
// => 'presidential electio'

console.log( removeLast( 'javaScript' ) );
// => 'javaScrip'

console.log( removeLast( 'Hidden Treasures' ) );
// => 'Hidden Treasure'

console.log( removeLast( 'Lorem ipsum dolor sit amet', 4 ) );
// => 'Lorem ipsum dolor sit '

console.log( removeLast( '🐮🐷🐸🐵', 2 ) );
// => '🐮🐷'
