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

var int2slice = require( './../lib' );

var s = int2slice( -1, 7, false );
console.log( '%s', s.toString() );

s = int2slice( 3, 5, false );
console.log( '%s', s.toString() );

s = int2slice( -3, 5, false );
console.log( '%s', s.toString() );

s = int2slice( 10, 5, false );
console.log( '%s', s.toString() );

s = int2slice( -10, 5, false );
console.log( '%s', s.toString() );
