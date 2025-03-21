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

// MODULES //

var isBoolean = require( '@stdlib/assert/is-boolean' ).isObject;
var isNumber = require( '@stdlib/assert/is-number' ).isObject;
var isString = require( '@stdlib/assert/is-string' ).isObject;
var isSymbol = require( '@stdlib/assert/is-symbol' ).isObject;


// MAIN //

/**
* Tests if a value is a JavaScript boxed primitive.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a JavaScript boxed primitive
*
* @example
* var bool = isBoxedPrimitive( new String( 'beep' ) );
* // returns true
*
* @example
* var bool = isBoxedPrimitive( new Number( 3.21 ) );
* // returns true
*
* @example
* var Symbol = require( '@stdlib/symbol/ctor' );
* var bool = isBoxedPrimitive( Object( Symbol( 'beep' ) ) );
* // returns true
*
* @example
* var bool = isBoxedPrimitive( true );
* // returns false
*
* @example
* var bool = isBoxedPrimitive( {} );
* // returns false
*
* @example
* var Symbol = require( '@stdlib/symbol/ctor' );
* var bool = isBoxedPrimitive( Symbol( 'beep' ) );
* // returns false
*/
function isBoxedPrimitive( value ) {
	if ( typeof value !== 'object' ) {
		return false;
	}
	return (
		isBoolean( value ) ||
		isNumber( value ) ||
		isString( value ) ||
		isSymbol( value )
	);
}


// EXPORTS //

module.exports = isBoxedPrimitive;
