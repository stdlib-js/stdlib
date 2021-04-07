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

/**
* Test if a value is a symbol.
*
* @module @stdlib/assert/is-symbol
*
* @example
* var Symbol = require( '@stdlib/symbol/ctor' );
* var isSymbol = require( '@stdlib/assert/is-symbol' );
*
* var bool = isSymbol( Symbol( 'beep' ) );
* // returns true
*
* bool = isSymbol( Object( Symbol( 'beep' ) ) );
* // returns true
*
* bool = isSymbol( {} );
* // returns false
*
* @example
* var Symbol = require( '@stdlib/symbol/ctor' );
* var isSymbol = require( '@stdlib/assert/is-symbol' ).isPrimitive;
*
* var bool = isSymbol( Symbol( 'beep' ) );
* // returns true
*
* bool = isSymbol( Object( Symbol( 'beep' ) ) );
* // returns false
*
* bool = isSymbol( {} );
* // returns false
*
* @example
* var Symbol = require( '@stdlib/symbol/ctor' );
* var isSymbolObject = require( '@stdlib/assert/is-symbol' ).isObject;
*
* var bool = isSymbolObject( Symbol( 'beep' ) );
* // returns false
*
* bool = isSymbolObject( Object( Symbol( 'beep' ) ) );
* // returns true
*
* bool = isSymbolObject( {} );
* // returns false
*/

// MODULES //

var hasSymbols = require( '@stdlib/assert/has-symbol-support' );
var main = require( './main.js' );
var polyfill = require( './polyfill.js' );


// MAIN //

var isSymbol;
if ( hasSymbols() ) {
	isSymbol = main;
} else {
	isSymbol = polyfill;
}


// EXPORTS //

module.exports = isSymbol;
