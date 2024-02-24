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
* Interface defining `isNegativeFinite` with methods for testing for primitives and objects, respectively.
*/
interface isNegativeFinite {
	/**
	* Tests if a value is a finite negative number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a finite negative number
	*
	* @example
	* var bool = isNegativeFinite( -5.0 );
	* // returns true
	*
	* @example
	* var bool = isNegativeFinite( new Number( -5.0 ) );
	* // returns true
	*
	* @example
	* var bool = isNegativeFinite( -3.14 );
	* // returns true
	*
	* @example
	* var bool = isNegativeFinite( 5.0 );
	* // returns false
	*
	* @example
	* var bool = isNegativeFinite( null );
	* // returns false
	*
	* @example
	* var bool = isNegativeFinite( -1.0/0.0 );
	* // returns false
	*/
	( value: number | Number ): value is number | Number;

	/**
	* Tests if a value is a number primitive having a finite negative value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive having a finite negative value
	*
	* @example
	* var bool = isNegativeFinite.isPrimitive( -3.0 );
	* // returns true
	*
	* @example
	* var bool = isNegativeFinite.isPrimitive( new Number( -3.0 ) );
	* // returns false
	*/
	isPrimitive( value: number | Number ): value is number;

	/**
	* Tests if a value is a number object having a negative value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having a finite negative value
	*
	* @example
	* var bool = isNegativeFinite.isObject( -3.0 );
	* // returns false
	*
	* @example
	* var bool = isNegativeFinite.isObject( new Number( -3.0 ) );
	* // returns true
	*/
	isObject( value: number | Number ): value is Number;
}

/**
* Tests if a value is a negative number.
*
* @param value - value to test
* @returns boolean indicating whether value is a finite negative number
*
* @example
* var bool = isNegativeFinite( -5.0 );
* // returns true
*
* @example
* var bool = isNegativeFinite( new Number( -5.0 ) );
* // returns true
*
* @example
* var bool = isNegativeFinite( -3.14 );
* // returns true
*
* @example
* var bool = isNegativeFinite( 5.0 );
* // returns false
*
* @example
* var bool = isNegativeFinite( null );
* // returns false
*
* @example
* var bool = isNegativeFinite.isPrimitive( -3.0 );
* // returns true
*
* @example
* var bool = isNegativeFinite.isObject( new Number( -3.0 ) );
* // returns true
*
* @example
* var bool = isNegativeFinite.isPrimitive( -1.0/0.0 );
* // returns false
*
* @example
* var bool = isNegativeFinite.isObject( new Number( -1.0/0.0 ) );
* // returns false
*/
declare var isNegativeFinite: isNegativeFinite;


// EXPORTS //

export = isNegativeFinite;
