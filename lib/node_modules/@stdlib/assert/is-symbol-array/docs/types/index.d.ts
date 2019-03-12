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
* Interface defining `isSymbolArray` with methods for testing for primitive and object arrays, respectively.
*/
interface IsSymbolArray {
	/**
	* Tests if a value is an array-like object containing only symbols.
	*
	* ## Notes
	*
	* -   In pre-ES2015 environments, the function always returns `false`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array of strings
	*
	* @example
	* var bool = isSymbolArray( [ Symbol( 'abc' ), Symbol( 'def' ) ] );
	* // returns true
	*
	* @example
	* var bool = isSymbolArray( [ Symbol( 'abc' ), 'def' ] );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	*  Tests if a value is an array-like object containing only `symbol` primitives.
	*
	* ## Notes
	*
	* -   In pre-ES2015 environments, the function always returns `false`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array containing only string primitives
	*
	* @example
	* var bool = isSymbolArray.primitives( [ Symbol( 'abc' ), Symbol( 'def' ) ] );
	* // returns true
	*
	* @example
	* var bool = isSymbolArray.primitives( [ Symbol( 'abc' ), Object( Symbol( 'def' ) ) ] );
	* // returns false
	*/
	primitives( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only `Symbol` objects.
	*
	*
	* ## Notes
	*
	* -   In pre-ES2015 environments, the function always returns `false`.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is an array-like object containing only `Symbol` objects
	*
	* @example
	* var bool = isSymbolArray.objects( [ Object( Symbol( 'abc' ) ), Object( Symbol( 'def' ) ) ] );
	* // returns true
	*
	* @example
	* var bool = isSymbolArray.objects( [ Symbol( 'abc' ), Symbol( 'def' ) ] );
	* // returns false
	*/
	objects( value: any ): boolean;
}

/**
* Tests if a value is an array-like object containing only symbols.
*
* ## Notes
*
* -   In pre-ES2015 environments, the function always returns `false`.
*
* @param value - value to test
* @returns boolean indicating whether value is an array of strings
*
* @example
* var bool = isSymbolArray( [ Symbol( 'abc' ), Symbol( 'def' ) ] );
* // returns true
*
* @example
* var bool = isSymbolArray( [ Symbol( 'abc' ), 'def' ] );
* // returns false
*
* @example
* var bool = isSymbolArray.primitives( [ Symbol( 'abc' ), Symbol( 'def' ) ] );
* // returns true
*
* @example
* var bool = isSymbolArray.objects( [ Object( Symbol( 'abc' ) ), Object( Symbol( 'def' ) ) ] );
* // returns true
*/
declare var isSymbolArray: IsSymbolArray;


// EXPORTS //

export = isSymbolArray;
