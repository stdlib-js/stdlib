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
* Interface defining `isEmptyString` with methods for testing for primitives and objects, respectively.
*/
interface IsEmptyString {
	/**
	* Tests if a value is an empty string.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an empty string
	*
	* @example
	* var bool = isEmptyString( '' );
	* // returns true
	*
	* @example
	* var bool = isEmptyString( 'beep' );
	* // returns false
	*
	* @example
	* var bool = isEmptyString( [] );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is an empty string primitive.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an empty string primitive
	*
	* @example
	* var bool = isEmptyString.isPrimitive( '' );
	* // returns true
	*
	* @example
	* var bool = isEmptyString.isPrimitive( 'beep' );
	* // returns false
	*
	* @example
	* var bool = isEmptyString.isPrimitive( [] );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is an empty string object.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an empty string object
	*
	* @example
	* var bool = isEmptyString.isObject( '' );
	* // returns false
	*
	* @example
	* var bool = isEmptyString.isObject( new String( '' ) );
	* // returns true
	*
	* @example
	* var bool = isEmptyString.isObject( [] );
	* // returns false
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is an empty string.
*
* @param value - value to test
* @returns boolean indicating whether value is an empty string
*
* @example
* var bool = isEmptyString( '' );
* // returns true
*
* @example
* var bool = isEmptyString( 'beep' );
* // returns false
*
* @example
* var bool = isEmptyString( [] );
* // returns false
*
* @example
* var bool = isEmptyString.isPrimitive( '' );
* // returns true
*
* @example
* var bool = isEmptyString.isObject( '' );
* // returns false
*/
declare var isEmptyString: IsEmptyString;


// EXPORTS //

export = isEmptyString;
