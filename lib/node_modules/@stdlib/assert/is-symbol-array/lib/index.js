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
* Test if a value is an array-like object containing only symbols.
*
* @module @stdlib/assert/is-symbol-array
*
* @example
* var isSymbolArray = require( '@stdlib/assert/is-symbol-array' );
*
* var bool = isSymbolArray( [ Symbol( 'abc' ), Symbol( 'def' ) ] );
* // returns true
*
* bool = isSymbolArray( [ Symbol( 'abc' ), 'def' ] );
* // returns false
*
* @example
* var isSymbolArray = require( '@stdlib/assert/is-symbol-array' ).primitives;
*
* var bool = isSymbolArray( [ Symbol( 'abc' ), Symbol( 'def' ) ] );
* // returns true
*
* bool = isSymbolArray( [ Symbol( 'abc' ), Object( Symbol( 'def' ) ) ] );
* // returns false
*
* @example
* var isSymbolArray = require( '@stdlib/assert/is-symbol-array' ).objects;
*
* var bool = isSymbolArray( [ Object( Symbol( 'abc' ) ), Object( Symbol( 'def' ) ) ] );
* // returns true
*
* bool = isSymbolArray( [ Symbol( 'abc' ), Symbol( 'def' ) ] );
* // returns false
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var arrayfun = require( '@stdlib/assert/tools/array-like-function' );
var isSymbol = require( '@stdlib/assert/is-symbol' );


// MAIN //

var isSymbolArray = arrayfun( isSymbol );
setReadOnly( isSymbolArray, 'primitives', arrayfun( isSymbol.isPrimitive ) );
setReadOnly( isSymbolArray, 'objects', arrayfun( isSymbol.isObject ) );


// EXPORTS //

module.exports = isSymbolArray;
