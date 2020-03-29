/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Interface describing methods for testing for primitives and objects.
*/
interface IsSquareNumber {
	/**
	* Tests if a value is a square number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a square number
	*
	* @example
	* var bool = isSquareNumber( 4.0 );
	* // returns true
	*
	* @example
	* var bool = isSquareNumber( new Number( 4.0 ) );
	* // returns true
	*
	* @example
	* var bool = isSquareNumber( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isSquareNumber( -5.0 );
	* // returns false
	*
	* @example
	* var bool = isSquareNumber( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a number primitive having a value which is a square number.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive having a value which is a square number
	*
	* @example
	* var bool = isSquareNumber.isPrimitive( 4.0 );
	* // returns true
	*
	* @example
	* var bool = isSquareNumber.isPrimitive( new Number( 4.0 ) );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a number object having a value which is a square number.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having a value which is a square number
	*
	* @example
	* var bool = isSquareNumber.isObject( 4.0 );
	* // returns false
	*
	* @example
	* var bool = isSquareNumber.isObject( new Number( 4.0 ) );
	* // returns true
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is a square number.
*
* @param value - value to test
* @returns boolean indicating whether value is a square number
*
* @example
* var bool = isSquareNumber( 4.0 );
* // returns true
*
* @example
* var bool = isSquareNumber( new Number( 4.0 ) );
* // returns true
*
* @example
* var bool = isSquareNumber( 3.14 );
* // returns false
*
* @example
* var bool = isSquareNumber( -5.0 );
* // returns false
*
* @example
* var bool = isSquareNumber( null );
* // returns false
*
* @example
* var bool = isSquareNumber.isPrimitive( 4.0 );
* // returns true
*
* @example
* var bool = isSquareNumber.isObject( new Number( 4.0 ) );
* // returns true
*/
declare var isSquareNumber: IsSquareNumber;


// EXPORTS //

export = isSquareNumber;
