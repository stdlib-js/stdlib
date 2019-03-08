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
* Interface defining `isProbabilityArray` with methods for testing for primitive and object arrays, respectively.
*/
interface IsProbabilityArray {
	/**
	* Test if a value is an array-like object containing only probabilities.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only probabilities
	*
	* @example
	* var bool = isProbabilityArray( [ 0.3, new Number(0.3) ] );
	* // returns true
	*
	* @example
	* var bool = isProbabilityArray( [ 0.3, '0.3' ] );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only primitive probabilities.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only primitive probabilities
	*
	* @example
	* var bool = isProbabilityArray.primitives( [ 0.1, 0.2, 0.1 ] );
	* // returns true
	*
	* @example
	* var bool = isProbabilityArray.primitives( [ 0.3, new Number(0.1) ] );
	* // returns false
	*/
	primitives( value: any ): boolean;

	/**
	* Tests if a value is an array-like object containing only number objects having probability values.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is an array-like object containing only number objects having probability values
	*
	* @example
	* var bool = isProbabilityArray.objects( [ new Number(0.3), new Number(0.1) ] );
	* // returns true
	*
	* @example
	* var bool = isProbabilityArray.objects( [ 0.1, 0.2, 0.3 ] );
	* // returns false
	*/
	objects( value: any ): boolean;
}

/**
* Test if a value is an array-like object containing only probabilities.
*
* @param value - value to test
* @returns boolean indicating whether value is a positive integer
*
* @example
* var bool = isProbabilityArray( [ 0.3, new Number(0.3) ] );
* // returns true
*
* @example
* var bool = isProbabilityArray( [ 0.3, '0.3' ] );
* // returns false
*
* @example
* var bool = isProbabilityArray.primitives( [ 0.1, 0.2, 0.3 ] );
* // returns true
*
* @example
* var bool = isProbabilityArray.objects( [ new Number(0.3), new Number(0.9) ] );
* // returns true
*/
declare var isProbabilityArray: IsProbabilityArray;


// EXPORTS //

export = isProbabilityArray;
