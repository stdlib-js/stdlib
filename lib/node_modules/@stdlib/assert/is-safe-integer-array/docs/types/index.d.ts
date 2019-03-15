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
* Interface defining `isSafeIntegerArray` with methods for testing for primitive and object arrays, respectively.
*/
interface IsSafeIntegerArray {
	/**
	* Tests if a value is an array-like object containing only safe integers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only safe integers
	*
	* @example
	* var bool = isSafeIntegerArray( [ -3.0, new Number(0.0), 2.0 ] );
	* // returns true
	*
	* @example
	* var bool = isSafeIntegerArray( [ -3.0, '3.0' ] );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only primitive safe integer values.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only primitive safe integer values
	*
	* @example
	* var bool = isSafeIntegerArray.primitives( [ -1.0, 10.0 ] );
	* // returns true
	*
	* @example
	* var bool = isSafeIntegerArray.primitives( [ -1.0, 0.0, 5.0 ] );
	* // returns true
	*
	* @example
	* var bool = isSafeIntegerArray.primitives( [ -3.0, new Number(-1.0) ] );
	* // returns false
	*/
	primitives( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only number objects having safe integer values.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only number objects having safe integer values
	*
	* @example
	* var bool = isSafeIntegerArray.objects( [ new Number(1.0), new Number(3.0) ] );
	* // returns true
	*
	* @example
	* var bool = isSafeIntegerArray.objects( [ -1.0, 0.0, 3.0 ] );
	* // returns false
	*
	* @example
	* var bool = isSafeIntegerArray.objects( [ 3.0, new Number(-1.0) ] );
	* // returns false
	*/
	objects( value: any ): boolean;
}

/**
* Tests if a value is an array-like object containing only safe integers.
*
* ## Notes
*
* -   An integer valued number is "safe" when the number can be exactly represented as a double-precision floating-point number.
*
* @param value - value to test
* @returns boolean indicating whether value is an array-like object containing only safe integers
*
* @example
* var bool = isSafeIntegerArray( [ -3.0, new Number(0.0), 2.0 ] );
* // returns true
*
* @example
* var bool = isSafeIntegerArray( [ -3.0, '3.0' ] );
* // returns false
*
* @example
* var bool = isSafeIntegerArray.primitives( [ -1.0, 10.0 ] );
* // returns true
*
* @example
* var bool = isSafeIntegerArray.primitives( [ -1.0, 0.0, 5.0 ] );
* // returns true
*
* @example
* var bool = isSafeIntegerArray.primitives( [ -3.0, new Number(-1.0) ] );
* // returns false
*
* @example
* var bool = isSafeIntegerArray.objects( [ new Number(1.0), new Number(3.0) ] );
* // returns true
*
* @example
* var bool = isSafeIntegerArray.objects( [ -1.0, 0.0, 3.0 ] );
* // returns false
*
* @example
* var bool = isSafeIntegerArray.objects( [ 3.0, new Number(-1.0) ] );
* // returns false
*/
declare var isSafeIntegerArray: IsSafeIntegerArray;


// EXPORTS //

export = isSafeIntegerArray;
