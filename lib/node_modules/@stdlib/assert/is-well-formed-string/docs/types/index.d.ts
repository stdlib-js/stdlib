/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Interface defining `isWellFormedString` with methods for testing for primitives and objects, respectively.
*/
interface isWellFormedString {
	/**
	* Tests if a string is well-formed.
	*
	* @param str - string to test
	* @returns boolean indicating whether string is well-formed
	*
	* @example
	* var bool = isWellFormedString( '' );
	* // returns true
	*
	* @example
	* var bool = isWellFormedString( new String( '' ) );
	* // returns true
	*
	* @example
	* var bool = isWellFormedString( '\uDBFF' );
	* // returns false
	*
	* @example
	* var bool = isWellFormedString( '\uDBFFFF\uDBFF' );
	* // returns false
	*
	* @example
	* var bool = isWellFormedString( [] );
	* // returns false
	*
	* @example
	* var bool = isWellFormedString( '-5' );
	* // returns true
	*
	* @example
	* var bool = isWellFormedString( null );
	* // returns false
	*/
	( str: any ): boolean;

	/**
	* Tests if a string is a well-formed string primitive.
	*
	* @param str - string to test
	* @returns boolean indicating if a string is a well-formed string primitive.
	*
	* @example
	* var bool = isWellFormedString.isPrimitive( '' );
	* // returns true
	*
	* @example
	* var bool = isWellFormedString.isPrimitive( new String( '' ) );
	* // returns false
	*/
	isPrimitive( str: any ): boolean;

	/**
	* Tests if a string is a well-formed string object.
	*
	* @param str - string to test
	* @returns boolean indicating if a string is a well-formed string object
	*
	* @example
	* var bool = isWellFormedString.isObject( '' );
	* // returns false
	*
	* @example
	* var bool = isWellFormedString.isObject( new String( '' ) );
	* // returns true
	*/
	isObject( str: any ): boolean;
}

/**
* Tests if a string is well-formed.
*
* @param str - string to test
* @returns boolean indicating whether string is well-formed
*
* @example
* var bool = isWellFormedString( '' );
* // returns true
*
* @example
* var bool = isWellFormedString( new String( '' ) );
* // returns true
*
* @example
* var bool = isWellFormedString( '\uDBFF' );
* // returns false
*
* @example
* var bool = isWellFormedString( '\uDBFFFF\uDBFF' );
* // returns false
*
* @example
* var bool = isWellFormedString( [] );
* // returns false
*
* @example
* var bool = isWellFormedString( '-5' );
* // returns true
*
* @example
* var bool = isWellFormedString( null );
* // returns false
*/
declare var isWellFormedString: isWellFormedString;


// EXPORTS //

export = isWellFormedString;
