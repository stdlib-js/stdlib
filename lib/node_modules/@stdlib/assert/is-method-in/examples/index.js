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

/* eslint-disable object-curly-newline */

'use strict';

var isMethodIn = require( './../lib' );

var bool = isMethodIn( {}, 'toString' );
console.log( bool );
// => true

bool = isMethodIn( { 'a': 'b' }, 'a' );
console.log( bool );
// => false

bool = isMethodIn( { 'a': 'b' }, 'c' );
console.log( bool );
// => false

bool = isMethodIn( { 'a': 'b' }, null );
console.log( bool );
// => false

bool = isMethodIn( null, 'a' );
console.log( bool );
// => false

bool = isMethodIn( void 0, 'a' );
console.log( bool );
// => false

bool = isMethodIn( { 'null': isMethodIn }, null );
console.log( bool );
// => true

bool = isMethodIn( { '[object Object]': isMethodIn }, {} );
console.log( bool );
// => true
