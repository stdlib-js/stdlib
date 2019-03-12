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
* Interface defining `isNegativeZero` with methods for testing for primitives and objects, respectively.
*/
interface IsNegativeZero {
	/**
	* Tests if a value is equal to negative zero.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is equal to negative zero
	*
	* @example
	* var bool = isNegativeZero( -0.0 );
	* // returns true
	*
	* @example
	* var bool = isNegativeZero( new Number( -0.0 ) );
	* // returns true
	*
	* @example
	* var bool = isNegativeZero( -3.14 );
	* // returns false
	*
	* @example
	* var bool = isNegativeZero( 5.0 );
	* // returns false
	*
	* @example
	* var bool = isNegativeZero( 0.0 );
	* // returns false
	*
	* @example
	* var bool = isNegativeZero( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a number primitive equal to negative zero.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive equal to negative zero
	*
	* @example
	* var bool = isNegativeZero.isPrimitive( -0.0 );
	* // returns true
	*
	* @example
	* var bool = isNegativeZero.isPrimitive( new Number( -0.0 ) );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a number object having a value equal to negative zero.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having a value equal to negative zero
	*
	* @example
	* var bool = isNegativeZero.isObject( -0.0 );
	* // returns false
	*
	* @example
	* var bool = isNegativeZero.isObject( new Number( -0.0 ) );
	* // returns true
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is equal to negative zero.
*
* @param value - value to test
* @returns boolean indicating whether value is equal to negative zero
*
* @example
* var bool = isNegativeZero( -0.0 );
* // returns true
*
* @example
* var bool = isNegativeZero( new Number( -0.0 ) );
* // returns true
*
* @example
* var bool = isNegativeZero( -3.14 );
* // returns false
*
* @example
* var bool = isNegativeZero( 5.0 );
* // returns false
*
* @example
* var bool = isNegativeZero( 0.0 );
* // returns false
*
* @example
* var bool = isNegativeZero( null );
* // returns false
*
* @example
* var bool = isNegativeZero.isPrimitive( -0.0 );
* // returns true
*
* @example
* var bool = isNegativeZero.isObject( new Number( -0.0 ) );
* // returns true
*/
declare var isNegativeZero: IsNegativeZero;


// EXPORTS //

export = isNegativeZero;
