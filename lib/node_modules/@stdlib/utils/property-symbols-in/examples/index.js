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
var propertySymbolsIn = require( './../lib' );

var hasSymbols = hasSymbolSupport();

function Foo() {
	if ( hasSymbols ) {
		this[ Symbol( 'beep' ) ] = 'boop';
	}
	return this;
}

if ( hasSymbols ) {
	Foo.prototype[ Symbol( 'foo' ) ] = 'bar';
}

var obj = new Foo();
var symbols = propertySymbolsIn( obj );

console.log( symbols );
