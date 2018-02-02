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

var allocUnsafe = require( '@stdlib/buffer/alloc-unsafe' );
var copyBuffer = require( './../lib' );

var bool;
var b1;
var b2;
var i;

// Allocate a new buffer:
b1 = allocUnsafe( 10 );

// Generate a new buffer from the existing buffer:
b2 = copyBuffer( b1 );

bool = ( b2 === b1 );
console.log( 'Same reference: %s', bool );
// => Same reference: false

bool = ( b2.length === b1.length );
console.log( 'Same length: %s', bool );
// => Same reference: true

for ( i = 0; i < b2.length; i++ ) {
	console.log( b2[ i ] === b1[ i ] );
	// => true
}
