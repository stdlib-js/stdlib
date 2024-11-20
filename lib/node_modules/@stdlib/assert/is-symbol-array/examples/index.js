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

var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var isSymbolArray = require( './../lib' );

var hasSymbols = hasSymbolSupport();
var bool;

if ( hasSymbols ) {
	bool = isSymbolArray( [ Symbol( 'beep' ), Symbol( 'boop' ) ] );
	console.log( bool );
	// => true

	bool = isSymbolArray( [ Symbol( 'beep' ), 'boop' ] );
	console.log( bool );
	// => false

	bool = isSymbolArray( Symbol( 'beep' ) );
	console.log( bool );
	// => false
} else {
	console.log( 'Environment does not support symbols.' );
}
bool = isSymbolArray( [ 'beep', 'boop' ] );
console.log( bool );
// => false

bool = isSymbolArray( [] );
console.log( bool );
// => false

bool = isSymbolArray( 'abc' );
console.log( bool );
// => false

bool = isSymbolArray( null );
console.log( bool );
// => false
