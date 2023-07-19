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

var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var isSymbol = require( './../lib' );

var bool;
if ( hasSymbolSupport() ) {
	bool = isSymbol( Symbol( 'beep' ) );
	console.log( bool );
	// => true
} else {
	console.log( 'Environment does not support symbols.' );
}
bool = isSymbol( 'beep' );
console.log( bool );
// => false

bool = isSymbol( {} );
console.log( bool );
// => false

bool = isSymbol( [] );
console.log( bool );
// => false

bool = isSymbol( null );
console.log( bool );
// => false

bool = isSymbol( void 0 );
console.log( bool );
// => false

bool = isSymbol( true );
console.log( bool );
// => false

bool = isSymbol( function foo() {} );
console.log( bool );
// => false
