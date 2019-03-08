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
* Interface defining `isNegativeNumber` with methods for testing for primitives and objects, respectively.
*/
interface IsNegativeNumber {
	/**
	* Tests if a value is a negative number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a negative number
	*
	* @example
	* var bool = isNegativeNumber( -5.0 );
	* // returns true
	*
	* @example
	* var bool = isNegativeNumber( new Number( -5.0 ) );
	* // returns true
	*
	* @example
	* var bool = isNegativeNumber( -3.14 );
	* // returns true
	*
	* @example
	* var bool = isNegativeNumber( 5.0 );
	* // returns false
	*
	* @example
	* var bool = isNegativeNumber( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a number primitive having a negative value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive having a negative value
	*
	* @example
	* var bool = isNegativeNumber.isPrimitive( -3.0 );
	* // returns true
	*
	* @example
	* var bool = isNegativeNumber.isPrimitive( new Number( -3.0 ) );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a number object having a negative value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having a negative value
	*
	* @example
	* var bool = isNegativeNumber.isObject( -3.0 );
	* // returns false
	*
	* @example
	* var bool = isNegativeNumber.isObject( new Number( -3.0 ) );
	* // returns true
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is a negative number.
*
* @param value - value to test
* @returns boolean indicating whether value is a negative number
*
* @example
* var bool = isNegativeNumber( -5.0 );
* // returns true
*
* @example
* var bool = isNegativeNumber( new Number( -5.0 ) );
* // returns true
*
* @example
* var bool = isNegativeNumber( -3.14 );
* // returns true
*
* @example
* var bool = isNegativeNumber( 5.0 );
* // returns false
*
* @example
* var bool = isNegativeNumber( null );
* // returns false
*
* @example
* var bool = isNegativeNumber.isPrimitive( -3.0 );
* // returns true
*
* @example
* var bool = isNegativeNumber.isObject( new Number( -3.0 ) );
* // returns true
*/
declare var isNegativeNumber: IsNegativeNumber;


// EXPORTS //

export = isNegativeNumber;
