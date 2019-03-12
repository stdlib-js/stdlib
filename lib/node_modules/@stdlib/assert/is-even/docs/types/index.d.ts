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
* Interface defining `isEven` with methods for testing for primitives and objects, respectively.
*/
interface IsEven {
	/**
	* Tests if a value is an even number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an even number
	*
	* @example
	* var bool = isEven( 4.0 );
	* // returns true
	*
	* @example
	* var bool = isEven( new Number( 4.0 ) );
	* // returns true
	*
	* @example
	* var bool = isEven( 3.0 );
	* // returns false
	*
	* @example
	* var bool = isEven( new Number( 5.0 ) );
	* // returns false
	*
	* @example
	* var bool = isEven( -3.14 );
	* // returns false
	*
	* @example
	* var bool = isEven( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a number primitive that is an even number.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive that is an even number
	*
	* @example
	* var bool = isEven.isPrimitive( -4.0 );
	* // returns true
	*
	* @example
	* var bool = isEven.isPrimitive( new Number( -4.0 ) );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a number object that is an even number.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object that is an even number
	*
	* @example
	* var bool = isEven.isObject( 4.0 );
	* // returns false
	*
	* @example
	* var bool = isEven.isObject( new Number( 4.0 ) );
	* // returns true
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is an even number.
*
* @param value - value to test
* @returns boolean indicating whether value is an even number
*
* @example
* var bool = isEven( 4.0 );
* // returns true
*
* @example
* var bool = isEven( new Number( 4.0 ) );
* // returns true
*
* @example
* var bool = isEven( 3.0 );
* // returns false
*
* @example
* var bool = isEven.isPrimitive( new Number( 4.0 ) );
* // returns false
*
* @example
* var bool = isEven.isObject( 4.0 );
* // returns false
*
* @example
* var bool = isEven( null );
* // returns false
*/
declare var isEven: IsEven;


// EXPORTS //

export = isEven;
