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
* Interface defining `isPositiveNumberArray` with methods for testing for primitive and object arrays, respectively.
*/
interface IsPositiveNumberArray {
	/**
	* Tests if a value is an array-like object containing only positive numbers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only positive numbers
	*
	* @example
	* var bool = isPositiveNumberArray( [ 2.7, new Number(3.0) ] );
	* // returns true
	*
	* @example
	* var bool = isPositiveNumberArray( [ 3.0, '3.0' ] );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only positive primitive number values.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only positive primitive number values
	*
	* @example
	* var bool = isPositiveNumberArray.primitives( [ 1.0, 2.7, 10.0 ] );
	* // returns true
	*
	* @example
	* var bool = isPositiveNumberArray.primitives( [ 3.0, new Number(1.0) ] );
	* // returns false
	*/
	primitives( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only number objects having positive number values.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only number objects having positive number values
	*
	* @example
	* var bool = isPositiveNumberArray.objects( [ new Number(3.0), new Number(1.7) ] );
	* // returns true
	*
	* @example
	* var bool = isPositiveNumberArray.objects( [ 1.0, 2.7, 10.0 ] );
	* // returns false
	*/
	objects( value: any ): boolean;
}

/**
* Tests if a value is an array-like object containing only positive numbers.
*
* @param value - value to test
* @returns boolean indicating whether value is an array-like object containing only positive numbers
*
* @example
* var bool = isPositiveNumberArray( [ 2.7, new Number(3.0) ] );
* // returns true
*
* @example
* var bool = isPositiveNumberArray( [ 2.7, '3.0' ] );
* // returns false
*
* @example
* var bool = isPositiveNumberArray.primitives( [ 1.0, 2.0, 10.1 ] );
* // returns true
*
* @example
* var bool = isPositiveNumberArray.objects( [ new Number(3.0), new Number(1.0) ] );
* // returns true
*/
declare var isPositiveNumberArray: IsPositiveNumberArray;


// EXPORTS //

export = isPositiveNumberArray;
