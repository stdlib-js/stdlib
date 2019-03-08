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
* Interface defining `isPositiveIntegerArray` with methods for testing for primitive and object arrays, respectively.
*/
interface IsPositiveIntegerArray {
	/**
	* Tests if a value is an array-like object containing only positive integers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only positive integers
	*
	* @example
	* var bool = isPositiveIntegerArray( [ 3.0, new Number(3.0) ] );
	* // returns true
	*
	* @example
	* var bool = isPositiveIntegerArray( [ 3.0, '3.0' ] );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only positive primitive integer values.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only positive primitive integer values
	*
	* @example
	* var bool = isPositiveIntegerArray.primitives( [ 1.0, 2.0, 10.0 ] );
	* // returns true
	*
	* @example
	* var bool = isPositiveIntegerArray.primitives( [ 3.0, new Number(1.0) ] );
	* // returns false
	*/
	primitives( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only number objects having positive integer values.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only number objects having positive integer values
	*
	* @example
	* var bool = isPositiveIntegerArray.objects( [ new Number(3.0), new Number(1.0) ] );
	* // returns true
	*
	* @example
	* var bool = isPositiveIntegerArray.objects( [ 1.0, 2.0, 10.0 ] );
	* // returns false
	*/
	objects( value: any ): boolean;
}

/**
* Tests if a value is an array-like object containing only positive integers.
*
* @param value - value to test
* @returns boolean indicating whether value is an array-like object containing only positive integers
*
* @example
* var bool = isPositiveIntegerArray( [ 3.0, new Number(3.0) ] );
* // returns true
*
* @example
* var bool = isPositiveIntegerArray( [ 3.0, '3.0' ] );
* // returns false
*
* @example
* var bool = isPositiveIntegerArray.primitives( [ 1.0, 2.0, 10.0 ] );
* // returns true
*
* @example
* var bool = isPositiveIntegerArray.objects( [ new Number(3.0), new Number(1.0) ] );
* // returns true
*/
declare var isPositiveIntegerArray: IsPositiveIntegerArray;


// EXPORTS //

export = isPositiveIntegerArray;
