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

var isReadablePropertyIn = require( './../lib' );

var bool = isReadablePropertyIn( [ 'a' ], 'length' );
console.log( bool );
// => true

bool = isReadablePropertyIn( { 'a': 'b' }, 'a' );
console.log( bool );
// => true

bool = isReadablePropertyIn( [ 'a' ], 0 );
console.log( bool );
// => true

bool = isReadablePropertyIn( { 'null': false }, null );
console.log( bool );
// => true

bool = isReadablePropertyIn( { '[object Object]': false }, {} );
console.log( bool );
// => true

bool = isReadablePropertyIn( {}, 'toString' );
console.log( bool );
// => true

bool = isReadablePropertyIn( {}, 'hasOwnProperty' );
console.log( bool );
// => true

bool = isReadablePropertyIn( null, 'a' );
console.log( bool );
// => false

bool = isReadablePropertyIn( void 0, 'a' );
console.log( bool );
// => false
