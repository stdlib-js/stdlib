/*
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

// TypeScript Version: 2.0

/**
* Interface defining `isBigInt` with methods for testing for primitives and objects, respectively.
*/
interface IsBigInt {
	/**
	* Tests if a value is a BigInt.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a BigInt
	*
	* @example
	* var BigInt = require( `@stdlib/bigint/ctor` );
	*
	* var bool = isBigInt( BigInt( '1' ) );
	* // returns true
	*
	* @example
	* var BigInt = require( `@stdlib/bigint/ctor` );
	*
	* var bool = isBigInt( Object( BigInt( '1' ) ) );
	* // returns true
	*
	* @example
	* var bool = isBigInt( {} );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a BigInt primitive.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a BigInt primitive
	*
	* @example
	* var BigInt = require( `@stdlib/bigint/ctor` );
	*
	* var bool = isBigInt.isPrimitive( BigInt( '1' ) );
	* // returns true
	*
	* @example
	* var BigInt = require( `@stdlib/bigint/ctor` );
	*
	* var bool = isBigInt.isPrimitive( Object( BigInt( '1' ) ) );
	* // returns false
	*
	* @example
	* var bool = isBigInt.isPrimitive( {} );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a BigInt object.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a BigInt object
	*
	* @example
	* var BigInt = require( `@stdlib/bigint/ctor` );
	*
	* var bool = isBigInt.isObject( BigInt( '1' ) );
	* // returns false
	*
	* @example
	* var BigInt = require( `@stdlib/bigint/ctor` );
	*
	* var bool = isBigInt.isObject( Object( BigInt( '1' ) ) );
	* // returns true
	*
	* @example
	* var bool = isBigInt.isObject( {} );
	* // returns false
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is a BigInt.
*
* @param value - value to test
* @returns boolean indicating whether value is a BigInt
*
* @example
* var BigInt = require( `@stdlib/bigint/ctor` );
*
* var bool = isBigInt.isPrimitive( BigInt( '1' ) );
* // returns true
*
* @example
* var BigInt = require( `@stdlib/bigint/ctor` );
*
* var bool = isBigInt.isPrimitive( Object( BigInt( '1' ) ) );
* // returns false
*
* @example
* var BigInt = require( `@stdlib/bigint/ctor` );
*
* var bool = isBigInt.isPrimitive( BigInt( '1' ) );
* // returns true
*
* @example
* var BigInt = require( `@stdlib/bigint/ctor` );
*
* var bool = isBigInt.isPrimitive( Object( BigInt( '1' ) ) );
* // returns false
*
* @example
* var BigInt = require( `@stdlib/bigint/ctor` );
*
* var bool = isBigInt.isObject( BigInt( '1' ) );
* // returns false
*
* @example
* var BigInt = require( `@stdlib/bigint/ctor` );
*
* var bool = isBigInt.isObject( Object( BigInt( '1' ) ) );
* // returns true
*/
declare var isBigInt: IsBigInt;


// EXPORTS //

export = isBigInt;
