/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Interface defining `isSymbol` with methods for testing for primitives and objects, respectively.
*/
interface IsSymbol {
	/**
	* Tests if a value is a symbol.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a symbol
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	*
	* var bool = isSymbol( Symbol( 'beep' ) );
	* // returns true
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	*
	* var bool = isSymbol( Object( Symbol( 'beep' ) ) );
	* // returns true
	*
	* @example
	* var bool = isSymbol( {} );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a symbol primitive.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a symbol primitive
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	*
	* var bool = isSymbol.isPrimitive( Symbol( 'beep' ) );
	* // returns true
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	*
	* var bool = isSymbol.isPrimitive( Object( Symbol( 'beep' ) ) );
	* // returns false
	*
	* @example
	* var bool = isSymbol.isPrimitive( {} );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a symbol object.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a symbol object
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	*
	* var bool = isSymbol.isObject( Symbol( 'beep' ) );
	* // returns false
	*
	* @example
	* var Symbol = require( `@stdlib/symbol/ctor` );
	*
	* var bool = isSymbol.isObject( Object( Symbol( 'beep' ) ) );
	* // returns true
	*
	* @example
	* var bool = isSymbol.isObject( {} );
	* // returns false
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is a symbol.
*
* @param value - value to test
* @returns boolean indicating whether value is a symbol
*
* @example
* var Symbol = require( `@stdlib/symbol/ctor` );
*
* var bool = isSymbol.isPrimitive( Symbol( 'beep' ) );
* // returns true
*
* @example
* var Symbol = require( `@stdlib/symbol/ctor` );
*
* var bool = isSymbol.isPrimitive( Object( Symbol( 'beep' ) ) );
* // returns false
*
* @example
* var Symbol = require( `@stdlib/symbol/ctor` );
*
* var bool = isSymbol.isPrimitive( Symbol( 'beep' ) );
* // returns true
*
* @example
* var Symbol = require( `@stdlib/symbol/ctor` );
*
* var bool = isSymbol.isPrimitive( Object( Symbol( 'beep' ) ) );
* // returns false
*
* @example
* var Symbol = require( `@stdlib/symbol/ctor` );
*
* var bool = isSymbol.isObject( Symbol( 'beep' ) );
* // returns false
*
* @example
* var Symbol = require( `@stdlib/symbol/ctor` );
*
* var bool = isSymbol.isObject( Object( Symbol( 'beep' ) ) );
* // returns true
*/
declare var isSymbol: IsSymbol;


// EXPORTS //

export = isSymbol;
