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
interface IsTriangularNumber {
	/**
	* Tests if a value is a triangular number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a triangular number
	*
	* @example
	* var bool = isTriangularNumber( 36.0 );
	* // returns true
	*
	* @example
	* var bool = isTriangularNumber( new Number( 36.0 ) );
	* // returns true
	*
	* @example
	* var bool = isTriangularNumber( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isTriangularNumber( -5.0 );
	* // returns false
	*
	* @example
	* var bool = isTriangularNumber( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a number primitive having a value which is a triangular number.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive having a value which is a triangular number
	*
	* @example
	* var bool = isTriangularNumber.isPrimitive( 36.0 );
	* // returns true
	*
	* @example
	* var bool = isTriangularNumber.isPrimitive( new Number( 36.0 ) );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a number object having a value which is a triangular number.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having a value which is a triangular number
	*
	* @example
	* var bool = isTriangularNumber.isObject( 36.0 );
	* // returns false
	*
	* @example
	* var bool = isTriangularNumber.isObject( new Number( 36.0 ) );
	* // returns true
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is a triangular number.
*
* ## Notes
*
* -   Return values are not reliable for numbers greater than `1125899906842624`.
*
* @param value - value to test
* @returns boolean indicating whether value is a triangular number
*
* @example
* var bool = isTriangularNumber( 36.0 );
* // returns true
*
* @example
* var bool = isTriangularNumber( new Number( 36.0 ) );
* // returns true
*
* @example
* var bool = isTriangularNumber( 3.14 );
* // returns false
*
* @example
* var bool = isTriangularNumber( -5.0 );
* // returns false
*
* @example
* var bool = isTriangularNumber( null );
* // returns false
*
* @example
* var bool = isTriangularNumber.isPrimitive( 36.0 );
* // returns true
*
* @example
* var bool = isTriangularNumber.isObject( new Number( 36.0 ) );
* // returns true
*/
declare var isTriangularNumber: IsTriangularNumber;


// EXPORTS //

export = isTriangularNumber;
