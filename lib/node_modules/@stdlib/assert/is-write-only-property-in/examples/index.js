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

var isWriteOnlyPropertyIn = require( './../lib' );

var bool = isWriteOnlyPropertyIn( 'a', 'length' );
console.log( bool );
// => false

bool = isWriteOnlyPropertyIn( { 'a': 'b' }, 'a' );
console.log( bool );
// => false

bool = isWriteOnlyPropertyIn( [ 'a' ], 0 );
console.log( bool );
// => false

bool = isWriteOnlyPropertyIn( { 'null': false }, null );
console.log( bool );
// => false

bool = isWriteOnlyPropertyIn( { '[object Object]': false }, {} );
console.log( bool );
// => false

bool = isWriteOnlyPropertyIn( {}, 'toString' );
console.log( bool );
// => false

bool = isWriteOnlyPropertyIn( {}, 'hasOwnProperty' );
console.log( bool );
// => false

bool = isWriteOnlyPropertyIn( null, 'a' );
console.log( bool );
// => false

bool = isWriteOnlyPropertyIn( void 0, 'a' );
console.log( bool );
// => false
