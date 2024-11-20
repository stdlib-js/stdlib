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
var Buffer = require( '@stdlib/buffer/ctor' );
var isBuffer = require( './../lib' );

console.log( isBuffer( new Buffer( [ 1, 2, 3, 4 ] ) ) );
// => true

console.log( isBuffer( new Buffer( 'beep' ) ) );
// => true

console.log( isBuffer( [] ) );
// => false

console.log( isBuffer( {} ) );
// => false

console.log( isBuffer( new Int8Array() ) );
// => false

console.log( isBuffer( function foo() {} ) );
// => false

console.log( isBuffer( null ) );
// => false

console.log( isBuffer( void 0 ) );
// => false

console.log( isBuffer( 'beep' ) );
// => false

console.log( isBuffer( 5 ) );
// => false
