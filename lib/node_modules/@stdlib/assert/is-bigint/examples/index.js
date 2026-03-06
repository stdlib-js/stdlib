/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );
var BigInt = require( '@stdlib/bigint/ctor' );
var isBigInt = require( './../lib' );

var bool;
if ( hasBigIntSupport() ) {
	bool = isBigInt( BigInt( '1' ) );
	console.log( bool );
	// => true
} else {
	console.log( 'Environment does not support BigInts.' );
}
bool = isBigInt( 1 );
console.log( bool );
// => false

bool = isBigInt( '1' );
console.log( bool );
// => false

bool = isBigInt( {} );
console.log( bool );
// => false

bool = isBigInt( [] );
console.log( bool );
// => false

bool = isBigInt( null );
console.log( bool );
// => false

bool = isBigInt( void 0 );
console.log( bool );
// => false

bool = isBigInt( true );
console.log( bool );
// => false

bool = isBigInt( function foo() {} );
console.log( bool );
// => false
