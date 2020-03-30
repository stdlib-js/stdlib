/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Interface describing methods for testing for primitives and objects.
*/
interface IsCubeNumber {
	/**
	* Tests if a value is a cube number.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is a cube number
	*
	* @example
	* var bool = isCubeNumber( 8.0 );
	* // returns true
	*
	* @example
	* var bool = isCubeNumber( new Number( 8.0 ) );
	* // returns true
	*
	* @example
	* var bool = isCubeNumber( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isCubeNumber( -5.0 );
	* // returns false
	*
	* @example
	* var bool = isCubeNumber( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a number primitive having a value which is a cube number.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number primitive having a value which is a cube number
	*
	* @example
	* var bool = isCubeNumber.isPrimitive( 8.0 );
	* // returns true
	*
	* @example
	* var bool = isCubeNumber.isPrimitive( new Number( 8.0 ) );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a number object having a value which is a cube number.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having a value which is a cube number
	*
	* @example
	* var bool = isCubeNumber.isObject( 8.0 );
	* // returns false
	*
	* @example
	* var bool = isCubeNumber.isObject( new Number( 8.0 ) );
	* // returns true
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is a cube number.
*
* @param value - value to test
* @returns boolean indicating whether value is a cube number
*
* @example
* var bool = isCubeNumber( 8.0 );
* // returns true
*
* @example
* var bool = isCubeNumber( new Number( 8.0 ) );
* // returns true
*
* @example
* var bool = isCubeNumber( 3.14 );
* // returns false
*
* @example
* var bool = isCubeNumber( -5.0 );
* // returns false
*
* @example
* var bool = isCubeNumber( null );
* // returns false
*
* @example
* var bool = isCubeNumber.isPrimitive( 8.0 );
* // returns true
*
* @example
* var bool = isCubeNumber.isObject( new Number( 8.0 ) );
* // returns true
*/
declare var isCubeNumber: IsCubeNumber;


// EXPORTS //

export = isCubeNumber;
