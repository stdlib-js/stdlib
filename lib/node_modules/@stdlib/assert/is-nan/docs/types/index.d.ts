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
* Interface defining `isnan` with methods for testing for primitives and objects, respectively.
*/
interface IsNaN {
	/**
	* Tests if a value is `NaN`.
	*
	* @param value - value to test
	* @returns boolean indicating whether value is `NaN`
	*
	* @example
	* var bool = isnan( NaN );
	* // returns true
	*
	* @example
	* var bool = isnan( new Number( NaN ) );
	* // returns true
	*
	* @example
	* var bool = isnan( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isnan( null );
	* // returns false
	*/
	( value: any ): boolean;

	/**
	* Tests if a value is a `NaN` number primitive.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a `NaN` number primitive
	*
	* @example
	* var bool = isnan.isPrimitive( NaN );
	* // returns true
	*
	* @example
	* var bool = isnan.isPrimitive( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isnan.isPrimitive( new Number( NaN ) );
	* // returns false
	*/
	isPrimitive( value: any ): boolean;

	/**
	* Tests if a value is a number object having a value of `NaN`.
	*
	* @param value - value to test
	* @returns boolean indicating if a value is a number object having a value of `NaN`
	*
	* @example
	* var bool = isnan.isObject( NaN );
	* // returns false
	*
	* @example
	* var bool = isnan.isObject( new Number( NaN ) );
	* // returns true
	*/
	isObject( value: any ): boolean;
}

/**
* Tests if a value is `NaN`.
*
* @param value - value to test
* @returns boolean indicating whether value is `NaN`
*
* @example
* var bool = isnan( NaN );
* // returns true
*
* @example
* var bool = isnan( new Number( NaN ) );
* // returns true
*
* @example
* var bool = isnan( 3.14 );
* // returns false
*
* @example
* var bool = isnan( null );
* // returns false
*
* @example
* var bool = isnan.isPrimitive( NaN );
* // returns true
*
* @example
* var bool = isnan.isObject( new Number( NaN ) );
* // returns true
*/
declare var isnan: IsNaN;


// EXPORTS //

export = isnan;
