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
* Interface defining `isIntegerArray` with methods for testing for primitive and object arrays, respectively.
*/
interface IsIntegerArray {
	/**
	* Tests if a value is an array-like object containing only integers.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only integers
	*
	* @example
	* var bool = isIntegerArray( [ -3.0, new Number(0.0), 2.0 ] );
	* // returns true
	*
	* @example
	* var bool = isIntegerArray( [ -3.0, '3.0' ] );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only primitive integer values.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only primitive integer values
	*
	* @example
	* var bool = isIntegerArray.primitives( [ -1.0, 10.0 ] );
	* // returns true
	*
	* @example
	* var bool = isIntegerArray.primitives( [ -1.0, 0.0, 5.0 ] );
	* // returns true
	*
	* @example
	* var bool = isIntegerArray.primitives( [ -3.0, new Number(-1.0) ] );
	* // returns false
	*/
	primitives( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only number objects having integer values.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only number objects having integer values
	*
	* @example
	* var bool = isIntegerArray.objects( [ new Number(1.0), new Number(3.0) ] );
	* // returns true
	*
	* @example
	* var bool = isIntegerArray.objects( [ -1.0, 0.0, 3.0 ] );
	* // returns false
	*
	* @example
	* var bool = isIntegerArray.objects( [ 3.0, new Number(-1.0) ] );
	* // returns false
	*/
	objects( value: any ): boolean;
}

/**
* Tests if a value is an array-like object containing only integers.
*
* @param value - value to test
* @returns boolean indicating whether value is an array-like object containing only integers
*
* @example
* var bool = isIntegerArray( [ -3.0, new Number(0.0), 2.0 ] );
* // returns true
*
* @example
* var bool = isIntegerArray( [ -3.0, '3.0' ] );
* // returns false
* @example
* var bool = isIntegerArray.primitives( [ -1.0, 0.0, 5.0 ] );
* // returns true
*
* @example
* var bool = isIntegerArray.objects( [ new Number(1.0), new Number(3.0) ] );
* // returns true
*/
declare var isIntegerArray: IsIntegerArray;


// EXPORTS //

export = isIntegerArray;
