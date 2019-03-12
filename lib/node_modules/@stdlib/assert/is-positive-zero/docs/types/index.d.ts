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
* Interface defining `isPositiveZero` with methods for testing for primitives and objects, respectively.
*/
interface IsPositiveZero {
	/**
	* Tests if a value is equal to positive zero.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is equal to positive zero
	*
	* @example
	* var bool = isPositiveZero( 0.0 );
	* // returns true
	*
	* @example
	* var bool = isPositiveZero( new Number( 0.0 ) );
	* // returns true
	*
	* @example
	* var bool = isPositiveZero( -3.14 );
	* // returns false
	*
	* @example
	* var bool = isPositiveZero( 5.0 );
	* // returns false
	*
	* @example
	* var bool = isPositiveZero( -0.0 );
	* // returns false
	*
	* @example
	* var bool = isPositiveZero( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a number primitive equal to positive zero.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive equal to positive zero
	*
	* @example
	* var bool = isPositiveZero.isPrimitive( 0.0 );
	* // returns true
	*
	* @example
	* var bool = isPositiveZero.isPrimitive( new Number( 0.0 ) );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a number object having a value equal to positive zero.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having a value equal to positive zero
	*
	* @example
	* var bool = isPositiveZero.isObject( 0.0 );
	* // returns false
	*
	* @example
	* var bool = isPositiveZero.isObject( new Number( 0.0 ) );
	* // returns true
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is equal to positive zero.
*
* @param value - value to test
* @returns boolean indicating whether value is equal to positive zero
*
* @example
* var bool = isPositiveZero( 0.0 );
* // returns true
*
* @example
* var bool = isPositiveZero( new Number( 0.0 ) );
* // returns true
*
* @example
* var bool = isPositiveZero( -3.14 );
* // returns false
*
* @example
* var bool = isPositiveZero( 5.0 );
* // returns false
*
* @example
* var bool = isPositiveZero( -0.0 );
* // returns false
*
* @example
* var bool = isPositiveZero( null );
* // returns false
*
* @example
* var bool = isPositiveZero.isPrimitive( 0.0 );
* // returns true
*
* @example
* var bool = isPositiveZero.isObject( new Number( 0.0 ) );
* // returns true
*/
declare var isPositiveZero: IsPositiveZero;


// EXPORTS //

export = isPositiveZero;
