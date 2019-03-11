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
* Interface defining `isPositiveNumber` with methods for testing for primitives and objects, respectively.
*/
interface IsPositiveNumber {
	/**
	* Tests if a value is a positive number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a positive number
	*
	* @example
	* var bool = isPositiveNumber( 5.0 );
	* // returns true
	*
	* @example
	* var bool = isPositiveNumber( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = isPositiveNumber( 3.14 );
	* // returns true
	*
	* @example
	* var bool = isPositiveNumber( -5.0 );
	* // returns false
	*
	* @example
	* var bool = isPositiveNumber( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a number primitive having a positive value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive having a positive value
	*
	* @example
	* var bool = isPositiveNumber.isPrimitive( 3.0 );
	* // returns true
	*
	* @example
	* var bool = isPositiveNumber.isPrimitive( new Number( 3.0 ) );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a number object having a positive value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having a positive value
	*
	* @example
	* var bool = isPositiveNumber.isObject( 3.0 );
	* // returns false
	*
	* @example
	* var bool = isPositiveNumber.isObject( new Number( 3.0 ) );
	* // returns true
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is a positive number.
*
* @param value - value to test
* @returns boolean indicating whether value is a positive number
*
* @example
* var bool = isPositiveNumber( 5.0 );
* // returns true
*
* @example
* var bool = isPositiveNumber( new Number( 5.0 ) );
* // returns true
*
* @example
* var bool = isPositiveNumber( 3.14 );
* // returns true
*
* @example
* var bool = isPositiveNumber( -5.0 );
* // returns false
*
* @example
* var bool = isPositiveNumber( null );
* // returns false
*
* @example
* var bool = isPositiveNumber.isPrimitive( 3.0 );
* // returns true
*
* @example
* var bool = isPositiveNumber.isObject( 3.0 );
* // returns false
*/
declare var isPositiveNumber: IsPositiveNumber;


// EXPORTS //

export = isPositiveNumber;
