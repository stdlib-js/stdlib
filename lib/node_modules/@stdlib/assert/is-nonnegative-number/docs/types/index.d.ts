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
* Interface defining `isNonNegativeNumber` with methods for testing for primitives and objects, respectively.
*/
interface IsNonNegativeNumber {
	/**
	* Tests if a value is a nonnegative number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a nonnegative number
	*
	* @example
	* var bool = isNonNegativeNumber( 5.0 );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeNumber( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeNumber( 3.14 );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeNumber( -5.0 );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeNumber( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a number primitive having a nonnegative value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive having a nonnegative number value
	*
	* @example
	* var bool = isNonNegativeNumber.isPrimitive( 3.0 );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeNumber.isPrimitive( new Number( 3.0 ) );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a number object having a nonnegative value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having a nonnegative number value
	*
	* @example
	* var bool = isNonNegativeNumber.isObject( 3.0 );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeNumber.isObject( new Number( 3.0 ) );
	* // returns true
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is a nonnegative number.
*
* @param value - value to test
* @returns boolean indicating whether value is a nonnegative number
*
* @example
* var bool = isNonNegativeNumber( 5.0 );
* // returns true
*
* @example
* var bool = isNonNegativeNumber( new Number( 5.0 ) );
* // returns true
*
* @example
* var bool = isNonNegativeNumber( 3.14 );
* // returns true
*
* @example
* var bool = isNonNegativeNumber( -5.0 );
* // returns false
*
* @example
* var bool = isNonNegativeNumber( null );
* // returns false
*
* @example
* var bool = isNonNegativeNumber.isPrimitive( 3.0 );
* // returns true
*
* @example
* var bool = isNonNegativeNumber.isObject( new Number( 3.0 ) );
* // returns true
*/
declare var isNonNegativeNumber: IsNonNegativeNumber;


// EXPORTS //

export = isNonNegativeNumber;
