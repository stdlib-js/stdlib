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

/* eslint-disable no-restricted-syntax, no-empty-function */

'use strict';

var Int8Array = require( '@stdlib/array/int8' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var isObjectLike = require( './../lib' );

console.log( isObjectLike( {} ) );
// => true

console.log( isObjectLike( [] ) );
// => true

console.log( isObjectLike( /./ ) );
// => true

console.log( isObjectLike( new Date() ) );
// => true

console.log( isObjectLike( Math ) );
// => true

console.log( isObjectLike( JSON ) );
// => true

console.log( isObjectLike( new Int8Array() ) );
// => true

console.log( isObjectLike( new ArrayBuffer() ) );
// => true

console.log( isObjectLike( 'a' ) );
// => false

console.log( isObjectLike( 5 ) );
// => false

console.log( isObjectLike( null ) );
// => false

console.log( isObjectLike( void 0 ) );
// => false

console.log( isObjectLike( function foo() {} ) );
// => false
