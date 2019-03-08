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
* Interface defining `isProbability` with methods for testing for primitives and objects, respectively.
*/
interface IsProbability {
	/**
	* Tests if a value is a probability.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a probability
	*
	* @example
	* var bool = isProbability( 0.5 );
	* // returns true
	*
	* @example
	* var bool = isProbability( new Number( 0.5 ) );
	* // returns true
	*
	* @example
	* var bool = isProbability( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isProbability( -5.0 );
	* // returns false
	*
	* @example
	* var bool = isProbability( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a number primitive having a value which is a probability.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive having a value which is a probability
	*
	* @example
	* var bool = isProbability.isPrimitive( 0.66 );
	* // returns true
	*
	* @example
	* var bool = isProbability.isPrimitive( new Number( 0.66 ) );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a number object having a value which is a probability.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having a value which is a probability
	*
	* @example
	* var bool = isProbability.isObject( 0.5 );
	* // returns false
	*
	* @example
	* var bool = isProbability.isObject( new Number( 0.5 ) );
	* // returns true
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is a probability.
*
* @param value - value to test
* @returns boolean indicating whether value is a probability
*
* @example
* var bool = isProbability( 0.5 );
* // returns true
*
* @example
* var bool = isProbability( new Number( 0.5 ) );
* // returns true
*
* @example
* var bool = isProbability( 3.14 );
* // returns false
*
* @example
* var bool = isProbability( -5.0 );
* // returns false
*
* @example
* var bool = isProbability( null );
* // returns false
*
* @example
* var bool = isProbability.isPrimitive( 0.66 );
* // returns true
*
* @example
* var bool = isProbability.isObject( new Number( 0.5 ) );
* // returns true
*/
declare var isProbability: IsProbability;


// EXPORTS //

export = isProbability;
