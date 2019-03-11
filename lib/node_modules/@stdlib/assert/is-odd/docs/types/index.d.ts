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
* Interface defining `isOdd` with methods for testing for primitives and objects, respectively.
*/
interface IsOdd {
	/**
	* Tests if a value is an odd number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an odd number
	*
	* @example
	* var bool = isOdd( 3.0 );
	* // returns true
	*
	* @example
	* var bool = isOdd( new Number( 3.0 ) );
	* // returns true
	*
	* @example
	* var bool = isOdd( 4.0 );
	* // returns false
	*
	* @example
	* var bool = isOdd( new Number( 6.0 ) );
	* // returns false
	*
	* @example
	* var bool = isOdd( -3.14 );
	* // returns false
	*
	* @example
	* var bool = isOdd( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a number primitive that is an odd number.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive that is an odd number
	*
	* @example
	* var bool = isOdd.isPrimitive( -5.0 );
	* // returns true
	*
	* @example
	* var bool = isOdd.isPrimitive( new Number( -5.0 ) );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a number object that is an odd number.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object that is an odd number
	*
	* @example
	* var bool = isOdd.isObject( 5.0 );
	* // returns false
	*
	* @example
	* var bool = isOdd.isObject( new Number( 5.0 ) );
	* // returns true
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is an odd number.
*
* @param value - value to test
* @returns boolean indicating whether value is an odd number
*
* @example
* var bool = isOdd( 5.0 );
* // returns true
*
* @example
* var bool = isOdd( new Number( 6.0 ) );
* // returns true
*
* @example
* var bool = isOdd( 3.0 );
* // returns false
*
* @example
* var bool = isOdd.isPrimitive( new Number( 5.0 ) );
* // returns false
*
* @example
* var bool = isOdd.isObject( 5.0 );
* // returns false
*
* @example
* var bool = isOdd( null );
* // returns false
*/
declare var isOdd: IsOdd;


// EXPORTS //

export = isOdd;
