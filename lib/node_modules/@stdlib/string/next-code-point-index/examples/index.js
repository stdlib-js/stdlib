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

var nextCodePointIndex = require( './../lib' );

console.log( nextCodePointIndex( 'last man standing', 4 ) );
// => 5

console.log( nextCodePointIndex( 'presidential election', 8 ) );
// => 9

console.log( nextCodePointIndex( '𐒻𐓟𐒻𐓟', 0 ) );
// => 2

console.log( nextCodePointIndex( '🌷', 0 ) );
// => -1
