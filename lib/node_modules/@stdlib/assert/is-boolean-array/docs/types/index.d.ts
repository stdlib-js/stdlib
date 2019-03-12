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
* Interface defining `isBooleanArray` with methods for testing for primitives and objects, respectively.
*/
interface IsBooleanArray {
	/**
	* Tests if a value is an array-like object of booleans.
	*
	* @param value - value to test
	* @returns  boolean indicating whether value is an array-like object of booleans
	*
	* @example
	* var bool = isBooleanArray( [ true, false, true ] );
	* // returns true
	*
	* @example
	* var bool = isBooleanArray( [ true, 'abc', false ] );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only boolean primitives.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only boolean primitives
	*
	* @example
	* var bool = isBooleanArray.primitives( [ true, false ] );
	* // returns true
	*
	* @example
	* var bool = isBooleanArray.primitives( [ false, new Boolean( true ) ] );
	* // returns false
	*/
	primitives( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only Boolean objects.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only Boolean objects
	*
	* @example
	* var bool = isBooleanArray.objects( [ new Boolean( false ), new Boolean( true ) ] );
	* // returns true
	*
	* @example
	* var bool = isBooleanArray.objects( [ new Boolean( false ), true ] );
	* // returns false
	*/
	objects( value: any ): boolean;
}

/**
* Tests if a value is an array-like object of booleans.
*
* @param value - value to test
* @returns boolean indicating whether value is an array-like object of booleans
*
* @example
* var bool = isBooleanArray( [ true, false, true ] );
* // returns true
*
* @example
* var bool = isBooleanArray( [ true, 'abc', false ] );
* // returns false
*
* @example
* var bool = isBooleanArray.primitives( [ true, false ] );
* // returns true
*
* @example
* var bool = isBooleanArray.objects( [ new Boolean( false ), new Boolean( true ) ] );
* // returns true
*/
declare var isBooleanArray: IsBooleanArray;


// EXPORTS //

export = isBooleanArray;
