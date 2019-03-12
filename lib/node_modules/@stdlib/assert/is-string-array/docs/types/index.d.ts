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
* Interface defining `isStringArray` with methods for testing for primitive and object arrays, respectively.
*/
interface IsStringArray {
	/**
	* Tests if a value is an array of strings.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array of strings
	*
	* @example
	* var bool = isStringArray( [ 'abc', 'def' ] );
	* // returns true
	*
	* @example
	* var bool = isStringArray( [ 'abc', 123 ] );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is an array containing only string primitives.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array containing only string primitives
	*
	* @example
	* var bool = isStringArray.primitives( [ 'abc', 'def' ] );
	* // returns true
	*
	* @example
	* var bool = isStringArray.primitives( [ 'abc', new String( 'def' ) ] );
	* // returns false
	*/
	primitives( value: any ): boolean;

	/**
	* Tests if a value is an array containing only `String` objects.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array containing only `String` objects
	*
	* @example
	* var bool = isStringArray.objects( [ new String( 'abc' ), new String( 'def' ) ] );
	* // returns true
	*
	* @example
	* var bool = isStringArray.objects( [ new String( 'abc' ), 'def' ] );
	* // returns false
	*/
	objects( value: any ): boolean;
}

/**
* Tests if a value is an array of strings.
*
* @param value - value to test
* @returns boolean indicating whether value is an array of strings
*
* @example
* var bool = isStringArray( [ 'abc', 'def' ] );
* // returns true
*
* @example
* var bool = isStringArray( [ 'abc', 123 ] );
* // returns false
*
* @example
* var bool = isStringArray.primitives( [ 'abc', 'def' ] );
* // returns true
*
* @example
* var bool = isStringArray.objects( [ new String( 'abc' ), new String( 'def' ) ] );
* // returns true
*/
declare var isStringArray: IsStringArray;


// EXPORTS //

export = isStringArray;
