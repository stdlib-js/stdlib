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
* Interface defining `isNaNArray` with methods for testing for primitive and object arrays, respectively.
*/
interface IsNaNArray {
	/**
	* Tests if a value is an array-like object containing only NaN values.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only NaN values
	*
	* @example
	* var bool = isNaNArray( [NaN,NaN,NaN] );
	* // returns true
	*
	* @example
	* var bool = isNaNArray( [NaN,2] );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only primitive NaN values.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only primitive NaN values
	*
	* @example
	* var bool = isNaNArray.primitives( [NaN,new Number( NaN )] );
	* // returns false
	*
	* @example
	* var bool = isNaNArray.primitives( [NaN,NaN,NaN] );
	* // returns true
	*/
	primitives( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only number objects having NaN values.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only number objects having NaN values
	*
	* @example
	* var bool = isNaNArray.objects( [new Number( NaN ),new Number( NaN )] );
	* // returns true
	*
	* @example
	* var bool = isNaNArray.objects( [NaN,new Number( NaN ),new Number( NaN )] );
	* // returns false
	*
	* @example
	* var bool = isNaNArray.objects( [NaN,NaN,NaN] );
	*/
	objects( value: any ): boolean;
}

/**
* Tests if a value is an array-like object containing only NaN values.
*
* @param value - value to test
* @returns boolean indicating whether value is an array-like object containing only NaN values
*
* @example
* var bool = isNaNArray( [NaN,NaN,NaN] );
* // returns true
*
* @example
* var bool = isNaNArray( [NaN,2] );
* // returns false
*
* @example
* var bool = isNaNArray.primitives( [NaN,NaN,NaN] );
* // returns true
*
* @example
* var bool = isNaNArray.objects( [new Number( NaN ),new Number( NaN )] );
* // returns true
*/
declare var isNumberArray: IsNaNArray;


// EXPORTS //

export = isNumberArray;
