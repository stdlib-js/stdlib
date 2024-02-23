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
* Interface defining `isPositiveFinite` with methods for testing for primitives and objects, respectively.
*/
interface isPositiveFinite {
	/**
	* Tests if a value is a non-infinite positive number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a non-infinite positive number
	*
	* var bool = isPositiveFinite( 5.0 );
	* // returns true
	*
	* bool = isPositiveFinite( new Number( 5.0 ) );
	* // returns true
	*
	* bool = isPositiveFinite( 3.14 );
	* // returns true
	*
	* bool = isPositiveFinite( new Number( 5.0/0.0 ) );
	* // returns false
	*
	* bool = isPositiveFinite( -5.0 );
	* // returns false
	*
	* bool = isPositiveFinite( 5.0/0.0 );
	* // returns false
	*
	* bool = isPositiveFinite( null );
	* // returns false
	*/
	( value: any ): value is number | Number;

	/**
	* Tests if a value is a number primitive having a non-infinite positive value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive having a non-infinite positive value
	*
	* @example
	* var bool = isPositiveFinite.isPrimitive( 3.0 );
	* // returns true
	*
	* @example
	* var bool = isPositiveFinite.isPrimitive( 3.0/0.0 );
	* // returns true
	*
	* @example
	* var bool = isPositiveFinite.isPrimitive( new Number( 3.0 ) );
	* // returns false
	* @example
	* var bool = isPositiveFinite.isPrimitive( new Number( 3.0/0.0 ) );
	* // returns false
	*/
	isPrimitive( value: any ): value is number;

	/**
	* Tests if a value is a number object having a non-infinite positive value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having a non-infinite positive value
	*
	* @example
	* var bool = isPositiveFinite.isObject( 3.0 );
	* // returns false
	* @example
	* var bool = isPositiveFinite.isObject( new Number( 3.0/0.0 ));
	* // returns false
	* @example
	* var bool = isPositiveFinite.isObject( new Number( 3.0 ) );
	* // returns true
	*/
	isObject( value: any ): value is Number;
}

/**
* Tests if a value is a non-infinite positive number.
*
* @param value - value to test
* @returns boolean indicating whether value is a non-infinite positive number
*
* @example
* var bool = isPositiveFinite( 5.0 );
* // returns true
*
* @example
* var bool = isPositiveFinite( new Number( 5.0 ) );
* // returns true
*
* @example
* var bool = isPositiveFinite( 3.14 );
* // returns true
*
* @example
* var bool = isPositiveFinite( 5.0/0.0 );
* // returns false
*
* @example
* var bool = isPositiveFinite( new Number( 5.0/0.0 ) );
* // returns false
*
* @example
* var bool = isPositiveFinite( -5.0 );
* // returns false
*
* @example
* var bool = isPositiveFinite( null );
* // returns false
*
* @example
* var bool = isPositiveFinite.isPrimitive( 3.0 );
* // returns true
*
* @example
* var bool = isPositiveFinite.isPrimitive( 3.0/0.0 );
* // returns false
*
* @example
* var bool = isPositiveFinite.isObject( 3.0 );
* // returns false
*/
declare var isPositiveFinite: isPositiveFinite;


// EXPORTS //

export = isPositiveFinite;
