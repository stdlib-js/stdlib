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

var hasOwnProp = require( './../lib' );

var bool = hasOwnProp( { 'a': 'b' }, 'a' );
console.log( bool );
// => true

bool = hasOwnProp( { 'a': 'b' }, 'c' );
console.log( bool );
// => false

bool = hasOwnProp( { 'a': 'b' }, null );
console.log( bool );
// => false

bool = hasOwnProp( {}, 'hasOwnProperty' );
console.log( bool );
// => false

bool = hasOwnProp( null, 'a' );
console.log( bool );
// => false

bool = hasOwnProp( void 0, 'a' );
console.log( bool );
// => false

bool = hasOwnProp( { 'null': false }, null );
console.log( bool );
// => true

bool = hasOwnProp( { '[object Object]': false }, {} );
console.log( bool );
// => true
