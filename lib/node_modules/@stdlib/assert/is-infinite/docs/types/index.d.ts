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
* Interface defining `isInfinite` with methods for testing for primitives and objects, respectively.
*/
interface IsInfinite {
	/**
	* Tests if a value is an infinite number.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is an infinite number
	*
	* @example
	* var bool = isInfinite( 1.0/0.0 );
	* // returns true
	*
	* @example
	* var bool = isInfinite( new Number( 1.0/0.0 ) );
	* // returns true
	*
	* @example
	* var bool = isInfinite( 5.0 );
	* // returns false
	*
	* @example
	* var bool = isInfinite( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a number primitive having an infinite value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive having an infinite value
	*
	* @example
	* var bool = isInfinite.isPrimitive( -1.0/0.0 );
	* // returns true
	*
	* @example
	* var bool = isInfinite.isPrimitive( new Number( -1.0/0.0 ) );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a number object having an infinite value.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having an infinite value
	*
	* @example
	* var bool = isInfinite.isObject( 1.0/0.0 );
	* // returns false
	*
	* @example
	* var bool = isInfinite.isObject( new Number( 1.0/0.0 ) );
	* // returns true
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is an infinite number.
*
* @param value - value to test
* @returns boolean indicating whether a value is an infinite number
*
* @example
* var bool = isInfinite( 1.0/0.0 );
* // returns true
*
* @example
* var bool = isInfinite( new Number( 1.0/0.0 ) );
* // returns true
*
* @example
* var bool = isInfinite( 5.0 );
* // returns false
*
* @example
* var bool = isInfinite( null );
* // returns false
*/
declare var isInfinite: IsInfinite;


// EXPORTS //

export = isInfinite;
